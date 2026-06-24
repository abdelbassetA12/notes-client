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
     
       <style>
        {
          `
          a{
text-decoration:none;
}

/* =========================
TOPBAR
========================= */

.topbar{
position:sticky;
top:18px;
z-index:9999;
padding:0 5%;
}

.glass{

max-width:1300px;
height:80px;

margin:auto;

display:flex;
justify-content:space-between;
align-items:center;

padding:0 28px;

background:rgba(255,255,255,.8);

backdrop-filter:blur(20px);

border:1px solid rgba(255,255,255,.7);

border-radius:28px;

box-shadow:
0 20px 60px rgba(15,23,42,.08);

}


/* =========================
LEFT
========================= */

.left{
display:flex;
align-items:center;
gap:55px;
}


/* =========================
LOGO
========================= */

.title{

display:flex;
align-items:center;
gap:12px;

font-size:24px;
font-weight:900;

color:#0F172A;

letter-spacing:.5px;

}

.logo{

width:38px;
height:38px;
object-fit:contain;

}


/* =========================
NAV
========================= */

.nav{

display:flex;
align-items:center;
gap:10px;

}

.nav a{

height:46px;

padding:0 18px;

display:flex;
align-items:center;
justify-content:center;

font-size:15px;
font-weight:600;

color:#64748B;

border-radius:15px;

transition:.3s;

}

.nav a:hover{

background:#EEF2FF;

color:#6366F1;

}

.nav a.active{

background:#6366F1;

color:white;

box-shadow:
0 10px 25px rgba(99,102,241,.25);

}


/* =========================
RIGHT
========================= */

.right{

display:flex;
align-items:center;
gap:18px;

}


/* =========================
USER CARD
========================= */

.user{

display:flex;
align-items:center;
gap:14px;

padding:8px 12px;

background:#F8FAFC;

border:1px solid #E2E8F0;

border-radius:18px;

}


.avatar{

width:44px;
height:44px;

border-radius:15px;

background:
linear-gradient(
135deg,
#6366F1,
#8B5CF6
);

display:flex;
justify-content:center;
align-items:center;

font-size:17px;
font-weight:700;

color:white;

}


.user-info{

display:flex;
flex-direction:column;

}

.name{

font-size:14px;
font-weight:700;

color:#0F172A;

}

.status{

font-size:12px;

color:#16A34A;

margin-top:3px;

}


/* =========================
BUTTON
========================= */

.buttoncta{

height:50px;

padding:0 24px;

display:flex;
align-items:center;
justify-content:center;

border-radius:16px;

background:
linear-gradient(
135deg,
#6366F1,
#4F46E5
);

color:white;

font-size:15px;
font-weight:700;

transition:.35s;

box-shadow:
0 10px 30px rgba(99,102,241,.25);

}

.buttoncta:hover{

transform:translateY(-3px);

box-shadow:
0 20px 40px rgba(99,102,241,.35);

}


/* =========================
MENU BUTTON
========================= */

.menu{

display:none;

width:48px;
height:48px;

border:none;

background:#F8FAFC;

border-radius:14px;

font-size:24px;

cursor:pointer;

transition:.3s;

}

.menu:hover{

background:#EEF2FF;

}


/* =========================
MOBILE MENU
========================= */

.mobile{

max-width:1300px;

margin:15px auto 0;

display:flex;
flex-direction:column;

gap:8px;

padding:18px;

background:white;

border-radius:25px;

box-shadow:
0 20px 50px rgba(0,0,0,.08);

}

.mobile a{

height:52px;

display:flex;
align-items:center;

padding:0 18px;

border-radius:16px;

font-size:15px;
font-weight:600;

color:#475569;

transition:.3s;

}

.mobile a:hover{

background:#EEF2FF;

color:#6366F1;

}


/* =========================
TABLET
========================= */

@media(max-width:992px){

.left{

gap:25px;

}

.nav{

gap:5px;

}

.nav a{

padding:0 14px;

}

}


/* =========================
MOBILE
========================= */

@media(max-width:768px){

.topbar{

padding:0 15px;

}

.glass{

height:72px;

padding:0 18px;

border-radius:22px;

}

.nav{

display:none;

}

.user{

display:none;

}

.menu{

display:flex;
align-items:center;
justify-content:center;

}

.title{

font-size:21px;

}

.logo{

width:32px;
height:32px;

}

.buttoncta{

height:46px;

padding:0 18px;

font-size:14px;

}

}


/* =========================
SMALL MOBILE
========================= */

@media(max-width:500px){

.glass{

height:68px;

}

.title{

font-size:19px;

}

.buttoncta{

padding:0 15px;

font-size:13px;

}

.menu{

width:44px;
height:44px;

font-size:20px;

}

}`
        }
       </style>
    </>
  );
}