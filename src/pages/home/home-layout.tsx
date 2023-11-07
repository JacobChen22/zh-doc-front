export default function HomeLayout() {
    return (
        <div className="flex flex-row">
            <div className="bg-slate-400 flex top-0 flex-col sticky max-h-screen w-72">Sidebar</div>
            <div className="flex-1 bg-slate-50">
                <div className="h-16 bg-teal-400 px-6 py-2">header</div>
                <div className="min-h-screen mx-6 my-2">content</div>
            </div>
        </div>
    )
}