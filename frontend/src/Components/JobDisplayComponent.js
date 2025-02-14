import React, { useEffect, useState } from "react";

import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const JobDisplayComponent = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobPostings");
    if (storedJobs) {
      setJobPostings(JSON.parse(storedJobs));
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {jobPostings.map((job) => (
        <Card key={job.id} className="rounded-2xl shadow-md">
          <Card.Header>
            <Card.Title>{job.title}</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="font-semibold">Company: {job.company}</p>
            <p className="text-sm text-gray-600">Location: {job.location}</p>
            <Button className="mt-4 w-full">View Details</Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default JobDisplayComponent;
