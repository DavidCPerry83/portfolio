export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'C',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'Scala',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'Databases', 'ML Engineering'],
  },
    {
    title: 'HTML',
    competency: 5,
    category: ['Languages'],
  },
    {
    title: 'CSS',
    competency: 5,
    category: ['Languages'],
  },
  // AI & LLM
  {
    title: 'AI Agents',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'LLM Evaluation',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'AI Red-teaming',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'LLM APIs',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'RAG',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Prompt Engineering',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Vector Databases',
    competency: 4,
    category: ['ML Engineering', 'Databases'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'LangChain',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'Observability',
    competency: 4,
    category: ['ML Engineering'],
  },
  // Backend Technologies
  {
    title: 'Node.js',
    competency: 5,
    category: ['Backend Technologies'],
  },
  {
    title: 'Express.js',
    competency: 5,
    category: ['Backend Technologies'],
  },
  {
    title: 'FastAPI',
    competency: 5,
    category: ['Backend Technologies'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Backend Technologies'],
  },
  {
    title: '.NET',
    competency: 5,
    category: ['Backend Technologies'],
  },
  {
    title: 'Microservices',
    competency: 5,
    category: ['Backend Technologies'],
  },
    {
    title: 'Spring Boot',
    competency: 5,
    category: ['Backend Technologies'],
  },
  // Front-End Technologies
  {
    title: 'React',
    competency: 5,
    category: ['Front-End Technologies'],
  },
  {
    title: 'Next.js',
    competency: 5,
    category: ['Front-End Technologies'],
  },
  {
    title: 'Angular',
    competency: 4,
    category: ['Front-End Technologies'],
  },
    {
    title: 'Vue.js',
    competency: 4,
    category: ['Front-End Technologies'],
  },
    {
    title: 'Tailwind CSS',
    competency: 5,
    category: ['Front-End Technologies'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'SQL Server',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Snowflake',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'BigQuery',
    competency: 5,
    category: ['Databases'],
  },
  // Cloud
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud Platforms'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['Cloud Platforms'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 4,
    category: ['Cloud Platforms'],
  },
  // DevOps & Infrastructure
    {
    title: 'Docker',
    competency: 4,
    category: ['DevOps & Infrastructure'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['DevOps & Infrastructure'],
  },
  {
    title: 'CI/CD',
    competency: 4,
    category: ['DevOps & Infrastructure'],
  },
  {
    title: 'GitHub Actions',
    competency: 4,
    category: ['DevOps & Infrastructure'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['DevOps & Infrastructure'],
  },
  {
    title: 'Terraform',
    competency: 4,
    category: ['DevOps & Infrastructure'],
  },
  // Data Streamming
  {
    title: 'Kafka',
    competency: 4,
    category: ['Data Streaming'],
  },
  {
    title: 'AWS Kinesis',
    competency: 4,
    category: ['Data Streaming'],
  },
  {
    title: 'Google Pub/Sub',
    competency: 4,
    category: ['Data Streaming'],
  },
  {
    title: 'Event-Driven Architecture',
    competency: 4,
    category: ['Data Streaming'],
  },
  // Software Architecture & Engineering
  {
    title: 'Distributed Systems',
    competency: 5,
    category: ['Software Architecture & Engineering'],
  },
  {
    title: 'Cloud-Native Applications',
    competency: 5,
    category: ['Software Architecture & Engineering'],
  },
  {
    title: 'System Design',
    competency: 5,
    category: ['Software Architecture & Engineering'],
  },
  {
    title: 'Software Architecture',
    competency: 5,
    category: ['Software Architecture & Engineering'],
  },
  {
    title: 'SDLC',
    competency: 5,
    category: ['Software Architecture & Engineering'],
  },
  // Business & Platforms
  {
    title: 'SaaS',
    competency: 5,
    category: ['Business & Platforms'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
