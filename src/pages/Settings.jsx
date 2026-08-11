import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    FiUser,
    FiLock,
    FiMoon,
    FiSun,
    FiMonitor,
    FiCheck,
    FiChevronRight,
    FiShield,
    FiTrash2,
    FiSave,
    FiEye,
    FiEyeOff,
    FiType,
    FiLayout,
    FiZap,
    FiAlertTriangle
} from "react-icons/fi";

import API_BASE from "../config/api";
import { useAuth } from "../context/AuthContext";

 

export default function Settings() {
    const { user, setUser } = useAuth();

    const [activeSection, setActiveSection] = useState("appearance");

    const [form, setForm] = useState({
        username: user?.username || "",
        fullName: user?.fullName || "",
        bio: user?.bio || "",
        theme: user?.theme || "theme1"
    });

    const [passwords, setPasswords] = useState({
        current: "",
        new: ""
    });

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) return;

        setForm({
            username: user.username || "",
            fullName: user.fullName || "",
            bio: user.bio || "",
            theme: user.theme || "theme1"
        });
    }, [user]);

    const passwordStrength = useMemo(() => {
        const password = passwords.new;

        if (!password) {
            return {
                label: "",
                value: 0
            };
        }

        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (score <= 1) {
            return {
                label: "Weak",
                value: 25
            };
        }

        if (score === 2) {
            return {
                label: "Fair",
                value: 50
            };
        }

        if (score === 3) {
            return {
                label: "Good",
                value: 75
            };
        }

        return {
            label: "Strong",
            value: 100
        };
    }, [passwords.new]);

    const updateForm = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }));

        setSaved(false);
        setError("");
    };

    const saveProfile = async () => {
        setSaving(true);
        setSaved(false);
        setError("");

        try {
            const res = await axios.post(
                `${API_BASE}/api/profile/update`,
                {
                    oldUsername: user?.username,
                    newUsername: form.username,
                    fullName: form.fullName,
                    bio: form.bio,
                    theme: form.theme
                },
                {
                    withCredentials: true
                }
            );

            setUser(res.data);

            setSaved(true);

            setTimeout(() => {
                setSaved(false);
            }, 3000);
        } catch (err) {
            setError(
                err?.response?.data?.error ||
                "Unable to save your changes."
            );
        } finally {
            setSaving(false);
        }
    };

    const changePassword = async () => {
        if (!passwords.current || !passwords.new) {
            setError("Please enter both passwords.");
            return;
        }

        if (passwords.new.length < 8) {
            setError("Your new password must contain at least 8 characters.");
            return;
        }

        try {
            setError("");

            await axios.post(
                `${API_BASE}/api/auth/change-password`,
                {
                    current: passwords.current,
                    new: passwords.new
                },
                {
                    withCredentials: true
                }
            );

            setPasswords({
                current: "",
                new: ""
            });

            setSaved(true);

            setTimeout(() => {
                setSaved(false);
            }, 3000);
        } catch (err) {
            setError(
                err?.response?.data?.error ||
                "Unable to update your password."
            );
        }
    };

    const deleteAccount = async () => {
        const firstConfirm = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (!firstConfirm) return;

        const secondConfirm = window.confirm(
            "This action is permanent. All your data may be lost. Continue?"
        );

        if (!secondConfirm) return;

        try {
            await axios.delete(
                `${API_BASE}/api/auth/delete-account`,
                {
                    withCredentials: true
                }
            );

            setUser(null);
            window.location.href = "/login";
        } catch (err) {
            alert(
                err?.response?.data?.error ||
                "Unable to delete your account."
            );
        }
    };

    const sections = [
        {
            id: "appearance",
            label: "Appearance",
            description: "Customize your workspace",
            icon: FiLayout
        },
        {
            id: "profile",
            label: "Profile",
            description: "Manage your personal information",
            icon: FiUser
        },
        {
            id: "security",
            label: "Security",
            description: "Password and account security",
            icon: FiShield
        },
        {
            id: "danger",
            label: "Danger Zone",
            description: "Permanent account actions",
            icon: FiTrash2
        }
    ];

    const themes = [
        {
            id: "theme1",
            name: "Default",
            description: "Clean and balanced",
            icon: FiSun,
            previewClass: "theme-preview-light"
        },
        {
            id: "dark",
            name: "Dark",
            description: "Easy on your eyes",
            icon: FiMoon,
            previewClass: "theme-preview-dark"
        },
        {
            id: "minimal",
            name: "Minimal",
            description: "Simple and focused",
            icon: FiMonitor,
            previewClass: "theme-preview-minimal"
        }
    ];

    return (
        <div className="settings-page">

            <div className="settings-container">

                {/* HEADER */}
                <header className="settings-header">

                    <div>
                        <div className="settings-eyebrow">
                            <FiZap size={14} />
                            Workspace
                        </div>

                        <h1>Settings</h1>

                        <p>
                            Personalize your experience and manage
                            your account preferences.
                        </p>
                    </div>

                    <div className="settings-user">

                        <div className="settings-avatar">
                            {(
                                user?.fullName ||
                                user?.username ||
                                "U"
                            )
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        <div>
                            <strong>
                                {user?.fullName ||
                                    user?.username ||
                                    "User"}
                            </strong>

                            <span>
                                @{user?.username || "user"}
                            </span>
                        </div>

                    </div>

                </header>

                {/* MAIN */}
                <div className="settings-layout">

                    {/* SIDEBAR */}
                    <aside className="settings-sidebar">

                        <div className="sidebar-label">
                            SETTINGS
                        </div>

                        <nav>
                            {sections.map((section) => {
                                const Icon = section.icon;

                                return (
                                    <button
                                        key={section.id}
                                        className={
                                            activeSection === section.id
                                                ? "settings-nav-item active"
                                                : "settings-nav-item"
                                        }
                                        onClick={() =>
                                            setActiveSection(section.id)
                                        }
                                    >
                                        <span className="nav-icon">
                                            <Icon size={18} />
                                        </span>

                                        <span className="nav-content">
                                            <strong>
                                                {section.label}
                                            </strong>

                                            <small>
                                                {section.description}
                                            </small>
                                        </span>

                                        <FiChevronRight
                                            className="nav-arrow"
                                            size={16}
                                        />
                                    </button>
                                );
                            })}
                        </nav>

                        <div className="sidebar-footer">
                            <FiShield size={15} />
                            <span>
                                Your settings are saved securely.
                            </span>
                        </div>

                    </aside>

                    {/* CONTENT */}
                    <main className="settings-content">

                        {/* GLOBAL STATUS */}
                        {(saved || error) && (
                            <div
                                className={
                                    error
                                        ? "settings-alert error"
                                        : "settings-alert success"
                                }
                            >
                                {error ? (
                                    <>
                                        <FiAlertTriangle />
                                        <span>{error}</span>
                                    </>
                                ) : (
                                    <>
                                        <FiCheck />
                                        <span>
                                            Your changes have been saved.
                                        </span>
                                    </>
                                )}
                            </div>
                        )}

                        {/* APPEARANCE */}
                        {activeSection === "appearance" && (
                            <section className="settings-section">

                                <div className="section-heading">
                                    <div>
                                        <span className="section-kicker">
                                            PERSONALIZATION
                                        </span>

                                        <h2>
                                            Appearance
                                        </h2>

                                        <p>
                                            Make the workspace feel
                                            like yours.
                                        </p>
                                    </div>

                                    <div className="heading-icon">
                                        <FiLayout />
                                    </div>
                                </div>

                                <div className="settings-card">

                                    <div className="card-title-row">
                                        <div>
                                            <h3>
                                                Workspace theme
                                            </h3>

                                            <p>
                                                Choose how your workspace
                                                looks and feels.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="theme-grid">

                                        {themes.map((theme) => {
                                            const Icon = theme.icon;

                                            const selected =
                                                form.theme === theme.id;

                                            return (
                                                <button
                                                    type="button"
                                                    key={theme.id}
                                                    className={
                                                        selected
                                                            ? "theme-card selected"
                                                            : "theme-card"
                                                    }
                                                    onClick={() =>
                                                        updateForm(
                                                            "theme",
                                                            theme.id
                                                        )
                                                    }
                                                >

                                                    <div
                                                        className={`theme-preview ${theme.previewClass}`}
                                                    >
                                                        <div className="preview-top">
                                                            <span />
                                                            <span />
                                                            <span />
                                                        </div>

                                                        <div className="preview-body">
                                                            <div className="preview-sidebar" />

                                                            <div className="preview-content">
                                                                <div />
                                                                <div />
                                                                <div />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="theme-info">

                                                        <span className="theme-icon">
                                                            <Icon size={16} />
                                                        </span>

                                                        <span>
                                                            <strong>
                                                                {theme.name}
                                                            </strong>

                                                            <small>
                                                                {theme.description}
                                                            </small>
                                                        </span>

                                                        <span
                                                            className={
                                                                selected
                                                                    ? "theme-check selected"
                                                                    : "theme-check"
                                                            }
                                                        >
                                                            {selected && (
                                                                <FiCheck
                                                                    size={13}
                                                                />
                                                            )}
                                                        </span>

                                                    </div>

                                                </button>
                                            );
                                        })}

                                    </div>

                                </div>

                                <div className="settings-card">

                                    <div className="card-title-row">

                                        <div>
                                            <h3>
                                                Interface preferences
                                            </h3>

                                            <p>
                                                These options help control
                                                how your workspace feels.
                                            </p>
                                        </div>

                                        <FiType className="card-title-icon" />

                                    </div>

                                    <div className="preference-row">

                                        <div className="preference-icon">
                                            <FiZap />
                                        </div>

                                        <div className="preference-text">
                                            <strong>
                                                Focused workspace
                                            </strong>

                                            <span>
                                                Keep the interface clean
                                                and distraction-free.
                                            </span>
                                        </div>

                                        <div className="preference-badge">
                                            Active
                                        </div>

                                    </div>

                                    <div className="preference-row">

                                        <div className="preference-icon">
                                            <FiLayout />
                                        </div>

                                        <div className="preference-text">
                                            <strong>
                                                Responsive layout
                                            </strong>

                                            <span>
                                                Your workspace automatically
                                                adapts to your screen.
                                            </span>
                                        </div>

                                        <div className="preference-badge">
                                            Automatic
                                        </div>

                                    </div>

                                </div>

                                <div className="save-area">

                                    <button
                                        className="primary-button"
                                        onClick={saveProfile}
                                        disabled={saving}
                                    >
                                        {saving ? (
                                            <>
                                                <span className="spinner" />
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <FiSave size={17} />
                                                Save appearance
                                            </>
                                        )}
                                    </button>

                                </div>

                            </section>
                        )}

                        {/* PROFILE */}
                        {activeSection === "profile" && (
                            <section className="settings-section">

                                <div className="section-heading">

                                    <div>
                                        <span className="section-kicker">
                                            ACCOUNT
                                        </span>

                                        <h2>
                                            Your profile
                                        </h2>

                                        <p>
                                            Manage the information
                                            displayed on your account.
                                        </p>
                                    </div>

                                    <div className="heading-icon">
                                        <FiUser />
                                    </div>

                                </div>

                                <div className="settings-card">

                                    <div className="profile-cover">

                                        <div className="large-avatar">
                                            {(
                                                user?.fullName ||
                                                user?.username ||
                                                "U"
                                            )
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div>
                                            <strong>
                                                {user?.fullName ||
                                                    user?.username ||
                                                    "Your profile"}
                                            </strong>

                                            <span>
                                                @{user?.username ||
                                                    "username"}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="form-grid">

                                        <div className="form-field">

                                            <label>
                                                Username
                                            </label>

                                            <input
                                                value={form.username}
                                                onChange={(e) =>
                                                    updateForm(
                                                        "username",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="yourusername"
                                            />

                                            <small>
                                                This identifies your
                                                public profile.
                                            </small>

                                        </div>

                                        <div className="form-field">

                                            <label>
                                                Full name
                                            </label>

                                            <input
                                                value={form.fullName}
                                                onChange={(e) =>
                                                    updateForm(
                                                        "fullName",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Your full name"
                                            />

                                        </div>

                                        <div className="form-field full">

                                            <label>
                                                Bio
                                            </label>

                                            <textarea
                                                value={form.bio}
                                                onChange={(e) =>
                                                    updateForm(
                                                        "bio",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Tell people a little about yourself..."
                                                rows={5}
                                                maxLength={180}
                                            />

                                            <div className="textarea-footer">
                                                <span>
                                                    A short introduction
                                                </span>

                                                <span>
                                                    {form.bio.length}/180
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="save-area">

                                    <button
                                        className="primary-button"
                                        onClick={saveProfile}
                                        disabled={saving}
                                    >
                                        {saving ? (
                                            <>
                                                <span className="spinner" />
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <FiSave size={17} />
                                                Save profile
                                            </>
                                        )}
                                    </button>

                                </div>

                            </section>
                        )}

                        {/* SECURITY */}
                        {activeSection === "security" && (
                            <section className="settings-section">

                                <div className="section-heading">

                                    <div>
                                        <span className="section-kicker">
                                            SECURITY
                                        </span>

                                        <h2>
                                            Account security
                                        </h2>

                                        <p>
                                            Keep your account protected
                                            with a strong password.
                                        </p>
                                    </div>

                                    <div className="heading-icon">
                                        <FiLock />
                                    </div>

                                </div>

                                <div className="security-banner">

                                    <div className="security-banner-icon">
                                        <FiShield />
                                    </div>

                                    <div>
                                        <strong>
                                            Protect your account
                                        </strong>

                                        <p>
                                            Use a unique password that
                                            you don't use elsewhere.
                                        </p>
                                    </div>

                                </div>

                                <div className="settings-card">

                                    <div className="form-field">

                                        <label>
                                            Current password
                                        </label>

                                        <div className="password-input">

                                            <input
                                                type={
                                                    showCurrentPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={passwords.current}
                                                onChange={(e) =>
                                                    setPasswords({
                                                        ...passwords,
                                                        current:
                                                            e.target.value
                                                    })
                                                }
                                                placeholder="Enter current password"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowCurrentPassword(
                                                        !showCurrentPassword
                                                    )
                                                }
                                            >
                                                {showCurrentPassword ? (
                                                    <FiEyeOff />
                                                ) : (
                                                    <FiEye />
                                                )}
                                            </button>

                                        </div>

                                    </div>

                                    <div className="form-field">

                                        <label>
                                            New password
                                        </label>

                                        <div className="password-input">

                                            <input
                                                type={
                                                    showNewPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={passwords.new}
                                                onChange={(e) =>
                                                    setPasswords({
                                                        ...passwords,
                                                        new: e.target.value
                                                    })
                                                }
                                                placeholder="Create a strong password"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowNewPassword(
                                                        !showNewPassword
                                                    )
                                                }
                                            >
                                                {showNewPassword ? (
                                                    <FiEyeOff />
                                                ) : (
                                                    <FiEye />
                                                )}
                                            </button>

                                        </div>

                                        {passwords.new && (
                                            <div className="password-strength">

                                                <div className="strength-track">
                                                    <div
                                                        className="strength-value"
                                                        style={{
                                                            width: `${passwordStrength.value}%`
                                                        }}
                                                    />
                                                </div>

                                                <span>
                                                    {passwordStrength.label}
                                                </span>

                                            </div>
                                        )}

                                    </div>

                                    <div className="password-rules">

                                        <div>
                                            <FiCheck />
                                            At least 8 characters
                                        </div>

                                        <div>
                                            <FiCheck />
                                            Mix uppercase and lowercase
                                        </div>

                                        <div>
                                            <FiCheck />
                                            Include a number or symbol
                                        </div>

                                    </div>

                                </div>

                                <div className="save-area">

                                    <button
                                        className="primary-button"
                                        onClick={changePassword}
                                    >
                                        <FiLock size={17} />
                                        Update password
                                    </button>

                                </div>

                            </section>
                        )}

                        {/* DANGER */}
                        {activeSection === "danger" && (
                            <section className="settings-section">

                                <div className="section-heading">

                                    <div>
                                        <span className="section-kicker danger-kicker">
                                            ACCOUNT ACTIONS
                                        </span>

                                        <h2>
                                            Danger zone
                                        </h2>

                                        <p>
                                            Permanent actions that affect
                                            your account.
                                        </p>
                                    </div>

                                    <div className="heading-icon danger-icon">
                                        <FiTrash2 />
                                    </div>

                                </div>

                                <div className="danger-card">

                                    <div className="danger-card-header">

                                        <div className="danger-symbol">
                                            <FiAlertTriangle />
                                        </div>

                                        <div>
                                            <h3>
                                                Delete your account
                                            </h3>

                                            <p>
                                                Permanently remove your
                                                account and associated data.
                                                This action cannot be undone.
                                            </p>
                                        </div>

                                    </div>

                                    <div className="danger-divider" />

                                    <div className="danger-action">

                                        <div>
                                            <strong>
                                                Permanently delete account
                                            </strong>

                                            <span>
                                                You will be signed out
                                                immediately.
                                            </span>
                                        </div>

                                        <button
                                            className="danger-button"
                                            onClick={deleteAccount}
                                        >
                                            <FiTrash2 size={16} />
                                            Delete account
                                        </button>

                                    </div>

                                </div>

                            </section>
                        )}

                    </main>

                </div>

            </div>
            <style>
              {`
              .settings-page {
    min-height: 100vh;
    background:
        radial-gradient(
            circle at 0% 0%,
            rgba(99, 102, 241, 0.07),
            transparent 32%
        ),
        #f8fafc;
    color: #0f172a;
    padding: 42px 28px 70px;
    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}

.settings-container {
    width: min(1180px, 100%);
    margin: 0 auto;
}

/* =========================
   HEADER
========================= */

.settings-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 32px;
}

.settings-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #6366f1;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.settings-header h1 {
    margin: 0;
    font-size: clamp(30px, 4vw, 42px);
    line-height: 1.05;
    letter-spacing: -0.04em;
    font-weight: 800;
    color: #0f172a;
}

.settings-header p {
    margin: 10px 0 0;
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
}

.settings-user {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid #e2e8f0;
    padding: 9px 14px 9px 9px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);
}

.settings-user > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.settings-user strong {
    font-size: 13px;
    color: #0f172a;
}

.settings-user span {
    font-size: 12px;
    color: #94a3b8;
}

.settings-avatar,
.large-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        135deg,
        #6366f1,
        #4f46e5
    );
    color: #fff;
    font-weight: 800;
    box-shadow:
        0 8px 20px rgba(79, 70, 229, 0.22);
}

.settings-avatar {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-size: 14px;
}

/* =========================
   LAYOUT
========================= */

.settings-layout {
    display: grid;
    grid-template-columns: 270px minmax(0, 1fr);
    gap: 24px;
    align-items: start;
}

/* =========================
   SIDEBAR
========================= */

.settings-sidebar {
    position: sticky;
    top: 24px;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid #e2e8f0;
    border-radius: 22px;
    padding: 14px;
    box-shadow:
        0 10px 35px rgba(15, 23, 42, 0.045);
}

.sidebar-label {
    padding: 10px 12px 9px;
    color: #94a3b8;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
}

.settings-sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.settings-nav-item {
    width: 100%;
    border: 0;
    background: transparent;
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr) 16px;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 14px;
    text-align: left;
    cursor: pointer;
    color: #64748b;
    transition:
        background 0.2s ease,
        transform 0.2s ease,
        color 0.2s ease;
}

.settings-nav-item:hover {
    background: #f8fafc;
}

.settings-nav-item.active {
    background: #f0efff;
    color: #4f46e5;
}

.nav-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    background: #f8fafc;
    color: #64748b;
}

.settings-nav-item.active .nav-icon {
    background: #fff;
    color: #4f46e5;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.08);
}

.nav-content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.nav-content strong {
    font-size: 13px;
    font-weight: 700;
    color: inherit;
}

.nav-content small {
    font-size: 10px;
    color: #94a3b8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.nav-arrow {
    opacity: 0;
    transition: 0.2s ease;
}

.settings-nav-item:hover .nav-arrow,
.settings-nav-item.active .nav-arrow {
    opacity: 1;
}

.sidebar-footer {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin: 14px 5px 2px;
    padding: 13px 10px 3px;
    border-top: 1px solid #eef2f7;
    color: #94a3b8;
    font-size: 10px;
    line-height: 1.5;
}

/* =========================
   CONTENT
========================= */

.settings-content {
    min-width: 0;
}

.settings-section {
    animation: settingsFade 0.25s ease;
}

@keyframes settingsFade {
    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin: 5px 4px 20px;
}

.section-kicker {
    display: block;
    color: #6366f1;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
}

.section-heading h2 {
    margin: 0;
    font-size: 24px;
    letter-spacing: -0.025em;
    color: #0f172a;
}

.section-heading p {
    margin: 7px 0 0;
    color: #64748b;
    font-size: 13px;
    line-height: 1.5;
}

.heading-icon {
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: #4f46e5;
    background: #eeecff;
    border: 1px solid #e2e0ff;
}

/* =========================
   ALERTS
========================= */

.settings-alert {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 12px 14px;
    border-radius: 13px;
    margin-bottom: 16px;
    font-size: 13px;
    font-weight: 600;
}

.settings-alert.success {
    color: #047857;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
}

.settings-alert.error {
    color: #b91c1c;
    background: #fef2f2;
    border: 1px solid #fecaca;
}

/* =========================
   CARDS
========================= */

.settings-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 23px;
    margin-bottom: 16px;
    box-shadow:
        0 8px 28px rgba(15, 23, 42, 0.035);
}

.card-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
}

.card-title-row h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 750;
    color: #0f172a;
}

.card-title-row p {
    margin: 5px 0 0;
    color: #64748b;
    font-size: 12px;
    line-height: 1.5;
}

.card-title-icon {
    color: #94a3b8;
}

/* =========================
   THEMES
========================= */

.theme-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

.theme-card {
    border: 1px solid #e2e8f0;
    background: #fff;
    border-radius: 16px;
    padding: 8px;
    cursor: pointer;
    text-align: left;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

.theme-card:hover {
    transform: translateY(-2px);
    border-color: #c7d2fe;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
}

.theme-card.selected {
    border-color: #6366f1;
    box-shadow:
        0 0 0 3px rgba(99, 102, 241, 0.1),
        0 10px 25px rgba(15, 23, 42, 0.06);
}

.theme-preview {
    height: 112px;
    border-radius: 11px;
    overflow: hidden;
    padding: 8px;
    border: 1px solid rgba(148, 163, 184, 0.18);
}

.theme-preview-light {
    background: #f8fafc;
}

.theme-preview-dark {
    background: #111827;
}

.theme-preview-minimal {
    background: #fff;
}

.preview-top {
    height: 9px;
    display: flex;
    align-items: center;
    gap: 3px;
    margin-bottom: 8px;
}

.preview-top span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #cbd5e1;
}

.theme-preview-dark .preview-top span {
    background: #475569;
}

.preview-body {
    height: 77px;
    display: grid;
    grid-template-columns: 23px 1fr;
    gap: 7px;
}

.preview-sidebar {
    border-radius: 5px;
    background: #e2e8f0;
}

.theme-preview-dark .preview-sidebar {
    background: #1f2937;
}

.theme-preview-minimal .preview-sidebar {
    background: #f1f5f9;
}

.preview-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 4px;
}

.preview-content div {
    height: 13px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #e2e8f0;
}

.preview-content div:first-child {
    width: 65%;
    height: 20px;
    background: #eef2ff;
    border-color: #e0e7ff;
}

.theme-preview-dark .preview-content div {
    background: #1f2937;
    border-color: #374151;
}

.theme-preview-dark .preview-content div:first-child {
    background: #312e81;
    border-color: #4338ca;
}

.theme-preview-minimal .preview-content div {
    border-color: #f1f5f9;
}

.theme-info {
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr) 22px;
    align-items: center;
    gap: 8px;
    padding: 10px 5px 5px;
}

.theme-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: #f8fafc;
    color: #64748b;
}

.theme-card.selected .theme-icon {
    color: #4f46e5;
    background: #eef2ff;
}

.theme-info > span:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.theme-info strong {
    font-size: 12px;
    color: #0f172a;
}

.theme-info small {
    color: #94a3b8;
    font-size: 10px;
}

.theme-check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #dbe2ea;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.theme-check.selected {
    border-color: #6366f1;
    background: #6366f1;
}

/* =========================
   PREFERENCES
========================= */

.preference-row {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px 0;
    border-top: 1px solid #f1f5f9;
}

.preference-row:first-of-type {
    border-top: 0;
}

.preference-icon {
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8fafc;
    border-radius: 11px;
    color: #6366f1;
}

.preference-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.preference-text strong {
    font-size: 12px;
}

.preference-text span {
    font-size: 11px;
    color: #94a3b8;
}

.preference-badge {
    font-size: 10px;
    font-weight: 700;
    color: #4f46e5;
    background: #eef2ff;
    padding: 5px 8px;
    border-radius: 7px;
}

/* =========================
   PROFILE
========================= */

.profile-cover {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-bottom: 23px;
    margin-bottom: 23px;
    border-bottom: 1px solid #eef2f7;
}

.large-avatar {
    width: 58px;
    height: 58px;
    border-radius: 17px;
    font-size: 21px;
}

.profile-cover > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.profile-cover strong {
    font-size: 15px;
}

.profile-cover span {
    font-size: 12px;
    color: #94a3b8;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 19px;
}

.form-field {
    min-width: 0;
}

.form-field.full {
    grid-column: 1 / -1;
}

.form-field label {
    display: block;
    margin-bottom: 7px;
    color: #334155;
    font-size: 12px;
    font-weight: 700;
}

.form-field input,
.form-field textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #dbe2ea;
    background: #fff;
    border-radius: 12px;
    padding: 12px 13px;
    outline: none;
    color: #0f172a;
    font: inherit;
    font-size: 13px;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.form-field textarea {
    resize: vertical;
    min-height: 120px;
    line-height: 1.6;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
    color: #c0c8d4;
}

.form-field input:focus,
.form-field textarea:focus {
    border-color: #818cf8;
    box-shadow:
        0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-field > small {
    display: block;
    margin-top: 6px;
    color: #94a3b8;
    font-size: 10px;
}

.textarea-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    color: #94a3b8;
    font-size: 10px;
}

/* =========================
   SECURITY
========================= */

.security-banner {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px;
    border: 1px solid #c7d2fe;
    background: linear-gradient(
        135deg,
        #f5f3ff,
        #eef2ff
    );
    border-radius: 16px;
    margin-bottom: 16px;
}

.security-banner-icon {
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #4f46e5;
    border-radius: 11px;
    box-shadow: 0 5px 15px rgba(79, 70, 229, 0.08);
}

.security-banner strong {
    display: block;
    font-size: 12px;
    margin-bottom: 3px;
}

.security-banner p {
    margin: 0;
    color: #64748b;
    font-size: 11px;
}

.password-input {
    position: relative;
}

.password-input input {
    padding-right: 45px;
}

.password-input button {
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    color: #94a3b8;
    cursor: pointer;
    border-radius: 8px;
}

.password-input button:hover {
    background: #f8fafc;
    color: #475569;
}

.password-strength {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
}

.strength-track {
    flex: 1;
    height: 4px;
    border-radius: 10px;
    overflow: hidden;
    background: #e2e8f0;
}

.strength-value {
    height: 100%;
    background: #6366f1;
    border-radius: inherit;
    transition: width 0.25s ease;
}

.password-strength span {
    min-width: 42px;
    text-align: right;
    color: #64748b;
    font-size: 10px;
    font-weight: 700;
}

.password-rules {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid #f1f5f9;
}

.password-rules div {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
    font-size: 10px;
}

.password-rules svg {
    color: #10b981;
}

/* =========================
   DANGER
========================= */

.danger-kicker {
    color: #dc2626;
}

.danger-icon {
    color: #dc2626;
    background: #fef2f2;
    border-color: #fee2e2;
}

.danger-card {
    background: #fff;
    border: 1px solid #fecaca;
    border-radius: 20px;
    overflow: hidden;
}

.danger-card-header {
    display: flex;
    gap: 14px;
    padding: 22px;
}

.danger-symbol {
    width: 42px;
    height: 42px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: #dc2626;
    background: #fef2f2;
}

.danger-card-header h3 {
    margin: 1px 0 5px;
    font-size: 14px;
}

.danger-card-header p {
    margin: 0;
    color: #64748b;
    font-size: 12px;
    line-height: 1.6;
}

.danger-divider {
    height: 1px;
    background: #fee2e2;
}

.danger-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 19px 22px;
    background: #fffafa;
}

.danger-action > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.danger-action strong {
    font-size: 12px;
}

.danger-action span {
    color: #94a3b8;
    font-size: 10px;
}

.danger-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border: 0;
    border-radius: 11px;
    padding: 10px 14px;
    background: #fff;
    border: 1px solid #fca5a5;
    color: #dc2626;
    font-size: 11px;
    font-weight: 750;
    cursor: pointer;
    transition: 0.2s ease;
}

.danger-button:hover {
    background: #fef2f2;
    border-color: #ef4444;
}

/* =========================
   SAVE
========================= */

.save-area {
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;
}

.primary-button {
    min-height: 43px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 17px;
    border: 0;
    border-radius: 11px;
    background: linear-gradient(
        135deg,
        #6366f1,
        #4f46e5
    );
    color: #fff;
    font-size: 12px;
    font-weight: 750;
    cursor: pointer;
    box-shadow:
        0 8px 20px rgba(79, 70, 229, 0.2);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        opacity 0.2s ease;
}

.primary-button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
        0 11px 25px rgba(79, 70, 229, 0.25);
}

.primary-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.spinner {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #fff;
    animation: spin 0.7s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {
    .settings-page {
        padding: 30px 18px 55px;
    }

    .settings-layout {
        grid-template-columns: 1fr;
    }

    .settings-sidebar {
        position: static;
    }

    .settings-sidebar nav {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .sidebar-footer {
        display: none;
    }

    .theme-grid {
        grid-template-columns: 1fr;
    }

    .theme-preview {
        height: 125px;
    }
}

@media (max-width: 650px) {
    .settings-page {
        padding: 22px 13px 45px;
    }

    .settings-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 22px;
    }

    .settings-user {
        width: 100%;
        box-sizing: border-box;
    }

    .settings-sidebar {
        padding: 9px;
        border-radius: 17px;
    }

    .settings-sidebar nav {
        grid-template-columns: 1fr;
    }

    .settings-nav-item {
        grid-template-columns: 34px minmax(0, 1fr) 16px;
    }

    .settings-card {
        padding: 17px;
        border-radius: 17px;
    }

    .section-heading {
        margin-left: 1px;
        margin-right: 1px;
    }

    .section-heading h2 {
        font-size: 21px;
    }

    .heading-icon {
        width: 39px;
        height: 39px;
        border-radius: 12px;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .form-field.full {
        grid-column: auto;
    }

    .password-rules {
        grid-template-columns: 1fr;
    }

    .danger-action {
        align-items: stretch;
        flex-direction: column;
    }

    .danger-button {
        width: 100%;
    }

    .save-area {
        justify-content: stretch;
    }

    .primary-button {
        width: 100%;
    }
}

@media (max-width: 400px) {
    .settings-header h1 {
        font-size: 30px;
    }

    .settings-header p {
        font-size: 13px;
    }

    .theme-preview {
        height: 105px;
    }
}`}
            </style>

        </div>
    );
}

/*
import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    username: user?.username || "",
     fullName: user?.fullName || "",
    bio: user?.bio || "",
    theme: user?.theme || "theme1"
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: ""
  });

  const saveProfile = async () => {
    try {
      const res = await axios.post(
        `${API_BASE}/api/profile/update`,
        {
          oldUsername: user.username,
          newUsername: form.username,
          fullName: form.fullName,
          bio: form.bio,
          theme: form.theme
        },
        { withCredentials: true }
      );

      setUser(res.data);
      alert("Saved!");
    } catch {
      alert("Error saving");
    }
  };

  const changePassword = async () => {
    try {
      await axios.post(
        `${API_BASE}/api/auth/change-password`,
        {
          current: passwords.current,
          new: passwords.new
        },
        { withCredentials: true }
      );

      alert("Password updated ✅");
      setPasswords({ current: "", new: "" });
    } catch (err) {
      alert(err.response?.data?.error || "Error updating password");
    }
  };

  const deleteAccount = async () => {
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete your account? This cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE}/api/auth/delete-account`, {
        withCredentials: true
      });

      setUser(null);
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.error || "Error deleting account");
    }
  };

  return (
    <div className="settings">
      <h1>⚙️ Settings</h1>

     
      <div className="card">
        <h3>👤 Account</h3>

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
  placeholder="Full Name"
  value={form.fullName}
  onChange={(e) =>
    setForm({ ...form, fullName: e.target.value })
  }
/>

        <input
          placeholder="Bio"
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />

        <button onClick={saveProfile}>Save Changes</button>
      </div>
 
      <div className="card">
        <h3>🎨 Appearance</h3>

        <select
          value={form.theme}
          onChange={(e) => setForm({ ...form, theme: e.target.value })}
        >
          <option value="theme1">Default</option>
          <option value="dark">Dark</option>
          <option value="minimal">Minimal</option>
        </select>

        <button onClick={saveProfile}>Apply Theme</button>
      </div>

    
      <div className="card">
        <h3>🔐 Security</h3>

        <input
          type="password"
          placeholder="Current password"
          onChange={(e) =>
            setPasswords({ ...passwords, current: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="New password"
          onChange={(e) =>
            setPasswords({ ...passwords, new: e.target.value })
          }
        />

        <button onClick={changePassword}>Update Password</button>
      </div>

      
      <div className="card danger">
        <h3>⚠️ Danger Zone</h3>
        <button className="delete" onClick={deleteAccount}>
          Delete Account
        </button>
      </div>

      <style>{`
        .settings {
          min-height: 100vh;
          padding: 40px 20px;
          max-width: 750px;
          margin: auto;
          font-family: Inter, sans-serif;
          background: radial-gradient(circle at top, #f5f7ff, #ffffff);
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: 700;
          color: #111827;
        }

        .card {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 20px;
          border-radius: 18px;
          margin-bottom: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        h3 {
          margin: 0;
          font-size: 16px;
          color: #374151;
        }

        input, select {
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.2s;
          background: white;
        }

        input:focus, select:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
        }

        button {
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.25s;
        }

        button:hover {
          transform: scale(1.03);
          opacity: 0.95;
        }

        .danger {
          border: 1px solid #fecaca;
          background: rgba(254, 242, 242, 0.6);
        }

        .delete {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .delete:hover {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
*/