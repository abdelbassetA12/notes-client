import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

/* =========================================================
   PHOTO SHAPES
========================================================= */

const photoShapes = [
    {
        id: "circle",
        label: "Circle",
        radius: "50%",
    },
    {
        id: "rounded",
        label: "Rounded",
        radius: "12px",
    },
    {
        id: "soft",
        label: "Soft",
        radius: "20px",
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
        radius: "18px 18px 0 0",
    },
    {
        id: "bottom-rounded",
        label: "Bottom Rounded",
        radius: "0 0 18px 18px",
    },
];

/* =========================================================
   OBJECT FIT
========================================================= */

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
const objectPositions = [
    { id: "center", label: "Center", position: "center center" },
    { id: "top", label: "Top", position: "center top" },
    { id: "bottom", label: "Bottom", position: "center bottom" },
    { id: "left", label: "Left", position: "left center" },
    { id: "right", label: "Right", position: "right center" },
    { id: "top-left", label: "Top Left", position: "left top" },
    { id: "top-right", label: "Top Right", position: "right top" },
    { id: "bottom-left", label: "Bottom Left", position: "left bottom" },
    { id: "bottom-right", label: "Bottom Right", position: "right bottom" },
];

/* =========================================================
   BORDER STYLES
========================================================= */

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

/* =========================================================
   SHADOWS
========================================================= */

