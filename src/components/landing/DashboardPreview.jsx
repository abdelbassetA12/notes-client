 
import {
    FiSearch,
    FiBell,
    FiHome,
    FiBriefcase,
    FiMail,
    FiFileText,
    FiBarChart2,
    FiUsers,
    FiBookmark,
    FiSettings,
    FiCheckCircle,
    FiClock,
    FiSend,
    FiChevronRight,
    FiPlus
} from "react-icons/fi";

export default function DashboardPreview() {
    const leads = [
        {
            name: "TechVision Studio",
            location: "Berlin, Germany",
            status: "Email Sent",
            statusClass: "sent",
            time: "2h ago"
        },
        {
            name: "Marco Rossi",
            location: "Milan, Italy",
            status: "Waiting Reply",
            statusClass: "waiting",
            time: "1d ago"
        },
        {
            name: "Creative Labs",
            location: "Paris, France",
            status: "Interview",
            statusClass: "interview",
            time: "2d ago"
        },
        {
            name: "Nova Solutions",
            location: "Amsterdam, Netherlands",
            status: "Email Sent",
            statusClass: "sent",
            time: "3d ago"
        }
    ];

    return (
        <div className="jr-dashboard">
            {/* Sidebar */}
            <aside className="jr-dashboard-sidebar">
                <div className="jr-dashboard-brand">
                    <span className="jr-mini-logo">
                        ➤
                    </span>

                    <span>
                        Avertools
                    </span>
                </div>

                <div className="jr-sidebar-menu">
                    <div className="jr-sidebar-item active">
                        <FiHome />
                        <span>Dashboard</span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiBriefcase />
                        <span>Opportunities</span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiMail />
                        <span>Email Templates</span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiFileText />
                        <span>Resume Builder</span>

                        <span className="jr-new-label">
                            New
                        </span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiBarChart2 />
                        <span>Analytics</span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiUsers />
                        <span>Contacts</span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiBookmark />
                        <span>Saved Items</span>
                    </div>

                    <div className="jr-sidebar-item">
                        <FiSettings />
                        <span>Settings</span>
                    </div>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main className="jr-dashboard-main">

                {/* Topbar */}
                <div className="jr-dashboard-topbar">
                    <div className="jr-dashboard-title">
                        <strong>
                            Dashboard
                        </strong>

                        <span>
                            →
                        </span>
                    </div>

                    <div className="jr-dashboard-tools">
                        <button>
                            <FiSearch />
                        </button>

                        <button>
                            <FiBell />
                        </button>

                        <div className="jr-avatar">
                            A
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="jr-dashboard-stats">

                    <div className="jr-stat-card">
                        <div className="jr-stat-icon blue">
                            <FiBriefcase />
                        </div>

                        <span className="jr-stat-label">
                            Total Leads
                        </span>

                        <strong>
                            1,540
                        </strong>

                        <small>
                            +16% this week
                        </small>
                    </div>

                    <div className="jr-stat-card">
                        <div className="jr-stat-icon green">
                            <FiMail />
                        </div>

                        <span className="jr-stat-label">
                            Emails Sent
                        </span>

                        <strong>
                            900
                        </strong>

                        <small>
                            +12% this week
                        </small>
                    </div>

                    <div className="jr-stat-card">
                        <div className="jr-stat-icon orange">
                            <FiClock />
                        </div>

                        <span className="jr-stat-label">
                            Waiting Reply
                        </span>

                        <strong>
                            146
                        </strong>

                        <small>
                            +8% this week
                        </small>
                    </div>

                    <div className="jr-stat-card">
                        <div className="jr-stat-icon purple">
                            <FiSend />
                        </div>

                        <span className="jr-stat-label">
                            Interviews
                        </span>

                        <strong>
                            12
                        </strong>

                        <small>
                            +10% this week
                        </small>
                    </div>

                    <div className="jr-stat-card">
                        <div className="jr-stat-icon accepted">
                            <FiCheckCircle />
                        </div>

                        <span className="jr-stat-label">
                            Accepted
                        </span>

                        <strong>
                            24
                        </strong>

                        <small>
                            +13% this week
                        </small>
                    </div>

                </div>

                {/* Bottom dashboard area */}
                <div className="jr-dashboard-content">

                    {/* Leads */}
                    <section className="jr-recent-leads">

                        <div className="jr-panel-header">
                            <h3>
                                Recent Activity
                            </h3>

                            <button>
                                View All
                            </button>
                        </div>

                        <div className="jr-leads-list">
                            {leads.map((lead, index) => (
                                <div
                                    className="jr-lead-row"
                                    key={index}
                                >
                                    <div className="jr-lead-person">

                                        <div className="jr-lead-avatar">
                                            {lead.name.charAt(0)}
                                        </div>

                                        <div>
                                            <strong>
                                                {lead.name}
                                            </strong>

                                            <span>
                                                {lead.location}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="jr-lead-right">

                                        <span
                                            className={`jr-lead-status ${lead.statusClass}`}
                                        >
                                            {lead.status}
                                        </span>

                                        <small>
                                            {lead.time}
                                        </small>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>

                    {/* Right panel */}
                    <section className="jr-template-panel">

                        <div className="jr-template-title">
                            <span className="jr-star">
                                ★
                            </span>

                            <strong>
                                Default Template
                            </strong>
                        </div>

                        <div className="jr-template-box">

                            <span>
                                Professional Outreach Template
                            </span>

                            <small>
                                Updated 2 days ago
                            </small>

                            <button>
                                Edit Template
                            </button>

                        </div>

                        <div className="jr-quick-actions">

                            <h4>
                                Quick Actions
                                <FiChevronRight />
                            </h4>

                            <div>
                                <FiMail />
                                Open Gmail
                            </div>

                            <div>
                                <FiFileText />
                                Import CSV / Excel
                            </div>

                            <div>
                                <FiPlus />
                                Add New Contact
                            </div>

                        </div>

                    </section>

                </div>

            </main>
        </div>
    );
}
 
