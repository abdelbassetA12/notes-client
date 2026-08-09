import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function PublicationsSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("publications",{

            id:crypto.randomUUID(),

            title:"",

            publisher:"",

            date:"",

            link:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Publications"

                action={

                    <Button onClick={handleAdd}>

                        Add Publication

                    </Button>

                }

            />

            {

                resume.publications.map((publication,index)=>(

                    

                         <ItemAccordion
                           key={publication.id}
                           title={publication.company || `publication #${index + 1}`}
                       >

                        <Input
                            label="Title"
                            value={publication.title}
                            onChange={(e)=>
                                updateItemField(
                                    "publications",
                                    publication.id,
                                    "title",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Publisher"
                            value={publication.publisher}
                            onChange={(e)=>
                                updateItemField(
                                    "publications",
                                    publication.id,
                                    "publisher",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            type="month"
                            label="Date"
                            value={publication.date}
                            onChange={(e)=>
                                updateItemField(
                                    "publications",
                                    publication.id,
                                    "date",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Link"
                            value={publication.link}
                            onChange={(e)=>
                                updateItemField(
                                    "publications",
                                    publication.id,
                                    "link",
                                    e.target.value
                                )
                            }
                        />

                        <TextArea
                            label="Description"
                            value={publication.description}
                            onChange={(e)=>
                                updateItemField(
                                    "publications",
                                    publication.id,
                                    "description",
                                    e.target.value
                                )
                            }
                        />

                        <Button
                            variant="danger"
                            onClick={()=>removeItem("publications",index)}
                        >
                            Delete
                        </Button>

                    </ItemAccordion>

                ))

            }

        </Section>

    );

}