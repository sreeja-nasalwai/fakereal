import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUsComponent() {
    const containerStyle = {
        padding: '40px',
        backgroundColor: '#f9f9f9'
    };

    const sectionStyle = {
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    };

    const textStyle = {
        maxWidth: '600px',
        fontSize: '1.1rem',
        lineHeight: '2',
        textAlign: 'justify',
        flex: '1 1 45%',
        padding: '10px'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        maxWidth: '500px',
        borderRadius: '10px',
        transition: 'transform 0.3s ease-in-out',
        flex: '1 1 45%',
        padding: '10px'
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontSize: '2.5rem',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
           
            <h2 style={titleStyle}>About Us</h2>

            <div style={sectionStyle}>
                <div style={textStyle}>
                    <p>
                        Our platform is dedicated to connecting job seekers with trusted employers while ensuring job authenticity through AI-powered fake job detection.
                    </p>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        src="https://example.com/job-portal.jpg"
                        alt="Job Portal"
                    />
                </div>
            </div>

            <div style={{...sectionStyle, flexDirection: 'row-reverse'}}>
                <div style={textStyle}>
                    <h2>Our Mission</h2>
                    <p>
                        We strive to create a safe and efficient job search experience by eliminating fraudulent job postings and ensuring transparency in hiring.
                    </p>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        src="https://example.com/mission.jpg"
                        alt="Our Mission"
                    />
                </div>
            </div>

            <div style={sectionStyle}>
                <div style={textStyle}>
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Integrity:</strong> Ensuring honesty and transparency in all job listings.</li>
                        <li><strong>Security:</strong> Advanced fraud detection for a safe job search.</li>
                        <li><strong>User-Centric Approach:</strong> Designed for a seamless experience.</li>
                    </ul>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        src="https://example.com/values.jpg"
                        alt="Our Values"
                    />
                </div>
            </div>

            <div style={{...sectionStyle, flexDirection: 'row-reverse'}}>
                <div style={textStyle}>
                    <h2>Why Choose Us?</h2>
                    <p>
                        With AI-driven job validation, employer verification, and a user-friendly platform, we make job searching reliable and efficient.
                    </p>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        src="https://example.com/why-choose-us.jpg"
                        alt="Why Choose Us"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;
