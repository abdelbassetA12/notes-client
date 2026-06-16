import { useEffect, useState } from "react";
import axios from "axios";
import AddLeadModal from "../components/AddLeadModal";
import EditLeadModal from "../components/EditLeadModal";
 import LoadingScreen from "../components/LoadingScreen";

import API_BASE from "../config/api";

import {
  FiSearch,
  FiPlus,
  FiMail,
  FiPhone,
  FiGlobe,
  FiStar,
  FiArchive,
  FiTrash2,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiHome
} from "react-icons/fi";

export default function JobLeads() {

  // =====================================
  // DATA
  // =====================================

  const [leads, setLeads] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    hotels: 0,
    restaurants: 0,
    interviews: 0,
    accepted: 0,
    waiting: 0,
    emailsSent: 0
  });

  const [loading, setLoading] =
    useState(true);

  // =====================================
  // SEARCH
  // =====================================

  const [search, setSearch] =
    useState("");

  // =====================================
  // FILTERS
  // =====================================

  const [type, setType] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [country, setCountry] =
    useState("");

  // =====================================
  // PAGINATION
  // =====================================

  const [page, setPage] =
    useState(1);

  const [pages, setPages] =
    useState(1);

  // =====================================
  // MODALS
  // =====================================

  const [showAddModal, setShowAddModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [selectedLead, setSelectedLead] =
    useState(null);

  // =====================================
  // FETCH LEADS
  // =====================================

  const fetchLeads = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        `${API_BASE}/api/job-leads`,
        {
          params: {
            search,
            type,
            status,
            country,
            page
          },
          withCredentials: true
        }
      );

      setLeads(res.data.leads);
      setPages(res.data.pages);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  // =====================================
  // FETCH STATS
  // =====================================

  const fetchStats = async () => {

    try {

      const res = await axios.get(
        `${API_BASE}/api/job-leads/stats/overview`,
        {
          withCredentials: true
        }
      );

      setStats(res.data);

    } catch (err) {

      console.error(err);

    }

  };

  // =====================================
  // EFFECT
  // =====================================

  useEffect(() => {

    fetchLeads();

  }, [
    search,
    type,
    status,
    country,
    page
  ]);

  useEffect(() => {

    fetchStats();

  }, []);

  // =====================================
  // STATUS BADGE
  // =====================================

  const getStatusClass = (status) => {

    switch (status) {

      case "accepted":
        return "status accepted";

      case "rejected":
        return "status rejected";

      case "interview":
        return "status interview";

      case "waiting_reply":
        return "status waiting";

      case "email_sent":
        return "status sent";

      default:
        return "status";
    }
  };





  // =====================================
// DELETE LEAD
// =====================================

const deleteLead = async (id) => {

  if (
    !window.confirm(
      "Delete this lead ?"
    )
  ) {
    return;
  }

  try {

    await axios.delete(
      `${API_BASE}/api/job-leads/${id}`,
      {
        withCredentials: true
      }
    );

    fetchLeads();
    fetchStats();

  } catch (err) {

    console.error(err);

  }

};

// =====================================
// TOGGLE FAVORITE
// =====================================

const toggleFavorite = async (id) => {

  try {

    await axios.patch(
      `${API_BASE}/api/job-leads/${id}/favorite`,
      {},
      {
        withCredentials: true
      }
    );

    fetchLeads();

  } catch (err) {

    console.error(err);

  }

};

// =====================================
// TOGGLE ARCHIVE
// =====================================

const toggleArchive = async (id) => {

  try {

    await axios.patch(
      `${API_BASE}/api/job-leads/${id}/archive`,
      {},
      {
        withCredentials: true
      }
    );

    fetchLeads();

  } catch (err) {

    console.error(err);

  }

};

// =====================================
// UPDATE STATUS
// =====================================

const updateStatus = async (
  id,
  status
) => {

  try {

    await axios.patch(
      `${API_BASE}/api/job-leads/${id}/status`,
      {
        status
      },
      {
        withCredentials: true
      }
    );

    fetchLeads();
    fetchStats();

  } catch (err) {

    console.error(err);

  }

};












const importCsv = async (e) => {

  const file =
    e.target.files[0];

  if (!file) return;

  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  try {

    await axios.post(
      `${API_BASE}/api/job-leads/import`,
      formData,
      {
        withCredentials:true,
        headers:{
          "Content-Type":
          "multipart/form-data"
        }
      }
    );

    fetchLeads();
    fetchStats();

    alert(
      "Imported Successfully"
    );

  } catch (err) {

    console.error(err);

  }

};

