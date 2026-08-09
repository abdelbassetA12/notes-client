import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import ItemAccordion from "../common/ItemAccordion";

export default function CoursesSection(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("courses",{

            id:crypto.randomUUID(),

            name:"",

            provider:"",

            date:"",

            link:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Courses"

                action={

                    <Button onClick={handleAdd}>

                        Add Course

                    </Button>

                }

            />

            {

                resume.courses.map((course,index)=>(

                     

                        <ItemAccordion
                           key={course.id}
                           title={course.company || `course #${index + 1}`}
                       >

                        <Input

                            label="Course Name"

                            value={course.name}

                            onChange={(e)=>

                                updateItemField(

                                    "courses",

                                    course.id,

                                    "name",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Provider"

                            value={course.provider}

                            onChange={(e)=>

                                updateItemField(

                                    "courses",

                                    course.id,

                                    "provider",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            type="month"

                            label="Completion Date"

                            value={course.date}

                            onChange={(e)=>

                                updateItemField(

                                    "courses",

                                    course.id,

                                    "date",

                                    e.target.value

                                )

                            }

                        />

                        <Input

                            label="Course Link"

                            value={course.link}

                            onChange={(e)=>

                                updateItemField(

                                    "courses",

                                    course.id,

                                    "link",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "courses",

                                    index

                                )

                            }

                        >

                            Delete Course

                        </Button>

                    </ItemAccordion>

                ))

            }

            <style>

                {`

.course-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    padding:20px;

    margin-top:20px;

    background:white;

}

.item-title{

    margin-bottom:20px;

    color:#2563eb;

    font-size:18px;

    font-weight:600;

}

`}

            </style>

        </Section>

    );

}