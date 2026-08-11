/**
 * Projects data – used by the Projects page for filtering/search
 * Each project maps 1-to-1 with a ProjectCard
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  highlights: string[];
  period: string;
}

export const projects: Project[] = [
  {
    id: "alo-chat",
    name: "Alo Chat",
    description:
      "Real-time fullstack chat application with microservices, mobile support, and admin/moderation features.",
    tags: ["ReactJS", "Spring Boot", "RabbitMQ", "Redis", "Socket.io", "Zustand"],
    repoUrl: "https://github.com/hoangtan22th/Alo-Full-Stack",
    period: "Jan 2026 – Jun 2026",
    highlights: [
      "Gateway routing, Eureka service discovery, RabbitMQ events and Redis caching.",
      "Admin panel: user management, ban/unban, group moderation, report review and global broadcast.",
      "Real-time features (typing indicators, presence, auto-reconnect) via Zustand + socket.io-client on Web & Mobile.",
    ],
  },
  {
    id: "fintrack-pro",
    name: "FinTrack Pro",
    description:
      "Personal finance tracker with a 6-service Spring Cloud backend, Kafka Saga, and an AI-powered receipt parser.",
    tags: ["Next.js", "Spring Boot", "Kafka", "Redis", "Spring AI", "Recharts"],
    repoUrl: "https://github.com/tVhowww/FinTrack-Pro",
    demoUrl: "https://fintrack-pro-lake.vercel.app",
    period: "Dec 2025 – May 2026",
    highlights: [
      "Next.js (App Router) dashboard with TailwindCSS, Recharts and React Query.",
      "6-service Spring Cloud system secured with HttpOnly JWT cookies, token rotation and Google OAuth2.",
      "Kafka Saga + Transactional Outbox/Inbox patterns with Redis distributed locks for zero data loss.",
      "Google Gemini (Spring AI) auto-parses receipts and powers a financial advisor chatbot.",
    ],
  },
  {
    id: "watch-store",
    name: "WatchStore Website",
    description:
      "E-commerce watch store with Spring Boot REST API, VNPay integration, and ReactJS customer + admin flows.",
    tags: ["ReactJS", "Spring Boot", "VNPay", "Cloudinary"],
    repoUrl: "https://github.com/TanDuy274/DHKTPM18B_Nhom08_Website-ban-dong-ho",
    period: "Sept 2025 – Dec 2025",
    highlights: [
      "18+ Spring Boot REST controllers covering Products, Categories, Suppliers and Inventory.",
      "Product filtering/pagination, VNPay payment and Cloudinary media upload.",
      "ReactJS customer flows (cart, checkout, search) and modular admin panels with React Router DOM.",
    ],
  },
];

/** Deduplicated, sorted list of all tags across all projects */
export const allTags: string[] = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