const importExcel = async (e) => {

  const file =
    e.target.files[0];

  if (!file) return;

  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  try {

    await axios.post(
      `${API_BASE}/api/job-leads/import-excel`,
      formData,
      {
        withCredentials:true,
        headers:{
          "Content-Type":
          "multipart/form-data"
        }
      }
    );

    fetchLeads();
    fetchStats();

    alert(
      "Excel Imported Successfully"
    );

  } catch (err) {

    console.error(err);

  }

};


if (loading) return <LoadingScreen />;
  return (
    <div className="job-page">

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <div className="page-header">

        <div>

          <h1>
            Job Applications
          </h1>

          <p>
            Track hotels and restaurants
            you contacted in Europe
          </p>

        </div>

        <label className="import-btn">

  Import CSV

  <input
    type="file"
    accept=".csv"
    hidden
    onChange={importCsv}
  />

</label>

<label className="import-btn">

  Import Excel

  <input
    hidden
    type="file"
    accept=".xlsx,.xls"
    onChange={importExcel}
  />

</label>

        <button
          className="add-btn"
          onClick={() =>
            setShowAddModal(true)
          }
        >
          <FiPlus />
          Add Lead
        </button>

      </div>

      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}

      <div className="stats-grid">

        <div className="stat-card">

          <FiBriefcase />

          <h3>
            {stats.total}
          </h3>

          <span>
            Total Leads
          </span>

        </div>

        <div className="stat-card">

          <FiHome />

          <h3>
            {stats.hotels}
          </h3>

          <span>
            Hotels
          </span>

        </div>

        <div className="stat-card">

          <FiHome />

          <h3>
            {stats.restaurants}
          </h3>

          <span>
            Restaurants
          </span>

        </div>

        <div className="stat-card">

          <FiMail />

          <h3>
            {stats.emailsSent}
          </h3>

          <span>
            Emails Sent
          </span>

        </div>

        <div className="stat-card">

          <FiClock />

          <h3>
            {stats.waiting}
          </h3>

          <span>
            Waiting Reply
          </span>

        </div>

        <div className="stat-card">

          <FiCheckCircle />

          <h3>
            {stats.accepted}
          </h3>

          <span>
            Accepted
          </span>

        </div>

      </div>

      {/* ================================= */}
      {/* SEARCH + FILTERS */}
      {/* ================================= */}

      <div className="filters-card">

        <div className="search-box">

          <FiSearch />

          <input
            type="text"
            placeholder="Search hotel, restaurant, email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
        >

          <option value="">
            All Types
          </option>

          <option value="hotel">
            Hotels
          </option>

          <option value="restaurant">
            Restaurants
          </option>

        </select>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >

          <option value="">
            All Status
          </option>

          <option value="not_contacted">
            Not Contacted
          </option>

          <option value="email_sent">
            Email Sent
          </option>

          <option value="waiting_reply">
            Waiting Reply
          </option>

          <option value="interview">
            Interview
          </option>

          <option value="accepted">
            Accepted
          </option>

          <option value="rejected">
            Rejected
          </option>

        </select>

        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) =>
            setCountry(e.target.value)
          }
        />

      </div>

      {/* ================================= */}
{/* TABLE */}
{/* ================================= */}

