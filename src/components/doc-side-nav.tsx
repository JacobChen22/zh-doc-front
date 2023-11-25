import {BarsArrowDownIcon, BookOpenIcon, HomeIcon} from "@heroicons/react/24/outline";
import CatalogTree from "./catalog-tree.tsx";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSpaceDocumentTree} from "../server/api/document.ts";

export default function DocSideNav({space}: { space: any }) {

    const [spaceDocTree, setSpaceDocTree] = useState([]);

    useEffect(() => {
        if (space) {
            getSpaceDocumentTree(space.id).then(data => {
                setSpaceDocTree(data);
            })
        }
    }, [space]);

    return (
        <div className="mx-4 my-4 flex flex-col grow">
            <div className="h-12 mb-4 flex flex-row justify-start items-center">
                <div className="h-7 w-7 mr-2">
                    <BookOpenIcon/>
                </div>
                <div className="text-lg font-semibold">{space?.name}'s Space</div>
            </div>
            <div className="h-8 mb-4 flex flex-row justify-start items-center">
                <HomeIcon className="h-6 mr-2"/>
                <div className="text-base font-medium">Space Home</div>
            </div>
            <div className="grow">
                <div className="flex flex-row justify-start items-center">
                    <BarsArrowDownIcon className="h-6 mr-2"/>
                    <div className="text-base font-medium">Space Catalog</div>
                </div>
                <CatalogTree treeData={spaceDocTree}/>
            </div>
            <div className="h-10 flex flex-row items-center justify-center">
                <Link to="/login"
                      className="flex flex-row px-2 py-1 items-center rounded-xl text-white bg-slate-700 hover:bg-slate-500">
                    <UserCircleIcon className="h-8 pr-2"/> Login
                </Link>
            </div>
        </div>
    )
}