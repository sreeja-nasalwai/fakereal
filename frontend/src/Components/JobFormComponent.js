import React, { useState } from 'react';

const JobFormComponent = () => {
    const [formData, setFormData] = useState({
        job_id: '',
        title: '',
        location: '',
        department: '',
        salary_range: '',
        company_profile: '',
        description: '',
        requirements: '',
        benefits: '',
        telecommuting: false,
        has_company_logo: false,
        has_questions: false,
        employment_type: '',
        required_experience: '',
        required_education: '',
        industry: '',
        function: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form submission (send to backend or log it)
    };

    return (
        <div className="container">
            <h2 className="mt-5">Job Posting Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="job_id" className="form-label">Job ID</label>
                    <input type="text" id="job_id" name="job_id" className="form-control" value={formData.job_id} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" id="location" name="location" className="form-control" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input type="text" id="department" name="department" className="form-control" value={formData.department} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="salary_range" className="form-label">Salary Range</label>
                    <input type="text" id="salary_range" name="salary_range" className="form-control" value={formData.salary_range} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="company_profile" className="form-label">Company Profile</label>
                    <textarea id="company_profile" name="company_profile" className="form-control" value={formData.company_profile} onChange={handleChange}  />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Job Description</label>
                    <textarea id="description" name="description" className="form-control" value={formData.description} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="requirements" className="form-label">Requirements</label>
                    <textarea id="requirements" name="requirements" className="form-control" value={formData.requirements} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="benefits" className="form-label">Benefits</label>
                    <textarea id="benefits" name="benefits" className="form-control" value={formData.benefits} onChange={handleChange}  />
                </div>

                

                <div className="mb-3">
                    <label htmlFor="employment_type" className="form-label">Employment Type</label>
                    <input type="text" id="employment_type" name="employment_type" className="form-control" value={formData.employment_type} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="required_experience" className="form-label">Required Experience</label>
                    <input type="text" id="required_experience" name="required_experience" className="form-control" value={formData.required_experience} onChange={handleChange}  />
                </div>

                <div className="mb-3">
                    <label htmlFor="required_education" className="form-label">Required Education</label>
                    <input type="text" id="required_education" name="required_education" className="form-control" value={formData.required_education} onChange={handleChange}  />
                </div>

                <div className="mb-3">
                    <label htmlFor="industry" className="form-label">Industry</label>
                    <input type="text" id="industry" name="industry" className="form-control" value={formData.industry} onChange={handleChange}  />
                </div>

                <div className="mb-3">
                    <label htmlFor="function" className="form-label">Function</label>
                    <input type="text" id="function" name="function" className="form-control" value={formData.function} onChange={handleChange}  />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default JobFormComponent;
