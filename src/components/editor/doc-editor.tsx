import './editor.css';
import {BubbleMenu, EditorEvents, EditorProvider} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import EditorMenuBar from "./menu-bar.tsx";
import {Underline} from "@tiptap/extension-underline";
import {Color} from "@tiptap/extension-color";
import {TextStyle} from "@tiptap/extension-text-style";

const extensions = [
    StarterKit,
    Underline,
    TextStyle,
    Color,
]

export default function DocEditor({content, handleUpdate}: {
    content: string,
    handleUpdate?: (props: EditorEvents['update']) => void
}) {
    return (
        <EditorProvider slotBefore={<EditorMenuBar/>}
                        extensions={extensions}
                        content={content}
                        autofocus={true}
                        onUpdate={handleUpdate}>
            <div>
                <BubbleMenu className="bg-neutral-200 rounded-lg shadow-lg">
                    <EditorMenuBar/>
                </BubbleMenu>
            </div>
        </EditorProvider>
    )
}