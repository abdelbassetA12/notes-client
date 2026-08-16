import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
const photoShapes = [
    {
        id: "circle",
        label: "Circle",
        radius: "50%",
    },
    {
        id: "rounded",
        label: "Rounded",
        radius: "18px",
    },
    {
        id: "soft",
        label: "Soft",
        radius: "28px",
    },
    {
        id: "square",
        label: "Square",
        radius: "0",
    },
    {
        id: "pill",
        label: "Pill",
        radius: "999px",
    },
    {
        id: "top-rounded",
        label: "Top Rounded",
        radius: "28px 28px 0 0",
    },
    {
        id: "bottom-rounded",
        label: "Bottom Rounded",
        radius: "0 0 28px 28px",
    },
];
 

const objectFits = [
    {
        id: "cover",
        label: "Cover",
        description: "Fill the frame",
    },
    {
        id: "contain",
        label: "Contain",
        description: "Show full image",
    },
];

const borderStyles = [
    {
        id: "solid",
        label: "Solid",
    },
    {
        id: "dashed",
        label: "Dashed",
    },
    {
        id: "dotted",
        label: "Dotted",
    },
];

export default function PhotoSettings() {
    const { design, updateDesign } = useResume();

    const update = (field, value) => {
        updateDesign(field, value);
    };

    const photoSize = Number(design.photoSize ?? 145);
    const borderWidth = Number(design.photoBorderWidth ?? 0);
    const photoOpacity = Number(design.photoOpacity ?? 100);
    const photoScale = Number(design.photoScale ?? 100);
    const photoRotation = Number(design.photoRotation ?? 0);
    const photoMargin = Number(design.photoMargin ?? 25);

    const photoShape = design.photoStyle || "circle";
    const objectFit = design.photoObjectFit || "cover";
    const borderStyle = design.photoBorderStyle || "solid";
    const borderColor = design.photoBorderColor || "#ffffff";
    const photoShadow = design.photoShadow || "none";

    const getShapeRadius = (shape) => {
        const selected = photoShapes.find(
            (item) => item.id === shape
        );

        return selected?.radius || "50%";
    };

    return (
        <Section>

            <SectionHeader
                title="Photo"
                subtitle="Customize every detail of your profile photo"
            />

            {/* =====================================================
                SHOW PHOTO
            ===================================================== */}

            <div className="photo-toggle">

                <div>
                    <strong>Show Photo</strong>

                    <small>
                        Display your profile photo in the resume
                    </small>
                </div>

                <button
                    type="button"
                    aria-label="Toggle photo"
                    className={
                        design.showPhoto
                            ? "photo-switch active"
                            : "photo-switch"
                    }
                    onClick={() =>
                        update(
                            "showPhoto",
                            !design.showPhoto
                        )
                    }
                >
                    <span />
                </button>

            </div>

            {!design.showPhoto && (
                <div className="photo-disabled">
                    <span>◉</span>

                    <div>
                        <strong>Photo hidden</strong>
                        <small>
                            Enable Show Photo to customize the image.
                        </small>
                    </div>
                </div>
            )}

            {design.showPhoto && (
                <div className="photo-settings">

                    {/* =================================================
                        SHAPE
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-heading">
                            <div>
                                <h4>Photo Shape</h4>
                                <small>
                                    Choose the shape of your profile image
                                </small>
                            </div>
                        </div>

                        <div className="shape-grid">

                            {photoShapes.map((shape) => (

                                <button
                                    type="button"
                                    key={shape.id}
                                    className={
                                        photoShape === shape.id
                                            ? "shape-card active"
                                            : "shape-card"
                                    }
                                    onClick={() =>
                                        update(
                                            "photoStyle",
                                            shape.id
                                        )
                                    }
                                >
                                    <span
    className={`shape-preview shape-preview-${shape.id}`}
/>

                                   
                     

                                    <span className="shape-label">
                                        {shape.label}
                                    </span>

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* =================================================
                        SIZE
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>Photo Size</h4>
                                <small>
                                    Adjust the image dimensions
                                </small>
                            </div>

                            <strong>
                                {photoSize}px
                            </strong>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="70"
                            max="240"
                            step="1"
                            value={photoSize}
                            onChange={(e) =>
                                update(
                                    "photoSize",
                                    Number(e.target.value)
                                )
                            }
                        />

                        <div className="range-labels">
                            <span>Small</span>
                            <span>Large</span>
                        </div>

                    </div>

                    {/* =================================================
                        BORDER
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>Border</h4>
                                <small>
                                    Control the photo border
                                </small>
                            </div>

                            <strong>
                                {borderWidth}px
                            </strong>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={borderWidth}
                            onChange={(e) =>
                                update(
                                    "photoBorderWidth",
                                    Number(e.target.value)
                                )
                            }
                        />

                        <div className="border-options">

                            {borderStyles.map((style) => (

                                <button
                                    type="button"
                                    key={style.id}
                                    className={
                                        borderStyle === style.id
                                            ? "mini-option active"
                                            : "mini-option"
                                    }
                                    onClick={() =>
                                        update(
                                            "photoBorderStyle",
                                            style.id
                                        )
                                    }
                                >
                                    {style.label}
                                </button>

                            ))}

                        </div>

                        <div className="color-control">

                            <span>Border Color</span>

                            <label className="color-picker">

                                <input
                                    type="color"
                                    value={borderColor}
                                    onChange={(e) =>
                                        update(
                                            "photoBorderColor",
                                            e.target.value
                                        )
                                    }
                                />

                                <span>
                                    {borderColor.toUpperCase()}
                                </span>

                            </label>

                        </div>

                    </div>

                    {/* =================================================
                        OBJECT FIT
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-heading">

                            <div>
                                <h4>Image Fit</h4>
                                <small>
                                    Choose how the image fits inside the frame
                                </small>
                            </div>

                        </div>

                        <div className="fit-grid">

                            {objectFits.map((fit) => (

                                <button
                                    type="button"
                                    key={fit.id}
                                    className={
                                        objectFit === fit.id
                                            ? "fit-card active"
                                            : "fit-card"
                                    }
                                    onClick={() =>
                                        update(
                                            "photoObjectFit",
                                            fit.id
                                        )
                                    }
                                >

                                    <span className="fit-icon">
                                        {fit.id === "cover"
                                            ? "▣"
                                            : "□"}
                                    </span>

                                    <span>
                                        <strong>
                                            {fit.label}
                                        </strong>

                                        <small>
                                            {fit.description}
                                        </small>
                                    </span>

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* =================================================
                        SCALE
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>Image Zoom</h4>
                                <small>
                                    Zoom the image without changing its frame
                                </small>
                            </div>

                            <strong>
                                {photoScale}%
                            </strong>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="80"
                            max="160"
                            step="1"
                            value={photoScale}
                            onChange={(e) =>
                                update(
                                    "photoScale",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                    {/* =================================================
                        ROTATION
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>Rotation</h4>
                                <small>
                                    Rotate the photo inside the frame
                                </small>
                            </div>

                            <strong>
                                {photoRotation}°
                            </strong>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="-180"
                            max="180"
                            step="1"
                            value={photoRotation}
                            onChange={(e) =>
                                update(
                                    "photoRotation",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                    {/* =================================================
                        OPACITY
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>Opacity</h4>
                                <small>
                                    Adjust the image transparency
                                </small>
                            </div>

                            <strong>
                                {photoOpacity}%
                            </strong>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="30"
                            max="100"
                            step="1"
                            value={photoOpacity}
                            onChange={(e) =>
                                update(
                                    "photoOpacity",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                    {/* =================================================
                        SHADOW
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-heading">

                            <div>
                                <h4>Shadow</h4>
                                <small>
                                    Add depth around the profile photo
                                </small>
                            </div>

                        </div>

                        <div className="shadow-grid">

                            {[
                                ["none", "None"],
                                ["soft", "Soft"],
                                ["medium", "Medium"],
                                ["strong", "Strong"],
                            ].map(([id, label]) => (

                                <button
                                    type="button"
                                    key={id}
                                    className={
                                        photoShadow === id
                                            ? "shadow-card active"
                                            : "shadow-card"
                                    }
                                    onClick={() =>
                                        update(
                                            "photoShadow",
                                            id
                                        )
                                    }
                                >

                                    <span
                                        className={`shadow-preview ${id}`}
                                    />

                                    <span>
                                        {label}
                                    </span>

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* =================================================
                        SPACING
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>Photo Spacing</h4>
                                <small>
                                    Space around the photo
                                </small>
                            </div>

                            <strong>
                                {photoMargin}px
                            </strong>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="0"
                            max="60"
                            step="1"
                            value={photoMargin}
                            onChange={(e) =>
                                update(
                                    "photoMargin",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                    {/* =================================================
                        LIVE PREVIEW
                    ================================================= */}

                    <div className="photo-preview-box">

                        <div className="preview-title">
                            <strong>Preview</strong>
                            <small>
                                Live photo appearance
                            </small>
                        </div>

                        <div className="preview-stage">

                            <div
                                className="preview-image"
                                style={{
                                    width: `${Math.min(
                                        photoSize,
                                        150
                                    )}px`,

                                    height: `${Math.min(
                                        photoSize,
                                        150
                                    )}px`,

                                    borderRadius:
                                        getShapeRadius(
                                            photoShape
                                        ),

                                    borderWidth:
                                        `${Math.min(
                                            borderWidth,
                                            6
                                        )}px`,

                                    borderStyle:
                                        borderStyle,

                                    borderColor:
                                        borderColor,

                                    opacity:
                                        photoOpacity / 100,

                                    transform:
                                        `rotate(${photoRotation}deg) scale(${photoScale / 100})`,

                                    boxShadow:
                                        photoShadow === "soft"
                                            ? "0 4px 14px rgba(0,0,0,.15)"
                                            : photoShadow === "medium"
                                                ? "0 8px 22px rgba(0,0,0,.22)"
                                                : photoShadow === "strong"
                                                    ? "0 12px 30px rgba(0,0,0,.32)"
                                                    : "none",
                                }}
                            >

                                <span>
                                    PHOTO
                                </span>

                            </div>

                        </div>

                    </div>

                </div>
            )}

            <style>{`

                /* =====================================================
                   ROOT
                ===================================================== */

                .photo-settings {
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                }

                .photo-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 15px 16px;
                    margin-bottom: 22px;
                    border: 1px solid #e5e7eb;
                    border-radius: 14px;
                    background: #ffffff;
                }

                .photo-toggle strong {
                    display: block;
                    color: #111827;
                    font-size: 14px;
                }

                .photo-toggle small {
                    display: block;
                    margin-top: 4px;
                    color: #6b7280;
                    font-size: 11px;
                }

                /* =====================================================
                   SWITCH
                ===================================================== */

                .photo-switch {
                    width: 50px;
                    height: 28px;
                    padding: 0;
                    border: none;
                    border-radius: 999px;
                    background: #d1d5db;
                    position: relative;
                    cursor: pointer;
                    flex-shrink: 0;
                    transition: .25s ease;
                }

                .photo-switch span {
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #ffffff;
                    box-shadow: 0 1px 4px rgba(0,0,0,.15);
                    transition: .25s ease;
                }

                .photo-switch.active {
                    background: #2563eb;
                }

                .photo-switch.active span {
                    transform: translateX(22px);
                }

                /* =====================================================
                   DISABLED
                ===================================================== */

                .photo-disabled {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px;
                    border-radius: 14px;
                    background: #f8fafc;
                    border: 1px solid #e5e7eb;
                    color: #64748b;
                }

                .photo-disabled > span {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #e2e8f0;
                }

                .photo-disabled strong,
                .photo-disabled small {
                    display: block;
                }

                .photo-disabled strong {
                    color: #334155;
                    font-size: 13px;
                }

                .photo-disabled small {
                    margin-top: 3px;
                    font-size: 11px;
                }

                /* =====================================================
                   GROUP
                ===================================================== */

                .setting-group {
                    padding: 18px;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    background: #ffffff;
                }

                .setting-heading,
                .setting-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .setting-group h4 {
                    margin: 0;
                    color: #111827;
                    font-size: 13px;
                    font-weight: 700;
                }

                .setting-group small {
                    display: block;
                    margin-top: 4px;
                    color: #64748b;
                    font-size: 10.5px;
                    line-height: 1.4;
                }

                .setting-row > strong {
                    color: #2563eb;
                    font-size: 12px;
                    white-space: nowrap;
                }

                /* =====================================================
                   SHAPES
                ===================================================== */

               

               /* =====================================================
   PHOTO SHAPE SELECTOR
===================================================== */

.shape-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 15px;
}

/* CARD */

.shape-card {
    min-height: 82px;
    padding: 10px 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid #e5e7eb;
    border-radius: 12px;

    background: #ffffff;
    cursor: pointer;

    transition:
        border-color .2s ease,
        background .2s ease,
        transform .2s ease;

    overflow: hidden;
    box-sizing: border-box;
}

.shape-card:hover {
    border-color: #93c5fd;
    transform: translateY(-1px);
}

.shape-card.active {
    border: 2px solid #2563eb;
    background: #eff6ff;
}


/* =====================================================
   SHAPE PREVIEW BASE
===================================================== */

.shape-preview {
    display: block;

    width: 38px;
    height: 38px;

    flex: 0 0 38px;

    margin: 0 auto 8px;

    background: #cbd5e1;

    box-sizing: border-box;

    transition:
        border-radius .2s ease,
        width .2s ease,
        height .2s ease;
}


/* =====================================================
   CIRCLE
===================================================== */

.shape-preview-circle {
    width: 38px;
    height: 38px;

    border-radius: 50%;
}


/* =====================================================
   ROUNDED
===================================================== */

.shape-preview-rounded {
    width: 38px;
    height: 38px;

    border-radius: 18px;
}


/* =====================================================
   SOFT
===================================================== */

.shape-preview-soft {
    width: 38px;
    height: 38px;

    border-radius: 28px;
}


/* =====================================================
   SQUARE
===================================================== */

.shape-preview-square {
    width: 38px;
    height: 38px;

    border-radius: 0;
}


/* =====================================================
   PILL
===================================================== */

.shape-preview-pill {
    width: 44px;
    height: 26px;

    margin-top: 6px;
    margin-bottom: 14px;

    border-radius: 999px;
}


/* =====================================================
   TOP ROUNDED
===================================================== */

.shape-preview-top-rounded {
    width: 38px;
    height: 38px;

    border-radius: 18px 18px 0 0;
}


/* =====================================================
   BOTTOM ROUNDED
===================================================== */

.shape-preview-bottom-rounded {
    width: 38px;
    height: 38px;

    border-radius: 0 0 18px 18px;
}


/* =====================================================
   LABEL
===================================================== */

.shape-label {
    display: block;

    width: 100%;

    text-align: center;

    color: #475569;

    font-size: 9px;
    font-weight: 600;

    line-height: 1.2;
}

.shape-card.active .shape-label {
    color: #2563eb;
}

                /* =====================================================
                   RANGE
                ===================================================== */

                .range {
                    display: block;
                    width: 100%;
                    margin-top: 18px;
                    accent-color: #2563eb;
                    cursor: pointer;
                }

                .range-labels {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5px;
                    color: #94a3b8;
                    font-size: 9px;
                }

                /* =====================================================
                   BORDER
                ===================================================== */

                .border-options {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                    margin-top: 14px;
                }

                .mini-option {
                    padding: 9px 5px;
                    border: 1px solid #e2e8f0;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #475569;
                    font-size: 10px;
                    cursor: pointer;
                }

                .mini-option.active {
                    border-color: #2563eb;
                    color: #2563eb;
                    background: #eff6ff;
                }

                .color-control {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 16px;
                    padding-top: 15px;
                    border-top: 1px solid #f1f5f9;
                    color: #475569;
                    font-size: 11px;
                }

                .color-picker {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }

                .color-picker input {
                    width: 30px;
                    height: 30px;
                    padding: 2px;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    background: #ffffff;
                    cursor: pointer;
                }

                .color-picker span {
                    color: #64748b;
                    font-size: 10px;
                    font-family: monospace;
                }

                /* =====================================================
                   FIT
                ===================================================== */

                .fit-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                    margin-top: 15px;
                }

                .fit-card {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: left;
                    padding: 12px;
                    border: 1px solid #e5e7eb;
                    border-radius: 11px;
                    background: #ffffff;
                    cursor: pointer;
                }

                .fit-card.active {
                    border-color: #2563eb;
                    background: #eff6ff;
                }

                .fit-icon {
                    width: 34px;
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9px;
                    background: #f1f5f9;
                    color: #475569;
                    font-size: 17px;
                }

                .fit-card strong,
                .fit-card small {
                    display: block;
                }

                .fit-card strong {
                    color: #334155;
                    font-size: 11px;
                }

                .fit-card small {
                    margin-top: 3px;
                    font-size: 9px;
                }

                /* =====================================================
                   SHADOW
                ===================================================== */


                .shape-card {
    min-height: 82px;

    padding: 10px 6px;

    border: 1px solid #e5e7eb;
    border-radius: 12px;

    background: #ffffff;

    cursor: pointer;

    transition:
        border-color .2s ease,
        background .2s ease,
        transform .2s ease;

    overflow: hidden;
}

.shape-card:hover {
    border-color: #93c5fd;
    transform: translateY(-1px);
}

.shape-card.active {
    border: 2px solid #2563eb;
    background: #eff6ff;
}

                

                





                .shape-preview {
    position: relative;
    display: block;

    width: 38px;
    height: 38px;

    margin: 0 auto 8px;

    background: #cbd5e1;

    box-sizing: border-box;

    transition:
        transform .2s ease,
        border-radius .2s ease;
}


/* =========================
   CIRCLE
========================= */

.shape-preview-circle {
    border-radius: 50%;
}


/* =========================
   ROUNDED
========================= */

.shape-preview-rounded {
    border-radius: 18px;
}


/* =========================
   SOFT
========================= */

.shape-preview-soft {
    border-radius: 28px;
}


/* =========================
   SQUARE
========================= */

.shape-preview-square {
    border-radius: 0;
}


/* =========================
   PILL
========================= */

.shape-preview-pill {
    width: 42px;
    height: 28px;

    margin-top: 5px;
    margin-bottom: 13px;

    border-radius: 999px;
}


/* =========================
   TOP ROUNDED
========================= */

.shape-preview-top-rounded {
    border-radius: 28px 28px 0 0;
}


/* =========================
   BOTTOM ROUNDED
========================= */

.shape-preview-bottom-rounded {
    border-radius: 0 0 28px 28px;
}

 

                /* =====================================================
                   PREVIEW
                ===================================================== */

                .photo-preview-box {
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    background: #f8fafc;
                }

                .preview-title {
                    padding: 13px 15px;
                    border-bottom: 1px solid #e5e7eb;
                    background: #ffffff;
                }

                .preview-title strong,
                .preview-title small {
                    display: block;
                }

                .preview-title strong {
                    color: #111827;
                    font-size: 12px;
                }

                .preview-title small {
                    margin-top: 3px;
                    color: #64748b;
                    font-size: 9px;
                }

                .preview-stage {
                    min-height: 190px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .preview-image {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    background:
                        linear-gradient(
                            135deg,
                            #cbd5e1,
                            #94a3b8
                        );
                    color: #ffffff;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    transition: .25s ease;
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 500px) {

                    .shape-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .shadow-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .fit-grid {
                        grid-template-columns: 1fr;
                    }

                }

            `}</style>

        </Section>
    );
}

/*
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

}*/