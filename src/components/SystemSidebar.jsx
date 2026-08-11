 
import { Link, useLocation } from "react-router-dom";
import {
    FiHome,
    FiClock,
    FiMail,
    FiSettings,
    FiFileText,
    FiLogOut,
    FiChevronRight
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

export default function SystemSidebar() {
    const location = useLocation();
    const { logout, user } = useAuth();

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname === path ||
            location.pathname.startsWith(`${path}/`);
    };

    const mainNavigation = [
        {
            path: "/",
            label: "Job Leads",
            icon: FiHome
        },
        {
            path: "/email-template/new",
            label: "New Email",
            icon: FiMail
        },
        {
            path: "/EmailTemplates",
            label: "Email Templates",
            icon: FiClock
        } 
    ];

    const workspaceNavigation = [
        {
            path: "/ResumeEditor",
            label: "Resume",
            icon: FiFileText
        }
    ];

    const accountNavigation = [
        {
            path: "/settings",
            label: "Settings",
            icon: FiSettings
        }
    ];

    const renderNavItem = (item) => {
        const Icon = item.icon;
        const active = isActive(item.path);

        return (
            <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${active ? "active" : ""}`}
            >
                <span className="sidebar-link-icon">
                    <Icon size={18} />
                </span>

                <span className="sidebar-link-label">
                    {item.label}
                </span>

                {active && (
                    <span className="sidebar-active-dot" />
                )}

                <FiChevronRight
                    className="sidebar-chevron"
                    size={15}
                />
            </Link>
        );
    };

    return (
        <>
            <aside className="system-sidebar">

                {/* ================= BRAND ================= */}

                <div className="sidebar-brand">

                    <Link
                        to="/"
                        className="sidebar-brand-link"
                    >
                        <div className="sidebar-logo">
                            <img
                                src="/logo-Avertools.png"
                                alt="AverTools"
                            />
                        </div>

                        <div className="sidebar-brand-text">
                            <strong>AverTools</strong>
                            <span>Workspace</span>
                        </div>
                    </Link>

                </div>

                {/* ================= NAVIGATION ================= */}

                <div className="sidebar-navigation">

                    <div className="sidebar-section">

                        <div className="sidebar-section-title">
                            MAIN
                        </div>

                        <nav className="sidebar-nav">
                            {mainNavigation.map(renderNavItem)}
                        </nav>

                    </div>

                    <div className="sidebar-section">

                        <div className="sidebar-section-title">
                            WORKSPACE
                        </div>

                        <nav className="sidebar-nav">
                            {workspaceNavigation.map(renderNavItem)}
                        </nav>

                    </div>

                    <div className="sidebar-section">

                        <div className="sidebar-section-title">
                            ACCOUNT
                        </div>

                        <nav className="sidebar-nav">
                            {accountNavigation.map(renderNavItem)}
                        </nav>

                    </div>

                </div>

                {/* ================= FOOTER ================= */}

                <div className="sidebar-footer">

                    {/* User */}

                    <div className="sidebar-user">

                        <div className="sidebar-user-avatar">
                            {(
                                user?.fullName ||
                                user?.username ||
                                "U"
                            )
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        <div className="sidebar-user-info">

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

                    {/* Logout */}

                    <button
                        className="sidebar-logout"
                        onClick={logout}
                        title="Logout"
                    >
                        <FiLogOut size={18} />

                        <span>
                            Logout
                        </span>
                    </button>

                </div>

            </aside>

            {/* ================= MOBILE NAV ================= */}

            <nav className="mobile-sidebar">

                {[
                    ...mainNavigation.slice(0, 3),
                    ...workspaceNavigation,
                    ...accountNavigation
                ].map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={
                                active
                                    ? "mobile-sidebar-link active"
                                    : "mobile-sidebar-link"
                            }
                        >
                            <span className="mobile-icon">
                                <Icon size={20} />
                            </span>

                            <span>
                                {item.label === "Email Templates"
                                    ? "Emails"
                                    : item.label}
                            </span>
                        </Link>
                    );
                })}

                <button
                    className="mobile-logout"
                    onClick={logout}
                >
                    <FiLogOut size={20} />
                    <span>Logout</span>
                </button>

            </nav>

            <style>{`
                /* =========================================
                   DESKTOP SIDEBAR
                ========================================= */

                .system-sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;

                    width: 264px;
                    height: 100vh;

                    box-sizing: border-box;

                    background: rgba(255, 255, 255, 0.96);

                    border-left: 1px solid #e2e8f0;

                    display: flex;
                    flex-direction: column;

                    padding: 22px 14px 16px;

                    z-index: 1000;

                    box-shadow:
                        -8px 0 30px rgba(15, 23, 42, 0.025);

                    backdrop-filter: blur(18px);
                }

                /* =========================================
                   BRAND
                ========================================= */

                .sidebar-brand {
                    padding: 2px 5px 24px;
                }

                .sidebar-brand-link {
                    display: flex;
                    align-items: center;

                    gap: 11px;

                    text-decoration: none;

                    padding: 8px;

                    border-radius: 14px;

                    transition: background 0.2s ease;
                }

                .sidebar-brand-link:hover {
                    background: #f8fafc;
                }

                .sidebar-logo {
                    width: 42px;
                    height: 42px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 12px;

                    background: #f8fafc;

                    border: 1px solid #eef2f7;

                    overflow: hidden;
                }

                .sidebar-logo img {
                    width: 32px;
                    height: 32px;

                    object-fit: contain;

                    display: block;
                }

                .sidebar-brand-text {
                    min-width: 0;

                    display: flex;
                    flex-direction: column;

                    gap: 2px;
                }

                .sidebar-brand-text strong {
                    color: #0f172a;

                    font-size: 15px;
                    font-weight: 800;

                    letter-spacing: -0.02em;
                }

                .sidebar-brand-text span {
                    color: #94a3b8;

                    font-size: 10px;
                    font-weight: 500;
                }

                /* =========================================
                   NAVIGATION
                ========================================= */

                .sidebar-navigation {
                    flex: 1;

                    overflow-y: auto;

                    padding: 2px 1px;

                    scrollbar-width: thin;
                    scrollbar-color: #e2e8f0 transparent;
                }

                .sidebar-section {
                    margin-bottom: 23px;
                }

                .sidebar-section-title {
                    padding: 0 11px 8px;

                    color: #94a3b8;

                    font-size: 9px;

                    font-weight: 800;

                    letter-spacing: 0.12em;
                }

                .sidebar-nav {
                    display: flex;
                    flex-direction: column;

                    gap: 4px;
                }

                .sidebar-link {
                    position: relative;

                    min-height: 46px;

                    box-sizing: border-box;

                    display: flex;
                    align-items: center;

                    gap: 11px;

                    padding: 6px 10px;

                    border-radius: 13px;

                    text-decoration: none;

                    color: #64748b;

                    transition:
                        background 0.2s ease,
                        color 0.2s ease,
                        transform 0.2s ease;
                }

                .sidebar-link:hover {
                    color: #4f46e5;

                    background: #f8f9ff;
                }

                .sidebar-link.active {
                    color: #4f46e5;

                    background:
                        linear-gradient(
                            90deg,
                            #f1efff,
                            #f7f6ff
                        );

                    font-weight: 700;
                }

                .sidebar-link-icon {
                    width: 34px;
                    height: 34px;

                    flex-shrink: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background: #f8fafc;

                    color: #64748b;

                    transition:
                        background 0.2s ease,
                        color 0.2s ease;
                }

                .sidebar-link.active
                .sidebar-link-icon {
                    color: #4f46e5;

                    background: #ffffff;

                    box-shadow:
                        0 4px 12px
                        rgba(79, 70, 229, 0.08);
                }

                .sidebar-link:hover
                .sidebar-link-icon {
                    color: #4f46e5;
                }

                .sidebar-link-label {
                    flex: 1;

                    min-width: 0;

                    font-size: 12px;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;
                }

                .sidebar-active-dot {
                    width: 5px;
                    height: 5px;

                    flex-shrink: 0;

                    border-radius: 50%;

                    background: #6366f1;

                    box-shadow:
                        0 0 0 4px
                        rgba(99, 102, 241, 0.08);
                }

                .sidebar-chevron {
                    opacity: 0;

                    color: #a5b4fc;

                    transition: opacity 0.2s ease;
                }

                .sidebar-link:hover .sidebar-chevron,
                .sidebar-link.active .sidebar-chevron {
                    opacity: 1;
                }

                /* =========================================
                   FOOTER
                ========================================= */

                .sidebar-footer {
                    margin-top: auto;

                    padding-top: 13px;

                    border-top: 1px solid #eef2f7;
                }

                .sidebar-user {
                    display: flex;
                    align-items: center;

                    gap: 10px;

                    padding: 8px;

                    border-radius: 13px;
                }

                .sidebar-user-avatar {
                    width: 36px;
                    height: 36px;

                    flex-shrink: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background:
                        linear-gradient(
                            135deg,
                            #6366f1,
                            #4f46e5
                        );

                    color: white;

                    font-size: 12px;
                    font-weight: 800;

                    box-shadow:
                        0 6px 15px
                        rgba(79, 70, 229, 0.18);
                }

                .sidebar-user-info {
                    min-width: 0;

                    display: flex;
                    flex-direction: column;

                    gap: 2px;
                }

                .sidebar-user-info strong {
                    color: #334155;

                    font-size: 11px;

                    font-weight: 700;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;
                }

                .sidebar-user-info span {
                    color: #94a3b8;

                    font-size: 9px;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;
                }

                /* =========================================
                   LOGOUT
                ========================================= */

                .sidebar-logout {
                    width: 100%;

                    min-height: 42px;

                    margin-top: 5px;

                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    gap: 10px;

                    padding: 0 12px;

                    border: 1px solid #fee2e2;

                    border-radius: 11px;

                    background: #fffafa;

                    color: #dc2626;

                    font-size: 11px;

                    font-weight: 700;

                    cursor: pointer;

                    transition:
                        background 0.2s ease,
                        border-color 0.2s ease,
                        transform 0.2s ease;
                }

                .sidebar-logout:hover {
                    background: #fef2f2;

                    border-color: #fecaca;

                    transform: translateY(-1px);
                }

                /* =========================================
                   MOBILE
                ========================================= */

                .mobile-sidebar {
                    display: none;
                }

                @media (max-width: 900px) {

                    .system-sidebar {
                        width: 230px;
                    }

                }

                @media (max-width: 768px) {

                    .system-sidebar {
                        display: none;
                    }

                    .mobile-sidebar {
                        position: fixed;

                        left: 10px;
                        right: 10px;
                        bottom: 10px;

                        height: 68px;

                        display: flex;
                        align-items: center;

                        padding: 6px;

                        box-sizing: border-box;

                        background:
                            rgba(255, 255, 255, 0.94);

                        border: 1px solid #e2e8f0;

                        border-radius: 20px;

                        box-shadow:
                            0 12px 35px
                            rgba(15, 23, 42, 0.13);

                        backdrop-filter: blur(20px);

                        z-index: 1000;

                        gap: 2px;
                    }

                    .mobile-sidebar-link,
                    .mobile-logout {
                        flex: 1;

                        min-width: 0;

                        height: 56px;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        flex-direction: column;

                        gap: 4px;

                        border: 0;

                        background: transparent;

                        border-radius: 14px;

                        text-decoration: none;

                        color: #94a3b8;

                        font-size: 8px;

                        font-weight: 650;

                        cursor: pointer;

                        transition:
                            color 0.2s ease,
                            background 0.2s ease;
                    }

                    .mobile-sidebar-link.active {
                        color: #4f46e5;

                        background: #f1efff;
                    }

                    .mobile-sidebar-link:hover {
                        color: #4f46e5;
                    }

                    .mobile-icon {
                        height: 23px;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .mobile-logout {
                        color: #ef4444;
                    }

                    .mobile-logout:hover {
                        background: #fef2f2;
                    }

                }

                @media (max-width: 430px) {

                    .mobile-sidebar {
                        left: 7px;
                        right: 7px;
                        bottom: 7px;

                        height: 64px;

                        border-radius: 18px;
                    }

                    .mobile-sidebar-link,
                    .mobile-logout {
                        height: 52px;

                        font-size: 7px;
                    }

                    .mobile-icon svg,
                    .mobile-logout svg {
                        width: 18px;
                        height: 18px;
                    }

                }
            `}</style>
        </>
    );
}
 

/*
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
   


 

return(

<aside className="sidebar">

<div className="logo">

<div className="logo-icon">
 <img src="/logo-Avertools.png" alt="" />
</div>

<h2>
AverTools
</h2>

</div>

<nav>

          
          <Link className={isActive("/") ? "active" : ""} to="/">
          <FiHome />
             jobLeads
          </Link>
           

          
          <Link className={isActive("/email-template/new") ? "active" : ""} to="/email-template/new">
          <FiClock />
          Email Template
          </Link>
          <Link className={isActive("/EmailTemplates") ? "active" : ""} to="/EmailTemplates">
          <FiClock />
          Email Templates
          </Link>
           

         
  
 

          <Link className={isActive("/settings") ? "active" : ""} to="/settings">
          <FiSettings />
             الإعدادات
          </Link>
          <Link className={isActive("/ResumeEditor") ? "active" : ""} to="/ResumeEditor">
          <FiSettings />
            Resume 
          </Link>
           
        



</nav>




 
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
display:flex;
flex-direction:column;
justify-content: space-between;
}

.logo{
display:flex;
align-items:center;
gap:5px;
margin-bottom:40px;
}

.logo-icon img{
width:45px;

 
 
 
display:flex;
align-items:center;
justify-content:center;
 
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

 
        .logout {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171;
          padding: 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.2s;

          display: flex;              
  align-items: center;        
  justify-content: center;   
  gap: 10px;  
        
        }

        .logout:hover {
          transform: translateY(-2px);
        }


 

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

*/