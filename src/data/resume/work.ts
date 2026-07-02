/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Airbnb',
    position: 'Senior Software Engineer',
    url: 'https://www.airbnb.com',
    startDate: '2023-03-20',
    summary: `Led development of high-quality, reliable software products supporting early-stage (0–1) and growth-stage (1–10) initiatives, focusing on AI-driven platforms, automation systems, and scalable backend infrastructure. Worked across full-stack, distributed systems, and cloud-native architectures to deliver production-grade solutions for internal and enterprise use cases.`,
    highlights: [
      'Designed and shipped an AI-powered marketing MVP platform enabling domain-specific responses from internal policy and knowledge sources',
      'Built an AI agent-based contract automation system using LLMs and LangChain pipelines, integrating third-party APIs as functional tools for document intelligence workflows',
      'Developed scalable microservices, containerized with Docker and orchestrated via Kubernetes for automation platform workloads',
      'Implemented event-driven architectures using Kafka, AWS Kinesis, and Google Pub/Sub, powering real-time data ingestion and analytics pipelines across enterprise systems',
      'Built and maintained cloud infrastructure automation using Terraform, Jenkins, and GitHub Actions, enabling CI/CD, testing automation, and multi-environment deployments across AWS and GCP',
      'Integrated analytics pipelines into BigQuery and Snowflake, supporting real-time business intelligence and cross-system data processing',
      'Leveraged AI-assisted development tools such as Cursor and GitHub Copilot to accelerate development velocity and improve engineering efficiency',
    ],
  },
  {
    name: 'ResearchHub',
    position: 'Senior Software Engineer',
    url: 'https://www.researchhub.com/',
    startDate: '2020-09-12',
    endDate: '2023-02-28',
    summary: `Shipped core research infrastructure from early-stage product to a scalable platform, contributing to product growth, system reliability, and user engagement. Played a key role in building foundational systems across rewards, discovery, and real-time collaboration features.`,
    highlights: [
      'Built and optimized the ResearchCoin Rewards Engine, powering token-based reward transactions and community incentive flows',
      'Developed the Hub Discovery Platform, surfacing trending research, discussions, and author analytics',
      'Designed and implemented research ingestion pipelines using workflows to normalize data',
      'Built real-time notification and activity feed systems for live user updates and engagement tracking',
      'Improved backend scalability and system reliability during high-growth phases and funding milestones',
    ],
  },
  {
    name: 'The Timken Company',
    position: 'Software Engineer',
    url: 'https://www.timken.com/',
    startDate: '2018-01-01',
    endDate: '2020-06-23',
    summary: `Worked on industrial IoT, predictive analytics, and enterprise automation systems supporting manufacturing and supply chain operations. Focused on building data pipelines, backend services, and analytics platforms for engineering and business teams.`,
    highlights: [
      'Developed microservices in Java/Spring Boot for vibration analysis and signal processing, enabling predictive-maintenance workflows that identified equipment issues before failure',
      'Built REST APIs and AWS Lambda functions in TypeScript to automate part tracking and integrate supplier workflows with SAP, reducing manual effort and improving data consistency across the supply chain',
      'Created a MERN-stack analytics dashboard that provided real-time operational insights, allowing engineers to monitor activity and respond faster to anomalies',
      'Integrated IoT data pipelines with Google Cloud Pub/Sub and BigQuery, processing large-scale telemetry for predictive analytics and supporting data-driven decision making',
    ],
  },
  {
    name: 'Austin Web & Design',
    position: 'Software Engineer',
    url: 'https://austinwebanddesign.com/',
    startDate: '2014-01-28',
    endDate: '2017-12-24',
    summary: `Contributed to multiple client-facing software development projects supporting backend development, system improvements, and full SDLC execution across different business domains.`,
    highlights: [
      'Developed and maintained Java-based backend services and React front-ends for several client projects, delivering functional features that met project specifications and enabled on-time client launches',
      'Collaborated with cross-functional teams to deliver features aligned with business and product goals',
      'Improved application performance and reliability through debugging, refactoring, and optimization',
      'Participated in the full SDLC-development, testing, deployment, and production support-ensuring stable operation of SaaS and AI/LLM services for clients',
    ],
  },
  {
    name: 'Rang Technologies Inc',
    position: 'Junior Software Engineer',
    url: 'https://rangtech.com/',
    startDate: '2010-07-05',
    endDate: '2014-01-05',
    summary: `Contributed to multiple client-facing software development projects, supporting backend development, system improvements, and full SDLC execution across different business domains.`,
    highlights: [
      'Developed and maintained software solutions across multiple client projects with varying technical requirements',
      'Collaborated with cross-functional teams to deliver features aligned with business and product goals',
      'Improved application performance and reliability through debugging, refactoring, and optimization',
      'Participated in the full SDLC-including development, testing, deployment, and production support-ensuring smooth releases and reducing post-deployment issues',
    ],
  },
];

export default work;
