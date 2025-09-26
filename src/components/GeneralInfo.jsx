import React, { useState } from 'react';

function GeneralInfo({ data, onSubmit, onEdit, isEditing }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      onSubmit(formData);
    }
  };

  if (isEditing) {
    return (
      <div className="section">
        <h2>General Information</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="section">
      <h2>General Information</h2>
      <div className="display-info">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <button onClick={onEdit} className="btn btn-secondary">
          Edit
        </button>
      </div>
    </div>
  );
}

export default GeneralInfo;