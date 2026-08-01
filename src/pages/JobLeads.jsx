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

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [countries,setCountries]=useState([]);

const [cities,setCities]=useState({});

const [emailCount, setEmailCount] = useState(0);
//const allCities = [...new Set(Object.values(cities).flat())];
const allCities = Object.entries(cities).flatMap(
  ([country, cityList]) =>
    cityList.map(city => ({
      city,
      country
    }))
);


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



    const [templates, setTemplates] = useState([]);
const [selectedTemplate, setSelectedTemplate] = useState("");

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
            city,
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

  const fetchFilters = async () => {

    try {

        const res = await axios.get(
            `${API_BASE}/api/job-leads/filters`,
            {
                withCredentials: true
            }
        );

        setCountries(res.data.countries);
        setCities(res.data.cities);

    } catch (err) {

        console.error(err);

    }

};


const fetchTemplates = async () => {

  try {

    const res = await axios.get(
      `${API_BASE}/api/email-templates`,
      {
        withCredentials: true
      }
    );

    setTemplates(res.data);

    // اختيار الـ Default تلقائياً
    const defaultTemplate = res.data.find(
      template => template.isDefault
    );

    if (defaultTemplate) {
      setSelectedTemplate(defaultTemplate._id);
    }

  } catch (err) {

    console.error("Failed to load templates", err);

  }

};

const replaceVariables = (text, lead) => {

  if (!text) return "";

  const variables = {

    companyName: lead.companyName || "",
    desiredJob: lead.desiredJob || "",
    country: lead.country || "",
    city: lead.city || "",
    contactPerson: lead.contactPerson || "",
    email: lead.email || "",
    phone: lead.phone || "",

    yourName: "Abdelbasset El Hajiri",
    yourPhone: "+212 700 592 987",
    yourEmail: "abdelbasset.elhajiri1@gmail.com"

  };

  return text.replace(
    /{{\s*([\w]+)\s*}}/g,
    (match, key) => {

      return variables[key] !== undefined
        ? variables[key]
        : match;

    }
  );

};

  // =====================================
  // EFFECT
  // =====================================

  useEffect(() => {

    fetchLeads();
     fetchEmailCount();

  }, [
    search,
    type,
    status,
    country,
    city,
    page
  ]);
 
