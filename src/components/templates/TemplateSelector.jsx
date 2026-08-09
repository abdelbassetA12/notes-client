import { useResume } from "../context/ResumeContext";
import Button from "../common/Button";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import TemplateCard from "./Templates/TemplateCard";
import ModernThumbnail from "./ModernThumbnail";
import ClassicThumbnail from "./ClassicThumbnail";

 

export default function TemplateSelector() {

    const {
         resume,

        selectedTemplate,

        setSelectedTemplate

    } = useResume();
    const templates = [

    {

        id:"modern",

        name:"Modern",

        description:"Modern professional",

        component:ModernTemplate,

        thumbnail:ModernThumbnail

    },

   {
    id: "classic",

    name: "Classic",

    description: "Traditional resume",

    component: ClassicTemplate,

    thumbnail: ClassicThumbnail
}

];
/*
    const templates = [

        {
            id: "modern",
            name: "Modern",
            description: "Clean modern layout"
        },

        {
            id: "classic",
            name: "Classic",
            description: "Traditional resume"
        }

    ];*/

    return (

        <div className="template-selector">

            <h2>

                Templates

            </h2>

            {
                templates.map(template=>{

    const Thumbnail = template.thumbnail;

    return(

        <TemplateCard

            key={template.id}

            id={template.id}

            name={template.name}

            description={template.description}

            active={selectedTemplate===template.id}

            onSelect={()=>

                setSelectedTemplate(template.id)

            }

          
           preview={<Thumbnail resume={resume} />}

        />

    );

})


            }

            <style>

                {`

.template-selector{

    display:flex;

    flex-direction:column;

    gap:15px;

}

.template-card{

    display:flex;

    justify-content:space-between;

    align-items:center;

    border:1px solid #ddd;

    border-radius:12px;

    padding:15px;

    background:white;

}

.template-card.active{

    border:2px solid #2563eb;

}

.template-card h3{

    margin:0;

}

.template-card p{

    margin-top:6px;

    color:#666;

    font-size:14px;

}

`}

            </style>

        </div>

    );

}