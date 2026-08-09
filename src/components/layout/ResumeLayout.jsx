import Topbar from "../topbar/Topbar";
import EditorSidebar from "../sidebar/EditorSidebar";
import PreviewPanel from "../preview/PreviewPanel";
import { ResumeProvider } from "../context/ResumeContext";

 

export default function ResumeLayout() {
  return (
    <div className="resume-editor">

      <Topbar />

      <div className="resume-body">
        

        <EditorSidebar />

        <PreviewPanel />

      </div>
      <style>
        {`
        .resume-editor{
    width:100%;
    height:100vh;

    display:flex;
    flex-direction:column;

    background:#f3f4f6;
}

.resume-body{

    flex:1;

    display:flex;

    overflow:hidden;
}`}
      </style>

    </div>
  );
}