export interface TechStackItem {
  name: string;
  icon: string;
}

export interface TechStackCategory {
  category: string;
  items: TechStackItem[];
}

export const techStack: TechStackCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framer" },
      { name: "Vue.js", icon: "vuejs" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
      { name: "GraphQL", icon: "graphql" },
      { name: "REST APIs", icon: "Server" },
      { name: "NestJS", icon: "nestjs" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Terraform", icon: "terraform" },
    ],
  },
  {
    category: "AI & Data",
    items: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "LangChain", icon: "Brain" },
      { name: "OpenAI", icon: "Sparkles" },
      { name: "Pandas", icon: "BarChart3" },
      { name: "Apache Kafka", icon: "kafka" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Expo", icon: "Smartphone" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Prisma", icon: "prisma" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
];
