import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function AwardsSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("awards",{

            id:crypto.randomUUID(),

            title:"",

            issuer:"",

            date:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Awards"

                action={

                    <Button onClick={handleAdd}>

                        Add Award

                    </Button>

                }

            />

            {

                resume.awards.map((award,index)=>(

                    

                          <ItemAccordion
    key={award.id}
    title={award.company || `award #${index + 1}`}
>

                        <Input

                            label="Award Title"

                            value={award.title}

                            onChange={(e)=>

                                updateItemField(

                                    "awards",

                                    award.id,

                                    "title",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Issuer"

                            value={award.issuer}

                            onChange={(e)=>

                                updateItemField(

                                    "awards",

                                    award.id,

                                    "issuer",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            type="month"

                            label="Date"

                            value={award.date}

                            onChange={(e)=>

                                updateItemField(

                                    "awards",

                                    award.id,

                                    "date",

                                    e.target.value

                                )

                            }

                        />

                        <TextArea

                            label="Description"

                            value={award.description}

                            onChange={(e)=>

                                updateItemField(

                                    "awards",

                                    award.id,

                                    "description",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "awards",

                                    index

                                )

                            }

                        >

                            Delete

                        </Button>

                   </ItemAccordion>

                ))

            }

            

        </Section>

    );

}