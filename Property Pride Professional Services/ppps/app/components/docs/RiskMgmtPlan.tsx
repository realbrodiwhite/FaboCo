import React from 'react';

const RiskMgmtPlan: React.FC = () => {
    return (
        <div>
            <h1>Risk Management Plan</h1>
            <h2>Property Pride Professional Services (3PS)</h2>
            <p>Version: 2.0.0</p>
            <p>Last Updated: 2024-12-28</p>
            <p>Last Modified By: Documentation Team</p>
            <p>Change Type: Major Update - Risk Framework & Governance</p>

            <h3>Purpose Statement</h3>
            <p>This Risk Management Plan outlines the processes for identifying, assessing, and mitigating risks associated with projects and operations.</p>
            <p><strong>Target Audience:</strong> All team members, management, stakeholders</p>
            <p><strong>Scope:</strong> All risk management procedures and protocols</p>
            <p><strong>Related Documents:</strong></p>
            <ul>
                <li>Emergency Response Plan [ERP-001] → Links to Emergency Protocols [KB-401-01]</li>
                <li>Safety Guidelines [SG-001] → Links to Safety Management [KB-401-02]</li>
                <li>Financial Plan [FP-001] → Links to Financial Risk [KB-031-01]</li>
                <li>Operations Manual [OP-001] → Links to Operational Risk [KB-101-04]</li>
            </ul>

            <h3>Risk Management Principles 🎯</h3>

            <h4>Proactive and Integrated</h4>
            <ul>
                <li>Anticipate and prevent risks where possible</li>
                <li>Embed risk management in all activities</li>
                <li>Consider risk in decision making processes</li>
                <li>Promote a risk-aware culture</li>
            </ul>

            <h4>Systematic and Structured</h4>
            <ul>
                <li>Apply a consistent risk management approach</li>
                <li>Use a common risk language and criteria</li>
                <li>Document risks and maintain risk registers</li>
                <li>Communicate risk information effectively</li>
            </ul>

            <h4>Customized and Proportionate</h4>
            <ul>
                <li>Tailor risk management to context and objectives</li>
                <li>Allocate resources based on risk significance</li>
                <li>Adopt cost-effective risk mitigation measures</li>
                <li>Allow for flexibility and adaptability</li>
            </ul>

            <h4>Continuous Improvement</h4>
            <ul>
                <li>Monitor and review risk management performance</li>
                <li>Learn from successes and failures</li>
                <li>Adapt to changes in internal and external context</li>
                <li>Pursue opportunities for enhancement</li>
            </ul>

            <h3>Risk Governance Structure 👥</h3>

            <h4>Board of Directors</h4>
            <ul>
                <li>Set risk appetite and tolerance levels</li>
                <li>Approve risk management policies</li>
                <li>Provide oversight and guidance</li>
                <li>Review risk reports and ensure accountability</li>
            </ul>

            <h4>Risk Management Committee</h4>
            <ul>
                <li>Develop and update risk management framework</li>
                <li>Monitor implementation and effectiveness</li>
                <li>Escalate significant risks and propose responses</li>
                <li>Promote cross-functional coordination</li>
            </ul>

            <h4>Risk Owners</h4>
            <ul>
                <li>Identify and assess risks in their areas</li>
                <li>Implement and monitor risk controls</li>
                <li>Report on risk status and key indicators</li>
                <li>Participate in risk reviews and improvements</li>
            </ul>

            <h3>Risk Assessment Process 📋</h3>

            <pre>
                <code>
                    {`graph TD
    A[Establish Context] --> B(Risk Identification)
    B --> C(Risk Analysis) 
    C --> D(Risk Evaluation)
    D --> E(Risk Treatment)
    E --> F(Monitor and Review)
    F --> A`}
                </code>
            </pre>

            <h4>1. Establish Context</h4>
            <ul>
                <li>Define risk assessment objectives and scope</li>
                <li>Understand internal and external factors</li>
                <li>Set risk assessment criteria</li>
                <li>Engage relevant stakeholders</li>
            </ul>

            <h4>2. Risk Identification</h4>
            <ul>
                <li>Identify sources of risk and potential impacts</li>
                <li>Consider all types of risks (strategic, operational, etc.)</li>
                <li>Use various methods (brainstorming, checklists, etc.)</li>
                <li>Involve diverse perspectives</li>
            </ul>

            <h4>3. Risk Analysis</h4>
            <ul>
                <li>Determine likelihood and consequence of risks</li>
                <li>Consider inherent and residual risk levels</li>
                <li>Use qualitative and/or quantitative methods</li>
                <li>Prioritize risks based on analysis</li>
            </ul>

            <h4>4. Risk Evaluation</h4>
            <ul>
                <li>Compare analyzed risks against risk criteria</li>
                <li>Determine risk acceptability and treatment needs</li>
                <li>Consider risk appetite and tolerance levels</li>
                <li>Prioritize risks for treatment</li>
            </ul>

            <h4>5. Risk Treatment</h4>
            <ul>
                <li>Select appropriate risk treatment options</li>
                <li>Develop and implement risk treatment plans</li>
                <li>Assign responsibilities and resources</li>
                <li>Monitor implementation and effectiveness</li>
            </ul>

            <h4>6. Monitor and Review</h4>
            <ul>
                <li>Continuously monitor risks and controls</li>
                <li>Review risk management performance regularly</li>
                <li>Adapt to changes in context and priorities</li>
                <li>Identify opportunities for improvement</li>
            </ul>

            <h3>Risk Categories and Assessment 🔍</h3>

            <h4>Strategic Risks</h4>
            <ol>
                <li>Market Dynamics
                    <ul>
                        <li>Competitor actions</li>
                        <li>Customer demand shifts</li>
                        <li>Disruptive technologies</li>
                        <li>Regulatory changes</li>
                    </ul>
                </li>
                <li>Business Model
                    <ul>
                        <li>Value proposition relevance</li>
                        <li>Revenue stream sustainability</li>
                        <li>Cost structure efficiency</li>
                        <li>Partnership dependencies</li>
                    </ul>
                </li>
            </ol>

            <h4>Operational Risks</h4>
            <ol>
                <li>Service Delivery
                    <ul>
                        <li>Quality and timeliness</li>
                        <li>Resource availability</li>
                        <li>Equipment reliability</li>
                        <li>Process efficiency</li>
                    </ul>
                </li>
                <li>Safety and Environment
                    <ul>
                        <li>Workplace accidents</li>
                        <li>Hazardous materials</li>
                        <li>Natural disasters</li>
                        <li>Environmental compliance</li>
                    </ul>
                </li>
            </ol>

            <h4>Financial Risks</h4>
            <ol>
                <li>Liquidity and Credit
                    <ul>
                        <li>Cash flow management</li>
                        <li>Accounts receivable</li>
                        <li>Debt obligations</li>
                        <li>Investment returns</li>
                    </ul>
                </li>
                <li>Market and Macroeconomic
                    <ul>
                        <li>Interest rate fluctuations</li>
                        <li>Commodity price volatility</li>
                        <li>Inflation and purchasing power</li>
                        <li>Foreign exchange exposure</li>
                    </ul>
                </li>
            </ol>

            <h4>Compliance Risks</h4>
            <ol>
                <li>Legal and Regulatory
                    <ul>
                        <li>Applicable laws and regulations</li>
                        <li>Contractual obligations</li>
                        <li>Intellectual property rights</li>
                        <li>Litigation and disputes</li>
                    </ul>
                </li>
                <li>Ethics and Reputation
                    <ul>
                        <li>Fraud and misconduct</li>
                        <li>Conflicts of interest</li>
                        <li>Data privacy and security</li>
                        <li>Stakeholder trust and perception</li>
                    </ul>
                </li>
            </ol>

            <h3>Risk Reporting and Oversight 📊</h3>

            <h4>Risk Reports</h4>
            <ol>
                <li>🔍 Risk Profile
                    <ul>
                        <li>Overview of risk landscape</li>
                        <li>Assessment of key risks</li>
                        <li>Trends and emerging issues</li>
                        <li>Treatment plan status</li>
                    </ul>
                </li>
                <li>🚨 Risk Indicators
                    <ul>
                        <li>Key risk indicator (KRI) dashboards</li>
                        <li>Risk appetite and tolerance thresholds</li>
                        <li>Early warning signals</li>
                        <li>Risk control effectiveness measures</li>
                    </ul>
                </li>
            </ol>

            <h4>Oversight Meetings</h4>
            <ol>
                <li>🗓️ Quarterly Risk Reviews
                    <ul>
                        <li>In-depth review of risk profile</li>
                        <li>Progress on treatment actions</li>
                        <li>Significant incidents and near-misses</li>
                        <li>Approval of framework updates</li>
                    </ul>
                </li>
                <li>📅 Monthly Risk Committee Meetings
                    <ul>
                        <li>Emerging risk discussions</li>
                        <li>Escalated risk decisions</li>
                        <li>Cross-functional coordination</li>
                        <li>Resource and budget needs</li>
                    </ul>
                </li>
            </ol>

            <h3>Conclusion</h3>
            <p>This Risk Management Plan provides the structure and guidance for proactively identifying, assessing, and managing risks at 3PS. By integrating risk management principles, establishing clear governance, and promoting a risk-aware culture, we can effectively navigate uncertainties and seize opportunities.</p>
            <p>All employees have a role to play in managing risks within their areas of responsibility, and leaders are expected to set the tone, model the right behaviors, and hold their teams accountable. Regular reviews and updates to this plan will ensure it remains fit-for-purpose in our dynamic business environment.</p>

            <h4>Document Control:</h4>
            <ul>
                <li>Location: DOC-016-RMP-2024</li>
                <li>Access Level: Internal Use Only</li>
                <li>Review Cycle: Quarterly</li>
                <li>Document Owner: Risk Management Director</li>
                <li>Technical Owner: Risk Management Team</li>
                <li>Last Technical Review: 2024-12-28</li>
            </ul>
        </div>
    );
};

export default RiskMgmtPlan;