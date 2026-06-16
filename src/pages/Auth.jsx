import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  FiLock,
  FiUser,
  FiMail,
  FiArrowRight
} from "react-icons/fi";

export default function Auth() {

  const [activeTab, setActiveTab] = useState("login");

  const { login, register } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
const handleLogin = async () => {

  const res = await login(form);

  if (res.success) {

    navigate("/");

  } else {

    if (res.error === "EMAIL_NOT_VERIFIED") {

      navigate("/verify", {
        state: {
          email: res.email
        }
      });

    } else {

      alert(res.error);

    }

  }

};
/*
  const handleLogin = async () => {
    await login(form);
    navigate("/");
  };
  */

  const handleRegister = async () => {
    await register(form);
      navigate("/verify", {
      state: {
        email: form.email
      }
    });
    //navigate("/");
  };

  return (
    <>
    
      <div className="auth-page">

        {/* LEFT */}
        <div className="auth-right">

          <div className="auth-box">

            {/* LOGO */}
            <div className="logo-box">
              <div className="logo-circle">
                B
              </div>

              <h2>Bio Link</h2>
            </div>

            {/* TABS */}
            <div className="tabs">

              <button
                className={activeTab === "login" ? "active" : ""}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>

              <button
                className={activeTab === "register" ? "active" : ""}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>

            </div>

            {/* REGISTER */}
            {activeTab === "register" && (

              <div className="form-wrapper">

                <div className="input-box">

                  <FiUser className="input-icon" />

                  <input
                    placeholder="Username"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        username: e.target.value
                      })
                    }
                  />

                </div>

                <div className="input-box">

                  <FiMail className="input-icon" />

                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value
                      })
                    }
                  />

                </div>

                <div className="input-box">

                  <FiLock className="input-icon" />

                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value
                      })
                    }
                  />

                </div>
                


             

                <button
                  className="submit-btn"
                  onClick={handleRegister}
                >
                  Create Account
                  <FiArrowRight />
                </button>

              </div>

            )}

            {/* LOGIN */}
            {activeTab === "login" && (

              <div className="form-wrapper">

                <div className="input-box">

                  <FiUser className="input-icon" />

                  <input
                    placeholder="Username or Email"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        username: e.target.value
                      })
                    }
                  />

                </div>

                <div className="input-box">

                  <FiLock className="input-icon" />

                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value
                      })
                    }
                  />

                </div>

                <div className="form-options">

  <div
    className="forgot-link"
    onClick={() => navigate("/forgot-password")}
  >
    Forgot Password?
  </div>

</div>


                <button
                  className="submit-btn"
                  onClick={handleLogin}
                >
                  Login
                  <FiArrowRight />
                </button>
                

              </div>

             

            )}

          </div>

        </div>
        
         {/* RIGHT */}
        <div className="auth-left">

          <div className="auth-overlay" />

          <div className="auth-content">

            <div className="auth-badge">
              🚀 BioLink Platform
            </div>

            <h1>
              Build your digital presence in one powerful link.
            </h1>

            <p>
              Share your social links, products, videos,
              forms and everything about your brand
              inside one beautiful page.
            </p>

            <div className="auth-features">

              <div className="feature-card">
                ⚡ Fast & Modern
              </div>

              <div className="feature-card">
                🎨 Custom Themes
              </div>

              <div className="feature-card">
                📊 Analytics
              </div>

              <div className="feature-card">
                🔗 Unlimited Links
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
        }

        .auth-page{
          min-height:100vh;
          display:flex;
          background:#f8fafc;
        }

        /* =========================
           LEFT
        ========================= */

        .auth-left{
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
        }

        /* =========================
           RIGHT
        ========================= */

        .auth-right{
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
          margin-bottom:32px;
        }

        .logo-circle{
          width:70px;
          height:70px;

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
          font-size:28px;
          color:#111827;
        }

        /* =========================
           TABS
        ========================= */

        .tabs{
          display:flex;
          background:#f3f4f6;

          padding:6px;
          border-radius:16px;

          margin-bottom:28px;
        }

        .tabs button{
          flex:1;

          border:none;
          background:transparent;

          padding:14px;

          border-radius:12px;

          font-size:14px;
          font-weight:600;

          cursor:pointer;

          transition:0.2s;
          color:#6b7280;
        }

        .tabs button.active{
          background:white;
          color:#111827;

          box-shadow:
            0 4px 12px rgba(0,0,0,0.06);
        }

        /* =========================
           FORM
        ========================= */

        .form-wrapper{
          display:flex;
          flex-direction:column;
          gap:16px;
        }

        .input-box{
          display:flex;
          align-items:center;

          background:#f9fafb;

          border:1px solid #e5e7eb;

          border-radius:16px;

          padding:0 16px;

          transition:0.2s;
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

          height:56px;

          font-size:15px;
          color:#111827;
        }

        .submit-btn{
          height:56px;

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

          margin-top:8px;

          transition:0.25s;

          box-shadow:
            0 10px 25px rgba(79,70,229,0.25);
        }

        .submit-btn:hover{
          transform:translateY(-2px);
        }



        /* =========================
   FORM OPTIONS
========================= */

