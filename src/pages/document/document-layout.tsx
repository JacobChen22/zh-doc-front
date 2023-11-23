import DocHeader from "../../components/doc-header.tsx";
import DocEditor from "../../components/editor/doc-editor.tsx";
import {getDocumentById, updateDocument} from "../../server/api/document.ts";
import {useEffect, useState} from "react";
import {ArrowPathIcon} from "@heroicons/react/24/outline";
import {EditorEvents} from "@tiptap/react";
import {debounce} from "lodash";

export default function DocumentLayout({docId, space}: { docId: string, space: any }) {

    const [document, setDocument] = useState<any>(null);

    if (!docId) {
        return (
            <div className="flex flex-1 justify-center items-center">
                Document Id Not Provided
            </div>
        )
    }

    useEffect(() => {
        getDocumentById(Number(docId)).then((res) => {
            setDocument(res ? res : {})
        });
    }, []);


    function handleEditUpdate(props: EditorEvents['update']) {
        updateDocument(document.id, document.title, props.editor.getHTML()).then(() => {
            console.log('saved');
        });
    }

    const handleEditUpdateDebounced = debounce(handleEditUpdate, 2000);

    return (
        <>
            {document ? (
                document.title ? (
                    <div className="flex-1">
                        <DocHeader spaceName={space.name} isSpace={false} titleName={document.title}/>
                        <div className="h-auto px-6 py-2">
                            <DocEditor content={document.body} handleUpdate={handleEditUpdateDebounced}/>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-1 justify-center items-center">
                        The document with id: {docId} does not exist.
                    </div>
                )
            ) : (
                <div className="flex flex-col flex-1">

                    <div className="flex flex-row justify-between items-center
            h-16 px-6 py-2 border-b-2 border-b-gray-200">
                        <div className="flex flex-col text-sm">
                            <div className="bg-gray-300 rounded animate-pulse w-96 h-4"></div>
                            <div className="mt-1 bg-gray-200 animate-pulse w-80 h-4"></div>
                        </div>
                    </div>


                    <div className="flex flex-1 justify-center items-center">
                        <ArrowPathIcon className="h-16 text-gray-400 animate-spin"/>
                    </div>
                </div>
            )}
        </>
    )
}