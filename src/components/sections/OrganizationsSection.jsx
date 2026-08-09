import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function OrganizationsSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("organizations",{

            id:crypto.randomUUID(),

            organization:"",

            role:"",

            startDate:"",

            endDate:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Organizations"

                action={<Button onClick={handleAdd}>Add Organization</Button>}

            />

            {

                resume.organizations.map((organization,index)=>(

                    

                         <ItemAccordion
                              key={organization.id}
                               title={organization.company || `organization #${index + 1}`}
                                >

                        <Input
                            label="Organization"
                            value={organization.organization}
                            onChange={(e)=>
                                updateItemField(
                                    "organizations",
                                    organization.id,
                                    "organization",
                                    e.target.value
                                )
                            }
                        />

                        <Input
                            label="Role"
                            value={organization.role}
                            onChange={(e)=>
                                updateItemField(
                                    "organizations",
                                    organization.id,
                                    "role",
                                    e.target.value
                                )
                            }
                        />

                        <div className="date-row">

                            <Input
                                type="month"
                                label="Start Date"
                                value={organization.startDate}
                                onChange={(e)=>
                                    updateItemField(
                                        "organizations",
                                        organization.id,
                                        "startDate",
                                        e.target.value
                                    )
                                }
                            />

                            <Input
                                type="month"
                                label="End Date"
                                value={organization.endDate}
                                onChange={(e)=>
                                    updateItemField(
                                        "organizations",
                                        organization.id,
                                        "endDate",
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                        <TextArea
                            label="Description"
                            value={organization.description}
                            onChange={(e)=>
                                updateItemField(
                                    "organizations",
                                    organization.id,
                                    "description",
                                    e.target.value
                                )
                            }
                        />

                        <Button
                            variant="danger"
                            onClick={()=>removeItem("organizations",index)}
                        >
                            Delete
                        </Button>

                    </ItemAccordion>

                ))

            }

        </Section>

    );

}