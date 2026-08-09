import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function VolunteerSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("volunteer",{

            id:crypto.randomUUID(),

            organization:"",

            role:"",

            city:"",

            startDate:"",

            endDate:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Volunteer Experience"

                action={

                    <Button onClick={handleAdd}>

                        Add Volunteer

                    </Button>

                }

            />

            {

                resume.volunteer.map((item,index)=>(

                    

                         <ItemAccordion
                           key={item.id}
                           title={item.company || `item #${index + 1}`}
                       >


                        <Input

                            label="Organization"

                            value={item.organization}

                            onChange={(e)=>

                                updateItemField(

                                    "volunteer",

                                    item.id,

                                    "organization",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Role"

                            value={item.role}

                            onChange={(e)=>

                                updateItemField(

                                    "volunteer",

                                    item.id,

                                    "role",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="City"

                            value={item.city}

                            onChange={(e)=>

                                updateItemField(

                                    "volunteer",

                                    item.id,

                                    "city",

                                    e.target.value

                                )

                            }

                        />

                        <div className="date-row">

                            <Input

                                type="month"

                                label="Start Date"

                                value={item.startDate}

                                onChange={(e)=>

                                    updateItemField(

                                        "volunteer",

                                        item.id,

                                        "startDate",

                                        e.target.value

                                    )

                                }

                            />

                            <Input

                                type="month"

                                label="End Date"

                                value={item.endDate}

                                onChange={(e)=>

                                    updateItemField(

                                        "volunteer",

                                        item.id,

                                        "endDate",

                                        e.target.value

                                    )

                                }

                            />

                        </div>

                        <TextArea

                            label="Description"

                            value={item.description}

                            onChange={(e)=>

                                updateItemField(

                                    "volunteer",

                                    item.id,

                                    "description",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "volunteer",

                                    index

                                )

                            }

                        >

                            Delete

                        </Button>

                    </ItemAccordion>

                ))

            }

            <style>{`

.volunteer-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    padding:20px;

    margin-top:20px;

    background:#fff;

}

.date-row{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:15px;

}

.item-title{

    margin-bottom:20px;

    color:#2563eb;

}

`}</style>

        </Section>

    );

}