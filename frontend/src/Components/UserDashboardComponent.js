import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const UserDashboardComponent = () => {
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('jobPostings')) || [];
        setJobPostings(storedJobs);
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">User Dashboard</h2>

            {/* Stats Section */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="shadow-sm rounded-2xl p-3">
                        <h5>Total Jobs</h5>
                        <p className="display-6 fw-bold">{jobPostings.length}</p>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm rounded-2xl p-3">
                        <h5>Recently Added</h5>
                        <p className="fw-semibold">
                            {jobPostings.length > 0
                                ? jobPostings[jobPostings.length - 1].title
                                : 'No recent jobs'}
                        </p>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm rounded-2xl p-3">
                        <h5>Quick Actions</h5>
                        <Button className="w-100 mt-2" href="#add-job">Add New Job</Button>
                        <Button className="w-100 mt-2" href="#view-jobs" variant="outline-primary">
                            View All Jobs
                        </Button>
                    </Card>
                </Col>
            </Row>

            {/* Recently Added Jobs Section */}
            <h3 className="mb-3">Recent Jobs</h3>
            <Row className="g-3">
                {jobPostings.slice(-3).reverse().map((job, index) => (
                    <Col key={index} md={4}>
                        <Card className="rounded-2xl shadow-md">
                            <Card.Header>
                                <Card.Title>{job.title}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Location: {job.location}</p>
                                <Button className="w-100">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default UserDashboardComponent;
