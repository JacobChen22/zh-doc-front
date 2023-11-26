import DocSideNav from "../../components/doc-side-nav.tsx";
import DocumentLayout from "../document/document-layout.tsx";
import {useParams} from "react-router-dom";
import SpaceLayout from "../space/space-layout.tsx";
import {useEffect, useState} from "react";
import {getSpaceById} from "../../server/api/space.ts";

export default function SpaceHome() {

    const params = useParams();
    const [space, setSpace] = useState(null);

    // no specific space id, enter zh doc home
    const spaceId = params.spaceId ? params.spaceId : '1';

    useEffect(() => {
        getSpaceById(Number(spaceId)).then((res) => {
            setSpace(res);
        })
    }, []);

    return (
        <div className="flex flex-row">
            <div className="bg-slate-300/50 flex top-0 flex-col sticky h-screen w-72">
                <DocSideNav space={space}/>
            </div>
            {
                space && (
                    params.docId ? <DocumentLayout space={space}/>
                        : <SpaceLayout space={space}/>
                )
            }
        </div>
    )
}