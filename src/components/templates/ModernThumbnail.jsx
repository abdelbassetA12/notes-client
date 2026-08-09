  
 import ModernTemplate from "./ModernTemplate";
 
 export default function ModernThumbnail({ resume }) {
 
   
 return (
 
     <div
         className="classic-thumbnail"
         style={{
             width: "220px",
             height: "300px",
             overflow: "hidden",
             position: "relative",
             background: "#e5e7eb",
             borderRadius: "10px",
             boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
         }}
     >
 
         <div
             style={{
                 position: "absolute",
                 top: 0,
                 left: 0,
 
                 width: "794px",
                 minHeight: "1123px",
 
                 transform: "scale(0.277)",
                 transformOrigin: "top left",
 
                 pointerEvents: "none",
             }}
         >
 
             <ModernTemplate resume={resume} />
 
         </div>
 
     </div>
 
 );
  
 
 }
 
