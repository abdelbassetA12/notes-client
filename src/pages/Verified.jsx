import { useState } from "react";
import axios from "axios";
import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  FiMail,
  FiShield,
  FiArrowRight
} from "react-icons/fi";

import API_BASE from "../config/api";

export default function VerifyEmail() {

  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email || "";

  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleVerify = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");
    setSuccess("");

    try {

      const res = await axios.post(
        `${API_BASE}/api/auth/verify-code`,
        {
          email,
          code
        }
      );

      setSuccess(res.data.message);

      setTimeout(() => {

        navigate("/auth");

      }, 2000);

    } catch (err) {

      setError(
        err.response?.data?.error ||
        "Verification failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>
    
      <div className="verify-page">

        {/* LEFT SIDE */}
        <div className="verify-right">

          <div className="verify-card">

            <div className="logo-box">

              <div className="logo-circle">
                B
              </div>

              <h2>
                Verify Email
              </h2>

            </div>

            <p className="verify-text">
              Enter the verification code sent to:
            </p>

            <div className="email-box">

              <FiMail />

              <span>
                {email}
              </span>

            </div>

            <form
              onSubmit={handleVerify}
              className="verify-form"
            >

              <div className="input-box">

                <FiShield className="input-icon" />

                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) =>
                    setCode(e.target.value)
                  }
                  maxLength={6}
                  required
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="verify-btn"
              >

                {
                  loading
                    ? "Verifying..."
                    : "Verify Email"
                }

                <FiArrowRight />

              </button>

            </form>

            {error && (
              <div className="message error">
                {error}
              </div>
            )}

            {success && (
              <div className="message success">
                {success}
              </div>
            )}

            <Link
              to="/auth"
              className="back-link"
            >
              Back to Login
            </Link>

          </div>

        </div>
       

        {/* RIGHT SIDE */}
         <div className="verify-left">

          <div className="verify-overlay" />

          <div className="verify-content">

            <div className="verify-badge">
              ✨ Secure Verification
            </div>

            <h1>
              Verify your email address to continue.
            </h1>

            <p>
              We sent a 6-digit verification code to your email.
              Enter the code below to activate your account
              and access your BioLink dashboard.
            </p>

            <div className="verify-features">

              <div className="feature-card">
                🔒 Secure Authentication
              </div>

              <div className="feature-card">
                ⚡ Fast Verification
              </div>

              <div className="feature-card">
                📩 Email Confirmation
              </div>

              <div className="feature-card">
                🚀 Instant Access
              </div>

            </div>

          </div>

        </div>
        

      </div>

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:'Inter',sans-serif;
          background:#f8fafc;
        }

        .verify-page{
          min-height:100vh;
          display:flex;
          background:#f8fafc;
        }

        /* =========================
           LEFT SIDE
        ========================= */

        .verify-left{
          flex:1;

          position:relative;

          display:flex;
          align-items:center;
          justify-content:center;

          overflow:hidden;

          padding:60px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed,
              #2563eb
            );
        }

        .verify-overlay{
          position:absolute;
          inset:0;

          background:
            radial-gradient(
              circle at top right,
              rgba(255,255,255,0.18),
              transparent 30%
            );
        }

        .verify-content{
          position:relative;
          z-index:2;

          max-width:560px;

          color:white;
        }

        .verify-badge{
          display:inline-flex;
          align-items:center;
          gap:8px;

          padding:10px 18px;

          background:rgba(255,255,255,0.12);

          border:1px solid rgba(255,255,255,0.18);

          border-radius:999px;

          backdrop-filter:blur(10px);

          margin-bottom:26px;

          font-size:14px;
          font-weight:500;
        }

        .verify-content h1{
          font-size:52px;
          line-height:1.1;
          margin-bottom:24px;
          font-weight:800;
        }

        .verify-content p{
          font-size:18px;
          line-height:1.8;
          opacity:0.92;
          margin-bottom:38px;
        }

        .verify-features{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:16px;
        }

        .feature-card{
          padding:18px;

          border-radius:18px;

          background:rgba(255,255,255,0.12);

          border:1px solid rgba(255,255,255,0.15);

          backdrop-filter:blur(10px);

          font-size:15px;
          font-weight:500;
        }

        /* =========================
           RIGHT SIDE
        ========================= */

        .verify-right{
          width:520px;
          min-width:520px;

          background:white;

          display:flex;
          align-items:center;
          justify-content:center;

          padding:40px;
        }

        .verify-card{
          width:100%;
          max-width:420px;
        }

        .logo-box{
          display:flex;
          flex-direction:column;
          align-items:center;

          margin-bottom:28px;
        }

        .logo-circle{
          width:72px;
          height:72px;

          border-radius:22px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          display:flex;
          align-items:center;
          justify-content:center;

          color:white;

          font-size:30px;
          font-weight:800;

          margin-bottom:14px;

          box-shadow:
            0 10px 30px rgba(79,70,229,0.3);
        }

        .logo-box h2{
          font-size:30px;
          color:#111827;
        }

        .verify-text{
          text-align:center;

          color:#6b7280;

          margin-bottom:14px;

          font-size:15px;
          line-height:1.6;
        }

        .email-box{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;

          background:#f3f4f6;

          border:1px solid #e5e7eb;

          border-radius:16px;

          padding:14px 18px;

          color:#111827;

          font-size:14px;
          font-weight:600;

          margin-bottom:24px;

          word-break:break-word;
        }

        .verify-form{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .input-box{
          display:flex;
          align-items:center;

          background:#f9fafb;

          border:1px solid #e5e7eb;

          border-radius:16px;

          padding:0 16px;

          transition:0.25s;
        }

        .input-box:focus-within{
          border-color:#6366f1;

          box-shadow:
            0 0 0 4px rgba(99,102,241,0.12);
        }

        .input-icon{
          color:#6b7280;
          font-size:18px;
          margin-right:12px;
        }

        .input-box input{
          width:100%;

          height:58px;

          border:none;
          outline:none;

          background:transparent;

          font-size:16px;

          color:#111827;

          letter-spacing:4px;
          font-weight:600;
        }

        .verify-btn{
          height:58px;

          border:none;
          border-radius:16px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          color:white;

          font-size:15px;
          font-weight:600;

          cursor:pointer;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;

          transition:0.25s;

          box-shadow:
            0 10px 25px rgba(79,70,229,0.25);
        }

        .verify-btn:hover{
          transform:translateY(-2px);
        }

        .verify-btn:disabled{
          opacity:0.7;
          cursor:not-allowed;
          transform:none;
        }

        .message{
          margin-top:18px;

          padding:14px 16px;

          border-radius:14px;

          font-size:14px;
          font-weight:500;
        }

        .message.error{
          background:#fef2f2;
          color:#dc2626;
          border:1px solid #fecaca;
        }

        .message.success{
          background:#ecfdf5;
          color:#059669;
          border:1px solid #a7f3d0;
        }

        .back-link{
          display:block;

          text-align:center;

          margin-top:24px;

          color:#6366f1;

          text-decoration:none;

          font-size:14px;
          font-weight:600;

          transition:0.2s;
        }

        .back-link:hover{
          opacity:0.8;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width:1100px){

          .verify-content h1{
            font-size:42px;
          }

          .verify-right{
            width:460px;
            min-width:460px;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width:900px){

          .verify-page{
            flex-direction:column;
          }

          .verify-left{
            min-height:420px;
            padding:40px 24px;
          }

          .verify-right{
            width:100%;
            min-width:100%;

            padding:30px 20px 40px;
          }

          .verify-content h1{
            font-size:36px;
          }

          .verify-content p{
            font-size:16px;
          }

        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width:600px){

          .verify-left{
            min-height:auto;
            padding:50px 20px;
          }

          .verify-content h1{
            font-size:30px;
          }

          .verify-content p{
            font-size:15px;
            line-height:1.7;
          }

          .verify-features{
            grid-template-columns:1fr;
          }

          .verify-right{
            padding:24px 16px 40px;
          }

          .logo-circle{
            width:64px;
            height:64px;

            font-size:26px;
          }

          .logo-box h2{
            font-size:26px;
          }

          .input-box input{
            height:54px;
            font-size:15px;
          }

          .verify-btn{
            height:54px;
            font-size:14px;
          }

          .email-box{
            font-size:13px;
            padding:12px 14px;
          }

        }

      `}</style>

    </>

  );

}

/*
import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import API_BASE from "../config/api";

export default function VerifyEmail() {

  const navigate = useNavigate();

  const location = useLocation();

  // email القادم من صفحة التسجيل
  const email = location.state?.email || "";

  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleVerify = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");
    setSuccess("");

    try {

      const res = await axios.post(
        `${API_BASE}/api/auth/verify-code`,
        {
          email,
          code
        }
      );

      setSuccess(res.data.message);

      setTimeout(() => {

        navigate("/auth");

      }, 2000);

    } catch (err) {

      setError(
        err.response?.data?.error ||
        "Verification failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="verify-page">

      <div className="verify-card">

        <h1>
          Verify Email
        </h1>

        <p>
          Enter the 6-digit code sent to:
        </p>

        <strong>
          {email}
        </strong>

        <form onSubmit={handleVerify}>

          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            maxLength={6}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Verifying..."
                : "Verify"
            }
          </button>

        </form>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {success && (
          <p className="success">
            {success}
          </p>
        )}

        <Link to="/auth">
          Back to Login
        </Link>

      </div>

    </div>

  );

}
  */