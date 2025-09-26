import React, { useState } from 'react';

export default function Experience({ data, onSubmit, onEdit, isEditing }) {
    const [formData, setFormData] = useState(data);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = () => {
      if (formData.company && formData.position && formData.responsibilities && formData.dateFrom && formData.dateTo) {
        onSubmit(formData);
      }
    };
  
    if (isEditing) {
      return (
        <div className="section">
          <h2>Practical Experience</h2>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="position"
              placeholder="Position Title"
              value={formData.position}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="responsibilities"
              placeholder="Main Responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="dateFrom"
              placeholder="From (e.g., Jan 2020)"
              value={formData.dateFrom}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="dateTo"
              placeholder="To (e.g., Dec 2022)"
              value={formData.dateTo}
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
        <h2>Practical Experience</h2>
        <div className="display-info">
          <p><strong>Company:</strong> {data.company}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Responsibilities:</strong> {data.responsibilities}</p>
          <p><strong>Duration:</strong> {data.dateFrom} - {data.dateTo}</p>
          <button onClick={onEdit} className="btn btn-secondary">
            Edit
          </button>
        </div>
      </div>
    );
}