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

      {/* ACCOUNT */}
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

      {/* APPEARANCE */}
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

      {/* SECURITY */}
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

      {/* DANGER */}
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
