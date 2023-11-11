import 'remixicon/fonts/remixicon.css'
import {useCurrentEditor} from "@tiptap/react";
import {ChangeEvent} from "react";
import {clsx} from "clsx";

export default function EditorMenuBar() {

    const {editor} = useCurrentEditor();

    const buttonStyle = "rounded px-2 py-1 hover:bg-slate-300"
    const isActiveStyle = "bg-slate-400";
    return (
        <div className="mb-2 py-1 border-b-2">
            <button className={clsx(buttonStyle, editor?.isActive('bold') && isActiveStyle)}
                    onClick={() => editor?.chain().focus().toggleBold().run()}>
                <i className="ri-bold"></i>
            </button>
            <button className={clsx(buttonStyle, editor?.isActive('italic') && isActiveStyle)}
                    onClick={() => editor?.chain().focus().toggleItalic().run()}>
                <i className="ri-italic"></i>
            </button>
            <button className={clsx(buttonStyle, editor?.isActive('strike') && isActiveStyle)}
                    onClick={() => editor?.chain().focus().toggleStrike().run()}>
                <i className="ri-strikethrough"></i>
            </button>
            <button className={clsx(buttonStyle, editor?.isActive('underline') && isActiveStyle)}
                    onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                <i className="ri-underline"></i>
            </button>
            <input type="color" className={buttonStyle}
                   onInput={(event: ChangeEvent<HTMLInputElement>) => editor?.chain().focus().setColor(event.target.value).run()}/>
        </div>
    )
}