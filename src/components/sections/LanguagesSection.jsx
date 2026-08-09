import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import ItemAccordion from "../common/ItemAccordion";

export default function LanguagesSection() {

    const {

        resume,

        addItem,

        removeItem,

        updateItemField

    } = useResume();

    const addLanguage = () => {

        addItem("languages", {

            id: crypto.randomUUID(),

            name: "",

            level: "Beginner"

        });

    };

    return (

        <Section>

            <SectionHeader

                title="Languages"

                action={

                    <Button onClick={addLanguage}>

                        Add Language

                    </Button>

                }

            />

            {

                resume.languages.map((language,index)=>(

                   
                           <ItemAccordion
                            key={language.id}
                            title={language.company || `language #${index + 1}`}
                        >

                        <Input

                            label="Language"

                            value={language.name}

                            onChange={(e)=>

                                updateItemField(

                                    "languages",

                                    language.id,

                                    "name",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Level"

                            value={language.level}

                            onChange={(e)=>

                                updateItemField(

                                    "languages",

                                    language.id,

                                    "level",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "languages",

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