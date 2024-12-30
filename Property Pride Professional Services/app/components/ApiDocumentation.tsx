import React from 'react';

const ApiDocumentation: React.FC = () => {
    return (
        <div>
            <h1>API Documentation</h1>
            <h2>Property Pride Professional Services (3PS)</h2>
            <p>Version: 2.0.0</p>
            <p>Last Updated: 2024-12-28</p>
            <p>Last Modified By: Technology Team</p>
            <p>Change Type: Complete System Redesign</p>

            <h3>Purpose Statement</h3>
            <p>This API Documentation provides comprehensive details about all API endpoints, integration points, and interfaces within the Knowledge Multiplication System™ and related educational and service technologies.</p>
            <p><strong>Target Audience:</strong> Developers, system integrators, technical staff</p>
            <p><strong>Scope:</strong> All API endpoints and system interfaces</p>
            <p><strong>Related Documents:</strong></p>
            <ul>
                <li>System Architecture Documentation [SA-002] → Links to System Design [KB-201-09]</li>
                <li>Technology Integration Guide [TI-002] → Links to Integration Points [KB-201-01]</li>
                <li>Data Management & Privacy Guide [DMP-002] → Links to Data Handling [KB-201-02]</li>
            </ul>

            <h3>API Overview [KB-201-17]</h3>
            <h4>Base URLs</h4>
            <pre>
                Production: https://api.propertyprideservices.com/v2
                Staging: https://staging-api.propertyprideservices.com/v2
                Development: https://dev-api.propertyprideservices.com/v2
            </pre>

            <h4>Authentication</h4>
            <pre>
                {`{
                    "type": "JWT Bearer Token",
                    "format": "Authorization: Bearer <token>",
                    "expiration": "4 hours",
                    "multi-factor": true,
                    "refresh_mechanism": true
                }`}
            </pre>

            <h4>Rate Limiting</h4>
            <pre>
                {`{
                    "window": "15 minutes",
                    "max_requests": {
                        "standard": 1000,
                        "educational_platform": 2000,
                        "research_api": 500
                    },
                    "retry_after": true,
                    "header": "X-RateLimit-Remaining"
                }`}
            </pre>

            <h3>Core Endpoints [KB-201-18]</h3>
            <h4>Authentication API</h4>
            <h5>1. Login</h5>
            <pre>
                {`POST /auth/login
                Content-Type: application/json

                {
                    "email": "string",
                    "password": "string",
                    "login_type": ["student", "staff", "researcher", "service_client"]
                }

                Response: 200 OK
                {
                    "token": "string",
                    "refresh_token": "string",
                    "user_profile": {
                        "id": "string",
                        "role": "string",
                        "access_level": "string"
                    },
                    "expires_in": 14400
                }`}
            </pre>

            <h5>2. Multi-Factor Authentication</h5>
            <pre>
                {`POST /auth/mfa
                Content-Type: application/json

                {
                    "token": "string",
                    "verification_code": "string"
                }

                Response: 200 OK
                {
                    "access_token": "string",
                    "profile_access": "full/limited"
                }`}
            </pre>

            <h4>Knowledge Base API</h4>
            <h5>1. Get Knowledge Entry</h5>
            <pre>
                {`GET /knowledge/{id}
                Authorization: Bearer <token>

                Response: 200 OK
                {
                    "id": "string",
                    "title": "string",
                    "content": "string",
                    "category": ["education", "service", "research"],
                    "access_level": "string",
                    "tags": ["string"],
                    "created_at": "datetime",
                    "updated_at": "datetime",
                    "contributors": ["string"]
                }`}
            </pre>

            <h5>2. Create Knowledge Entry</h5>
            <pre>
                {`POST /knowledge
                Authorization: Bearer <token>
                Content-Type: application/json

                {
                    "title": "string",
                    "content": "string",
                    "category": ["education", "service", "research"],
                    "tags": ["string"],
                    "access_level": "string"
                }

                Response: 201 Created
                {
                    "id": "string",
                    "created_at": "datetime"
                }`}
            </pre>

            {/* Continue adding the rest of the content similarly */}
        </div>
    );
};

export default ApiDocumentation;
