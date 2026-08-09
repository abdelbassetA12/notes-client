import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Input from "../common/Input";

export default function ColorSettings() {

    const { design, updateDesign } = useResume();

    return (
     
        <Section>

    <SectionHeader
        title="Colors"
        subtitle="Customize your resume colors"
    />

    <div className="color-grid">

        <div className="color-card">

            <label>Primary</label>

            <div className="color-input">

                <input
                    type="color"
                    value={design.primaryColor}
                    onChange={(e)=>
                        updateDesign(
                            "primaryColor",
                            e.target.value
                        )
                    }
                />

                <span>

                    {design.primaryColor}

                </span>

            </div>

        </div>

        <div className="color-card">

            <label>Text</label>

            <div className="color-input">

                <input
                    type="color"
                    value={design.textColor}
                    onChange={(e)=>
                        updateDesign(
                            "textColor",
                            e.target.value
                        )
                    }
                />

                <span>

                    {design.textColor}

                </span>

            </div>

        </div>

        <div className="color-card">

            <label>Background</label>

            <div className="color-input">

                <input
                    type="color"
                    value={design.backgroundColor}
                    onChange={(e)=>
                        updateDesign(
                            "backgroundColor",
                            e.target.value
                        )
                    }
                />

                <span>

                    {design.backgroundColor}

                </span>

            </div>

        </div>

    </div>
    <style>
        {`
        .color-grid{

    display:flex;

    flex-direction:column;

    gap:18px;

}

.color-card{

    padding:16px;

    border:1px solid #e5e7eb;

    border-radius:12px;

    background:#fff;

    transition:.25s;

}

.color-card:hover{

    border-color:#2563eb;

    box-shadow:0 5px 20px rgba(37,99,235,.08);

}

.color-card label{

    display:block;

    margin-bottom:12px;

    font-weight:600;

}

.color-input{

    display:flex;

    align-items:center;

    gap:14px;

}

.color-input input{

    width:50px;

    height:42px;

    border:none;

    background:none;

    cursor:pointer;

}

.color-input span{

    font-family:monospace;

    font-size:14px;

    color:#555;

}`}
    </style>



</Section>


 



       

    );

}