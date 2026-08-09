import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
 import ItemAccordion from "../common/ItemAccordion";

export default function InterestsSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("interests",{

            id:crypto.randomUUID(),

            name:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Interests"

                action={<Button onClick={handleAdd}>Add Interest</Button>}

            />

            {

                resume.interests.map((interest,index)=>(
 
                         <ItemAccordion
                            key={interest.id}
                          title={interest.company || `interest #${index + 1}`}
                           > 

                        <Input

                            label="Interest"

                            value={interest.name}

                            onChange={(e)=>

                                updateItemField(

                                    "interests",

                                    interest.id,

                                    "name",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>removeItem("interests",index)}

                        >

                            Delete

                        </Button>

                    </ItemAccordion>

                ))

            }

        </Section>

    );

}