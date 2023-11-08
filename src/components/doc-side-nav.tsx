import {BarsArrowDownIcon, HomeIcon} from "@heroicons/react/24/outline";

export default function DocSideNav() {
    return (
        <div className="mx-4 my-4 flex flex-col grow">
            <div className="h-12 mb-4 flex flex-row justify-start items-center">
                <div className="h-7 w-7">log</div>
                <div className="text-lg font-semibold">ZH doc space</div>
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
                <div>
                    TreeComponent
                </div>
            </div>
        </div>
    )
}