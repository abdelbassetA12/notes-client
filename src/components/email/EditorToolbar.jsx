export default function EditorToolbar({

    editor

}) {

    if (!editor) {

        return null;

    }

    return (

        <div className="editor-toolbar">

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                Bold
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                Italic
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                Strike
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                Bullet
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }
            >
                Number
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleBlockquote().run()
                }
            >
                Quote
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().undo().run()
                }
            >
                Undo
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().redo().run()
                }
            >
                Redo
            </button>

        </div>

    );

}