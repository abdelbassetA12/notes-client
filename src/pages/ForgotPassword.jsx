
import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";

import {
  FiMail,
  FiLock,
  FiShield,
  FiArrowRight
} from "react-icons/fi";

export default function ForgotPassword() {

  const [step, setStep] =
    useState("email");

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [form, setForm] = useState({

    code: "",

    newPassword: ""

  });

  // SEND CODE
  const handleSendCode =
    async () => {

      try {

        setLoading(true);

        await axios.post(

          `${API_BASE}/api/auth/forgot-password`,

          { email }

        );

        setStep("verify");

      } catch (err) {

        alert(
          err.response?.data?.error ||
          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    };

  // VERIFY CODE
  const handleVerifyCode =
    async () => {

      try {

        setLoading(true);

        await axios.post(

          `${API_BASE}/api/auth/verify-reset-code`,

          {

            email,

            code: form.code

          }

        );

        setStep("password");

      } catch (err) {

        alert(
          err.response?.data?.error ||
          "Invalid code"
        );

      } finally {

        setLoading(false);

      }

    };

  // UPDATE PASSWORD
  const handleUpdatePassword =
    async () => {

      try {

        setLoading(true);

        await axios.post(

          `${API_BASE}/api/auth/update-password`,

          {

            email,

            newPassword:
              form.newPassword

          }

        );

        alert(
          "Password updated successfully"
        );

        window.location.href =
          "/auth";

      } catch (err) {

        alert(
          err.response?.data?.error ||
          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <>

      <div className="auth-page">

        {/* LEFT */}
        <div className="auth-left ">

          <div className="auth-box">

            {/* LOGO */}
            <div className="logo-box">

              <div className="logo-circle">
                B
              </div>

              <h2>
                Bio Link
              </h2>

            </div>

            {/* STEP INDICATOR */}
            <div className="steps">

              <div className={`step ${step === "email" ? "active" : ""}`}>
                1
              </div>

              <div className="step-line" />

              <div className={`step ${step === "verify" ? "active" : ""}`}>
                2
              </div>

              <div className="step-line" />

              <div className={`step ${step === "password" ? "active" : ""}`}>
                3
              </div>

            </div>

            {/* STEP 1 */}
            {step === "email" && (

              <div className="form-wrapper">

                <h2 className="auth-title">
                  Forgot Password
                </h2>

                <p className="auth-subtitle">

                  Enter your email address
                  to receive a verification
                  code.

                </p>

                <div className="input-box">

                  <FiMail
                    className="input-icon"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                  />

                </div>

                <button
                  className="submit-btn"
                  onClick={
                    handleSendCode
                  }
                  disabled={loading}
                >

                  {
                    loading
                      ? "Sending..."
                      : "Send Code"
                  }

                  <FiArrowRight />

                </button>

              </div>

            )}

            {/* STEP 2 */}
            {step === "verify" && (

              <div className="form-wrapper">

                <h2 className="auth-title">
                  Verify Code
                </h2>

                <p className="auth-subtitle">

                  Enter the 6-digit code
                  sent to your email.

                </p>

                <div className="input-box">

                  <FiShield
                    className="input-icon"
                  />

                  <input
                    placeholder="Verification Code"
                    value={form.code}
                    onChange={(e) =>
                      setForm({

                        ...form,

                        code:
                          e.target.value

                      })
                    }
                  />

                </div>

                <button
                  className="submit-btn"
                  onClick={
                    handleVerifyCode
                  }
                  disabled={loading}
                >

                  {
                    loading
                      ? "Verifying..."
                      : "Verify Code"
                  }

                  <FiArrowRight />

                </button>

              </div>

            )}

            {/* STEP 3 */}
            {step === "password" && (

              <div className="form-wrapper">

                <h2 className="auth-title">
                  Create New Password
                </h2>

                <p className="auth-subtitle">

                  Your identity has been
                  verified successfully.

                </p>

                <div className="input-box">

                  <FiLock
                    className="input-icon"
                  />

                  <input
                    type="password"
                    placeholder="New Password"
                    value={
                      form.newPassword
                    }
                    onChange={(e) =>
                      setForm({

                        ...form,

                        newPassword:
                          e.target.value

                      })
                    }
                  />

                </div>

                <button
                  className="submit-btn"
                  onClick={
                    handleUpdatePassword
                  }
                  disabled={loading}
                >

                  {
                    loading
                      ? "Updating..."
                      : "Update Password"
                  }

                  <FiArrowRight />

                </button>

              </div>

            )}

          </div>

        </div>
        

        {/* RIGHT */}

        <div className="auth-right">

          <div className="auth-overlay" />

          <div className="auth-content">

            <div className="auth-badge">
              🔐 Secure Password Recovery
            </div>

            <h1>
              Recover your account safely and quickly.
            </h1>

            <p>
              Reset your password securely using
              email verification and regain access
              to your BioLink dashboard instantly.
            </p>

            <div className="auth-features">

              <div className="feature-card">
                ✉️ Email Verification
              </div>

              <div className="feature-card">
                🔒 Secure Recovery
              </div>

              <div className="feature-card">
                ⚡ Fast Process
              </div>

              <div className="feature-card">
                🛡️ Protected Account
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

        .auth-page{
          min-height:100vh;
          display:flex;
          background:#f8fafc;
        }

        /* =========================
           LEFT
        ========================= */

        .auth-right{
          flex:1;

          position:relative;

          display:flex;
          align-items:center;
          justify-content:center;

          overflow:hidden;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed,
              #2563eb
            );

          padding:60px;
        }

        .auth-overlay{
          position:absolute;
          inset:0;

          background:
            radial-gradient(
              circle at top right,
              rgba(255,255,255,0.18),
              transparent 30%
            );
        }

        .auth-content{
          position:relative;
          z-index:2;

          max-width:540px;
          color:white;
        }

        .auth-badge{
          display:inline-flex;
          align-items:center;
          gap:8px;

          padding:10px 16px;

          background:rgba(255,255,255,0.12);

          border:1px solid rgba(255,255,255,0.2);

          border-radius:999px;

          margin-bottom:24px;

          font-size:14px;
          font-weight:500;

          backdrop-filter:blur(10px);
        }

        .auth-content h1{
          font-size:52px;
          line-height:1.1;
          margin-bottom:22px;
          font-weight:800;
        }

        .auth-content p{
          font-size:18px;
          line-height:1.8;
          opacity:0.92;
          margin-bottom:36px;
        }

        .auth-features{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:16px;
        }

        .feature-card{
          background:rgba(255,255,255,0.12);

          border:1px solid rgba(255,255,255,0.15);

          border-radius:18px;

          padding:18px;

          font-size:15px;
          font-weight:500;

          backdrop-filter:blur(12px);

          transition:0.25s;
        }

        .feature-card:hover{
          transform:translateY(-4px);
        }

        /* =========================
           RIGHT
        ========================= */

        .auth-left {
          width:520px;
          min-width:520px;

          display:flex;
          align-items:center;
          justify-content:center;

          padding:40px;
          background:#fff;
        }

        .auth-box{
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
            0 12px 30px rgba(79,70,229,0.3);
        }

        .logo-box h2{
          font-size:28px;
          color:#111827;
          font-weight:800;
        }

        /* =========================
           STEPS
        ========================= */

        .steps{
          display:flex;
          align-items:center;
          justify-content:center;

          margin-bottom:34px;
        }

        .step{
          width:42px;
          height:42px;

          border-radius:50%;

          background:#e5e7eb;
          color:#6b7280;

          display:flex;
          align-items:center;
          justify-content:center;

          font-weight:700;
          font-size:15px;

          transition:0.25s;
        }

        .step.active{
          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          color:white;

          box-shadow:
            0 10px 20px rgba(99,102,241,0.25);
        }

        .step-line{
          flex:1;
          height:2px;
          background:#e5e7eb;
          margin:0 10px;
        }

        /* =========================
           FORM
        ========================= */

        .form-wrapper{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .auth-title{
          font-size:30px;
          color:#111827;
          font-weight:800;
        }

        .auth-subtitle{
          color:#6b7280;
          line-height:1.7;
          font-size:15px;
          margin-top:-6px;
          margin-bottom:10px;
        }

        .input-box{
          display:flex;
          align-items:center;

          background:#f9fafb;

          border:1px solid #e5e7eb;

          border-radius:18px;

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
          border:none;
          outline:none;

          background:transparent;

          height:58px;

          font-size:15px;
          color:#111827;
        }

        .submit-btn{
          height:58px;

          border:none;
          border-radius:18px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          color:white;

          font-size:15px;
          font-weight:700;

          cursor:pointer;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;

          margin-top:8px;

          transition:0.25s;

          box-shadow:
            0 10px 25px rgba(79,70,229,0.25);
        }

        .submit-btn:hover{
          transform:translateY(-2px);
        }

        .submit-btn:disabled{
          opacity:0.7;
          cursor:not-allowed;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width:1100px){

          .auth-content h1{
            font-size:42px;
          }

          .auth-left {
            width:460px;
            min-width:460px;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width:900px){

          .auth-page{
            flex-direction:column;
          }

          .auth-right{
            min-height:420px;
            padding:40px 24px;
          }

          .auth-left {
            width:100%;
            min-width:100%;

            padding:30px 20px;
          }

          .auth-content h1{
            font-size:36px;
          }

          .auth-content p{
            font-size:16px;
          }

        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width:600px){

          .auth-right{
            min-height:auto;
            padding:50px 20px;
          }

          .auth-content h1{
            font-size:30px;
          }

          .auth-content p{
            font-size:15px;
            line-height:1.7;
          }

          .auth-features{
            grid-template-columns:1fr;
          }

          .auth-left {
            padding:24px 16px 40px;
          }

          .logo-circle{
            width:62px;
            height:62px;

            font-size:26px;
          }

          .logo-box h2{
            font-size:24px;
          }

          .auth-title{
            font-size:26px;
          }

          .input-box input{
            height:54px;
            font-size:14px;
          }

          .submit-btn{
            height:54px;
            font-size:14px;
          }

          .step{
            width:38px;
            height:38px;
            font-size:14px;
          }

        }

      `}</style>

    </>

  );

}
