import React from 'react';

const ProjectMgmtGuide: React.FC = () => {
    return (
        <div>
            <h1>Project Management Guide</h1>
            <h2>Property Pride Professional Services (3PS)</h2>
            <p>Version: 2.0.0</p>
            <p>Last Updated: 2024-12-28</p>
            <p>Last Modified By: Documentation Team</p>
            <p>Change Type: Major Update - Adaptive Methodologies & Knowledge Management</p>

            <h3>Purpose Statement</h3>
            <p>This Project Management Guide provides standardized procedures for managing projects, ensuring successful delivery and alignment with organizational goals.</p>
            <p><strong>Target Audience:</strong> Project managers, team leads, operations teams, management</p>
            <p><strong>Scope:</strong> All project management procedures, protocols, and best practices</p>
            <p><strong>Related Documents:</strong></p>
            <ul>
                <li>Operations Manual [OP-001] → Links to Project Execution [KB-101-03]</li>
                <li>Technology Integration Guide [TI-001] → Links to Project Systems [KB-201-02]</li>
                <li>Quality Standards [QS-001] → Links to Project Quality [KB-601-02]</li>
                <li>Training Manual [TM-001] → Links to Project Training [KB-511-01]</li>
            </ul>

            <h3>Project Management Approach 🎯</h3>

            <h4>Adaptive Methodology Selection</h4>
            <ol>
                <li>🚀 Agile Approach
                    <ul>
                        <li>Iterative development cycles</li>
                        <li>Continuous stakeholder collaboration</li>
                        <li>Flexibility to adapt to changes</li>
                        <li>Suitable for dynamic environments</li>
                    </ul>
                </li>
                <li>📈 Traditional (Waterfall) Approach
                    <ul>
                        <li>Linear sequential phases</li>
                        <li>Clearly defined requirements upfront</li>
                        <li>Predictable timelines and deliverables</li>
                        <li>Suitable for stable, well-defined projects</li>
                    </ul>
                </li>
                <li>🌐 Hybrid Approach
                    <ul>
                        <li>Combination of Agile and Traditional</li>
                        <li>Adaptable to project specifics</li>
                        <li>Balances flexibility and structure</li>
                        <li>Suitable for projects with mixed requirements</li>
                    </ul>
                </li>
            </ol>

            <h4>Project Governance Framework</h4>
            <ol>
                <li>📋 Project Charter
                    <ul>
                        <li>Define project objectives and scope</li>
                        <li>Identify stakeholders and their roles</li>
                        <li>Establish high-level timeline and budget</li>
                        <li>Secure project sponsor approval</li>
                    </ul>
                </li>
                <li>👥 Steering Committee
                    <ul>
                        <li>Provide strategic oversight and guidance</li>
                        <li>Make key decisions and resolve escalations</li>
                        <li>Monitor project health and progress</li>
                        <li>Champion project within the organization</li>
                    </ul>
                </li>
                <li>🗳️ Change Control Board
                    <ul>
                        <li>Assess impact of proposed changes</li>
                        <li>Approve or reject change requests</li>
                        <li>Prioritize and schedule approved changes</li>
                        <li>Communicate decisions to stakeholders</li>
                    </ul>
                </li>
            </ol>

            <h3>Project Lifecycle 🔄</h3>
            <pre>
                <code>
                    {`graph LR
    A[Initiation] --> B(Planning)  
    B --> C(Execution & Control)
    C --> D(Closing)
    D -.-> A`}
                </code>
            </pre>

            <h4>1. Initiation Phase</h4>
            <ul>
                <li>🎯 Define project goals and objectives</li>
                <li>🧩 Identify stakeholders and their needs</li>
                <li>📊 Develop business case and feasibility study</li>
                <li>📋 Create project charter and secure approval</li>
            </ul>

            <h4>2. Planning Phase</h4>
            <ul>
                <li>🗺️ Define project scope and requirements</li>
                <li>📅 Develop project schedule and timeline</li>
                <li>💰 Establish project budget and resource plan</li>
                <li>🔍 Identify risks and mitigation strategies</li>
                <li>📐 Define quality standards and metrics</li>
            </ul>

            <h4>3. Execution & Control Phase</h4>
            <ul>
                <li>👷‍♂️ Perform project work and deliver outputs</li>
                <li>🔄 Monitor and control project progress</li>
                <li>📈 Manage scope, schedule, cost, and quality</li>
                <li>💬 Communicate with stakeholders regularly</li>
                <li>🚧 Identify and resolve issues and risks</li>
            </ul>

            <h4>4. Closing Phase</h4>
            <ul>
                <li>🎉 Obtain final deliverable acceptance</li>
                <li>📝 Conduct post-project review and lessons learned</li>
                <li>🏁 Archive project documents and release resources</li>
                <li>🤝 Transition deliverables to operational teams</li>
                <li>📊 Measure project success against objectives</li>
            </ul>

            <h3>Knowledge Management 📚</h3>

            <h4>Knowledge Capture</h4>
            <ol>
                <li>📝 Project Documentation
                    <ul>
                        <li>Charter and scope statement</li>
                        <li>Plans and baselines</li>
                        <li>Status reports and meeting minutes</li>
                        <li>Change requests and approvals</li>
                        <li>Deliverable acceptance sign-offs</li>
                    </ul>
                </li>
                <li>🧠 Tacit Knowledge Elicitation
                    <ul>
                        <li>Interviews with team members</li>
                        <li>Lessons learned sessions</li>
                        <li>Best practice discussions</li>
                        <li>SME knowledge sharing</li>
                    </ul>
                </li>
            </ol>

            <h4>Knowledge Sharing</h4>
            <ol>
                <li>🌐 Centralized Repository
                    <ul>
                        <li>Accessible by all team members</li>
                        <li>Version-controlled documents</li>
                        <li>Searchable content</li>
                        <li>Secure access controls</li>
                    </ul>
                </li>
                <li>🤝 Collaboration Platforms
                    <ul>
                        <li>Discussion forums</li>
                        <li>Wikis and knowledge bases</li>
                        <li>Real-time chat and conferencing</li>
                        <li>Social networking tools</li>
                    </ul>
                </li>
            </ol>

            <h4>Continuous Improvement</h4>
            <ol>
                <li>🔄 Retrospectives and Reviews
                    <ul>
                        <li>Regular project reflections</li>
                        <li>Identify successes and challenges</li>
                        <li>Discuss improvement opportunities</li>
                        <li>Implement actionable enhancements</li>
                    </ul>
                </li>
                <li>💡 Innovation and Experimentation
                    <ul>
                        <li>Encourage new ideas and approaches</li>
                        <li>Pilot innovative techniques and tools</li>
                        <li>Measure impact and value</li>
                        <li>Scale successful innovations</li>
                    </ul>
                </li>
            </ol>

            <h3>Conclusion</h3>
            <p>This Project Management Methodology Guide provides a flexible yet structured approach to managing projects effectively at 3PS. By selecting the appropriate methodology based on project characteristics, following a well-defined lifecycle, and integrating knowledge management practices, we can consistently deliver successful outcomes while fostering continuous improvement.</p>
            <p>Project managers and teams are expected to adapt this guide to the specific needs of their projects while adhering to the core principles and governance framework outlined herein. Regular reviews and updates to this guide will ensure it remains aligned with organizational goals and industry best practices.</p>

            <h4>Document Control:</h4>
            <ul>
                <li>Location: DOC-XXX-PMG-2024</li>
                <li>Access Level: Internal Use Only</li>
                <li>Review Cycle: Annually</li>
                <li>Document Owner: Project Management Director</li>
                <li>Technical Owner: Project Management Team</li>
                <li>Last Technical Review: 2024-12-28</li>
            </ul>
        </div>
    );
};

export default ProjectMgmtGuide;