const shadowOptions = [
    {
        id: "none",
        label: "None",
    },
    {
        id: "soft",
        label: "Soft",
    },
    {
        id: "medium",
        label: "Medium",
    },
    {
        id: "strong",
        label: "Strong",
    },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PhotoSettings() {
    const { design, updateDesign } = useResume();

    /* =====================================================
       SAFE VALUES
    ===================================================== */

    const showPhoto = design?.showPhoto !== false;

    const photoSize = Number(design?.photoSize ?? 145);

    const borderWidth = Number(
        design?.photoBorderWidth ?? 0
    );

    const photoOpacity = Number(
        design?.photoOpacity ?? 100
    );

    const photoScale = Number(
        design?.photoScale ?? 100
    );

    const photoRotation = Number(
        design?.photoRotation ?? 0
    );

    const photoMargin = Number(
        design?.photoMargin ?? 25
    );

    const photoShape =
        design?.photoStyle || "circle";

    const objectFit =
        design?.photoObjectFit || "cover";

        const objectPosition =
    design.photoObjectPosition || "center center";

    const borderStyle =
        design?.photoBorderStyle || "solid";

    const borderColor =
        design?.photoBorderColor || "#ffffff";

    const photoShadow =
        design?.photoShadow || "none";

    /* =====================================================
       UPDATE
    ===================================================== */

    const update = (field, value) => {
        updateDesign(field, value);
    };

    /* =====================================================
       GET RADIUS
    ===================================================== */

    const getShapeRadius = (shape) => {
        const selected = photoShapes.find(
            (item) => item.id === shape
        );

        return selected?.radius || "50%";
    };

    /* =====================================================
       SHADOW
    ===================================================== */

    const getShadow = () => {
        switch (photoShadow) {
            case "soft":
                return "0 4px 14px rgba(15, 23, 42, 0.15)";

            case "medium":
                return "0 8px 22px rgba(15, 23, 42, 0.22)";

            case "strong":
                return "0 12px 30px rgba(15, 23, 42, 0.32)";

            default:
                return "none";
        }
    };

    /* =====================================================
       PREVIEW SHAPE STYLE

       IMPORTANT:
       We don't rely only on border-radius CSS classes.
       Each shape gets an explicit visual size.
    ===================================================== */

    const getShapePreviewStyle = (shape) => {
        const common = {
            background: "#cbd5e1",
            flexShrink: 0,
        };

        switch (shape) {
            case "circle":
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                };

            case "rounded":
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                };

            case "soft":
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "16px",
                };

            case "square":
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "0",
                };

            case "pill":
                return {
                    ...common,
                    width: "52px",
                    height: "28px",
                    borderRadius: "999px",
                };

            case "top-rounded":
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "16px 16px 0 0",
                };

            case "bottom-rounded":
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "0 0 16px 16px",
                };

            default:
                return {
                    ...common,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                };
        }
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

                <div className="photo-toggle-content">

                    <strong>
                        Show Photo
                    </strong>

                    <small>
                        Display your profile photo in the resume
                    </small>

                </div>

                <button
                    type="button"
                    aria-label="Toggle photo"
                    aria-pressed={showPhoto}
                    className={
                        showPhoto
                            ? "photo-switch active"
                            : "photo-switch"
                    }
                    onClick={() =>
                        update(
                            "showPhoto",
                            !showPhoto
                        )
                    }
                >
                    <span />
                </button>

            </div>

            {/* =====================================================
                PHOTO DISABLED
            ===================================================== */}

            {!showPhoto && (
                <div className="photo-disabled">

                    <div className="photo-disabled-icon">
                        ◉
                    </div>

                    <div>
                        <strong>
                            Photo hidden
                        </strong>

                        <small>
                            Enable Show Photo to customize the image.
                        </small>
                    </div>

                </div>
            )}

            {/* =====================================================
                SETTINGS
            ===================================================== */}

            {showPhoto && (
                <div className="photo-settings">

                    {/* =================================================
                        SHAPE
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-heading">

                            <div>

                                <h4>
                                    Photo Shape
                                </h4>

                                <small>
                                    Choose the shape of your profile image
                                </small>

                            </div>

                        </div>

                        <div className="shape-grid">

                            {photoShapes.map((shape) => {

                                const isActive =
                                    photoShape === shape.id;

                                return (
                                    <button
                                        key={shape.id}
                                        type="button"
                                        className={
                                            isActive
                                                ? "shape-card active"
                                                : "shape-card"
                                        }
                                        onClick={() =>
                                            update(
                                                "photoStyle",
                                                shape.id
                                            )
                                        }
                                        aria-pressed={isActive}
                                    >

                                        <span
                                            className="shape-preview"
                                            style={getShapePreviewStyle(
                                                shape.id
                                            )}
                                        />

                                        <span className="shape-label">
                                            {shape.label}
                                        </span>

                                    </button>
                                );
                            })}

                        </div>

                    </div>

                    {/* =================================================
                        SIZE
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>
                                <h4>
                                    Photo Size
                                </h4>

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
                            <span>
                                Small
                            </span>

                            <span>
                                Large
                            </span>
                        </div>

                    </div>

                    {/* =================================================
                        BORDER
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>

                                <h4>
                                    Border
                                </h4>

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

                            {borderStyles.map((style) => {

                                const isActive =
                                    borderStyle === style.id;

                                return (
                                    <button
                                        key={style.id}
                                        type="button"
                                        className={
                                            isActive
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
                                );
                            })}

                        </div>

                        <div className="color-control">

                            <span>
                                Border Color
                            </span>

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
                        IMAGE FIT
                    ================================================= */}

                   


                    {/* =================================================
    IMAGE FIT
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

    {/* FIT OPTIONS */}

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


    {/* =================================================
        IMAGE POSITION
    ================================================= */}

    {objectFit === "cover" && (

        <div className="position-control">

            <div className="position-heading">

                <div>
                    <h4>Image Position</h4>

                    <small>
                        Choose which part of the image remains visible
                    </small>
                </div>

            </div>


            <div className="position-grid">

                {objectPositions.map((item) => (

                    <button
                        type="button"
                        key={item.id}
                        className={
                            objectPosition === item.position
                                ? "position-card active"
                                : "position-card"
                        }
                        onClick={() =>
                            update(
                                "photoObjectPosition",
                                item.position
                            )
                        }
                    >

                        <span
                            className={`position-preview position-${item.id}`}
                        >
                            <span />
                        </span>

                        <span className="position-label">
                            {item.label}
                        </span>

                    </button>

                ))}

            </div>

        </div>

    )}

</div>

                    {/* =================================================
                        IMAGE ZOOM
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>

                                <h4>
                                    Image Zoom
                                </h4>

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

                                <h4>
                                    Rotation
                                </h4>

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

                                <h4>
                                    Opacity
                                </h4>

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

                                <h4>
                                    Shadow
                                </h4>

                                <small>
                                    Add depth around the profile photo
                                </small>

                            </div>

                        </div>

                        <div className="shadow-grid">

                            {shadowOptions.map((shadow) => {

                                const isActive =
                                    photoShadow === shadow.id;

                                return (
                                    <button
                                        key={shadow.id}
                                        type="button"
                                        className={
                                            isActive
                                                ? "shadow-card active"
                                                : "shadow-card"
                                        }
                                        onClick={() =>
                                            update(
                                                "photoShadow",
                                                shadow.id
                                            )
                                        }
                                    >

                                        <span
                                            className={`shadow-preview ${shadow.id}`}
                                        />

                                        <span>
                                            {shadow.label}
                                        </span>

                                    </button>
                                );
                            })}

                        </div>

                    </div>

                    {/* =================================================
                        SPACING
                    ================================================= */}

                    <div className="setting-group">

                        <div className="setting-row">

                            <div>

                                <h4>
                                    Photo Spacing
                                </h4>

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

                            <strong>
                                Preview
                            </strong>

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
                                        getShadow(),
                                }}
                            >
                                PHOTO
                            </div>

                        </div>

                    </div>

                </div>
            )}

            {/* =========================================================
                STYLES
            ========================================================= */}

            <style>{`

                /* =====================================================
                   MAIN
                ===================================================== */

                .photo-settings {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                /* =====================================================
                   TOGGLE
                ===================================================== */

                .photo-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;

                    padding: 15px 16px;
                    margin-bottom: 20px;

                    border: 1px solid #e5e7eb;
                    border-radius: 14px;

                    background: #ffffff;
                    box-sizing: border-box;
                }

                .photo-toggle-content {
                    min-width: 0;
                }

                .photo-toggle strong {
                    display: block;

                    color: #111827;

                    font-size: 14px;
                    font-weight: 700;
                }

                .photo-toggle small {
                    display: block;

                    margin-top: 4px;

                    color: #6b7280;

                    font-size: 11px;
                    line-height: 1.4;
                }

                /* =====================================================
                   SWITCH
                ===================================================== */

                .photo-switch {
                    position: relative;

                    width: 50px;
                    height: 28px;

                    padding: 0;

                    flex-shrink: 0;

                    border: 0;
                    border-radius: 999px;

                    background: #d1d5db;

                    cursor: pointer;

                    transition:
                        background .2s ease,
                        box-shadow .2s ease;
                }

                .photo-switch span {
                    position: absolute;

                    top: 4px;
                    left: 4px;

                    width: 20px;
                    height: 20px;

                    border-radius: 50%;

                    background: #ffffff;

                    box-shadow:
                        0 1px 4px rgba(0, 0, 0, .15);

                    transition:
                        transform .2s ease;
                }

                .photo-switch.active {
                    background: #2563eb;
                }

                .photo-switch.active span {
                    transform: translateX(22px);
                }

                .photo-switch:focus-visible {
                    outline: 3px solid rgba(37, 99, 235, .2);
                    outline-offset: 2px;
                }

                /* =====================================================
                   DISABLED
                ===================================================== */

                .photo-disabled {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    padding: 16px;

                    border: 1px solid #e5e7eb;
                    border-radius: 14px;

                    background: #f8fafc;

                    color: #64748b;
                }

                .photo-disabled-icon {
                    width: 36px;
                    height: 36px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 10px;

                    background: #e2e8f0;

                    color: #64748b;
                }

                .photo-disabled strong {
                    display: block;

                    color: #334155;

                    font-size: 13px;
                }

                .photo-disabled small {
                    display: block;

                    margin-top: 3px;

                    font-size: 11px;
                    line-height: 1.4;
                }

                /* =====================================================
                   SETTING GROUP
                ===================================================== */

                .setting-group {
                    padding: 18px;

                    border: 1px solid #e5e7eb;
                    border-radius: 16px;

                    background: #ffffff;

                    box-sizing: border-box;
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
                    line-height: 1.3;
                }

                .setting-group small {
                    display: block;

                    margin-top: 4px;

                    color: #64748b;

                    font-size: 10.5px;
                    line-height: 1.4;
                }

                .setting-row > strong {
                    flex-shrink: 0;

                    color: #2563eb;

                    font-size: 12px;
                    font-weight: 700;

                    white-space: nowrap;
                }

                /* =====================================================
                   PHOTO SHAPE GRID
                ===================================================== */

                .shape-grid {
                    display: grid;

                    grid-template-columns:
                        repeat(4, minmax(0, 1fr));

                    gap: 9px;

                    margin-top: 15px;
                }

                /* =====================================================
                   SHAPE CARD

                   Important:
                   Fixed layout prevents the preview from
                   changing shape because of flex sizing.
                ===================================================== */

                .shape-card {
                    min-width: 0;
                    height: 82px;

                    padding: 8px 5px;

                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    justify-content: center;

                    gap: 7px;

                    border: 1px solid #e5e7eb;
                    border-radius: 12px;

                    background: #ffffff;

                    color: #334155;

                    cursor: pointer;

                    box-sizing: border-box;

                    transition:
                        border-color .18s ease,
                        background .18s ease,
                        box-shadow .18s ease,
                        transform .18s ease;
                }

                .shape-card:hover {
                    border-color: #93c5fd;

                    background: #f8fbff;

                    transform: translateY(-1px);
                }

                .shape-card.active {
                    border: 2px solid #2563eb;

                    background: #eff6ff;

                    box-shadow:
                        0 0 0 1px rgba(37, 99, 235, .04);
                }

                .shape-card:focus-visible {
                    outline: 3px solid rgba(37, 99, 235, .18);
                    outline-offset: 1px;
                }

                /* =====================================================
                   SHAPE PREVIEW

                   NO fixed border-radius here.
                   The React inline style controls every shape.
                ===================================================== */

                .shape-preview {
                    display: block;

                    position: relative;

                    flex: 0 0 auto;

                    background: #cbd5e1;

                    box-sizing: border-box;

                    transition:
                        transform .18s ease,
                        border-radius .18s ease;
                }

                .shape-card:hover .shape-preview {
                    transform: scale(1.03);
                }

                /* =====================================================
                   LABEL
                ===================================================== */

                .shape-label {
                    display: block;

                    width: 100%;
                    min-width: 0;

                    overflow: hidden;

                    text-align: center;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    color: #334155;

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

                    margin-top: 17px;

                    accent-color: #2563eb;

                    cursor: pointer;
                }

                .range-labels {
                    display: flex;
                    align-items: center;
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

                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));

                    gap: 8px;

                    margin-top: 14px;
                }

                .mini-option {
                    min-width: 0;

                    padding: 9px 5px;

                    border: 1px solid #e2e8f0;
                    border-radius: 9px;

                    background: #ffffff;

                    color: #475569;

                    font-size: 10px;
                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        border-color .18s ease,
                        background .18s ease,
                        color .18s ease;
                }

                .mini-option:hover {
                    border-color: #93c5fd;
                }

                .mini-option.active {
                    border-color: #2563eb;

                    background: #eff6ff;

                    color: #2563eb;
                }

                /* =====================================================
                   COLOR
                ===================================================== */

                .color-control {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 12px;

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

                    grid-template-columns:
                        repeat(2, minmax(0, 1fr));

                    gap: 10px;

                    margin-top: 15px;
                }

                .fit-card {
                    min-width: 0;

                    display: flex;
                    align-items: center;

                    gap: 10px;

                    padding: 12px;

                    border: 1px solid #e5e7eb;
                    border-radius: 11px;

                    background: #ffffff;

                    text-align: left;

                    cursor: pointer;

                    transition:
                        border-color .18s ease,
                        background .18s ease;
                }

                .fit-card:hover {
                    border-color: #93c5fd;
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

                    flex-shrink: 0;

                    border-radius: 9px;

                    background: #f1f5f9;

                    color: #475569;

                    font-size: 17px;
                }

                .fit-card strong {
                    display: block;

                    color: #334155;

                    font-size: 11px;
                }

                .fit-card small {
                    display: block;

                    margin-top: 3px;

                    font-size: 9px;
                }



                /* =====================================================
   IMAGE POSITION
===================================================== */

.position-control {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid #f1f5f9;
}

.position-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.position-heading h4 {
    margin: 0;
    color: #111827;
    font-size: 13px;
    font-weight: 700;
}

.position-heading small {
    display: block;
    margin-top: 4px;
    color: #64748b;
    font-size: 10.5px;
    line-height: 1.4;
}


/* =====================================================
   POSITION GRID
===================================================== */

.position-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 14px;
}


/* =====================================================
   POSITION CARD
===================================================== */

.position-card {
    min-height: 66px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 6px;

    padding: 8px 5px;

    border: 1px solid #e5e7eb;
    border-radius: 10px;

    background: #ffffff;

    cursor: pointer;

    transition:
        border-color .2s ease,
        background .2s ease,
        transform .2s ease;
}

.position-card:hover {
    border-color: #93c5fd;
    transform: translateY(-1px);
}

.position-card.active {
    border: 2px solid #2563eb;
    background: #eff6ff;
}


/* =====================================================
   POSITION PREVIEW
===================================================== */

.position-preview {
    position: relative;

    width: 38px;
    height: 30px;

    overflow: hidden;

    border-radius: 6px;

    background: #e2e8f0;

    display: block;
}


/*
   Fake image inside the frame.
   The white/light shape represents
   the visible subject position.
*/

.position-preview span {
    position: absolute;

    width: 18px;
    height: 25px;

    border-radius: 50%;

    background: #94a3b8;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    transition: .2s ease;
}


/* =====================================================
   CENTER
===================================================== */

.position-center span {
    left: 50%;
    top: 50%;
}


/* =====================================================
   TOP
===================================================== */

.position-top span {
    left: 50%;
    top: 20%;
}


/* =====================================================
   BOTTOM
===================================================== */

.position-bottom span {
    left: 50%;
    top: 80%;
}


/* =====================================================
   LEFT
===================================================== */

.position-left span {
    left: 20%;
    top: 50%;
}


/* =====================================================
   RIGHT
===================================================== */

.position-right span {
    left: 80%;
    top: 50%;
}


/* =====================================================
   TOP LEFT
===================================================== */

.position-top-left span {
    left: 20%;
    top: 20%;
}


/* =====================================================
   TOP RIGHT
===================================================== */

.position-top-right span {
    left: 80%;
    top: 20%;
}


/* =====================================================
   BOTTOM LEFT
===================================================== */

.position-bottom-left span {
    left: 20%;
    top: 80%;
}


/* =====================================================
   BOTTOM RIGHT
===================================================== */

.position-bottom-right span {
    left: 80%;
    top: 80%;
}


/* =====================================================
   LABEL
===================================================== */

.position-label {
    color: #475569;

    font-size: 9px;
    font-weight: 600;

    line-height: 1.1;

    text-align: center;
}

.position-card.active .position-label {
    color: #2563eb;
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 500px) {

    .position-grid {
        grid-template-columns: repeat(3, 1fr);
    }

}

                /* =====================================================
                   SHADOW
                ===================================================== */

                .shadow-grid {
                    display: grid;

                    grid-template-columns:
                        repeat(4, minmax(0, 1fr));

                    gap: 8px;

                    margin-top: 15px;
                }

                .shadow-card {
                    min-width: 0;

                    min-height: 72px;

                    padding: 8px 5px;

                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    justify-content: center;

                    gap: 7px;

                    border: 1px solid #e5e7eb;
                    border-radius: 11px;

                    background: #ffffff;

                    color: #475569;

                    font-size: 9px;
                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        border-color .18s ease,
                        background .18s ease;
                }

                .shadow-card:hover {
                    border-color: #93c5fd;
                }

                .shadow-card.active {
                    border-color: #2563eb;

                    background: #eff6ff;

                    color: #2563eb;
                }

                .shadow-preview {
                    width: 28px;
                    height: 28px;

                    display: block;

                    border-radius: 50%;

                    background: #cbd5e1;
                }

                .shadow-preview.none {
                    box-shadow: none;
                }

                .shadow-preview.soft {
                    box-shadow:
                        0 4px 10px rgba(15, 23, 42, .15);
                }

                .shadow-preview.medium {
                    box-shadow:
                        0 7px 16px rgba(15, 23, 42, .22);
                }

                .shadow-preview.strong {
                    box-shadow:
                        0 10px 22px rgba(15, 23, 42, .32);
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

                .preview-title strong {
                    display: block;

                    color: #111827;

                    font-size: 12px;
                    font-weight: 700;
                }

                .preview-title small {
                    display: block;

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

                    overflow: hidden;
                }

                .preview-image {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

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

                    transition:
                        width .2s ease,
                        height .2s ease,
                        border-radius .2s ease,
                        transform .2s ease,
                        box-shadow .2s ease,
                        opacity .2s ease;
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 500px) {

                    .shape-grid {
                        grid-template-columns:
                            repeat(2, minmax(0, 1fr));
                    }

                    .shadow-grid {
                        grid-template-columns:
                            repeat(2, minmax(0, 1fr));
                    }

                    .fit-grid {
                        grid-template-columns: 1fr;
                    }

                }

                @media (max-width: 360px) {

                    .shape-grid {
                        gap: 7px;
                    }

                    .shape-card {
                        height: 78px;
                    }

                    .setting-group {
                        padding: 14px;
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