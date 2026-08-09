import { useState } from "react";
import {

    useResume

} from "../context/ResumeContext";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
 

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import ItemAccordion from "../common/ItemAccordion";
  

export default function EducationSection(){
   
   

    const {

        resume,

        addItem,

        removeItem,
        updateItemField

    } = useResume();
    const handleAdd = () => {

    addItem("education", {

        id: crypto.randomUUID(),

        school: "",

        degree: "",

        city: "",

        startDate: "",

        endDate: "",

        description: ""

    });

};
/*
    const handleAdd = () => {

        addItem("education",{

            id:crypto.randomUUID(),

            school:"New School",

            degree:"Degree",

            city:"",

            startDate:"",

            endDate:"",
        current:false,
        description:""

        });

    };*/

    return(
        <>
          <Section>

            <SectionHeader

                title="Education"

                action={

                    <Button onClick={handleAdd}>

                        Add Education

                    </Button>

                }

            />

            {resume.education.map((education, index) => (


<ItemAccordion
key={education.id}

    title={education.school || `Education #${index+1}`}

>

    

         <Input
            label="School"
            value={education.school}
            onChange={(e)=>
                updateItemField(
                    "education",
                    education.id,
                    "school",
                    e.target.value
                )
            }
        />

        <Input
            label="Degree"
            value={education.degree}
            onChange={(e)=>
                updateItemField(
                    "education",
                    education.id,
                    "degree",
                    e.target.value
                )
            }
        />

        <Input
            label="City"
            value={education.city}
            onChange={(e)=>
                updateItemField(
                    "education",
                    education.id,
                    "city",
                    e.target.value
                )
            }
        />

        <div className="date-row">

            <Input
                label="Start Date"
                type="month"
                value={education.startDate}
                onChange={(e)=>
                    updateItemField(
                        "education",
                        education.id,
                        "startDate",
                        e.target.value
                    )
                }
            />

            <Input
                label="End Date"
                type="month"
                value={education.endDate}
                onChange={(e)=>
                    updateItemField(
                        "education",
                        education.id,
                        "endDate",
                        e.target.value
                    )
                }
            />

        </div>

        <TextArea
            label="Description"
            value={education.description}
            onChange={(e)=>
                updateItemField(
                    "education",
                    education.id,
                    "description",
                    e.target.value
                )
            }
        />

        <Button
            variant="danger"
            onClick={() =>
                removeItem("education", index)
            }
        >
            Delete Education
        </Button>

    

</ItemAccordion>

    

))}

           

        </Section>
        <style>
            {`
            

.date-row{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:15px;

}
 

 

 `}
        </style>
        </>

       

    );

}


