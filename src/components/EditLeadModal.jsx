import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";

export default function EditLeadModal({
  lead,
  onClose,
  fetchLeads,
  fetchStats
}) {

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({

      companyName: "",

      type: "hotel",

      country: "",

      city: "",

      website: "",

      email: "",

      phone: "",

      contactPerson: "",

      position: "",

      desiredJob: "",

      contractType: "any",

      status: "not_contacted",

      notes: "",

      nextFollowUp: "",

      lastContactDate: ""

    });

  useEffect(() => {

    if (!lead) return;

    setForm({

      companyName:
        lead.companyName || "",

      type:
        lead.type || "hotel",

      country:
        lead.country || "",

      city:
        lead.city || "",

      website:
        lead.website || "",

      email:
        lead.email || "",

      phone:
        lead.phone || "",

      contactPerson:
        lead.contactPerson || "",

      position:
        lead.position || "",

      desiredJob:
        lead.desiredJob || "",

      contractType:
        lead.contractType || "any",

      status:
        lead.status ||
        "not_contacted",

      notes:
        lead.notes || "",

      nextFollowUp:
        lead.nextFollowUp
          ? lead.nextFollowUp
              .split("T")[0]
          : "",

      lastContactDate:
        lead.lastContactDate
          ? lead.lastContactDate
              .split("T")[0]
          : ""

    });

  }, [lead]);

  const handleChange = (e) => {

    setForm(prev => ({
      ...prev,
      [e.target.name]:
        e.target.value
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await axios.put(
        `${API_BASE}/api/job-leads/${lead._id}`,
        form,
        {
          withCredentials: true
        }
      );

      fetchLeads();
      fetchStats();

      onClose();

    } catch (err) {

      console.error(err);

      alert(
        err.response?.data?.error ||
        "Update failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <h2>
            Edit Lead
          </h2>

          <button
            type="button"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="lead-form"
        >

          <input
            name="companyName"
            placeholder="Hotel / Restaurant"
            value={form.companyName}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >

            <option value="hotel">
              Hotel
            </option>

            <option value="restaurant">
              Restaurant
            </option>

          </select>

          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="contactPerson"
            placeholder="Contact Person"
            value={form.contactPerson}
            onChange={handleChange}
          />

          <input
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
          />

          <input
            name="desiredJob"
            placeholder="Desired Job"
            value={form.desiredJob}
            onChange={handleChange}
          />

          <select
            name="contractType"
            value={form.contractType}
            onChange={handleChange}
          >

            <option value="any">
              Any Contract
            </option>

            <option value="full_time">
              Full Time
            </option>

            <option value="part_time">
              Part Time
            </option>

            <option value="seasonal">
              Seasonal
            </option>

            <option value="internship">
              Internship
            </option>

          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
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

          <label>
            Last Contact Date
          </label>

          <input
            type="date"
            name="lastContactDate"
            value={form.lastContactDate}
            onChange={handleChange}
          />

          <label>
            Next Follow Up
          </label>

          <input
            type="date"
            name="nextFollowUp"
            value={form.nextFollowUp}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="save-btn"
          >

            {
              loading
                ? "Updating..."
                : "Update Lead"
            }

          </button>

        </form>

      </div>

    </div>

  );

}