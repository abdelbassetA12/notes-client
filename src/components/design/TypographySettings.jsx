import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

const fonts = [
    "Arial",
    "Georgia",
    "Times New Roman",
    "Calibri",
    "Verdana",
    "Poppins"
];

export default function TypographySettings() {

    const { design, updateDesign } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Typography"
                subtitle="Choose the font and text size"
            />

            <div className="font-list">

                {

                    fonts.map(font => (

                        <button
                            key={font}
                            className={
                                design.fontFamily === font
                                    ? "font-card active"
                                    : "font-card"
                            }
                            style={{ fontFamily: font }}
                            onClick={() =>
                                updateDesign("fontFamily", font)
                            }
                        >

                            <strong>{font}</strong>

                            <small>
                                The quick brown fox
                            </small>

                        </button>

                    ))

                }

            </div>

            <div className="font-size-box">

                <div>

                    <h4>Font Size</h4>

                    <small>

                        {design.fontSize}px

                    </small>

                </div>

                <input
                    type="range"
                    min="12"
                    max="20"
                    value={design.fontSize}
                    onChange={(e)=>
                        updateDesign(
                            "fontSize",
                            Number(e.target.value)
                        )
                    }
                />

            </div>
            <style>
                {`
                .font-list{

    display:grid;

    gap:12px;

}

.font-card{

    text-align:left;

    border:1px solid #e5e7eb;

    background:#fff;

    border-radius:12px;

    padding:14px;

    cursor:pointer;

    transition:.25s;

}

.font-card:hover{

    border-color:#2563eb;

    box-shadow:0 5px 18px rgba(37,99,235,.08);

}

.font-card.active{

    border:2px solid #2563eb;

    background:#eff6ff;

}

.font-card strong{

    display:block;

    font-size:18px;

    margin-bottom:6px;

}

.font-card small{

    color:#6b7280;

}

.font-size-box{

    margin-top:28px;

}

.font-size-box h4{

    margin:0;

}

.font-size-box small{

    color:#6b7280;

}

.font-size-box input{

    width:100%;

    margin-top:18px;

}`}
            </style>

        </Section>

    );

}