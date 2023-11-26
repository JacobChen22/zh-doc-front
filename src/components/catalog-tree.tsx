import {DocumentTextIcon, FolderIcon} from "@heroicons/react/24/outline";
import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import {clsx} from "clsx";

export interface TreeData {
    title: string,
    key: string,
    type: string,
    children?: TreeData[],
}

export default function CatalogTree({treeData}: { treeData: TreeData[] }) {

    const navigate = useNavigate();
    const params = useParams()
    const onItemClick: Function = (item: TreeData) => {
        navigate(`/s/${params.spaceId}/${item.key}`)
    }

    return (
        <div className="flex flex-col text-base my-2">
            {renderTree({data: treeData, currentDocId: params.docId, onItemClick})}
        </div>
    )

}

function renderTree({data, currentDocId, onItemClick}: {
    data: TreeData[],
    currentDocId: string | undefined,
    onItemClick: Function
}): React.JSX.Element {
    return (
        <>
            {data.map((item) => (
                <div key={item.key}>
                    <div
                        className={clsx("flex flex-row p-1 cursor-pointer hover:bg-slate-300 rounded", currentDocId === item.key && "bg-slate-300")}
                        key={item.key}
                        onClick={() => onItemClick(item)}>
                        {item.children?.length ?? 0
                            ? <FolderIcon className="h-6 mr-2"/>
                            : <DocumentTextIcon className="h-6 mr-2"/>}
                        <span className="font-normal">{item.title}</span>
                    </div>
                    <div className="ml-3">
                        {item.children && renderTree({data: item.children, currentDocId, onItemClick})}
                    </div>
                </div>
            ))}
        </>
    )
}