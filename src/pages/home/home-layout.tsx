import DocSideNav from "../../components/doc-side-nav.tsx";
import DocHeader from "../../components/doc-header.tsx";
import DocEditor from "../../components/editor/doc-editor.tsx";

export default function HomeLayout() {
    return (
        <div className="flex flex-row">
            <div className="bg-slate-300/50 flex top-0 flex-col sticky max-h-screen w-72">
                <DocSideNav/>
            </div>
            <div className="flex-1">
                <DocHeader/>
                <div className="min-h-screen px-6 py-2">
                    <DocEditor content={"测试文字"}/>
                </div>
            </div>
        </div>
    )
}