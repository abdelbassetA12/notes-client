import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function SkillsSettings() {

    const { design, updateDesign } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Skills"
                subtitle="Choose how skill levels are displayed"
            />

            <div className="skills-options">

                <button
                    className={
                        design.skillStyle === "bars"
                            ? "skill-card active"
                            : "skill-card"
                    }
                    onClick={() =>
                        updateDesign("skillStyle", "bars")
                    }
                >

                    <div className="skill-preview bars">

                        <div className="bar">
                            <span style={{ width: "85%" }}></span>
                        </div>

                        <div className="bar">
                            <span style={{ width: "60%" }}></span>
                        </div>

                    </div>

                    <p>Bars</p>

                </button>

                <button
                    className={
                        design.skillStyle === "dots"
                            ? "skill-card active"
                            : "skill-card"
                    }
                    onClick={() =>
                        updateDesign("skillStyle", "dots")
                    }
                >

                    <div className="skill-preview dots">

                        <div>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span></span>
                        </div>

                        <div>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                    <p>Dots</p>

                </button>

                <button
                    className={
                        design.skillStyle === "text"
                            ? "skill-card active"
                            : "skill-card"
                    }
                    onClick={() =>
                        updateDesign("skillStyle", "text")
                    }
                >

                    <div className="skill-preview text">

                        <strong>JavaScript</strong>

                        <small>Advanced</small>

                    </div>

                    <p>Text</p>

                </button>

            </div>
            <style>
                {`
                .skills-options{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:16px;

}

.skill-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    background:#fff;

    padding:18px;

    cursor:pointer;

    transition:.25s;

}

.skill-card:hover{

    border-color:#2563eb;

    box-shadow:0 6px 20px rgba(37,99,235,.08);

}

.skill-card.active{

    border:2px solid #2563eb;

    background:#eff6ff;

}

.skill-card p{

    margin-top:14px;

    text-align:center;

    font-weight:600;

}

/* ---------- Bars ---------- */

.skill-preview.bars .bar{

    height:8px;

    background:#e5e7eb;

    border-radius:20px;

    overflow:hidden;

    margin-bottom:10px;

}

.skill-preview.bars .bar span{

    display:block;

    height:100%;

    background:#2563eb;

}

/* ---------- Dots ---------- */

.skill-preview.dots div{

    display:flex;

    gap:5px;

    margin-bottom:10px;

}

.skill-preview.dots span{

    width:10px;

    height:10px;

    border-radius:50%;

    background:#d1d5db;

}

.skill-preview.dots .filled{

    background:#2563eb;

}

/* ---------- Text ---------- */

.skill-preview.text{

    text-align:center;

}

.skill-preview.text strong{

    display:block;

    margin-bottom:6px;

}

.skill-preview.text small{

    color:#6b7280;

}`}
            </style>

        </Section>

    );

}