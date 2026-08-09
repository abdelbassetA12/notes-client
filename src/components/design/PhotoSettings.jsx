import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function PhotoSettings() {

    const { design, updateDesign } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Photo"
                subtitle="Customize the profile picture"
            />

            <div className="photo-toggle">

                <span>Show Photo</span>

                <button
                    className={
                        design.showPhoto
                            ? "switch active"
                            : "switch"
                    }
                    onClick={() =>
                        updateDesign(
                            "showPhoto",
                            !design.showPhoto
                        )
                    }
                >
                    <span></span>
                </button>

            </div>

            {

                design.showPhoto && (

                    <>

                        <h4>Photo Shape</h4>

                        <div className="photo-options">

                            <button
                                className={
                                    design.photoStyle === "circle"
                                        ? "photo-card active"
                                        : "photo-card"
                                }
                                onClick={() =>
                                    updateDesign(
                                        "photoStyle",
                                        "circle"
                                    )
                                }
                            >

                                <div className="preview-photo circle"></div>

                                <span>Circle</span>

                            </button>

                            <button
                                className={
                                    design.photoStyle === "rounded"
                                        ? "photo-card active"
                                        : "photo-card"
                                }
                                onClick={() =>
                                    updateDesign(
                                        "photoStyle",
                                        "rounded"
                                    )
                                }
                            >

                                <div className="preview-photo rounded"></div>

                                <span>Rounded</span>

                            </button>

                            <button
                                className={
                                    design.photoStyle === "square"
                                        ? "photo-card active"
                                        : "photo-card"
                                }
                                onClick={() =>
                                    updateDesign(
                                        "photoStyle",
                                        "square"
                                    )
                                }
                            >

                                <div className="preview-photo square"></div>

                                <span>Square</span>

                            </button>

                        </div>

                    </>

                )

            }
            <style>
                {`
                .photo-toggle{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:24px;

}

.photo-toggle span{

    font-weight:600;

}

.switch{

    width:52px;

    height:30px;

    border:none;

    border-radius:50px;

    background:#d1d5db;

    cursor:pointer;

    position:relative;

    transition:.25s;

}

.switch span{

    position:absolute;

    width:22px;

    height:22px;

    background:#fff;

    border-radius:50%;

    left:4px;

    top:4px;

    transition:.25s;

}

.switch.active{

    background:#2563eb;

}

.switch.active span{

    left:26px;

}

.photo-options{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:16px;

}

.photo-card{

    padding:18px;

    border:1px solid #e5e7eb;

    border-radius:12px;

    background:#fff;

    cursor:pointer;

    transition:.25s;

}

.photo-card:hover{

    border-color:#2563eb;

    box-shadow:0 5px 18px rgba(37,99,235,.08);

}

.photo-card.active{

    border:2px solid #2563eb;

    background:#eff6ff;

}

.photo-card span{

    display:block;

    margin-top:14px;

    text-align:center;

    font-weight:600;

}

.preview-photo{

    width:60px;

    height:60px;

    margin:auto;

    background:#cbd5e1;

}

.preview-photo.circle{

    border-radius:50%;

}

.preview-photo.rounded{

    border-radius:12px;

}

.preview-photo.square{

    border-radius:0;

}`}
            </style>

        </Section>

    );

}