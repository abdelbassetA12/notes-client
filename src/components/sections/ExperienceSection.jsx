import { useState } from "react";
import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";
export default function ExperienceSection(){
    

    const {

        resume,

        addItem,

        removeItem,

        updateItemField

    } = useResume();

    const handleAdd = () => {

        addItem("experience",{

            id:crypto.randomUUID(),

            company:"",

            position:"",

            city:"",

            startDate:"",

            endDate:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Experience"

                action={

                    <Button onClick={handleAdd}>

                        Add Experience

                    </Button>

                }

            />

            {

                resume.experience.map((exp,index)=>(

                    <ItemAccordion
    key={exp.id}
    title={exp.company || `Experience #${index + 1}`}
>


                          <Input
                            label="Company"
                            value={exp.company}
                            onChange={(e)=>

                                updateItemField(
                                    "experience",
                                    exp.id,
                                    "company",
                                    e.target.value
                                )

                            }
                        />

                        <Input
                            label="Position"
                            value={exp.position}
                            onChange={(e)=>

                                updateItemField(
                                    "experience",
                                    exp.id,
                                    "position",
                                    e.target.value
                                )

                            }
                        />

                        <Input
                            label="City"
                            value={exp.city}
                            onChange={(e)=>

                                updateItemField(
                                    "experience",
                                    exp.id,
                                    "city",
                                    e.target.value
                                )

                            }
                        />

                        <div className="date-row">

                            <Input
                                type="month"
                                label="Start Date"
                                value={exp.startDate}
                                onChange={(e)=>

                                    updateItemField(
                                        "experience",
                                        exp.id,
                                        "startDate",
                                        e.target.value
                                    )

                                }
                            />

                            <Input
                                type="month"
                                label="End Date"
                                value={exp.endDate}
                                onChange={(e)=>

                                    updateItemField(
                                        "experience",
                                        exp.id,
                                        "endDate",
                                        e.target.value
                                    )

                                }
                            />

                        </div>

                        <TextArea
                            label="Description"
                            value={exp.description}
                            onChange={(e)=>

                                updateItemField(
                                    "experience",
                                    exp.id,
                                    "description",
                                    e.target.value
                                )

                            }
                        />

                        <Button

                            variant="danger"

                            onClick={()=>removeItem(
                                "experience",
                                index
                            )}

                        >

                            Delete Experience

                        </Button>


                    </ItemAccordion>

                  

                ))

            }
            <style>
                {`
               .date-row{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:15px;

}`}
            </style>

        </Section>

    );

}