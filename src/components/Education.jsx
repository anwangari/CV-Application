import React, { useState } from 'react';

export default function Education({ data, onSubmit, onEdit, isEditing }) {
    const [formData, setFormData] = useState(data);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = () => {
      if (formData.school && formData.title && formData.date) {
        onSubmit(formData);
      }
    };
  
    if (isEditing) {
      return (
        <div className="section">
          <h2>Educational Experience</h2>
          <div className="form-group">
            <input
              type="text"
              name="school"
              placeholder="School Name"
              value={formData.school}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Title of Study"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="date"
              placeholder="Date of Study (e.g., 2020-2024)"
              value={formData.date}
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
        <h2>Educational Experience</h2>
        <div className="display-info">
          <p><strong>School:</strong> {data.school}</p>
          <p><strong>Title of Study:</strong> {data.title}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <button onClick={onEdit} className="btn btn-secondary">
            Edit
          </button>
        </div>
      </div>
    );
}