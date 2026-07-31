import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import VariablePanel from "../components/email/VariablePanel";
import SubjectEditor from "../components/email/SubjectEditor";
import TemplateEditor from "../components/email/TemplateEditor";
import TemplatePreview from "../components/email/TemplatePreview";
 

import axios from "axios";
import API_BASE from "../config/api";

export default function EmailTemplate() {
    const editorRef = useRef();
    const { id } = useParams();

    const [subject, setSubject] = useState(
        "Job Application - {{desiredJob}}"
    );
    const [name, setName] = useState("");

    const [body, setBody] = useState(`Dear {{companyName}} Recruitment Team,

I hope you are doing well.

I would like to apply for the position of {{desiredJob}} in your company.

Kind regards,

{{yourName}}
{{yourPhone}}
{{yourEmail}}`);
useEffect(() => {

    if (!id || id === "new") return;

    loadTemplate();

}, [id]);

const loadTemplate = async () => {

    try {

        const res = await axios.get(

            `${API_BASE}/api/email-templates/${id}`,

            {

                withCredentials: true

            }

        );

        setSubject(res.data.subject);
        setBody(res.data.body);

    } catch (err) {

        console.log(err);

    }

};
/*
const insertVariable = (variable) => {

    setBody(prev => prev + variable);

};*/
const insertVariable = (variable) => {

    const editor =
        editorRef.current?.getEditor();

    if (!editor) {

        setBody(prev => prev + variable);

        return;

    }

    const range = editor.getSelection(true);

    editor.insertText(
        range.index,
        variable
    );

    editor.setSelection(
        range.index + variable.length
    );

};

const saveTemplate = async () => {

    try{

       if (id && id !== "new") {

    await axios.put(

        `${API_BASE}/api/email-templates/${id}`,

        {

            subject,

            body

        },

        {

            withCredentials: true

        }

    );

} else {

    await axios.post(

        `${API_BASE}/api/email-templates`,

        {

            //name: "New Template",
            name,

            subject,

            body

        },

        {

            withCredentials: true

        }

    );

}

        alert("Template Saved");

    }catch(err){

        console.log(err);

    }

};
/*
const saveTemplate = async () => {

    try{

        await axios.post(

            `${API_BASE}/api/job-leads/template`,

            {

                subject,

                body

            },

            {

                withCredentials:true

            }

        );

        alert("Template Saved");

    }catch(err){

        console.log(err);

    }

};*/
    return (

        <div className="template-page">

            <div className="template-header">

                <h1>Email Template Builder</h1>

                <p>Create one email that works with every company.</p>

            </div>

            <SubjectEditor
                subject={subject}
                setSubject={setSubject}
                name={name}
                setName={setName}
            />

            <div className="template-content">

                <VariablePanel
    onInsert={insertVariable}
/>

                <TemplateEditor
    ref={editorRef}
    body={body}
    setBody={setBody}
/>
 {
     
      <TemplatePreview
                    subject={subject}
                    body={body}
                />
     
 }
                

 
                

            </div>

            <div className="template-footer">

                <button
    className="save-btn"
    onClick={saveTemplate}
>
    Save Template
</button>

            </div>



            <style>
                {`
                .template-page{

max-width:1700px;
margin:auto;
padding:35px;
background:#f5f7fb;
min-height:100vh;

}

.template-header{

margin-bottom:25px;

}

.template-header h1{

font-size:34px;
font-weight:700;
color:#1d2939;

}

.template-header p{

margin-top:8px;
color:#667085;
font-size:15px;

}

.subject-card{

background:#fff;
padding:22px;
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.06);
margin-bottom:25px;

}

.subject-card label{

display:block;
font-weight:600;
margin-bottom:10px;

}

.subject-card input{

width:100%;
height:52px;
padding:0 18px;
border:1px solid #d0d5dd;
border-radius:12px;
font-size:16px;
outline:none;
transition:.25s;

}

.subject-card input:focus{

border-color:#4f46e5;
box-shadow:0 0 0 4px rgba(79,70,229,.12);

}

.template-content{

display:grid;
grid-template-columns:280px 1fr 450px;
gap:25px;
align-items:start;

}

.variable-panel{

background:white;
border-radius:20px;
padding:20px;
box-shadow:0 10px 30px rgba(0,0,0,.05);
position:sticky;
top:20px;
max-height:85vh;
overflow:auto;

}

.variable-section{

margin-bottom:25px;

}

.variable-section h3{

font-size:14px;
text-transform:uppercase;
letter-spacing:1px;
color:#98a2b3;
margin-bottom:12px;

}

.variable-item{

width:100%;
display:flex;
gap:14px;
align-items:center;
padding:13px;
border:none;
background:#f8fafc;
border-radius:12px;
cursor:pointer;
margin-bottom:10px;
transition:.25s;

}

.variable-item:hover{

background:#eef2ff;
transform:translateY(-2px);

}

.variable-item span{

width:40px;
height:40px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
background:white;
font-size:20px;
color:#4f46e5;

}

.variable-item strong{

display:block;
font-size:14px;

}

.variable-item small{

color:#667085;

}

.editor-card{

background:white;
border-radius:20px;
padding:25px;
box-shadow:0 10px 30px rgba(0,0,0,.05);

}

.editor-card h3{

margin-bottom:18px;

}

.email-editor{

width:100%;
min-height:650px;
resize:none;
border:1px solid #d0d5dd;
border-radius:14px;
padding:20px;
font-size:15px;
line-height:1.8;
outline:none;
font-family:inherit;
transition:.25s;

}

.email-editor:focus{

border-color:#4f46e5;
box-shadow:0 0 0 4px rgba(79,70,229,.10);

}

.preview-card{

background:white;
border-radius:20px;
padding:25px;
box-shadow:0 10px 30px rgba(0,0,0,.05);
position:sticky;
top:20px;

}

.preview-header{

display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;

}

.preview-header select{

height:42px;
padding:0 15px;
border-radius:10px;
border:1px solid #d0d5dd;
outline:none;

}

.preview-subject{

padding-bottom:15px;
margin-bottom:18px;
border-bottom:1px solid #eee;

}

.preview-subject strong{

display:block;
margin-bottom:8px;

}

.preview-body{

line-height:1.8;
white-space:pre-wrap;
font-size:15px;
color:#344054;

}

.template-footer{

margin-top:30px;
display:flex;
justify-content:flex-end;

}

.save-btn{

height:55px;
padding:0 35px;
border:none;
border-radius:14px;
background:#4f46e5;
color:white;
font-size:16px;
font-weight:600;
cursor:pointer;
transition:.25s;

}

.save-btn:hover{

transform:translateY(-2px);

background:#4338ca;

}`}
            </style>

        </div>

    );

}