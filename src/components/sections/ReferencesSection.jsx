import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import ItemAccordion from "../common/ItemAccordion";
export default function ReferencesSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("references",{

            id:crypto.randomUUID(),

            name:"",

            position:"",

            company:"",

            email:"",

            phone:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="References"

                action={<Button onClick={handleAdd}>Add Reference</Button>}

            />

            {

                resume.references.map((reference,index)=>(

                    
                          <ItemAccordion
                            key={reference.id}
                            title={reference.company || `reference #${index + 1}`}
                        > 

                        <Input
                            label="Name"
                            value={reference.name}
                            onChange={(e)=>
                                updateItemField(
                                    "references",
                                    reference.id,
                                    "name",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Position"
                            value={reference.position}
                            onChange={(e)=>
                                updateItemField(
                                    "references",
                                    reference.id,
                                    "position",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Company"
                            value={reference.company}
                            onChange={(e)=>
                                updateItemField(
                                    "references",
                                    reference.id,
                                    "company",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Email"
                            value={reference.email}
                            onChange={(e)=>
                                updateItemField(
                                    "references",
                                    reference.id,
                                    "email",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Phone"
                            value={reference.phone}
                            onChange={(e)=>
                                updateItemField(
                                    "references",
                                    reference.id,
                                    "phone",
                                    e.target.value
                                )
                            }
                        />

                        <Button
                            variant="danger"
                            onClick={()=>removeItem("references",index)}
                        >
                            Delete
                        </Button>

                    </ItemAccordion>

                ))

            }

        </Section>

    );

}