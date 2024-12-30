import React from 'react';

const SafetyGuidelines: React.FC = () => {
    return (
        <div>
            <h1>Safety Guidelines</h1>
            <h2>Property Pride Professional Services (3PS)</h2>
            <p>Version: 2.0.0</p>
            <p>Last Updated: 2024-12-28</p>
            <p>Last Modified By: Documentation Team</p>
            <p>Change Type: Major Update - Safety Culture & Technology Integration</p>

            <h3>Purpose Statement</h3>
            <p>This Safety Guidelines document outlines the safety procedures and protocols to ensure a safe working environment for all employees.</p>
            <p><strong>Target Audience:</strong> All team members, contractors, and stakeholders</p>
            <p><strong>Scope:</strong> All operations and service delivery activities</p>
            <p><strong>Related Documents:</strong></p>
            <ul>
                <li>Emergency Response Plan [ERP-001] → Links to Emergency Protocols [KB-401-01]</li>
                <li>Operations Manual [OP-001] → Links to Operational Safety [KB-101-04]</li>
                <li>Training Manual [TM-001] → Links to Safety Training [KB-511-02]</li>
                <li>Equipment & Asset Management Guide [EAM-001] → Links to Equipment Safety [KB-101-05]</li>
            </ul>

            <h3>Safety Management Principles 🦺</h3>

            <h4>Leadership Commitment</h4>
            <ul>
                <li>Demonstrate visible and active commitment</li>
                <li>Establish clear safety goals and responsibilities</li>
                <li>Allocate necessary resources and support</li>
                <li>Hold teams accountable for safety performance</li>
            </ul>

            <h4>Employee Engagement</h4>
            <ul>
                <li>Involve employees in safety planning and decisions</li>
                <li>Encourage reporting of hazards and incidents</li>
                <li>Provide regular safety training and communication</li>
                <li>Recognize and reward safe behaviors</li>
            </ul>

            <h4>Risk-Based Approach</h4>
            <ul>
                <li>Identify and assess safety risks proactively</li>
                <li>Prioritize risks based on potential impact</li>
                <li>Implement controls proportionate to risk levels</li>
                <li>Monitor effectiveness and adapt as needed</li>
            </ul>

            <h4>Continuous Improvement</h4>
            <ul>
                <li>Set measurable safety performance goals</li>
                <li>Analyze safety data to identify trends and patterns</li>
                <li>Investigate incidents for root causes and learnings</li>
                <li>Implement corrective actions and preventive measures</li>
            </ul>

            <h3>Safety Risk Assessment ⚠️</h3>

            <h4>Hazard Identification Methods</h4>
            <ol>
                <li>🏗️ Job Safety Analysis (JSA)
                    <ul>
                        <li>Break down tasks into steps</li>
                        <li>Identify potential hazards at each step</li>
                        <li>Determine preventive measures</li>
                        <li>Communicate to relevant workers</li>
                    </ul>
                </li>
                <li>🔍 Safety Inspections and Audits
                    <ul>
                        <li>Regular workplace and equipment inspections</li>
                        <li>Compliance audits against standards and regulations</li>
                        <li>Behavioral observations of work practices</li>
                        <li>Management system reviews</li>
                    </ul>
                </li>
                <li>📣 Employee Reporting and Feedback
                    <ul>
                        <li>Hazard reporting systems</li>
                        <li>Near-miss and incident investigations</li>
                        <li>Safety suggestion programs</li>
                        <li>Employee surveys and interviews</li>
                    </ul>
                </li>
            </ol>

            <h4>Risk Evaluation Matrix</h4>
            <table>
                <thead>
                    <tr>
                        <th>Severity</th>
                        <th>Negligible</th>
                        <th>Minor</th>
                        <th>Moderate</th>
                        <th>Major</th>
                        <th>Catastrophic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Almost Certain</strong></td>
                        <td>Medium</td>
                        <td>High</td>
                        <td>Critical</td>
                        <td>Critical</td>
                        <td>Critical</td>
                    </tr>
                    <tr>
                        <td><strong>Likely</strong></td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>High</td>
                        <td>Critical</td>
                        <td>Critical</td>
                    </tr>
                    <tr>
                        <td><strong>Possible</strong></td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>Medium</td>
                        <td>High</td>
                        <td>Critical</td>
                    </tr>
                    <tr>
                        <td><strong>Unlikely</strong></td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>Medium</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td><strong>Rare</strong></td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>Medium</td>
                    </tr>
                </tbody>
            </table>

            <p>*Risk Levels:*</p>
            <ul>
                <li>Low Risk: Acceptable, monitor for changes</li>
                <li>Medium Risk: Implement controls, monitor regularly</li>
                <li>High Risk: Immediate action required, consider suspension</li>
                <li>Critical Risk: Suspend activity, escalate to senior management</li>
            </ul>

            <h3>Safety Control Hierarchy 🔒</h3>
            <pre>
                <code>
                    graph TD
                    A[Elimination] --> B(Substitution)
                    B --> C(Engineering Controls) 
                    C --> D(Administrative Controls)
                    D --> E(Personal Protective Equipment)
                </code>
            </pre>

            <h4>1. 🚫 Elimination</h4>
            <ul>
                <li>Physically remove the hazard</li>
                <li>Most effective control measure</li>
                <li>Example: Discontinue use of hazardous chemical</li>
            </ul>

            <h4>2. 🔄 Substitution</h4>
            <ul>
                <li>Replace hazard with less dangerous option</li>
                <li>Example: Use safer alternative to hazardous material</li>
            </ul>

            <h4>3. 🏗️ Engineering Controls</h4>
            <ul>
                <li>Isolate people from hazard</li>
                <li>Example: Install machine guards, ventilation systems</li>
            </ul>

            <h4>4. 📋 Administrative Controls</h4>
            <ul>
                <li>Change the way people work</li>
                <li>Example: Safety procedures, training, warning signs</li>
            </ul>

            <h4>5. 👷 Personal Protective Equipment (PPE)</h4>
            <ul>
                <li>Protect worker with wearable equipment</li>
                <li>Least effective control measure</li>
                <li>Example: Safety glasses, hard hats, gloves</li>
            </ul>

            <h3>Safety Training and Competency 🎓</h3>

            <h4>Training Needs Assessment</h4>
            <ol>
                <li>🎯 Role-Based Requirements
                    <ul>
                        <li>Identify safety training needs by job role</li>
                        <li>Consider tasks, hazards, and responsibilities</li>
                        <li>Determine frequency and depth of training needed</li>
                    </ul>
                </li>
                <li>📏 Competency Standards
                    <ul>
                        <li>Define expected safety knowledge and skills</li>
                        <li>Align with industry and regulatory requirements</li>
                        <li>Set criteria for training completion and assessment</li>
                    </ul>
                </li>
            </ol>

            <h4>Training Delivery Methods</h4>
            <ol>
                <li>🖥️ Online Learning
                    <ul>
                        <li>Self-paced e-learning modules</li>
                        <li>Micro-learning videos and quizzes</li>
                        <li>Virtual reality (VR) simulations</li>
                        <li>Mobile app reinforcement</li>
                    </ul>
                </li>
                <li>🧑‍🏫 Instructor-Led Training
                    <ul>
                        <li>Classroom-style lectures and discussions</li>
                        <li>Hands-on workshops and demonstrations</li>
                        <li>Field coaching and on-the-job training</li>
                        <li>Safety meetings and toolbox talks</li>
                    </ul>
                </li>
                <li>🧩 Blended Learning
                    <ul>
                        <li>Combination of online and face-to-face</li>
                        <li>Flipped classroom approach</li>
                        <li>Self-study with instructor follow-up</li>
                        <li>Group projects and case studies</li>
                    </ul>
                </li>
            </ol>

            <h3>Safety Performance Measurement 📊</h3>

            <h4>Key Safety Metrics</h4>
            <ol>
                <li>📉 Lagging Indicators
                    <ul>
                        <li>Injury and illness rates (TRIR, LTIR)</li>
                        <li>Lost workdays and restricted duty cases</li>
                        <li>Workers' compensation costs</li>
                        <li>Regulatory citations and fines</li>
                    </ul>
                </li>
                <li>📈 Leading Indicators
                    <ul>
                        <li>Safety training completion rates</li>
                        <li>Hazard reporting and closure rates</li>
                        <li>Safety audit scores and action items</li>
                        <li>Employee perception survey results</li>
                    </ul>
                </li>
            </ol>

            <h4>Measurement and Reporting</h4>
            <ol>
                <li>📅 Frequency and Format
                    <ul>
                        <li>Measure lagging indicators monthly/quarterly</li>
                        <li>Track leading indicators continuously</li>
                        <li>Report metrics in dashboard format</li>
                        <li>Review trends and benchmarks</li>
                    </ul>
                </li>
                <li>🎯 Goal Setting and Analysis
                    <ul>
                        <li>Set SMART goals for key safety metrics</li>
                        <li>Analyze root causes of variances</li>
                        <li>Identify areas for improvement</li>
                        <li>Communicate progress to stakeholders</li>
                    </ul>
                </li>
            </ol>

            <h3>Safety Technology Enablement 💻</h3>

            <h4>Integrated Safety Management System</h4>
            <p>Centralized platform for safety data and processes</p>
            <ul>
                <li>Modules for risk assessment, audits, incidents, actions</li>
                <li>Automated workflows and notifications</li>
                <li>Mobile app for frontline engagement</li>
            </ul>

            <h4>Advanced Safety Technologies</h4>
            <ul>
                <li>Wearable sensors for ergonomics and vital signs</li>
                <li>Drones for remote inspections and monitoring</li>
                <li>AI-powered video analytics for unsafe acts</li>
                <li>VR training simulations for high-risk tasks</li>
            </ul>

            <h3>Conclusion</h3>
            <p>These Safety Guidelines provide the foundation for a robust safety culture and management system at 3PS. By embracing safety principles, adopting a risk-based approach, and leveraging technology, we can proactively identify and control hazards to prevent incidents.</p>

            <p>All employees have a responsibility to follow safety rules, report concerns, and actively participate in safety initiatives. Leaders are expected to model the right behaviors, provide necessary resources, and foster a culture of openness and accountability. Regular reviews and updates to these guidelines will ensure our safety program remains effective.</p>

            <h4>Document Control:</h4>
            <ul>
                <li>Location: DOC-003-SG-2024</li>
                <li>Access Level: Internal Use Only</li>
                <li>Review Cycle: Quarterly</li>
                <li>Document Owner: Safety Director</li>
                <li>Technical Owner: Safety Management Team</li>
                <li>Last Technical Review: 2024-12-28</li>
            </ul>
        </div>
    );
};

export default SafetyGuidelines;
