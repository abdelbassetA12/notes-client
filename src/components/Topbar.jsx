

import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import QRCodeBox from "./QRCodeBox";
import { 
  FaFacebook, 

  FaTwitter, 

  FaWhatsapp,
  FaTelegram
} from 'react-icons/fa';

export default function Topbar() {

  const { user } = useAuth();

  const [showShare, setShowShare] = useState(false);

  const handlePreview = () => {
    if (!user) return;
    window.open(`/u/${user.username}`, "_blank");
  };

  const profileUrl = `${window.location.origin}/u/${user?.username}`;

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");

    if (!canvas) return;

    const url = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png";
    a.click();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      alert("Copied!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="topbar">

        <div className="title">
          <img className='logo' src="/Qevora.log.png" alt="Qevora Logo" />

          evora
        </div>
       

        

        <div className="actions">

          <button onClick={handlePreview}>
            Preview
          </button>

          <button
            className="primary"
            onClick={() => setShowShare(true)}
          >
            Share
          </button>

        </div>
      </div>

      {showShare && (
        <div
          className="share-overlay"
          onClick={() => setShowShare(false)}
        >

          <div
            className="share-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}

            <div className="share-header">

              <div>

                <span className="share-badge">
                  Share Profile
                </span>

                <h3>
                  Share your BioLink
                </h3>

                <p>
                  Let people discover your profile anywhere.
                </p>

              </div>

              <button
                className="share-close-icon"
                onClick={() => setShowShare(false)}
              >
                ✕
              </button>

            </div>

            {/* PREVIEW CARD */}

            <div className="share-preview-card">

              <div className="share-avatar">
                {user?.username?.charAt(0)?.toUpperCase()}
              </div>

              <div className="share-user-info">
                <h4>
                  @{user?.username}
                </h4>

                <span>
                  {profileUrl}
                </span>
              </div>

            </div>

            {/* URL */}

            <div className="share-url-box">

              <input
                value={profileUrl}
                readOnly
              />

              <button
                className="copy-btn"
                onClick={copyLink}
              >
                Copy Link
              </button>

            </div>

            {/* SOCIALS */}

            <div className="share-grid">

              <button
                className="share-card whatsapp"
                onClick={() => {
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(profileUrl)}`
                  );
                }}
              >
                <span> <FaWhatsapp /> </span>

                <div>
                  <strong>WhatsApp</strong>
                  <small>Share instantly</small>
                </div>
              </button>

              <button
                className="share-card facebook"
                onClick={() => {
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${profileUrl}`
                  );
                }}
              >
                <span>  <FaFacebook /></span>

                <div>
                  <strong>Facebook</strong>
                  <small>Post to timeline</small>
                </div>
              </button>

              <button
                className="share-card twitter"
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?url=${profileUrl}`
                  );
                }}
              >
                <span> <FaTwitter /></span>

                <div>
                  <strong>X / Twitter</strong>
                  <small>Tweet your page</small>
                </div>
              </button>

              <button
                className="share-card telegram"
                onClick={() => {
                  window.open(
                    `https://t.me/share/url?url=${profileUrl}`
                  );
                }}
              >
                <span><FaTelegram /></span>

                <div>
                  <strong>Telegram</strong>
                  <small>Send to contacts</small>
                </div>
              </button>

            </div>

            {/* QR */}

            <div className="qr-wrapper">

              <div className="qr-header">

                <h4>
                  QR Code
                </h4>

                <button
                  className="download-btn"
                  onClick={downloadQR}
                >
                  Download QR
                </button>

              </div>

              <div className="qr-box">
                <QRCodeBox username={user.username} />
              </div>

            </div>

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={() => setShowShare(false)}
            >
              Done
            </button>

          </div>

        </div>
      )}

      <style>{`

/* =========================
   TOPBAR
========================= */

.topbar{
  position:fixed;
  top:0;
  left:0;
  right:0;

  height:60px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:0 24px;

  background:#2f3749;

  border-bottom:1px solid #1e293b;

  z-index:999;
}

.title{
 display: flex;
 align-items: center;
  color:white;
  font-size:18px;
  font-weight:800;
  letter-spacing:.5px;
}

.title .logo {
 width: 30px;

}

.actions{
  display:flex;
  align-items:center;
  gap:12px;
}

.actions button{
 

 padding: 8px 14px;

  border:none;
  border-radius:14px;

  cursor:pointer;

  font-size:14px;
  font-weight:600;

  transition:.25s;
}

.actions button:hover{
  transform:translateY(-2px);
}

.actions button:first-child{
  background:rgba(255,255,255,.08);
  color:#e2e8f0;
}

.primary{
  background:linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  color:white;

  box-shadow:
    0 10px 25px rgba(99,102,241,.25);
}

/* =========================
   SHARE OVERLAY
========================= */

.share-overlay{
  position:fixed;
  inset:0;

  background:rgba(2,6,23,.72);

  backdrop-filter:blur(8px);
  -webkit-backdrop-filter:blur(8px);

  display:flex;
  justify-content:center;
  align-items:center;

  padding:20px;

  z-index:9999;

  animation:fadeIn .25s ease;
}

/* =========================
   SHARE MODAL
========================= */

.share-modal{
  width:100%;
  max-width:520px;

  background:linear-gradient(
    145deg,
    #ffffff,
    #f8fafc
  );

  border:1px solid rgba(99,102,241,.12);

  border-radius:32px;

  padding:28px;

  box-shadow:
    0 25px 80px rgba(15,23,42,.25),
    0 10px 30px rgba(99,102,241,.12);

  position:relative;

  animation:shareUp .3s ease;

  max-height:95vh;
  overflow-y:auto;
}

.share-modal::-webkit-scrollbar{
  width:6px;
}

.share-modal::-webkit-scrollbar-thumb{
  background:#c7d2fe;
  border-radius:20px;
}

/* =========================
   HEADER
========================= */

.share-header{
  display:flex;
  justify-content:space-between;
  gap:16px;

  margin-bottom:24px;
}

.share-header h3{
  font-size:28px;
  font-weight:800;

  color:#0f172a;

  margin-top:10px;
  margin-bottom:6px;
}

.share-header p{
  color:#64748b;
  line-height:1.6;
  font-size:14px;
}

.share-badge{
  display:inline-flex;
  align-items:center;

  background:rgba(99,102,241,.1);

  color:#4f46e5;

  padding:8px 14px;

  border-radius:999px;

  font-size:13px;
  font-weight:700;
}

.share-close-icon{
  width:44px;
  height:44px;

  border:none;
  border-radius:14px;

  background:#f1f5f9;
  color:#0f172a;

  cursor:pointer;

  transition:.25s;

  flex-shrink:0;
}

.share-close-icon:hover{
  background:#e2e8f0;
  transform:rotate(90deg);
}

/* =========================
   PREVIEW CARD
========================= */

.share-preview-card{
  display:flex;
  align-items:center;
  gap:16px;

  padding:18px;

  border-radius:24px;

  background:linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  margin-bottom:22px;

  color:white;

  box-shadow:
    0 12px 35px rgba(99,102,241,.25);
}

.share-avatar{
  width:64px;
  height:64px;

  border-radius:50%;

  background:rgba(255,255,255,.18);

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:24px;
  font-weight:800;

  backdrop-filter:blur(10px);
}

.share-user-info{
  flex:1;
  min-width:0;
}

.share-user-info h4{
  font-size:20px;
  margin-bottom:6px;
  font-weight:700;
}

.share-user-info span{
  display:block;

  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;

  color:rgba(255,255,255,.82);

  font-size:14px;
}

/* =========================
   URL BOX
========================= */

.share-url-box{
  display:flex;
  gap:12px;

  margin-bottom:24px;
}

.share-url-box input{
  flex:1;

  height:56px;

  border:none;
  outline:none;

  background:#f1f5f9;

  border-radius:18px;

  padding:0 18px;

  color:#0f172a;

  font-size:14px;
  font-weight:500;
}

.copy-btn{
  border:none;

  min-width:130px;

  border-radius:18px;

  background:linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  color:white;

  font-weight:700;

  cursor:pointer;

  transition:.25s;

  padding:0 18px;

  box-shadow:
    0 10px 24px rgba(99,102,241,.25);
}

.copy-btn:hover{
  transform:translateY(-2px);
}

/* =========================
   SHARE GRID
========================= */

.share-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);

  gap:14px;

  margin-bottom:26px;
}

.share-card{
  position:relative;

  display:flex;
  align-items:center;
  gap:14px;

  padding:18px;

  border:none;
  border-radius:24px;

  cursor:pointer;

  transition:.28s;

  overflow:hidden;

  text-align:left;
}

.share-card span{
  font-size:24px;
}

.share-card strong{
  display:block;
  font-size:15px;
  margin-bottom:3px;
}

.share-card small{
  color:#64748b;
  font-size:12px;
}

.share-card:hover{
  transform:translateY(-4px);
}

/* COLORS */

.whatsapp{
  background:#f0fdf4;
}

.facebook{
  background:#eff6ff;
}

.twitter{
  background:#f8fafc;
}

.telegram{
  background:#f0f9ff;
}

/* =========================
   QR SECTION
========================= */

.qr-wrapper{
  background:#f8fafc;

  border:1px solid #e2e8f0;

  border-radius:28px;

  padding:20px;

  margin-bottom:22px;
}

.qr-header{
  display:flex;
  justify-content:space-between;
  align-items:center;

  gap:12px;

  margin-bottom:18px;
}

.qr-header h4{
  font-size:18px;
  color:#0f172a;
}

.download-btn{
  border:none;

  background:#111827;
  color:white;

  padding:10px 16px;

  border-radius:14px;

  cursor:pointer;

  font-size:13px;
  font-weight:600;

  transition:.25s;
}

.download-btn:hover{
  transform:translateY(-2px);
}

.qr-box{
  display:flex;
  justify-content:center;
  align-items:center;

  padding:18px;

  border-radius:20px;

  background:white;
}

/* =========================
   DONE BUTTON
========================= */

.close-btn{
  width:100%;
  height:58px;

  border:none;
  border-radius:20px;

  background:linear-gradient(
    135deg,
    #0f172a,
    #1e293b
  );

  color:white;

  font-size:16px;
  font-weight:700;

  cursor:pointer;

  transition:.3s;
}

.close-btn:hover{
  transform:translateY(-2px);
}

/* =========================
   ANIMATIONS
========================= */

@keyframes shareUp{
  from{
    opacity:0;
    transform:translateY(40px) scale(.96);
  }

  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }
}

@keyframes fadeIn{
  from{
    opacity:0;
  }

  to{
    opacity:1;
  }
}

/* =========================
   RESPONSIVE
========================= */

@media(max-width:640px){

  .topbar{
    height:68px;
    padding:0 16px;
  }

  .actions{
    gap:8px;
  }

  .actions button{
    height:40px;
    padding:0 14px;
    font-size:13px;
  }

  .share-overlay{
    padding:12px;
    align-items:flex-end;
  }

  .share-modal{
    border-radius:28px 28px 0 0;

    max-width:100%;

    padding:22px;
  }

  .share-header h3{
    font-size:24px;
  }

  .share-grid{
    grid-template-columns:1fr;
  }

  .share-url-box{
    flex-direction:column;
  }

  .copy-btn{
    width:100%;
    height:52px;
  }

  .share-preview-card{
    padding:16px;
  }

  .share-avatar{
    width:58px;
    height:58px;
    font-size:20px;
  }

  .close-btn{
    height:54px;
  }
}

@media(max-width:420px){

  .topbar{
    padding:0 12px;
  }

  .title{
    font-size:16px;
  }

  .share-modal{
    padding:18px;
  }

  .share-header{
    gap:10px;
  }

  .share-header h3{
    font-size:21px;
  }

  .share-card{
    padding:16px;
    border-radius:20px;
  }

  .share-url-box input{
    font-size:13px;
  }

  .share-user-info h4{
    font-size:18px;
  }
}

`}</style>
    </>
  );
}
