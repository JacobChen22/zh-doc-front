import './editor.css';
import {BubbleMenu, EditorProvider} from "@tiptap/react";
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

export default function DocEditor({content, editable}: { content: string, editable: boolean }) {
    return (
        <EditorProvider slotBefore={editable && <EditorMenuBar/>}
                        extensions={extensions}
                        content={content}
                        editable={editable}
                        autofocus={true}>
            <BubbleMenu>sdf</BubbleMenu>
        </EditorProvider>
    )
}