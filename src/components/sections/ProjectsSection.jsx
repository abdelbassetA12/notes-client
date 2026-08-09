import { useState } from "react";
import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function ProjectsSection(){

    const [opened,setOpened]=useState(null);

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("projects",{

            id:crypto.randomUUID(),

            name:"",

            role:"",

            link:"",

            startDate:"",

            endDate:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Projects"

                action={

                    <Button onClick={handleAdd}>

                        Add Project

                    </Button>

                }

            />

            {

                resume.projects.map((project,index)=>(
 
                          <ItemAccordion
                            key={project.id}
                            title={project.company || `project #${index + 1}`}
                        >

                        <Input

                            label="Project Name"

                            value={project.name}

                            onChange={(e)=>

                                updateItemField(

                                    "projects",

                                    project.id,

                                    "name",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Role"

                            value={project.role}

                            onChange={(e)=>

                                updateItemField(

                                    "projects",

                                    project.id,

                                    "role",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Project Link"

                            value={project.link}

                            onChange={(e)=>

                                updateItemField(

                                    "projects",

                                    project.id,

                                    "link",

                                    e.target.value

                                )

                            }

                        />

                        <div className="date-row">

                            <Input

                                type="month"

                                label="Start Date"

                                value={project.startDate}

                                onChange={(e)=>

                                    updateItemField(

                                        "projects",

                                        project.id,

                                        "startDate",

                                        e.target.value

                                    )

                                }

                            />

                            <Input

                                type="month"

                                label="End Date"

                                value={project.endDate}

                                onChange={(e)=>

                                    updateItemField(

                                        "projects",

                                        project.id,

                                        "endDate",

                                        e.target.value

                                    )

                                }

                            />

                        </div>

                        <TextArea

                            label="Description"

                            value={project.description}

                            onChange={(e)=>

                                updateItemField(

                                    "projects",

                                    project.id,

                                    "description",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "projects",

                                    index

                                )

                            }

                        >

                            Delete Project

                        </Button>

                    </ItemAccordion>

                ))

            }

            <style>{`

.project-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    padding:20px;

    margin-top:20px;

    background:#fff;

}

.item-title{

    margin-bottom:20px;

    color:#2563eb;

    font-size:18px;

}

.date-row{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:15px;

}

`}</style>

        </Section>

    );

}