useEffect(() => {

  fetchStats();
  fetchFilters();
  fetchTemplates();

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

 
/*
const openGmail = () => {

    const emails = leads
        .filter(
            lead =>
                lead.email &&
                lead.email.trim() !== ""
        )
        .map(
            lead =>
                lead.email.trim()
        );

    if(!emails.length){

        alert("No emails found");

        return;
    }

    const subject =
        "Job Application";

    const body = `

Dear Hiring Manager,

I hope you are doing well.

Please find attached my CV.

I would appreciate the opportunity to join your team.

Kind regards

`;

    const url =

`https://mail.google.com/mail/?view=cm&fs=1&bcc=${encodeURIComponent(
emails.join(",")
)}&su=${encodeURIComponent(subject)}
&body=${encodeURIComponent(body)}`;

    window.open(
        url,
        "_blank"
    );

};
*/


const fetchEmailCount = async () => {

  const res = await axios.get(
    `${API_BASE}/api/job-leads/emails`,
    {
      params: {
        search,
        type,
        status,
        country,
        city
      },
      withCredentials: true
    }
  );

  setEmailCount(res.data.count);
};

const openGmail = async () => {

  try {

    // =========================================
    // Get emails according to current filters
    // =========================================

    const res = await axios.get(
      `${API_BASE}/api/job-leads/emails`,
      {
        params: {
          search,
          type,
          status,
          country,
          city
        },
        withCredentials: true
      }
    );

    const emails = res.data.emails;

    if (!emails || emails.length === 0) {

      alert("No emails found");

      return;

    }


    // =========================================
    // Find selected template
    // =========================================

    let template = null;

    if (selectedTemplate) {

      template = templates.find(
        template => template._id === selectedTemplate
      );

    }


    // =========================================
    // If no template selected → use default
    // =========================================

    if (!template) {

      template = templates.find(
        template => template.isDefault === true
      );

    }


    // =========================================
    // No template available
    // =========================================

    if (!template) {

      alert(
        "Please select an email template or set a default template."
      );

      return;

    }


    // =========================================
    // Use the selected/default template
    // EXACTLY as stored in database
    // =========================================

    const subject = template.subject || "";

   

const htmlToPlainText = (html) => {

    return html

        // paragraphs
        .replace(/<\/p>\s*<p>/gi, "\n\n")

        // paragraph closing
        .replace(/<\/p>/gi, "\n\n")

        // line breaks
        .replace(/<br\s*\/?>/gi, "\n")

        // list items
        .replace(/<li>/gi, "• ")
        .replace(/<\/li>/gi, "\n")

        // remove remaining HTML tags
        .replace(/<[^>]+>/g, "")

        // HTML spaces
        .replace(/&nbsp;/gi, " ")

        // decode common entities
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")

        // clean excessive spaces
        .replace(/[ \t]+\n/g, "\n")

        .replace(/\n{3,}/g, "\n\n")

        .trim();
};

const body = htmlToPlainText(
    template.body || ""
);
    //const body = template.body || "";



    // =========================================
    // Open Gmail
    // =========================================

    const url =
      `https://mail.google.com/mail/?view=cm` +
      `&fs=1` +
      `&bcc=${encodeURIComponent(
        emails.join(",")
      )}` +
      `&su=${encodeURIComponent(
        subject
      )}` +
      `&body=${encodeURIComponent(
        body
      )}`;


    window.open(
      url,
      "_blank"
    );


  } catch (err) {

    console.error(
      "Failed to open Gmail:",
      err
    );

    alert(
      "Failed to open Gmail"
    );

  }

};
/*
const openGmail = async () => {

  try {

    const res = await axios.get(
      `${API_BASE}/api/job-leads/emails`,
      {
        params: {
          search,
          type,
          status,
          country,
          city
        },
        withCredentials: true
      }
    );

    const emails = res.data.emails;

    if (!emails.length) {
      alert("No emails found");
      return;
    }

    const subject = "Job Application";

    const body = `

Estimado equipo de  

Me dirijo a ustedes con gran interés para presentar mi candidatura al puesto de Ayudante de Cocina / Agente de Restauración dentro de su establecimiento.

Cuento con formación especializada en hostelería y restauración, además de experiencia profesional en Newrest, empresa internacional reconocida en el sector de la restauración colectiva y catering. Durante mi experiencia profesional he trabajado en entornos dinámicos y de alta exigencia, participando en la preparación de platos, organización del servicio y aplicación rigurosa de normas de higiene y seguridad alimentaria (HACCP).

Me considero una persona responsable, disciplinada y acostumbrada al trabajo bajo presión. Tengo facilidad para trabajar en equipo, adaptarme rápidamente a nuevos entornos y mantener siempre una actitud profesional y positiva durante el servicio.

Más allá de la experiencia técnica, valoro especialmente la organización, el respeto por las normas de calidad y el compromiso con el buen funcionamiento del equipo. Entiendo que en el sector de la restauración cada detalle cuenta, y por ello intento aportar seriedad, constancia y confianza en cada tarea que realizo.

Actualmente busco una oportunidad para seguir creciendo profesionalmente dentro de una empresa seria y profesional donde pueda aportar motivación, compromiso y capacidad de trabajo desde el primer día.

Adjunto mi currículum vitae para su consideración y quedo a su disposición para una entrevista.

Muchas gracias por su tiempo y atención.

Atentamente,

Abdelbasset El Hajiri
+212 700 592 987
abdelbasset.elhajiri1@gmail.com


`;

    const url =
      `https://mail.google.com/mail/?view=cm&fs=1&bcc=${encodeURIComponent(
        emails.join(",")
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank");

  } catch (err) {

    console.error(err);

  }

};
*/


const openLeadEmail = (lead) => {

  if (!lead.email) {
    alert("No email found");
    return;
  }

  // ============================
  // Get selected template
  // ============================

  let template = templates.find(
    t => t._id === selectedTemplate
  );

  // ============================
  // Fallback to default
  // ============================

  if (!template) {

    template = templates.find(
      t => t.isDefault === true
    );

  }

  // ============================
  // No template
  // ============================

  if (!template) {

    alert(
      "No email template found. Please create a template first."
    );

    return;
  }

  // ============================
  // Replace variables
  // ============================

  const replaceVariables = (text) => {

    if (!text) return "";

    const variables = {

      companyName:
        lead.companyName || "",

      desiredJob:
        lead.desiredJob || "",

      country:
        lead.country || "",

      city:
        lead.city || "",

      contactPerson:
        lead.contactPerson || "",

      email:
        lead.email || "",

      phone:
        lead.phone || "",

      yourName:
        "Abdelbasset El Hajiri",

      yourPhone:
        "+212 700 592 987",

      yourEmail:
        "abdelbasset.elhajiri@gmail.com"

    };

    return text.replace(
      /{{\s*([\w]+)\s*}}/g,
      (match, key) => {

        return variables[key] !== undefined
          ? variables[key]
          : match;

      }
    );

  };

  // ============================
  // Generate final email
  // ============================

  const subject =
    replaceVariables(template.subject);


    const htmlToPlainText = (html) => {

    return html
        // paragraphs
        .replace(/<\/p>\s*<p>/gi, "\n\n")

        // end paragraph
        .replace(/<\/p>/gi, "\n\n")

        // line breaks
        .replace(/<br\s*\/?>/gi, "\n")

        // list items
        .replace(/<li>/gi, "• ")
        .replace(/<\/li>/gi, "\n")

        // remove HTML tags
        .replace(/<[^>]+>/g, "")

        // HTML spaces
        .replace(/&nbsp;/gi, " ")

        // entities
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")

        // clean
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
};


const body = htmlToPlainText(
    replaceVariables(template.body)
);

  //const body =  replaceVariables(template.body);

  // ============================
  // Open Gmail
  // ============================

  const url =
    `https://mail.google.com/mail/?view=cm` +
    `&fs=1` +
    `&to=${encodeURIComponent(lead.email)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(
    url,
    "_blank"
  );

};
/*
const openLeadEmail = (lead) => {

  if (!lead.email) {
    alert("No email found");
    return;
  }

  const subject = "Job Application";

  const body = `

Estimado equipo de ${lead.companyName},

Me dirijo a ustedes con gran interés para presentar mi candidatura al puesto de Ayudante de Cocina / Agente de Restauración dentro de su establecimiento.

Cuento con formación especializada en hostelería y restauración, además de experiencia profesional en Newrest, empresa internacional reconocida en el sector.

Adjunto mi currículum vitae para su consideración.

Muchas gracias por su tiempo.

Atentamente,

Abdelbasset El Hajiri
+212 700592987
abdelbasset.elhajiri1@gmail.com

`;

  const url =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      lead.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(url, "_blank");

};*/
 

const handleCountry = (e) => {

  setCountry(e.target.value);

  setCity("");

  setPage(1);

};


/*
const sendPersonalizedEmails = async () => {

  try {

    const res = await axios.post(
      `${API_BASE}/api/job-leads/send`,
      {},
      {
        withCredentials: true
      }
    );

    alert(`Sent: ${res.data.sent}\nFailed: ${res.data.failed}`);

  } catch (err) {

    console.error(err);
    alert("Failed to send emails");

  }

};*/







if (loading) return <LoadingScreen />;

return (
  <div className="job-page">

    {/* =====================================================
        PAGE HEADER
    ===================================================== */}

    <header className="job-header">

      <div className="job-header__content">

        <div className="job-header__icon">
          <FiBriefcase />
        </div>

        <div>
          <h1>Job Applications</h1>

          <p>
            Manage your job leads, applications and follow-ups
            from one place.
          </p>
        </div>

      </div>


      <div className="job-header__actions">

        <button
          className="btn btn--primary"
          onClick={() => setShowAddModal(true)}
        >
          <FiPlus />
          <span>Add Lead</span>
        </button>

      </div>

    </header>


    {/* =====================================================
        QUICK ACTIONS
    ===================================================== */}

    <section className="quick-actions">

      <div className="quick-actions__left">

        {/* Import CSV */}

        <label className="quick-action quick-action--green">

          <div className="quick-action__icon">
            <FiPlus />
          </div>

          <div className="quick-action__content">
            <strong>Import CSV</strong>
            <span>Import leads from CSV</span>
          </div>

          <input
            type="file"
            accept=".csv"
            hidden
            onChange={importCsv}
          />

        </label>


        {/* Import Excel */}

        <label className="quick-action quick-action--blue">

          <div className="quick-action__icon">
            <FiPlus />
          </div>

          <div className="quick-action__content">
            <strong>Import Excel</strong>
            <span>Import leads from Excel</span>
          </div>

          <input
            type="file"
            accept=".xlsx,.xls"
            hidden
            onChange={importExcel}
          />

        </label>


        {/* Gmail */}

        <button
          className="quick-action quick-action--purple"
          onClick={openGmail}
        >

          <div className="quick-action__icon">
            <FiMail />
          </div>

          <div className="quick-action__content">

            <strong>
              Open Gmail
            </strong>

            <span>
              {emailCount} available email
              {emailCount !== 1 ? "s" : ""}
            </span>

          </div>

          <div className="quick-action__arrow">
            →
          </div>

        </button>

      </div>


      {/* Template */}

      <div className="template-control">

        <div className="template-control__icon">
          <FiMail />
        </div>

        <div className="template-control__content">

          <span>
            Email template
          </span>

          <select
            value={selectedTemplate}
            onChange={(e) =>
              setSelectedTemplate(e.target.value)
            }
          >

            <option value="">
              Select template
            </option>

            {templates.map(template => (

              <option
                key={template._id}
                value={template._id}
              >

                {template.isDefault ? "⭐ " : ""}
                {template.name}

              </option>

            ))}

          </select>

        </div>

      </div>

    </section>


    {/* =====================================================
        STATS
    ===================================================== */}

    <section className="stats-section">

      <div className="section-heading">

        <div>
          <h2>Overview</h2>

          <span>
            Your application pipeline
          </span>
        </div>

      </div>


      <div className="stats-grid">

        {/* Total */}

        <div className="stat-card stat-card--total">

          <div className="stat-card__top">

            <div className="stat-card__icon">
              <FiBriefcase />
            </div>

            <span className="stat-card__label">
              Total Leads
            </span>

          </div>

          <strong>
            {stats.total}
          </strong>

        </div>


        {/* Hotels */}

        <div className="stat-card">

          <div className="stat-card__top">

            <div className="stat-card__icon">
              <FiHome />
            </div>

            <span className="stat-card__label">
              Hotels
            </span>

          </div>

          <strong>
            {stats.hotels}
          </strong>

        </div>


        {/* Restaurants */}

        <div className="stat-card">

          <div className="stat-card__top">

            <div className="stat-card__icon">
              <FiHome />
            </div>

            <span className="stat-card__label">
              Restaurants
            </span>

          </div>

          <strong>
            {stats.restaurants}
          </strong>

        </div>


        {/* Emails */}

        <div className="stat-card">

          <div className="stat-card__top">

            <div className="stat-card__icon">
              <FiMail />
            </div>

            <span className="stat-card__label">
              Emails Sent
            </span>

          </div>

          <strong>
            {stats.emailsSent}
          </strong>

        </div>


        {/* Waiting */}

        <div className="stat-card">

          <div className="stat-card__top">

            <div className="stat-card__icon">
              <FiClock />
            </div>

            <span className="stat-card__label">
              Waiting Reply
            </span>

          </div>

          <strong>
            {stats.waiting}
          </strong>

        </div>


        {/* Accepted */}

        <div className="stat-card stat-card--success">

          <div className="stat-card__top">

            <div className="stat-card__icon">
              <FiCheckCircle />
            </div>

            <span className="stat-card__label">
              Accepted
            </span>

          </div>

          <strong>
            {stats.accepted}
          </strong>

        </div>

      </div>

    </section>


    {/* =====================================================
        FILTERS
    ===================================================== */}

    <section className="filters-section">

      <div className="filters-header">

        <div>

          <h2>
            Leads
          </h2>

          <span>
            Search and filter your applications
          </span>

        </div>

        <div className="results-count">
          {leads.length} results
        </div>

      </div>


      <div className="filters-card">

        {/* Search */}

        <div className="search-box">

          <FiSearch />

          <input
            type="text"
            placeholder="Search company, email, position..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

        </div>


        {/* Type */}

        <div className="filter-field">

          <label>
            Type
          </label>

          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
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

        </div>


        {/* Status */}

        <div className="filter-field">

          <label>
            Status
          </label>

          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
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

        </div>


        {/* Country */}

        <div className="filter-field">

          <label>
            Country
          </label>

          <select
            value={country}
            onChange={handleCountry}
          >

            <option value="">
              All Countries
            </option>

            {countries.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>


        {/* City */}

        <div className="filter-field">

          <label>
            City
          </label>

          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setPage(1);
            }}
          >

            <option value="">
              All Cities
            </option>

            {country

              ? (cities[country] || []).map(city => (

                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                  </option>

                ))

              : allCities.map(item => (

                  <option
                    key={`${item.country}-${item.city}`}
                    value={item.city}
                  >
                    {item.city} — {item.country}
                  </option>

                ))

            }

          </select>

        </div>

      </div>

    </section>


    {/* =====================================================
        TABLE
    ===================================================== */}

    <section className="leads-card">

      <div className="leads-table-wrapper">

        {leads.length === 0 ? (

          <div className="empty-state">

            <div className="empty-state__icon">
              <FiBriefcase />
            </div>

            <h3>
              No leads found
            </h3>

            <p>
              Try changing your filters or add a new lead.
            </p>

            <button
              className="btn btn--primary"
              onClick={() => setShowAddModal(true)}
            >
              <FiPlus />
              Add Lead
            </button>

          </div>

        ) : (

          <table className="leads-table">

            <thead>

              <tr>

                <th>
                  COMPANY
                </th>

                <th>
                  TYPE
                </th>

                <th>
                  LOCATION
                </th>

                <th>
                  CONTACT
                </th>

                <th>
                  STATUS
                </th>

                <th>
                  ACTIONS
                </th>

              </tr>

            </thead>


            <tbody>

              {leads.map((lead) => (

                <tr key={lead._id}>

                  {/* COMPANY */}

                  <td>

                    <div className="company-cell">

                      <div className="company-avatar">
                        {lead.companyName
                          ?.charAt(0)
                          ?.toUpperCase() || "?"}
                      </div>

                      <div className="company-info">

                        <strong>
                          {lead.companyName}
                        </strong>

                        {lead.position && (

                          <span>
                            {lead.position}
                          </span>

                        )}

                      </div>

                    </div>

                  </td>


                  {/* TYPE */}

                  <td>

                    <span
                      className={`type-badge ${
                        lead.type === "hotel"
                          ? "type-badge--hotel"
                          : "type-badge--restaurant"
                      }`}
                    >

                      {lead.type === "hotel"
                        ? "Hotel"
                        : "Restaurant"}

                    </span>

                  </td>


                  {/* LOCATION */}

                  <td>

                    <div className="location-cell">

                      <strong>
                        {lead.city || "—"}
                      </strong>

                      <span>
                        {lead.country || "—"}
                      </span>

                    </div>

                  </td>


                  {/* CONTACT */}

                  <td>

                    <div className="contact-cell">

                      {lead.email && (

                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                            lead.email
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          title={lead.email}
                        >

                          <FiMail />

                          <span>
                            {lead.email}
                          </span>

                        </a>

                      )}

                      {lead.phone && (

                        <a
                          href={`tel:${lead.phone}`}
                          title={lead.phone}
                        >

                          <FiPhone />

                          <span>
                            {lead.phone}
                          </span>

                        </a>

                      )}

                      {lead.website && (

                        <a
                          href={lead.website}
                          target="_blank"
                          rel="noreferrer"
                        >

                          <FiGlobe />

                          <span>
                            Website
                          </span>

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

                    <div className="lead-actions">

                      {/* Send Email */}

                      <button
                        className="table-action table-action--email"
                        title="Send Email"
                        onClick={() =>
                          openLeadEmail(lead)
                        }
                      >
                        <FiMail />
                      </button>


                      {/* Favorite */}

                      <button
                        className={`table-action ${
                          lead.favorite
                            ? "table-action--favorite active"
                            : ""
                        }`}
                        title={
                          lead.favorite
                            ? "Remove Favorite"
                            : "Add Favorite"
                        }
                        onClick={() =>
                          toggleFavorite(
                            lead._id
                          )
                        }
                      >
                        <FiStar />
                      </button>


                      {/* Edit */}

                      <button
                        className="table-action"
                        title="Edit Lead"
                        onClick={() => {

                          setSelectedLead(
                            lead
                          );

                          setShowEditModal(
                            true
                          );

                        }}
                      >
                        Edit
                      </button>


                      {/* Archive */}

                      <button
                        className="table-action"
                        title="Archive"
                        onClick={() =>
                          toggleArchive(
                            lead._id
                          )
                        }
                      >
                        <FiArchive />
                      </button>


                      {/* Delete */}

                      <button
                        className="table-action table-action--danger"
                        title="Delete"
                        onClick={() =>
                          deleteLead(
                            lead._id
                          )
                        }
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

    </section>


    {/* =====================================================
        PAGINATION
    ===================================================== */}

    {pages > 1 && (

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(prev => prev - 1)
          }
        >
          ← Previous
        </button>

        <div className="pagination__info">

          <span>
            Page
          </span>

          <strong>
            {page}
          </strong>

          <span>
            of {pages}
          </span>

        </div>

        <button
          disabled={page === pages}
          onClick={() =>
            setPage(prev => prev + 1)
          }
        >
          Next →
        </button>

      </div>

    )}


    {/* =====================================================
        MODALS
    ===================================================== */}

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


    {/* =====================================================
        STYLES
    ===================================================== */}

    <style>{`

      /* =====================================================
         BASE
      ===================================================== */

      .job-page{
        min-height:100vh;
        padding:32px;
        background:#F8FAFC;
        color:#0F172A;
      }


      /* =====================================================
         HEADER
      ===================================================== */

      .job-header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:24px;
        margin-bottom:24px;
      }

      .job-header__content{
        display:flex;
        align-items:center;
        gap:16px;
      }

      .job-header__icon{
        width:52px;
        height:52px;
        border-radius:15px;
        background:#EEF2FF;
        color:#4F46E5;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:23px;
        flex-shrink:0;
      }

      .job-header h1{
        margin:0 0 5px;
        font-size:30px;
        font-weight:750;
        letter-spacing:-.6px;
        color:#0F172A;
      }

      .job-header p{
        margin:0;
        color:#64748B;
        font-size:14px;
      }


      /* =====================================================
         BUTTONS
      ===================================================== */

      .btn{
        height:46px;
        border:none;
        border-radius:12px;
        padding:0 18px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:9px;
        font-weight:650;
        cursor:pointer;
        transition:.2s ease;
      }

      .btn:hover{
        transform:translateY(-1px);
      }

      .btn--primary{
        background:#4F46E5;
        color:white;
        box-shadow:0 6px 16px rgba(79,70,229,.18);
      }


      /* =====================================================
         QUICK ACTIONS
      ===================================================== */

      .quick-actions{
        background:white;
        border:1px solid #E2E8F0;
        border-radius:18px;
        padding:14px;
        margin-bottom:28px;

        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:16px;

        box-shadow:0 2px 8px rgba(15,23,42,.025);
      }

      .quick-actions__left{
        display:flex;
        align-items:center;
        gap:10px;
        flex:1;
      }

      .quick-action{
        min-height:64px;
        flex:1;
        border:1px solid #E2E8F0;
        border-radius:13px;
        padding:10px 13px;
        background:white;
        display:flex;
        align-items:center;
        gap:11px;
        cursor:pointer;
        text-align:left;
        transition:.2s ease;
      }

      .quick-action:hover{
        border-color:#CBD5E1;
        transform:translateY(-1px);
        box-shadow:0 5px 14px rgba(15,23,42,.06);
      }

      .quick-action__icon{
        width:38px;
        height:38px;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      }

      .quick-action__content{
        display:flex;
        flex-direction:column;
        gap:3px;
        min-width:0;
      }

      .quick-action__content strong{
        font-size:13px;
        color:#0F172A;
      }

      .quick-action__content span{
        font-size:11px;
        color:#94A3B8;
        white-space:nowrap;
      }

      .quick-action--green .quick-action__icon{
        background:#ECFDF5;
        color:#16A34A;
      }

      .quick-action--blue .quick-action__icon{
        background:#EFF6FF;
        color:#2563EB;
      }

      .quick-action--purple .quick-action__icon{
        background:#EEF2FF;
        color:#4F46E5;
      }

      .quick-action__arrow{
        margin-left:auto;
        color:#94A3B8;
      }


      /* =====================================================
         TEMPLATE
      ===================================================== */

      .template-control{
        min-width:250px;
        max-width:300px;
        display:flex;
        align-items:center;
        gap:11px;
        padding-left:16px;
        border-left:1px solid #E2E8F0;
      }

      .template-control__icon{
        width:38px;
        height:38px;
        border-radius:10px;
        background:#F8FAFC;
        color:#64748B;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      }

      .template-control__content{
        display:flex;
        flex-direction:column;
        gap:4px;
        width:100%;
      }

      .template-control__content > span{
        font-size:11px;
        color:#94A3B8;
      }

      .template-control select{
        border:none;
        outline:none;
        background:transparent;
        font-size:13px;
        font-weight:600;
        color:#334155;
        width:100%;
        cursor:pointer;
      }


      /* =====================================================
         SECTION HEADING
      ===================================================== */

      .section-heading,
      .filters-header{
        display:flex;
        align-items:flex-end;
        justify-content:space-between;
        margin-bottom:13px;
      }

      .section-heading h2,
      .filters-header h2{
        margin:0 0 3px;
        font-size:18px;
        font-weight:700;
        color:#0F172A;
      }

      .section-heading span,
      .filters-header span{
        font-size:13px;
        color:#94A3B8;
      }


      /* =====================================================
         STATS
      ===================================================== */

      .stats-section{
        margin-bottom:28px;
      }

      .stats-grid{
        display:grid;
        grid-template-columns:
          repeat(6,minmax(0,1fr));
        gap:12px;
      }

      .stat-card{
        background:white;
        border:1px solid #E2E8F0;
        border-radius:16px;
        padding:16px;
        min-width:0;
        transition:.2s ease;
      }

      .stat-card:hover{
        transform:translateY(-2px);
        box-shadow:0 7px 18px rgba(15,23,42,.05);
      }

      .stat-card__top{
        display:flex;
        align-items:center;
        gap:9px;
        margin-bottom:13px;
      }

      .stat-card__icon{
        width:32px;
        height:32px;
        border-radius:9px;
        background:#F1F5F9;
        color:#64748B;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:15px;
      }

      .stat-card__label{
        font-size:12px;
        color:#64748B;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      .stat-card > strong{
        display:block;
        font-size:25px;
        font-weight:750;
        letter-spacing:-.5px;
        color:#0F172A;
      }

      .stat-card--total{
        border-color:#C7D2FE;
      }

      .stat-card--total .stat-card__icon{
        background:#EEF2FF;
        color:#4F46E5;
      }

      .stat-card--success{
        border-color:#BBF7D0;
      }

      .stat-card--success .stat-card__icon{
        background:#ECFDF5;
        color:#16A34A;
      }


      /* =====================================================
         FILTERS
      ===================================================== */

      .filters-section{
        margin-bottom:18px;
      }

      .results-count{
        padding:6px 10px;
        background:#F1F5F9;
        color:#64748B;
        border-radius:8px;
        font-size:12px;
        font-weight:600;
      }

      .filters-card{
        background:white;
        border:1px solid #E2E8F0;
        border-radius:17px;
        padding:16px;

        display:grid;
        grid-template-columns:
          minmax(260px,2fr)
          repeat(4,minmax(130px,1fr));

        gap:12px;
      }

      .search-box{
        height:48px;
        position:relative;
      }

      .search-box svg{
        position:absolute;
        left:14px;
        top:50%;
        transform:translateY(-50%);
        color:#94A3B8;
        font-size:17px;
      }

      .search-box input{
        width:100%;
        height:100%;
        border:1px solid #E2E8F0;
        border-radius:11px;
        padding:0 14px 0 42px;
        outline:none;
        color:#334155;
        background:#F8FAFC;
        transition:.2s;
      }

      .search-box input:focus{
        background:white;
        border-color:#A5B4FC;
        box-shadow:0 0 0 3px rgba(99,102,241,.08);
      }

      .filter-field{
        display:flex;
        flex-direction:column;
        gap:5px;
      }

      .filter-field label{
        font-size:10px;
        text-transform:uppercase;
        letter-spacing:.5px;
        font-weight:700;
        color:#94A3B8;
        padding-left:2px;
      }

      .filter-field select{
        height:38px;
        width:100%;
        border:1px solid #E2E8F0;
        border-radius:10px;
        padding:0 10px;
        outline:none;
        background:#F8FAFC;
        color:#334155;
        font-size:13px;
        cursor:pointer;
      }

      .filter-field select:focus{
        background:white;
        border-color:#A5B4FC;
      }


      /* =====================================================
         TABLE
      ===================================================== */

      .leads-card{
        background:white;
        border:1px solid #E2E8F0;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 2px 8px rgba(15,23,42,.025);
      }

      .leads-table-wrapper{
        width:100%;
        overflow-x:auto;
      }

      .leads-table{
        width:100%;
        min-width:1050px;
        border-collapse:collapse;
      }

      .leads-table thead{
        background:#F8FAFC;
      }

      .leads-table th{
        text-align:left;
        padding:13px 18px;
        border-bottom:1px solid #E2E8F0;
        color:#94A3B8;
        font-size:10px;
        letter-spacing:.6px;
        font-weight:750;
      }

      .leads-table td{
        padding:15px 18px;
        border-bottom:1px solid #F1F5F9;
        vertical-align:middle;
      }

      .leads-table tbody tr{
        transition:.15s ease;
      }

      .leads-table tbody tr:hover{
        background:#FAFBFF;
      }

      .leads-table tbody tr:last-child td{
        border-bottom:none;
      }


      /* =====================================================
         COMPANY
      ===================================================== */

      .company-cell{
        display:flex;
        align-items:center;
        gap:11px;
        min-width:190px;
      }

      .company-avatar{
        width:40px;
        height:40px;
        border-radius:11px;
        background:#EEF2FF;
        color:#4F46E5;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:750;
        flex-shrink:0;
      }

      .company-info{
        display:flex;
        flex-direction:column;
        gap:4px;
        min-width:0;
      }

      .company-info strong{
        font-size:13px;
        color:#0F172A;
        max-width:220px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }

      .company-info span{
        color:#94A3B8;
        font-size:11px;
        max-width:220px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }


      /* =====================================================
         TYPE
      ===================================================== */

      .type-badge{
        display:inline-flex;
        align-items:center;
        padding:6px 9px;
        border-radius:8px;
        font-size:11px;
        font-weight:700;
      }

      .type-badge--hotel{
        background:#EEF2FF;
        color:#4F46E5;
      }

      .type-badge--restaurant{
        background:#ECFDF5;
        color:#16A34A;
      }


      /* =====================================================
         LOCATION
      ===================================================== */

      .location-cell{
        display:flex;
        flex-direction:column;
        gap:3px;
      }

      .location-cell strong{
        font-size:12px;
        color:#334155;
      }

      .location-cell span{
        font-size:11px;
        color:#94A3B8;
      }


      /* =====================================================
         CONTACT
      ===================================================== */

      .contact-cell{
        display:flex;
        flex-direction:column;
        gap:6px;
        min-width:180px;
      }

      .contact-cell a{
        display:flex;
        align-items:center;
        gap:7px;
        color:#64748B;
        text-decoration:none;
        font-size:11px;
        max-width:210px;
      }

      .contact-cell a:hover{
        color:#4F46E5;
      }

      .contact-cell a svg{
        flex-shrink:0;
        font-size:14px;
      }

      .contact-cell a span{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }


      /* =====================================================
         STATUS
      ===================================================== */

      .status{
        border:none;
        outline:none;
        border-radius:8px;
        padding:8px 10px;
        font-size:11px;
        font-weight:700;
        cursor:pointer;
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


      /* =====================================================
         ACTIONS
      ===================================================== */

      .lead-actions{
        display:flex;
        align-items:center;
        gap:5px;
        white-space:nowrap;
      }

      .table-action{
        width:32px;
        height:32px;
        border:1px solid #E2E8F0;
        border-radius:8px;
        background:white;
        color:#64748B;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        font-size:12px;
        transition:.15s;
      }

      .table-action:hover{
        background:#F8FAFC;
        color:#4F46E5;
        border-color:#C7D2FE;
      }

      .table-action--email{
        color:#4F46E5;
      }

      .table-action--favorite.active{
        background:#FEF3C7;
        border-color:#FDE68A;
        color:#D97706;
      }

      .table-action--danger:hover{
        background:#FEF2F2;
        border-color:#FECACA;
        color:#DC2626;
      }


      /* =====================================================
         EMPTY
      ===================================================== */

      .empty-state{
        min-height:330px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:40px 20px;
      }

      .empty-state__icon{
        width:58px;
        height:58px;
        border-radius:16px;
        background:#F1F5F9;
        color:#94A3B8;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:23px;
        margin-bottom:15px;
      }

      .empty-state h3{
        margin:0 0 6px;
        font-size:17px;
      }

      .empty-state p{
        margin:0 0 18px;
        color:#94A3B8;
        font-size:13px;
      }


      /* =====================================================
         PAGINATION
      ===================================================== */

      .pagination{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:15px;
        margin-top:18px;
      }

      .pagination button{
        height:38px;
        padding:0 14px;
        border:1px solid #E2E8F0;
        border-radius:9px;
        background:white;
        color:#475569;
        font-size:12px;
        font-weight:600;
        cursor:pointer;
      }

      .pagination button:hover:not(:disabled){
        border-color:#C7D2FE;
        color:#4F46E5;
      }

      .pagination button:disabled{
        opacity:.4;
        cursor:not-allowed;
      }

      .pagination__info{
        display:flex;
        align-items:center;
        gap:5px;
        color:#94A3B8;
        font-size:12px;
      }

      .pagination__info strong{
        color:#334155;
      }


      /* =====================================================
         RESPONSIVE
      ===================================================== */

      @media(max-width:1200px){

        .stats-grid{
          grid-template-columns:
            repeat(3,minmax(0,1fr));
        }

        .quick-actions{
          flex-direction:column;
          align-items:stretch;
        }

        .template-control{
          max-width:none;
          border-left:none;
          border-top:1px solid #E2E8F0;
          padding:14px 0 0;
        }

      }


      @media(max-width:900px){

        .job-page{
          padding:20px;
        }

        .filters-card{
          grid-template-columns:
            repeat(2,minmax(0,1fr));
        }

        .search-box{
          grid-column:1/-1;
        }

        .quick-actions__left{
          flex-direction:column;
        }

        .quick-action{
          width:100%;
        }

      }


      @media(max-width:640px){

        .job-page{
          padding:15px;
        }

        .job-header{
          align-items:flex-start;
          flex-direction:column;
        }

        .job-header__content{
          align-items:flex-start;
        }

        .job-header h1{
          font-size:24px;
        }

        .job-header__actions,
        .job-header__actions .btn{
          width:100%;
        }

        .stats-grid{
          grid-template-columns:
            repeat(2,minmax(0,1fr));
        }

        .filters-card{
          grid-template-columns:1fr;
        }

        .search-box{
          grid-column:auto;
        }

        .filters-header{
          align-items:flex-start;
          gap:10px;
        }

      }


































      /* =====================================================
   MODALS
===================================================== */

.modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(15,23,42,.58);
  backdrop-filter:blur(7px);

  display:flex;
  align-items:center;
  justify-content:center;

  padding:24px;

  z-index:9999;
}

.modal{
  width:900px;
  max-width:100%;
  max-height:90vh;

  overflow-y:auto;

  background:white;

  border-radius:22px;

  padding:28px;

  box-shadow:
    0 25px 60px rgba(15,23,42,.18);

  animation:modalIn .2s ease;
}

@keyframes modalIn{

  from{
    opacity:0;
    transform:translateY(10px) scale(.98);
  }

  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }

}


/* =====================================================
   MODAL HEADER
===================================================== */

.modal-header{
  display:flex;
  align-items:center;
  justify-content:space-between;

  gap:20px;

  margin-bottom:24px;
}

.modal-header h2{
  margin:0;

  color:#0F172A;

  font-size:22px;
  font-weight:750;
}

.modal-header p{
  margin:5px 0 0;

  color:#94A3B8;

  font-size:13px;
}

.modal-header button{
  width:38px;
  height:38px;

  border:none;

  border-radius:10px;

  background:#F1F5F9;

  color:#64748B;

  display:flex;
  align-items:center;
  justify-content:center;

  cursor:pointer;

  transition:.2s;
}

.modal-header button:hover{
  background:#E2E8F0;
  color:#0F172A;
}


/* =====================================================
   FORM
===================================================== */

.lead-form{
  display:grid;

  grid-template-columns:
    repeat(2,minmax(0,1fr));

  gap:18px;
}


/* =====================================================
   FORM FIELD
===================================================== */

.lead-form > div{
  display:flex;
  flex-direction:column;
  gap:7px;
}

.lead-form label{
  color:#475569;

  font-size:12px;

  font-weight:650;
}


/* =====================================================
   INPUTS
===================================================== */

.lead-form input,
.lead-form select,
.lead-form textarea{

  width:100%;

  border:1px solid #E2E8F0;

  border-radius:11px;

  background:#F8FAFC;

  color:#0F172A;

  font-size:13px;

  padding:12px 13px;

  outline:none;

  transition:
    border-color .2s,
    box-shadow .2s,
    background .2s;
}

.lead-form input,
.lead-form select{
  height:45px;
}

.lead-form textarea{
  min-height:120px;

  resize:vertical;

  line-height:1.6;
}

.lead-form input:focus,
.lead-form select:focus,
.lead-form textarea:focus{

  background:white;

  border-color:#A5B4FC;

  box-shadow:
    0 0 0 3px rgba(99,102,241,.08);
}


/* =====================================================
   FULL WIDTH FIELDS
===================================================== */

.lead-form textarea{
  grid-column:1 / -1;
}


/*
  إذا كان عندك div خاص بالأزرار
*/

.lead-form .form-actions{
  grid-column:1 / -1;

  display:flex;
  justify-content:flex-end;
  align-items:center;

  gap:10px;

  padding-top:8px;

  border-top:1px solid #F1F5F9;
}


/* =====================================================
   SAVE BUTTON
===================================================== */

.save-btn{

  height:46px;

  padding:0 20px;

  border:none;

  border-radius:11px;

  background:#4F46E5;

  color:white;

  font-size:13px;

  font-weight:650;

  cursor:pointer;

  transition:.2s;

  box-shadow:
    0 5px 14px rgba(79,70,229,.18);
}

.save-btn:hover{

  background:#4338CA;

  transform:translateY(-1px);
}


/* =====================================================
   CANCEL BUTTON
===================================================== */

.cancel-btn{

  height:46px;

  padding:0 18px;

  border:1px solid #E2E8F0;

  border-radius:11px;

  background:white;

  color:#64748B;

  font-size:13px;

  font-weight:600;

  cursor:pointer;

  transition:.2s;
}

.cancel-btn:hover{

  background:#F8FAFC;

  color:#334155;
}


/* =====================================================
   MODAL RESPONSIVE
===================================================== */

@media(max-width:700px){

  .modal-overlay{
    padding:14px;
    align-items:flex-end;
  }

  .modal{

    max-height:94vh;

    border-radius:20px 20px 0 0;

    padding:20px;
  }

  .lead-form{
    grid-template-columns:1fr;
  }

  .lead-form textarea{
    grid-column:auto;
  }

  .lead-form .form-actions{
    grid-column:auto;

    flex-direction:column-reverse;
  }

  .lead-form .form-actions button{
    width:100%;
  }

}

    `}</style>

  </div>
);
 



 

  

 
 

}









/*
 return (
    <div className="job-page">

    

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
     

  <button
    className="add-btn"
    onClick={openGmail}
>
    <FiMail />
    Open Gmail ({emailCount})

     

</button>

<div className="template-selector">

  <FiMail />

  <select
    value={selectedTemplate}
    onChange={(e) =>
      setSelectedTemplate(e.target.value)
    }
  >

    <option value="">
      Select Email Template
    </option>

    {templates.map(template => (

      <option
        key={template._id}
        value={template._id}
      >

        {template.isDefault ? "⭐ " : ""}
        {template.name}

      </option>

    ))}

  </select>

</div>
 



 

      </div>

     

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
        <select
  value={country}
  onChange={handleCountry}
>

  <option value="">
    All Countries
  </option>

  {countries.map((item) => (

    <option
      key={item}
      value={item}
    >
      {item}
    </option>

  ))}

</select>





<select
    value={city}
    onChange={(e) => {
        setCity(e.target.value);
        setPage(1);
    }}
>
    <option value="">
        All Cities
    </option>

    {country
  ? (cities[country] || []).map(city => (
      <option
        key={city}
        value={city}
      >
        {city}
      </option>
    ))
  : allCities.map(item => (
      <option
        key={`${item.country}-${item.city}`}
        value={item.city}
      >
        {item.city} - {item.country}
      </option>
    ))
}

   

</select>



        

      </div>

   

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

             

            <td>

              <div>

                {lead.city}

                <br />

                <small>
                  {lead.country}
                </small>

              </div>

            </td>

            

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

           

            <td>

              <div className="actions">
                <button
  onClick={() => openLeadEmail(lead)}
  className="icon-btn"
  title="Send Email"
>
  <FiMail />
</button>

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
       

.job-page{
  padding:24px;
  min-height:100vh;
  background:#F1F5F9;
}

 

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

 

.table-card{
  background:white;
  border-radius:20px;
  border:1px solid #E2E8F0;
  overflow-y: scroll;
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
 */
