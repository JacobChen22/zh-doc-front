import DocHeader from "../../components/doc-header.tsx";
import DocEditor from "../../components/editor/doc-editor.tsx";
import {EditorEvents} from "@tiptap/react";
import {updateSpace} from "../../server/api/space.ts";
import {debounce} from 'lodash';

export default function SpaceLayout({space}: { space: any }) {

    function handleEditUpdate(props: EditorEvents['update']) {
        updateSpace(space.id, space.name, props.editor.getHTML()).then(() => {
            console.log('saved');
        });
    }

    const handleEditUpdateDebounced = debounce(handleEditUpdate, 2000);

    return (
        <div className="flex-1">
            <DocHeader space={space} isSpace={true}/>
            <div className="h-auto px-6 py-2">
                <DocEditor content={space.body} handleUpdate={handleEditUpdateDebounced}/>
            </div>
        </div>
    )
}