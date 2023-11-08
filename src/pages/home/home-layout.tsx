import DocSideNav from "../../components/doc-side-nav.tsx";
import DocHeader from "../../components/doc-header.tsx";

export default function HomeLayout() {
    return (
        <div className="flex flex-row">
            <div className="bg-slate-300/50 flex top-0 flex-col sticky max-h-screen w-72">
                <DocSideNav/>
            </div>
            <div className="flex-1 bg-slate-50">
                <div className="h-16 bg-slate-100 px-6 py-2 border-b-2 border-b-gray-200">
                    <DocHeader/>
                </div>
                <div className="min-h-screen mx-6 my-2">content</div>
            </div>
        </div>
    )
}