<div className="table-card">

  {loading ? (

    <div className="empty-state">
      Loading...
    </div>

  ) : leads.length === 0 ? (

    <div className="empty-state">

      <h3>
        No Leads Found
      </h3>

      <p>
        Start adding hotels and
        restaurants.
      </p>

    </div>

  ) : (

    <table>

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
            Contact
          </th>

          <th>
            Status
          </th>

          <th>
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {leads.map((lead) => (

          <tr key={lead._id}>

            {/* COMPANY */}

            <td>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}
              >

                <strong>
                  {lead.companyName}
                </strong>

                {lead.position && (
                  <small>
                    {lead.position}
                  </small>
                )}

              </div>

            </td>

            {/* TYPE */}

            <td>

              <span
                className={
                  lead.type === "hotel"
                    ? "type hotel"
                    : "type restaurant"
                }
              >

                {lead.type}

              </span>

            </td>

            {/* LOCATION */}

            <td>

              <div>

                {lead.city}

                <br />

                <small>
                  {lead.country}
                </small>

              </div>

            </td>

            {/* CONTACT */}

            <td>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}
              >

                {lead.email && (

                  <a
                   
                    className="action-link"


                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${lead.email}`}
target="_blank"
rel="noreferrer"
                  >
                    <FiMail />
                    {lead.email}
                  </a>

                )}

                {lead.phone && (

                  <a
                    href={`tel:${lead.phone}`}
                    className="action-link"
                  >
                    <FiPhone />
                    {lead.phone}
                  </a>

                )}

                {lead.website && (

                  <a
                    href={lead.website}
                    target="_blank"
                    rel="noreferrer"
                    className="action-link"
                  >
                    <FiGlobe />
                    Website
                  </a>

                )}

              </div>

            </td>

            {/* STATUS */}

            <td>

              <select
                value={lead.status}
                className={getStatusClass(
                  lead.status
                )}
                onChange={(e) =>
                  updateStatus(
                    lead._id,
                    e.target.value
                  )
                }
              >

                <option value="not_contacted">
                  Not Contacted
                </option>

                <option value="email_sent">
                  Email Sent
                </option>

                <option value="waiting_reply">
                  Waiting Reply
                </option>

                <option value="interview">
                  Interview
                </option>

                <option value="accepted">
                  Accepted
                </option>

                <option value="rejected">
                  Rejected
                </option>

              </select>

            </td>

            {/* ACTIONS */}

            <td>

              <div className="actions">

                <button
                  onClick={() =>
                    toggleFavorite(
                      lead._id
                    )
                  }
                  className={
                    lead.favorite
                      ? "icon-btn active"
                      : "icon-btn"
                  }
                >
                  <FiStar />
                </button>

                <button
                  onClick={() =>
                    toggleArchive(
                      lead._id
                    )
                  }
                  className="icon-btn"
                >
                  <FiArchive />
                </button>

                <button
                  onClick={() => {

                    setSelectedLead(
                      lead
                    );

                    setShowEditModal(
                      true
                    );

                  }}
                  className="icon-btn"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteLead(
                      lead._id
                    )
                  }
                  className="icon-btn danger"
                >
                  <FiTrash2 />
                </button>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )}

</div>

{/* ================================= */}
{/* PAGINATION */}
{/* ================================= */}

{pages > 1 && (

  <div className="pagination">

    <button
      disabled={page === 1}
      onClick={() =>
        setPage(
          (prev) => prev - 1
        )
      }
    >
      Previous
    </button>

    <span>
      Page {page} / {pages}
    </span>

    <button
      disabled={page === pages}
      onClick={() =>
        setPage(
          (prev) => prev + 1
        )
      }
    >
      Next
    </button>

  </div>

)}




{showAddModal && (

  <AddLeadModal
    onClose={() =>
      setShowAddModal(false)
    }
    fetchLeads={fetchLeads}
    fetchStats={fetchStats}
  />

)}

{showEditModal && selectedLead && (

  <EditLeadModal
    lead={selectedLead}
    onClose={() =>
      setShowEditModal(false)
    }
    fetchLeads={fetchLeads}
    fetchStats={fetchStats}
  />

)}



<style>
    {
        `
        /* ===================================== */
/* PAGE */
/* ===================================== */

.job-page{
  padding:24px;
  min-height:100vh;
  background:#F1F5F9;
}

/* ===================================== */
/* HEADER */
/* ===================================== */

.page-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  margin-bottom:24px;
}

.page-header h1{
  font-size:32px;
  color:#0F172A;
  margin-bottom:6px;
}

.page-header p{
  color:#64748B;
}


.import-btn{
height:48px;
padding:0 20px;
background:#16A34A;
color:white;
border-radius:12px;
display:flex;
align-items:center;
cursor:pointer;
font-weight:600;
}

.add-btn{
  border:none;
  background:#4F46E5;
  color:white;
  height:48px;
  padding:0 20px;
  border-radius:12px;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  font-weight:600;
  transition:.2s;
}

.add-btn:hover{
  transform:translateY(-2px);
}

/* ===================================== */
/* STATS */
/* ===================================== */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:18px;
  margin-bottom:24px;
}

.stat-card{
  background:white;
  border-radius:18px;
  padding:22px;
  border:1px solid #E2E8F0;
  display:flex;
  flex-direction:column;
  gap:12px;
}

.stat-card svg{
  font-size:26px;
  color:#4F46E5;
}

.stat-card h3{
  font-size:28px;
  color:#0F172A;
}

.stat-card span{
  color:#64748B;
}

/* ===================================== */
/* FILTERS */
/* ===================================== */

.filters-card{
  background:white;
  border:1px solid #E2E8F0;
  border-radius:18px;
  padding:20px;
  margin-bottom:24px;

  display:grid;
  grid-template-columns:
  2fr
  1fr
  1fr
  1fr;
  gap:14px;
}

.search-box{
  position:relative;
}

.search-box svg{
  position:absolute;
  left:14px;
  top:50%;
  transform:translateY(-50%);
  color:#64748B;
}

.search-box input{
  padding-left:42px !important;
}

.filters-card input,
.filters-card select{
  height:48px;
  border:1px solid #E2E8F0;
  border-radius:12px;
  padding:0 14px;
  outline:none;
  background:white;
}

/* ===================================== */
/* TABLE */
/* ===================================== */

.table-card{
  background:white;
  border-radius:20px;
  border:1px solid #E2E8F0;
  overflow:hidden;
}

.table-card table{
  width:100%;
  border-collapse:collapse;
}

.table-card thead{
  background:#F8FAFC;
}

.table-card th{
  text-align:left;
  padding:18px;
  color:#64748B;
  font-size:14px;
  font-weight:600;
}

.table-card td{
  padding:18px;
  border-top:1px solid #F1F5F9;
}

.table-card tr:hover{
  background:#FAFAFC;
}

/* ===================================== */
/* TYPE */
/* ===================================== */

.type{
  padding:8px 12px;
  border-radius:999px;
  font-size:12px;
  font-weight:600;
}

.type.hotel{
  background:#EEF2FF;
  color:#4F46E5;
}

.type.restaurant{
  background:#ECFDF5;
  color:#16A34A;
}

/* ===================================== */
/* LINKS */
/* ===================================== */

.action-link{
  text-decoration:none;
  color:#4F46E5;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:14px;
}

.action-link:hover{
  text-decoration:underline;
}

/* ===================================== */
/* STATUS */
/* ===================================== */

.status{
  border:none;
  border-radius:12px;
  padding:10px;
  font-weight:600;
}

.status.sent{
  background:#DBEAFE;
  color:#2563EB;
}

.status.waiting{
  background:#FEF3C7;
  color:#D97706;
}

.status.interview{
  background:#E0E7FF;
  color:#4F46E5;
}

.status.accepted{
  background:#DCFCE7;
  color:#16A34A;
}

.status.rejected{
  background:#FEE2E2;
  color:#DC2626;
}

/* ===================================== */
/* ACTIONS */
/* ===================================== */

.actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.icon-btn{
  width:38px;
  height:38px;
  border:none;
  border-radius:10px;
  background:#F8FAFC;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:.2s;
}

.icon-btn:hover{
  transform:translateY(-2px);
}

.icon-btn.active{
  background:#FEF3C7;
  color:#F59E0B;
}

.icon-btn.danger{
  background:#FEE2E2;
  color:#DC2626;
}

/* ===================================== */
/* EMPTY */
/* ===================================== */

.empty-state{
  padding:80px 20px;
  text-align:center;
}

.empty-state h3{
  margin-bottom:8px;
  color:#0F172A;
}

.empty-state p{
  color:#64748B;
}

/* ===================================== */
/* PAGINATION */
/* ===================================== */

.pagination{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:16px;
  margin-top:24px;
}

.pagination button{
  height:42px;
  padding:0 16px;
  border:none;
  border-radius:10px;
  background:#4F46E5;
  color:white;
  cursor:pointer;
}

.pagination button:disabled{
  opacity:.5;
  cursor:not-allowed;
}

/* ===================================== */
/* MODAL */
/* ===================================== */

.modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(15,23,42,.55);
  backdrop-filter:blur(6px);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
}

.modal{
  width:900px;
  max-width:95%;
  max-height:90vh;
  overflow:auto;
  background:white;
  border-radius:24px;
  padding:28px;
}

.modal-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:24px;
}

.modal-header h2{
  color:#0F172A;
}

.modal-header button{
  border:none;
  background:#F1F5F9;
  width:40px;
  height:40px;
  border-radius:10px;
  cursor:pointer;
}

/* ===================================== */
/* FORM */
/* ===================================== */

.lead-form{
  display:grid;
  grid-template-columns:
  repeat(2,minmax(0,1fr));
  gap:16px;
}

.lead-form textarea{
  grid-column:1/-1;
}

.lead-form input,
.lead-form select,
.lead-form textarea{
  width:100%;
  border:1px solid #E2E8F0;
  border-radius:12px;
  padding:14px;
  outline:none;
}

.lead-form label{
  color:#64748B;
  font-size:14px;
}

.save-btn{
  grid-column:1/-1;

  height:52px;

  border:none;

  border-radius:12px;

  background:#4F46E5;

  color:white;

  font-weight:600;

  cursor:pointer;
}

/* ===================================== */
/* MOBILE */
/* ===================================== */

@media(max-width:768px){

  .filters-card{
    grid-template-columns:1fr;
  }

  .lead-form{
    grid-template-columns:1fr;
  }

  .page-header{
    flex-direction:column;
    align-items:flex-start;
  }

  .table-card{
    overflow:auto;
  }

}
        `
    }
</style>

    </div>
  );
}