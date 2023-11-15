import DocHeader from "../../components/doc-header.tsx";
import DocEditor from "../../components/editor/doc-editor.tsx";
import {getDocumentById} from "../../server/api/document.ts";
import {useEffect, useState} from "react";
import {ArrowPathIcon} from "@heroicons/react/24/outline";
import {useParams} from "react-router-dom";

export default function DocumentLayout() {

    const params = useParams();
    const [document, setDocument] = useState<any>(null);
    const documentId = params.id;

    if (!documentId) {
        return (
            <div className="flex flex-1 justify-center items-center">
                Document not exist
            </div>
        )
    }

    useEffect(() => {
        getDocumentById(Number(documentId)).then((res) => {
            setDocument(res);
        });
    }, []);

    return (
        <>
            {document ? (
                <div className="flex-1">
                    <DocHeader docInfo={document}/>
                    <div className="h-auto px-6 py-2">
                        <DocEditor content={document.body}/>
                    </div>
                </div>
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