import {DocumentTextIcon, FolderIcon} from "@heroicons/react/24/outline";
import React from "react";

export interface TreeData {
    title: string,
    key: string,
    type: string,
    children?: TreeData[],
}

export default function CatalogTree({treeData}: { treeData: TreeData[] }) {
    const onItemClick: Function = (item: TreeData) => {
        console.log(item);
    }

    return (
        <div className="flex flex-col text-base my-2">
            {renderTree({data: treeData, onItemClick})}
        </div>
    )

}

function renderTree({data, onItemClick}: { data: TreeData[], onItemClick: Function }): React.JSX.Element {

    return (
        <>
            {data.map((item) => (
                <div key={item.key}>
                    <div className="flex flex-row p-1 cursor-pointer hover:bg-slate-300 rounded" key={item.key}
                         onClick={() => onItemClick(item)}>
                        {item.children?.length ?? 0
                            ? <FolderIcon className="h-6 mr-2"/>
                            : <DocumentTextIcon className="h-6 mr-2"/>}
                        <span className="font-normal">{item.title}</span>
                    </div>
                    <div className="ml-3">
                        {item.children && renderTree({data: item.children, onItemClick})}
                    </div>
                </div>
            ))}
        </>
    )
}