.form-options{
  display:flex;
  align-items:center;
  justify-content:flex-end;

  margin-top:-4px;
  margin-bottom:4px;
}

.forgot-link{
  position:relative;

  font-size:14px;
  font-weight:600;

  color:#6366f1;

  cursor:pointer;

  transition:0.25s;

  padding:4px 2px;
}

.forgot-link::after{
  content:"";

  position:absolute;
  left:0;
  bottom:-2px;

  width:0%;
  height:2px;

  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #7c3aed
    );

  border-radius:999px;

  transition:0.25s;
}

.forgot-link:hover{
  color:#4f46e5;
}

.forgot-link:hover::after{
  width:100%;
}



        /* =========================
           TABLET
        ========================= */

        @media (max-width:1100px){

          .auth-content h1{
            font-size:42px;
          }

          .auth-right{
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

          .auth-left{
            min-height:420px;
            padding:40px 24px;
          }

          .auth-right{
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

          .auth-left{
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

          .auth-right{
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

          .tabs button{
            font-size:13px;
            padding:12px;
          }

          .input-box input{
            height:52px;
            font-size:14px;
          }

          .forgot-link{
    font-size:13px;
  }

          .submit-btn{
            height:52px;
            font-size:14px;
          }

        }

      `}</style>

    </>
  );
}

/*
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");
  const { login, register } = useAuth();
  const navigate = useNavigate();

const [form, setForm] = useState({
  username: "",
  email: "",
  password: ""
});

  const handleLogin = async () => {
    await login(form);
    navigate("/");
  };

  const handleRegister = async () => {
    await register(form);
    navigate("/");
  };

  return (
    <div>
      <h2>Bio Link</h2>
      <button onClick={() => setActiveTab("register")}>
  register
</button>

<button onClick={() => setActiveTab("login")}>
  login
</button>

{activeTab === "register" && (
  <div>

    <input
      placeholder="Username"
      onChange={e =>
        setForm({
          ...form,
          username: e.target.value
        })
      }
    />

    <input
      placeholder="Email"
      type="email"
      onChange={e =>
        setForm({
          ...form,
          email: e.target.value
        })
      }
    />

    <input
      placeholder="Password"
      type="password"
      onChange={e =>
        setForm({
          ...form,
          password: e.target.value
        })
      }
    />

    <button onClick={handleRegister}>
      Register
    </button>

  </div>
)}
{activeTab === "login" && (
  <div>

    <input
      placeholder="Username or Email"
      onChange={e =>
        setForm({
          ...form,
          username: e.target.value
        })
      }
    />

    <input
      placeholder="Password"
      type="password"
      onChange={e =>
        setForm({
          ...form,
          password: e.target.value
        })
      }
    />

    <button onClick={handleLogin}>
      Login
    </button>

  </div>
)}


 
    </div>
  );
}

*/