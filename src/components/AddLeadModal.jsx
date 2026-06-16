import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";

export default function AddLeadModal({
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

      notes: ""

    });

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

      await axios.post(
        `${API_BASE}/api/job-leads`,
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
        "Failed"
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
            Add New Lead
          </h2>

          <button
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
            placeholder="Hotel / Restaurant Name"
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
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
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
            required
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

          <textarea
            rows={4}
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
                ? "Saving..."
                : "Save Lead"
            }
          </button>

        </form>

      </div>

    </div>

  );

}