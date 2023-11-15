import DocSideNav from "../../components/doc-side-nav.tsx";
import DocumentLayout from "../document/document-layout.tsx";

export default function HomeLayout() {
    return (
        <div className="flex flex-row">
            <div className="bg-slate-300/50 flex top-0 flex-col sticky h-screen w-72">
                <DocSideNav/>
            </div>
            <DocumentLayout/>
        </div>
    )
}