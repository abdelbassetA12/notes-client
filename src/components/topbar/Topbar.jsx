 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Topbar() {
    const navigate = useNavigate();
    const [saved, setSaved] = useState(true);

    return (
        <header className="topbar">

            {/* LEFT */}
            <div className="topbar__left">

                <button
                    className="back-btn"
                    onClick={() => navigate(-1)}
                    title="Back to CVs"
                >
                    <span className="back-icon">←</span>
                    <span className="back-text">Back</span>
                </button>

                <div className="divider" />

                <div className="resume-info">
                    <h2>Untitled Resume</h2>

                    <div className="save-status">
                        <span className={`status-dot ${saved ? "saved" : ""}`} />
                        {saved ? "Saved" : "Unsaved changes"}
                    </div>
                </div>

            </div>

            {/* CENTER */}
            <div className="topbar__center">

                <button
                    className="icon-btn"
                    title="Undo"
                    aria-label="Undo"
                >
                    ↶
                </button>

                <button
                    className="icon-btn"
                    title="Redo"
                    aria-label="Redo"
                >
                    ↷
                </button>

            </div>

            {/* RIGHT */}
            <div className="topbar__right">

                <button className="preview-btn">
                    <span>◉</span>
                    <span className="desktop-text">Preview</span>
                </button>

                <button className="download-btn">
                    <span>↓</span>
                    <span>Download</span>
                </button>

                <button className="more-btn" aria-label="More options">
                    ⋮
                </button>

            </div>

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .topbar {
                    height: 68px;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.96);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 0 22px;

                    border-bottom: 1px solid #e5e7eb;

                    position: relative;
                    z-index: 100;

                    font-family:
                        Inter,
                        ui-sans-serif,
                        system-ui,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        sans-serif;
                }

                /* LEFT */

                .topbar__left {
                    display: flex;
                    align-items: center;
                    min-width: 0;
                    flex: 1;
                }

                .back-btn {
                    height: 38px;
                    padding: 0 11px;

                    display: flex;
                    align-items: center;
                    gap: 7px;

                    border: 0;
                    background: transparent;
                    border-radius: 8px;

                    color: #374151;

                    font-size: 14px;
                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        background .18s ease,
                        color .18s ease;
                }

                .back-btn:hover {
                    background: #f3f4f6;
                    color: #111827;
                }

                .back-icon {
                    font-size: 20px;
                    line-height: 1;
                }

                .back-text {
                    font-size: 14px;
                }

                .divider {
                    width: 1px;
                    height: 28px;
                    background: #e5e7eb;
                    margin: 0 17px;
                }

                .resume-info {
                    min-width: 0;
                }

                .resume-info h2 {
                    margin: 0;

                    color: #111827;

                    font-size: 14px;
                    font-weight: 650;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .save-status {
                    display: flex;
                    align-items: center;
                    gap: 6px;

                    margin-top: 3px;

                    color: #9ca3af;

                    font-size: 11px;
                    font-weight: 500;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;

                    border-radius: 50%;

                    background: #f59e0b;
                }

                .status-dot.saved {
                    background: #22c55e;
                }

                /* CENTER */

                .topbar__center {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);

                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .icon-btn {
                    width: 38px;
                    height: 38px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;
                    border-radius: 8px;

                    background: transparent;

                    color: #4b5563;

                    font-size: 23px;
                    font-weight: 400;

                    cursor: pointer;

                    transition:
                        background .18s ease,
                        color .18s ease;
                }

                .icon-btn:hover {
                    background: #f3f4f6;
                    color: #111827;
                }

                .icon-btn:active {
                    transform: scale(.94);
                }

                /* RIGHT */

                .topbar__right {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 8px;

                    flex: 1;
                }

                .preview-btn,
                .download-btn,
                .more-btn {
                    height: 38px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    font-size: 13px;
                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        transform .12s ease;
                }

                .preview-btn {
                    gap: 7px;

                    padding: 0 12px;

                    background: #fff;
                    color: #374151;

                    border: 1px solid #e5e7eb;
                }

                .preview-btn:hover {
                    background: #f9fafb;
                    border-color: #d1d5db;
                }

                .download-btn {
                    gap: 8px;

                    padding: 0 15px;

                    background: #111827;
                    color: white;

                    border: 1px solid #111827;

                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .08);
                }

                .download-btn:hover {
                    background: #1f2937;
                    border-color: #1f2937;
                }

                .download-btn:active,
                .preview-btn:active {
                    transform: translateY(1px);
                }

                .more-btn {
                    width: 36px;

                    background: transparent;
                    border: 0;

                    color: #6b7280;

                    font-size: 22px;
                }

                .more-btn:hover {
                    background: #f3f4f6;
                    color: #111827;
                }

                /* TABLET */

                @media (max-width: 800px) {

                    .topbar {
                        padding: 0 14px;
                    }

                    .divider {
                        margin: 0 11px;
                    }

                    .topbar__center {
                        position: static;
                        transform: none;
                        margin-left: auto;
                        margin-right: 8px;
                    }

                    .topbar__right {
                        flex: 0;
                    }

                    .preview-btn {
                        display: none;
                    }

                    .desktop-text {
                        display: none;
                    }

                }

                /* MOBILE */

                @media (max-width: 520px) {

                    .topbar {
                        height: 62px;
                        padding: 0 10px;
                    }

                    .back-btn {
                        padding: 0 8px;
                    }

                    .back-text {
                        display: none;
                    }

                    .divider {
                        margin: 0 9px;
                        height: 24px;
                    }

                    .resume-info h2 {
                        max-width: 125px;
                        font-size: 13px;
                    }

                    .save-status {
                        font-size: 10px;
                    }

                    .topbar__center {
                        gap: 1px;
                        margin-right: 3px;
                    }

                    .icon-btn {
                        width: 34px;
                        height: 34px;
                    }

                    .download-btn {
                        width: 38px;
                        padding: 0;
                        font-size: 18px;
                    }

                    .download-btn span:last-child {
                        display: none;
                    }

                    .more-btn {
                        width: 30px;
                    }

                }

            `}</style>

        </header>
    );
}
 
