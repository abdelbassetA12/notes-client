import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import ItemAccordion from "../common/ItemAccordion";

export default function SkillsSection() {

    const {
        resume,
        addItem,
        removeItem,
        updateItemField
    } = useResume();

    const handleAdd = () => {

        addItem("skills", {

            id: crypto.randomUUID(),

            name: "",

            level: "80"

        });

    };

    return (

        <Section>

            <SectionHeader
                title="Skills"
                action={
                    <Button onClick={handleAdd}>
                        Add Skill
                    </Button>
                }
            />

            {

                resume.skills.map((skill, index) => (

                    
                          <ItemAccordion
                            key={skill.id}
                            title={skill.company || `skill #${index + 1}`}
                        > 

                        <Input
                            label="Skill"
                            value={skill.name}
                            onChange={(e)=>
                                updateItemField(
                                    "skills",
                                    skill.id,
                                    "name",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            type="number"
                            label="Level (%)"
                            value={skill.level}
                            onChange={(e)=>
                                updateItemField(
                                    "skills",
                                    skill.id,
                                    "level",
                                    e.target.value
                                )
                            }
                        />

                        <Button
                            variant="danger"
                            onClick={()=>
                                removeItem(
                                    "skills",
                                    index
                                )
                            }
                        >
                            Delete Skill
                        </Button>

                    </ItemAccordion>

                ))

            }

        </Section>

    );

}