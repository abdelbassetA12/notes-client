import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import ItemAccordion from "../common/ItemAccordion";

export default function CertificatesSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("certificates",{

            id:crypto.randomUUID(),

            name:"",

            issuer:"",

            date:"",

            link:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Certificates"

                action={

                    <Button onClick={handleAdd}>

                        Add Certificate

                    </Button>

                }

            />

            {

                resume.certificates.map((certificate,index)=>(

                    
                           <ItemAccordion
    key={certificate.id}
    title={certificate.company || `certificate #${index + 1}`}
>

                        <Input

                            label="Certificate Name"

                            value={certificate.name}

                            onChange={(e)=>

                                updateItemField(

                                    "certificates",

                                    certificate.id,

                                    "name",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Issuer"

                            value={certificate.issuer}

                            onChange={(e)=>

                                updateItemField(

                                    "certificates",

                                    certificate.id,

                                    "issuer",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            type="month"

                            label="Issue Date"

                            value={certificate.date}

                            onChange={(e)=>

                                updateItemField(

                                    "certificates",

                                    certificate.id,

                                    "date",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Certificate Link"

                            value={certificate.link}

                            onChange={(e)=>

                                updateItemField(

                                    "certificates",

                                    certificate.id,

                                    "link",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "certificates",

                                    index

                                )

                            }

                        >

                            Delete Certificate

                        </Button>

                    </ItemAccordion>

                ))

            }
 

        </Section>

    );

}