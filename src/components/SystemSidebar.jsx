import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
   
import {
FiHome,
FiCalendar,
FiClock,
FiFolder,
FiBarChart2,
FiSettings,

} from "react-icons/fi";
import {FaSignOutAlt} from "react-icons/fa";

export default function SystemSidebar(){
     const location = useLocation();
        const { logout } = useAuth();
  
     
     const isActive = (path) => location.pathname === path;
     const [stats,setStats] = useState(null);




const loadStats = async()=>{

const res = await axios.get(

`${API_BASE}/api/dashboard/today`,

{
withCredentials:true
}

);

setStats(res.data.stats);

};
useEffect(()=>{

loadStats();

},[]);

return(

<aside className="sidebar">

<div className="logo">

<div className="logo-icon">
✓
</div>

<h2>
المهام اليومية
</h2>

</div>

<nav>

          
          <Link className={isActive("/") ? "active" : ""} to="/">
          <FiHome />
             Dashboard
          </Link>
          <Link className={isActive("/Categories") ? "active" : ""} to="/Categories">
          <FiHome />
             Categories
          </Link>

          <Link className={isActive("/jobLeads") ? "active" : ""} to="/jobLeads">
          <FiClock />
           jobLeads
          </Link>
           <Link className={isActive("/FiHome") ? "active" : ""} to="/FiHome">
          <FiClock />
            المهام اليومية
          </Link>

          <Link className={isActive("/FiCalendar") ? "active" : ""} to="/FiCalendar">
          <FiCalendar />
             اليوم
          </Link>

          <Link className={isActive("/FiClock") ? "active" : ""} to="/FiClock">
          <FiClock />
             المهام القادمة
          </Link>

          <Link className={isActive("/FiFolder") ? "active" : ""} to="/FiFolder">
          <FiFolder />
             المشاريع
          </Link>

          <Link className={isActive("/FiBarChart2") ? "active" : ""} to="/FiBarChart2">
          <FiBarChart2 />
             الإحصائيات
          </Link>

          <Link className={isActive("/settings") ? "active" : ""} to="/settings">
          <FiSettings />
             الإعدادات
          </Link>
        



</nav>




<div className="sidebar-progress">

<h4>
تقدم اليوم
</h4>
<div
  className="circle"
  style={{
    background: `conic-gradient(
      #6366F1 ${stats?.percent || 0}%,
      #E5E7EB ${stats?.percent || 0}%
    )`
  }}
>
  {stats?.percent || 0}%
</div>



<p>

{stats?.completed || 0}
من
{stats?.total || 0}
مهام مكتملة
</p>

</div>

 {/* LOGOUT */}
        <button className="logout" onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>

<style>{`

.sidebar{
position:fixed;
top:0;
right:0;
width:300px;
height:100vh;
background:white;
border-left:1px solid #E2E8F0;
padding:30px;
display:flex;
flex-direction:column;
z-index:1000;
overflow-y: scroll;
}

.logo{
display:flex;
align-items:center;
gap:15px;
margin-bottom:40px;
}

.logo-icon{
width:50px;
height:50px;
border-radius:15px;
background:#6366F1;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:22px;
}

nav{
display:flex;
flex-direction:column;
gap:10px;
}

nav a{
height:54px;
padding:10px 12px;
text-decoration:none;
border-radius:14px;
display:flex;
align-items:center;
justify-content:flex-end;
gap:12px;
font-size:15px;
color:#475569;
transition:0.3s;
}

nav a svg{
font-size:17px;
min-width:18px;
flex-shrink:0;
}

nav a:hover{
color:#6366F1;
background:#EEF2FF;
}

nav a.active{
background:#EEF2FF;
color:#6366F1;
font-weight:700;
}

.sidebar-progress{
margin-top:auto;
padding:25px;
border:1px solid #E2E8F0;
border-radius:20px;
text-align:center;
}

.circle{
width:120px;
height:120px;
margin:auto;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
font-weight:700;
margin-top:15px;
margin-bottom:15px;
}

/* LOGOUT */
        .logout {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171;
          padding: 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.2s;

          display: flex;             /* 👈 */
  align-items: center;       /* 👈 */
  justify-content: center;   /* 👈 */
  gap: 10px;  
        
        }

        .logout:hover {
          transform: translateY(-2px);
        }


/* ================= MOBILE ================= */

@media (max-width: 768px){

.sidebar{
top:auto;
bottom:0;
right:0;
left:0;
width:100%;
height:80px;
padding:0;
border-left:none;
border-top:1px solid #E2E8F0;
box-shadow:
0 -5px 20px rgba(0,0,0,.08);
border-radius:25px 25px 0 0;
background:rgba(255,255,255,.95);
backdrop-filter:blur(20px);

}

.logo{
display:none;
}

.sidebar-progress{
display:none;
}

nav{
height:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
gap:0;
}

nav a{
flex:1;
height:100%;
padding:0;
border-radius:0;
flex-direction:column;
justify-content:center;
gap:6px;
font-size:11px;
}

nav a svg{
font-size:22px;
}

nav a.active{
background:none;
color:#6366F1;
position:relative;
}

nav a.active::before{
content:"";
position:absolute;
top:8px;
width:40px;
height:4px;
border-radius:20px;
background:#6366F1;
}

}

/* أصغر الشاشات */

@media (max-width:480px){

nav a{
font-size:10px;
}

nav a svg{
font-size:20px;
}

}

`}</style>



</aside>

)

}

