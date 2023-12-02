import {LinkIcon, MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import CreateDocModal from "./create-doc-modal.tsx";
import {createDocument} from "../server/api/document.ts";
import {clsx} from "clsx";
import {getUseById} from "../server/api/user.ts";

export default function DocHeader({space, document, isSpace}: {
    space: any,
    document?: any,
    isSpace: boolean
}) {

    const [open, setOpen] = useState(false);
    const [creatorName, setCreatorName] = useState('');
    const [updaterName, setUpdaterName] = useState('');
    const buttonStyle = "rounded-lg bg-blue-600 px-2.5 py-1 text-white hover:bg-blue-500 flex flex-row items-center gap-1";
    const buttonOutlineStyle = "rounded-lg px-2.5 py-1 hover:bg-slate-100 border-solid border flex flex-row items-center gap-1";
    const iconHeight = "h-4";

    useEffect(() => {
        if (document) {
            getUseById(document.creatorId).then(res => {
                setCreatorName(res.name);
            });
            getUseById(document.updaterId).then(res => {
                setUpdaterName(res.name);
            });
        }
    }, [document]);

    function handleCreateEvent() {
        setOpen(true);
    }

    function success(title: string) {
        createDocument(title, "").then(() => {
            setOpen(false);
        });
    }

    function closeModal() {
        setOpen(false);
    }

    return (
        <div className="flex flex-row justify-between items-center
            h-16 px-6 py-2 border-b-2 border-b-gray-200">
            <div className="flex flex-col text-sm">
                <div className="font-bold">
                    {isSpace ? `${space.name}'s Space` :
                        `${space.name}'s Space / ${document.title}`}
                </div>
                {isSpace ? null : (
                    <div className="text-xs text-slate-500">
                        {creatorName && (
                            <>Created by <span className="text-slate-600">{creatorName}</span>, </>
                        )}
                        {updaterName && (
                            <>Updated by <span
                                className="text-slate-600">{updaterName} ({new Date(document.updatedAt).toLocaleString()})</span></>
                        )}
                    </div>
                )}
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center border w-48">
                    <MagnifyingGlassIcon className={clsx(iconHeight, "px-1.5")}/>
                    <input name="search" placeholder="Search document"
                           className="placeholder-gray-300 outline-none w-full"/>
                </div>
                <button className={buttonStyle} onClick={handleCreateEvent}><PlusIcon className={iconHeight}/>Create
                </button>
                <button className={buttonOutlineStyle}><LinkIcon className={iconHeight}/>Share</button>
            </div>
            {
                open && <CreateDocModal open={open} success={success} cancel={closeModal}/>
            }
        </div>
    )
}