export default function SubjectEditor({

    subject,
    setSubject,
    name,
    setName

}) {

    return (

        <div className="subject-card">
            <label>

                Name Project

            </label>

            <input

                type="text"

                value={name}

                onChange={(e)=>
                    setName(e.target.value)
                }

            />

            <label>

                Email Subject

            </label>

            <input

                type="text"

                value={subject}

                onChange={(e)=>
                    setSubject(e.target.value)
                }

            />

        </div>

    );

}