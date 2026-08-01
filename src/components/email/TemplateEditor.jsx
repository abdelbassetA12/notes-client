 
 
 import {
    forwardRef,
    useMemo,
    useState
} from "react";

import ReactQuill from "react-quill-new";

import {
    FiMaximize2,
    FiMinimize2,
    FiTrash2
} from "react-icons/fi";

import "react-quill-new/dist/quill.snow.css";


const TemplateEditor = forwardRef(

    function TemplateEditor(

        {
            body,
            setBody
        },

        ref

    ) {

        const [fullscreen, setFullscreen] =
            useState(false);


        const modules = useMemo(() => ({

            toolbar: {

                container: [

                    [
                        {
                            header: [1, 2, 3, false]
                        }
                    ],

                    [
                        "bold",
                        "italic",
                        "underline",
                        "strike"
                    ],

                    [
                        {
                            color: []
                        },
                        {
                            background: []
                        }
                    ],

                    [
                        {
                            list: "ordered"
                        },
                        {
                            list: "bullet"
                        }
                    ],

                    [
                        {
                            align: []
                        }
                    ],

                    [
                        "blockquote",
                        "code-block"
                    ],

                    [
                        "link"
                    ],

                    [
                        "clean"
                    ]

                ]

            },

            history: {

                delay: 500,

                maxStack: 100,

                userOnly: true

            }

        }), []);


        const formats = [

            "header",

            "bold",
            "italic",
            "underline",
            "strike",

            "color",
            "background",

            "list",

            "bullet",

            "align",

            "blockquote",

            "code-block",

            "link"

        ];


        const text = body
            ?.replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim() || "";


        const words = text
            ? text.split(" ").length
            : 0;


        const characters =
            text.length;


        const clearFormatting = () => {

            const editor =
                ref?.current?.getEditor();

            if (!editor) return;

            const range =
                editor.getSelection();

            if (!range) return;

            editor.removeFormat(
                range.index,
                range.length,
                "user"
            );

        };


        return (

            <section
                className={
                    `editor-card ${
                        fullscreen
                            ? "editor-fullscreen"
                            : ""
                    }`
                }
            >

                <div className="editor-top">

                    <div>

                        <span className="editor-eyebrow">
                            COMPOSE
                        </span>

                        <h2>
                            Email Body
                        </h2>

                        <p>
                            Write your message and insert
                            variables from the left panel.
                        </p>

                    </div>


                    <div className="editor-actions">

                        <button
                            type="button"
                            title="Clear formatting"
                            onClick={clearFormatting}
                        >
                            <FiTrash2 />
                        </button>


                        <button
                            type="button"
                            title={
                                fullscreen
                                    ? "Exit fullscreen"
                                    : "Fullscreen"
                            }
                            onClick={() =>
                                setFullscreen(
                                    prev => !prev
                                )
                            }
                        >

                            {fullscreen
                                ? <FiMinimize2 />
                                : <FiMaximize2 />
                            }

                        </button>

                    </div>

                </div>


                <div className="editor-wrapper">

                    <ReactQuill

                        ref={ref}

                        theme="snow"

                        value={body}

                        onChange={setBody}

                        modules={modules}

                        formats={formats}

                        placeholder={
                            "Start writing your email..."
                        }

                    />

                </div>


                <div className="editor-footer">

                    <div className="editor-stats">

                        <span>
                            {words} words
                        </span>

                        <span>
                            {characters} characters
                        </span>

                    </div>


                    <div className="editor-tip">

                        Tip: Click a variable to insert it
                        at your cursor.

                    </div>

                </div>


                <style>{`

                    .editor-card {

                        background: #fff;

                        border:
                            1px solid
                            #eaecf0;

                        border-radius: 16px;

                        overflow: hidden;

                        box-shadow:
                            0 3px 12px
                            rgba(16,24,40,.03);

                        transition:
                            .25s ease;

                    }


                    .editor-fullscreen {

                        position: fixed;

                        inset: 20px;

                        z-index: 1000;

                        display: flex;

                        flex-direction: column;

                        box-shadow:
                            0 20px 60px
                            rgba(0,0,0,.2);

                    }


                    .editor-top {

                        padding:
                            20px
                            22px;

                        display: flex;

                        justify-content:
                            space-between;

                        align-items: center;

                        gap: 15px;

                        border-bottom:
                            1px solid
                            #f2f4f7;

                    }


                    .editor-eyebrow {

                        font-size: 10px;

                        font-weight: 800;

                        letter-spacing: 1.4px;

                        color: #98a2b3;

                    }


                    .editor-top h2 {

                        margin:
                            4px 0
                            3px;

                        font-size: 18px;

                        color: #101828;

                    }


                    .editor-top p {

                        margin: 0;

                        color: #98a2b3;

                        font-size: 11px;

                    }


                    .editor-actions {

                        display: flex;

                        gap: 7px;

                    }


                    .editor-actions button {

                        width: 36px;

                        height: 36px;

                        border:
                            1px solid
                            #eaecf0;

                        border-radius: 8px;

                        display: flex;

                        align-items: center;

                        justify-content: center;

                        background: #fff;

                        color: #667085;

                        cursor: pointer;

                        transition: .2s;

                    }


                    .editor-actions button:hover {

                        background: #f8fafc;

                        color: #4f46e5;

                        border-color:
                            #c7d2fe;

                    }


                    .editor-wrapper {

                        padding: 18px;

                    }


                    .editor-wrapper
                    .ql-toolbar.ql-snow {

                        border:
                            1px solid
                            #d0d5dd;

                        border-bottom: none;

                        border-radius:
                            10px
                            10px
                            0
                            0;

                        background:
                            #fafbfc;

                    }


                    .editor-wrapper
                    .ql-container.ql-snow {

                        border:
                            1px solid
                            #d0d5dd;

                        border-radius:
                            0
                            0
                            10px
                            10px;

                        min-height: 520px;

                        font-family:
                            inherit;

                    }


                    .editor-wrapper
                    .ql-editor {

                        min-height: 520px;

                        padding:
                            20px;

                        font-size: 15px;

                        line-height: 1.8;

                        color: #344054;

                    }


                    .editor-wrapper
                    .ql-editor.ql-blank::before {

                        color: #98a2b3;

                        font-style: normal;

                    }


                    .editor-wrapper
                    .ql-snow
                    .ql-picker {

                        color: #475467;

                    }


                    .editor-footer {

                        min-height: 48px;

                        padding:
                            10px
                            18px;

                        display: flex;

                        align-items: center;

                        justify-content:
                            space-between;

                        gap: 15px;

                        border-top:
                            1px solid
                            #f2f4f7;

                    }


                    .editor-stats {

                        display: flex;

                        gap: 15px;

                        color: #98a2b3;

                        font-size: 11px;

                    }


                    .editor-tip {

                        color: #98a2b3;

                        font-size: 11px;

                    }


                    .editor-fullscreen
                    .ql-editor {

                        min-height: 0;

                        flex: 1;

                    }


                    .editor-fullscreen
                    .editor-wrapper {

                        flex: 1;

                        overflow: auto;

                    }


                    @media(max-width:700px) {

                        .editor-top {

                            align-items:
                                flex-start;

                        }

                        .editor-top p {

                            display: none;

                        }

                        .editor-wrapper {

                            padding: 10px;

                        }

                        .editor-wrapper
                        .ql-editor {

                            min-height: 430px;

                        }

                        .editor-footer {

                            align-items:
                                flex-start;

                            flex-direction:
                                column;

                        }

                        .editor-tip {

                            display: none;

                        }

                    }

                `}</style>

            </section>

        );

    }

);


export default TemplateEditor;
 
 /*
import { useMemo } from "react";

export default function TemplateEditor({

    body,
    setBody

}) {

    const modules = useMemo(() => ({}), []);

    return (

        <div className="editor-card">

            <h3>Email Body</h3>

            <textarea

                value={body}

                onChange={(e) => setBody(e.target.value)}

                className="email-editor"

                placeholder="Write your email here..."

                rows={18}

            />

        </div>

    );

}   
*/