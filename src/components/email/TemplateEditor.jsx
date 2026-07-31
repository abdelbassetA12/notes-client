 


 
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