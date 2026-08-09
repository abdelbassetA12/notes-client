import Input from "../common/Input";
import DateInput from "../common/DateInput";
import Row from "../common/Row";
import Checkbox from "../common/Checkbox";
import TextArea from "../common/TextArea";

export default function EducationForm({

    education,

    onChange

}){

    return(

        <>

            <Input

                label="School"

                value={education.school}

                onChange={(e)=>onChange(

                    "school",

                    e.target.value

                )}

            />

            <Input

                label="Degree"

                value={education.degree}

                onChange={(e)=>onChange(

                    "degree",

                    e.target.value

                )}

            />

            <Row>

                <DateInput

                    label="Start Date"

                    value={education.startDate}

                    onChange={(e)=>onChange(

                        "startDate",

                        e.target.value

                    )}

                />

                <DateInput

                    label="End Date"

                    value={education.endDate}

                    onChange={(e)=>onChange(

                        "endDate",

                        e.target.value

                    )}

                />

            </Row>

            <Checkbox

                label="Currently studying"

                checked={education.current}

                onChange={(e)=>onChange(

                    "current",

                    e.target.checked

                )}

            />

            <TextArea

                label="Description"

                value={education.description}

                onChange={(e)=>onChange(

                    "description",

                    e.target.value

                )}

            />

        </>

    );

}