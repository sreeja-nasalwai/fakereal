import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const JobDisplayComponent = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobPostings");
    if (storedJobs) {
      setJobPostings(JSON.parse(storedJobs));
    }
  }, []);

  return (
    <Container className="p-4">
      <Row className="g-4">
        {jobPostings.map((job) => (
          <Col key={job.id} xs={12} md={6} lg={4}>
            <Card className="rounded-2xl shadow-md">
              <Card.Header>
                <Card.Title>{job.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <p className="fw-semibold">Company: {job.company}</p>
                <p className="text-muted">Location: {job.location}</p>
                <Button className="mt-3 w-100">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobDisplayComponent;

