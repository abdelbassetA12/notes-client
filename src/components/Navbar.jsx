import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="topbar">
        <div className="glass">

          {/* LEFT */}
          <div className="left">
            <div className="title">
              <img className='logo' src="/Qevora.log.png" alt="Qevora Logo" />

          evora
            </div>

            <nav className="nav">
              <Link className={isActive("/") ? "active" : ""} to="/">
                Home
              </Link>
              

             
            </nav>
          </div>

          {/* RIGHT */}
          <div className="right">


            {user ? (
  <div className="user">

    <div className="avatar">
      {user.username?.charAt(0).toUpperCase()}
    </div>

    <div className="user-info">
      <span className="name">
        {user.username}
      </span>

      <span className="status">
        Online
      </span>
    </div>
    <Link className="buttoncta" to="/dashboard">
    dashboard
  </Link>

  </div>
) : (
  <Link className="buttoncta" to="/auth">
    Get Started
  </Link>
)}

           

            
           

            {/* Mobile */}
            <button className="menu" onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mobile">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
           
          
          </div>
        )}
      </header>

      <style>{`
      a{
       text-decoration: none;
       }
        .topbar {
          position: sticky;
          top: 0;
          z-index: 9999;
        }

        /* MAIN GLASS BAR */
        .glass {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 22px;

          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.08);

          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        /* LEFT */
        .left {
          display: flex;
          align-items: center;
          gap: 28px;
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

        

        /* NAV */
        .nav {
          display: flex;
          gap: 18px;
        }

        .nav a {
          position: relative;
          text-decoration: none;
          color: #94a3b8;
          font-size: 14px;
          padding: 6px 10px;
          border-radius: 10px;
          transition: 0.25s ease;
        }

        .nav a:hover {
          color: white;
          background: rgba(148,163,184,0.1);
        }

        .nav a.active {
          color: white;
        }

        .nav a.active::after {
          content: "";
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: -4px;
          height: 2px;
          background: linear-gradient(90deg,#60a5fa,#a78bfa);
          border-radius: 10px;
        }

        /* RIGHT */
        .right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .buttoncta {
          background: #38bdf8;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .buttoncta:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(56,189,248,0.6);
        }


        .user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 10px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg,#60a5fa,#a78bfa);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .name {
          font-size: 13px;
          color: white;
        }

        .status {
          font-size: 11px;
          color: #22c55e;
        }

        /* LOGOUT */
        .logout {
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .logout:hover {
          background: rgba(239,68,68,0.25);
          transform: translateY(-1px);
        }

        /* MOBILE */
        .menu {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 22px;
        }

        .mobile {
          display: none;
          flex-direction: column;
          padding: 14px;
          background: rgba(15,23,42,0.95);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .mobile a, .mobile button {
          padding: 10px;
          color: white;
          text-align: left;
          background: none;
          border: none;
        }

        .mobile a:hover, .mobile button:hover {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .nav, .user, .logout {
            display: none;
          }

          .menu {
            display: block;
          }

          .mobile {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}