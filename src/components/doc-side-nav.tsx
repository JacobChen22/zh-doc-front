import {BarsArrowDownIcon, BookOpenIcon, HomeIcon} from "@heroicons/react/24/outline";
import CatalogTree, {TreeData} from "./catalog-tree.tsx";

export default function DocSideNav() {

    const mocTreeData: TreeData[] = [
        {
            title: 'parent 0',
            key: '0-0',
            children: [
                {
                    title: 'parent 0-0', key: '0-0-0', children: [
                        {title: 'leaf 0-0-0', key: '0-0-0-0'},
                        {title: 'leaf 0-0-1', key: '0-0-0-1'},
                    ]
                },
                {title: 'leaf 0-1', key: '0-0-1'},
            ],
        },
        {
            title: 'parent 1',
            key: '0-1',
            children: [
                {title: 'leaf 1-0', key: '0-1-0'},
                {title: 'leaf 1-1', key: '0-1-1'},
            ],
        },
    ];

    return (
        <div className="mx-4 my-4 flex flex-col grow">
            <div className="h-12 mb-4 flex flex-row justify-start items-center">
                <div className="h-7 w-7 mr-2">
                    <BookOpenIcon/>
                </div>
                <div className="text-lg font-semibold">ZH Doc's Space</div>
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
                <CatalogTree treeData={mocTreeData}/>
            </div>
        </div>
    )
}