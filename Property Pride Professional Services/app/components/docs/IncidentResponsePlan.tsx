import React from 'react';

const IncidentResponsePlan: React.FC = () => {
    return (
        <div>
            <h1>Incident Response Plan</h1>
            <h2>Property Pride Professional Services (3PS)</h2>
            <p>Version: 1.0.0</p>
            <p>Last Updated: 2024-12-28</p>
            <p>Document Control: DOC-XXX-IRP-2024</p>
            <p>Last Modified By: Incident Response Team</p>
            <p>Change Type: Initial Draft</p>

            <h3>Purpose Statement</h3>
            <p>This Incident Response Plan outlines the procedures for responding to security incidents, ensuring a swift and effective response to minimize impact.</p>
            <p><strong>Target Audience:</strong> Security Team, IT Staff, Management</p>
            <p><strong>Scope:</strong> All security incidents affecting the organization.</p>

            <h3>Incident Response Phases</h3>

            <h4>Preparation</h4>
            <ul>
                <li>Establish an incident response team.</li>
                <li>Develop and implement security policies.</li>
            </ul>

            <h4>Detection and Analysis</h4>
            <ul>
                <li>Monitor systems for suspicious activity.</li>
                <li>Analyze incidents to determine impact.</li>
            </ul>

            <h4>Containment, Eradication, and Recovery</h4>
            <ul>
                <li>Contain the incident to prevent further damage.</li>
                <li>Eradicate the root cause of the incident.</li>
                <li>Recover systems and services to normal operations.</li>
            </ul>

            <h4>Post-Incident Activity</h4>
            <ul>
                <li>Conduct a post-incident review.</li>
                <li>Update incident response plans based on lessons learned.</li>
            </ul>

            <p>*This Incident Response Plan is maintained by the Incident Response Team and updated as needed to reflect changes in security protocols.*</p>

            <h4>Document Control:</h4>
            <ul>
                <li>Location: DOC-XXX-IRP-2024</li>
                <li>Access Level: Internal Use Only</li>
                <li>Review Cycle: Annually</li>
                <li>Document Owner: Security Director</li>
                <li>Technical Owner: Incident Response Team</li>
                <li>Last Technical Review: 2024-12-28</li>
            </ul>
        </div>
    );
};

export default IncidentResponsePlan;
