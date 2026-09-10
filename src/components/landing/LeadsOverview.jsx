import {
    FiPlus,
    FiStar,
    FiChevronUp
} from "react-icons/fi";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell
} from "recharts";

const leads = [
    {
        name: "TechVision Studio",
        type: "Company",
        location: "Berlin, Germany",
        status: "Email Sent",
        statusClass: "sent",
        lastContact: "2h ago"
    },
    {
        name: "Marco Rossi",
        type: "Client",
        location: "Milan, Italy",
        status: "Waiting Reply",
        statusClass: "waiting",
        lastContact: "1d ago"
    },
    {
        name: "Creative Labs",
        type: "Project",
        location: "Paris, France",
        status: "Interview",
        statusClass: "interview",
        lastContact: "2d ago"
    },
    {
        name: "Nova Solutions",
        type: "Company",
        location: "Amsterdam, Netherlands",
        status: "Email Sent",
        statusClass: "sent",
        lastContact: "3d ago"
    },
    {
        name: "Daniel Weber",
        type: "Contact",
        location: "Munich, Germany",
        status: "Accepted",
        statusClass: "accepted",
        lastContact: "4d ago"
    }
];

const chartData = [
    {
        name: "May 5",
        applications: 35
    },
    {
        name: "May 12",
        applications: 85
    },
    {
        name: "May 19",
        applications: 62
    },
    {
        name: "May 26",
        applications: 110
    },
    {
        name: "Jun 2",
        applications: 140
    }
];

const statusData = [
    {
        name: "Email Sent",
        value: 900
    },
    {
        name: "Waiting Reply",
        value: 146
    },
    {
        name: "Interview",
        value: 80
    },
    {
        name: "Accepted",
        value: 24
    },
    {
        name: "Rejected",
        value: 40
    }
];

export default function LeadsOverview() {
    return (
        <section className="jr-leads-overview">
            <div className="jr-leads-overview-grid">

                {/* =========================================
                    LEFT — LEADS TABLE
                ========================================= */}
                <div className="jr-leads-table-panel">
                    <div className="jr-leads-panel-header">
                        <div>
                            <h2>
                                Manage Your Opportunities in One Place
                            </h2>

                            <p>
                                Organize, filter, and manage contacts, projects, and opportunities easily.
                            </p>

                            <small>
                                Never miss an opportunity.
                            </small>
                        </div>

                        <button className="jr-add-lead-btn">
                            <FiPlus />
                            Add Lead
                        </button>
                    </div>

                    <div className="jr-leads-table-wrapper">
                        <table className="jr-leads-table">
                            <thead>
                                <tr>
                                    <th>
                                        Company
                                    </th>

                                    <th>
                                        Type
                                    </th>

                                    <th>
                                        Location
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Last Contact
                                    </th>

                                    <th>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {leads.map((lead, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="jr-company-name">
                                                <span className="jr-company-dot">
                                                    ✦
                                                </span>

                                                <strong>
                                                    {lead.name}
                                                </strong>
                                            </div>
                                        </td>

                                        <td>
                                            {lead.type}
                                        </td>

                                        <td>
                                            {lead.location}
                                        </td>

                                        <td>
                                            <span
                                                className={`jr-table-status ${lead.statusClass}`}
                                            >
                                                {lead.status}
                                            </span>
                                        </td>

                                        <td>
                                            {lead.lastContact}
                                        </td>

                                        <td>
                                            <button className="jr-table-star">
                                                {index === 0 ? (
                                                    <FiStar />
                                                ) : (
                                                    <FiChevronUp />
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* =========================================
                    RIGHT — DASHBOARD
                ========================================= */}
                <div className="jr-powerful-dashboard">
                    <div className="jr-powerful-header">
                        <div>
                            <h2>
                                Powerful Dashboard Overview
                            </h2>

                            <p>
                                Track your activity, performance, and opportunities in one place.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="jr-overview-stats">

                        <OverviewStat
                            icon="▣"
                            value="1,540"
                            label="Total Leads"
                            type="blue"
                        />

                        <OverviewStat
                            icon="✉"
                            value="900"
                            label="Emails Sent"
                            type="green"
                        />

                        <OverviewStat
                            icon="◉"
                            value="146"
                            label="Waiting Reply"
                            type="orange"
                        />

                        <OverviewStat
                            icon="✓"
                            value="24"
                            label="Accepted"
                            type="green"
                        />

                    </div>

                    {/* Charts */}
                    <div className="jr-charts-grid">

                        {/* Line Chart */}
                        <div className="jr-chart-card">
                            <div className="jr-chart-header">
                                <strong>
                                    Activity Overview
                                </strong>
                            </div>

                            <div className="jr-line-chart">
                                <ResponsiveContainer
                                    width="100%"
                                    height="100%"
                                >
                                    <LineChart
                                        data={chartData}
                                        margin={{
                                            top: 8,
                                            right: 8,
                                            left: -20,
                                            bottom: 0
                                        }}
                                    >
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{
                                                fontSize: 6
                                            }}
                                        />

                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{
                                                fontSize: 6
                                            }}
                                        />

                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: 6,
                                                border: "1px solid #eee",
                                                fontSize: 10
                                            }}
                                        />

                                        <Line
                                            type="monotone"
                                            dataKey="applications"
                                            stroke="#5138df"
                                            strokeWidth={2}
                                            dot={{
                                                r: 2,
                                                fill: "#5138df"
                                            }}
                                            activeDot={{
                                                r: 4
                                            }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Donut */}
                        <div className="jr-chart-card jr-status-card">
                            <div className="jr-chart-header">
                                <strong>
                                    Opportunity Status
                                </strong>
                            </div>

                            <div className="jr-status-content">
                                <div className="jr-donut">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <PieChart>
                                            <Pie
                                                data={statusData}
                                                dataKey="value"
                                                nameKey="name"
                                                innerRadius="58%"
                                                outerRadius="82%"
                                                paddingAngle={2}
                                                startAngle={90}
                                                endAngle={-270}
                                            >
                                                {statusData.map(
                                                    (_, index) => (
                                                        <Cell
                                                            key={index}
                                                            fill={[
                                                                "#5141df",
                                                                "#f29a24",
                                                                "#744ee0",
                                                                "#24a970",
                                                                "#e34d67"
                                                            ][index]}
                                                        />
                                                    )
                                                )}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>

                                    <div className="jr-donut-center">
                                        <strong>
                                            1,190
                                        </strong>

                                        <span>
                                            Leads
                                        </span>
                                    </div>
                                </div>

                                <div className="jr-status-legend">
                                    {statusData.map(
                                        (item, index) => (
                                            <div
                                                className="jr-status-legend-item"
                                                key={item.name}
                                            >
                                                <span
                                                    style={{
                                                        background: [
                                                            "#5141df",
                                                            "#f29a24",
                                                            "#744ee0",
                                                            "#24a970",
                                                            "#e34d67"
                                                        ][index]
                                                    }}
                                                />

                                                <label>
                                                    {item.name}
                                                </label>

                                                <strong>
                                                    {item.value}
                                                </strong>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


/* =========================================================
   SMALL STAT
========================================================= */
function OverviewStat({
    icon,
    value,
    label,
    type
}) {
    return (
        <div className="jr-overview-stat">
            <div className={`jr-overview-stat-icon ${type}`}>
                {icon}
            </div>

            <div>
                <strong>
                    {value}
                </strong>

                <span>
                    {label}
                </span>
            </div>
        </div>
    );
}

