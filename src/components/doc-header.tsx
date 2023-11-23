import {LinkIcon, MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import CreateDocModal from "./create-doc-modal.tsx";
import {createDocument} from "../server/api/document.ts";
import {clsx} from "clsx";

export default function DocHeader({spaceName, titleName, isSpace}: {
    spaceName: string,
    titleName?: string,
    isSpace: boolean
}) {

    const [open, setOpen] = useState(false);
    const buttonStyle = "rounded-lg bg-blue-600 px-2.5 py-1 text-white hover:bg-blue-500 flex flex-row items-center gap-1";
    const buttonOutlineStyle = "rounded-lg px-2.5 py-1 hover:bg-slate-100 border-solid border flex flex-row items-center gap-1";
    const iconHeight = "h-4";

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
                    {isSpace ? `${spaceName}'s Space` :
                        `${spaceName}'s Space / ${titleName}`}
                </div>
                {isSpace ? null : (
                    <div className="text-xs text-slate-500">
                        Created by <span className="text-slate-600">Who</span>，
                        Updated by <span className="text-slate-600">Who 2023-08-27 10:13 </span>
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