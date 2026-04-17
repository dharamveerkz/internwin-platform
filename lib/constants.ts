import { Course, Stat, WhyCard, Testimonial, DurationOption, Step } from "@/types";

export const durationOptions: DurationOption[] = [
  { value: "all", label: "All Durations" },
  { value: "15-days", label: "15 Days" },
  { value: "1-month", label: "1 Month" },
  { value: "6-months", label: "6 Months" },
];

export const courses: Course[] = [
  {
    id: "web-dev-15",
    name: "Full-Stack Web Development Sprint",
    domain: "Web Development",
    duration: "15-days",
    price: 2499,
    originalPrice: 4999,
    isFree: false,
    tags: ["React", "Node.js", "MongoDB", "Deploy"],
    thumbnail: "blue",
    icon: "💻",
    rating: 4.9,
    reviews: 1247,
    students: 3420,
  },
  {
    id: "ai-1month",
    name: "AI & Machine Learning Foundations",
    domain: "Artificial Intelligence",
    duration: "1-month",
    price: 4999,
    tags: ["Python", "TensorFlow", "NLP", "Projects"],
    thumbnail: "orange-blue",
    icon: "🤖",
    rating: 4.8,
    reviews: 892,
    students: 2156,
  },
  {
    id: "data-6month",
    name: "Data Science Capstone Program",
    domain: "Data Science",
    duration: "6-months",
    price: 14999,
    originalPrice: 24999,
    tags: ["Python", "SQL", "Tableau", "ML"],
    thumbnail: "dark",
    icon: "📊",
    rating: 4.9,
    reviews: 567,
    students: 1089,
  },
  {
    id: "mobile-15",
    name: "React Native Mobile Dev Sprint",
    domain: "Mobile Development",
    duration: "15-days",
    price: 2999,
    tags: ["React Native", "iOS", "Android", "Firebase"],
    thumbnail: "blue",
    icon: "📱",
    rating: 4.7,
    reviews: 445,
    students: 1567,
  },
  {
    id: "cloud-1month",
    name: "AWS Cloud Architecture",
    domain: "Cloud Computing",
    duration: "1-month",
    price: 5999,
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    thumbnail: "orange-blue",
    icon: "☁️",
    rating: 4.8,
    reviews: 334,
    students: 987,
  },
  {
    id: "cyber-6month",
    name: "Cybersecurity Professional Track",
    domain: "Cybersecurity",
    duration: "6-months",
    price: 19999,
    originalPrice: 34999,
    tags: ["Ethical Hacking", "Network Security", "SOC"],
    thumbnail: "dark",
    icon: "🔐",
    rating: 4.9,
    reviews: 223,
    students: 456,
  },
];

export const stats: Stat[] = [
  { label: "Students Trained", value: 50000, suffix: "+" },
  { label: "Placement Rate", value: 94, suffix: "%" },
  { label: "Hiring Partners", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 12000, suffix: "+" },
];

export const whyCards: WhyCard[] = [
  {
    icon: "🎯",
    title: "Industry-Aligned Curriculum",
    description: "Projects designed with input from 200+ hiring partners to ensure job-ready skills.",
    variant: "blue",
  },
  {
    icon: "👨‍🏫",
    title: "1:1 Mentor Guidance",
    description: "Get personalized feedback from industry experts throughout your internship.",
    variant: "orange",
  },
  {
    icon: "🏆",
    title: "Verified Certificates",
    description: "Blockchain-backed credentials that employers can instantly verify.",
    variant: "blue",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "The capstone project helped me build a portfolio piece that landed me my first job at a startup. The mentor feedback was invaluable!",
    author: "Priya Sharma",
    role: "SDE @ TechStart",
    avatar: "PS",
    rating: 5,
    company: "TechStart Inc.",
  },
  {
    id: "t2",
    quote: "I went from zero coding knowledge to landing an internship in 3 months. The structured curriculum and supportive community made all the difference.",
    author: "Rahul Verma",
    role: "Frontend Intern @ DevCorp",
    avatar: "RV",
    rating: 5,
    company: "DevCorp",
  },
  {
    id: "t3",
    quote: "The ABC Bank credits system motivated me to complete every module. I redeemed my credits for a LinkedIn Premium subscription!",
    author: "Ananya Patel",
    role: "Data Analyst @ FinTech Co",
    avatar: "AP",
    rating: 5,
    company: "FinTech Co",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Enroll & Onboard",
    description: "Sign up, choose your program, and complete your personalized onboarding.",
  },
  {
    number: 2,
    title: "Learn & Build",
    description: "Access video lessons, complete hands-on projects, and earn credits.",
  },
  {
    number: 3,
    title: "Get Mentored",
    description: "Submit projects for expert review and receive actionable feedback.",
  },
  {
    number: 4,
    title: "Get Certified",
    description: "Earn verified certificates and showcase your work to employers.",
  },
  {
    number: 5,
    title: "Get Placed",
    description: "Access our hiring partner network and land your dream role.",
  },
];

export const eligibleDegrees = [
  "B.Tech", "B.E.", "BCA", "MCA", "B.Sc (CS/IT)", "M.Sc", "MBA", "Any Graduate"
];

export const eligibleBranches = [
  "Computer Science", "IT", "ECE", "EEE", "Mechanical", "Civil", "Data Science", "AI/ML", "Any Branch"
];