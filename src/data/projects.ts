export interface Project {
    slug: string;
    theme: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    category: 'AI' | 'Web' | 'Full Stack' | 'Research';
    links: {
        link?: string | null;
        github?: string | null;
    };
    status: 'Live' | 'Completed' | 'Private' | 'In Progress';
    highlights: string[];
    architecture?: string;
    featured: boolean;
}

export const projects: Project[] = [

    {
        slug: 'email-assistant',
        theme: 'AI Email Automation',
        title: 'AI Email Assistant',
        description:
            'An intelligent email assistant designed to classify emails, generate responses, and help users manage inbox workflows automatically.',
        longDescription:
            'The AI Email Assistant is a planned machine learning project focused on automating email management tasks. The system will classify incoming emails, detect priority messages, and generate smart replies using natural language processing models. It will provide a web dashboard where users can analyze their inbox, receive suggestions, and automate responses through AI-powered tools.',
        technologies: [
            'React',
            'FastAPI',
            'Python',
            'Scikit-learn',
            'Transformers',
            'Pandas',
            'NumPy',
            'MongoDB',
        ],
        image: '/placeholder-project.svg',
        category: 'AI',
        links: {
            link: null,
            github: null,
        },
        status: 'In Progress',
        highlights: [
            'Automatic Email Classification',
            'Spam Detection',
            'AI Generated Email Replies',
            'Inbox Priority Detection',
            'Natural Language Processing Models',
            'Web Dashboard Interface',
        ],
        architecture:
            'React Frontend → FastAPI API → NLP Models (Transformers / Scikit-learn) → Database',
        featured: false,
    },
    {
        slug: 'da-mall-web',
        theme: 'E-commerce Marketplace',
        title: 'DA-Mall Web Platform',
        description:
            'A large-scale multi-vendor e-commerce marketplace designed for the Algerian market supporting B2B and B2C commerce.',
        longDescription:
            'DA-Mall is a comprehensive multi-vendor e-commerce platform built to support both B2B and B2C commerce in Algeria. The system enables sellers to create stores, manage products, and track sales analytics while customers can browse products, place orders, and follow stores. The platform integrates local logistics and payment systems including Yalidine delivery and Guiddini/SATIM payment gateways. Additional features include live product streaming, affiliate marketing programs, moderation workflows, notifications, and a scalable modular backend architecture.',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'MySQL', 'Redis', 'Docker'],
        image: '/damall.png',
        category: 'Full Stack',
        links: {
            link: 'https://da-mall.dz',
            github: null,
        },
        status: 'Live',
        highlights: [
            'Multi-vendor Marketplace',
            'B2B & B2C Commerce',
            'Integrated Delivery with Yalidine',
            'Affiliate Marketing System',
            'Live Product Streaming',
            'Push Notifications with Firebase',
            'Payment Gateway Integration',
        ],
        architecture:
            'Next.js Frontend → NestJS Modular Backend → MySQL Database | Redis + Bull Queue | Yalidine Delivery API | Guiddini/SATIM Payments | Docker deployment',
        featured: true,
    },

    {
        slug: 'da-mall-admin',
        theme: 'Admin Dashboard',
        title: 'DA-Mall Admin Panel',
        description:
            'Administrative dashboard for managing the DA-Mall marketplace including users, stores, products, orders, and moderation.',
        longDescription:
            'The DA-Mall Admin Panel is a management dashboard built with Laravel and Filament that allows administrators to monitor and control the entire marketplace ecosystem. It provides tools to manage users, stores, orders, payments, and moderation workflows. The dashboard includes analytics charts, role-based access control, and powerful CRUD interfaces for managing marketplace operations efficiently.',
        technologies: ['Laravel', 'Filament', 'PHP', 'MySQL', 'Tailwind CSS'],
        image: '/damall-admin.png',
        category: 'Full Stack',
        links: {
            link: null,
            github: null,
        },
        status: 'Private',
        highlights: [
            'Marketplace Administration',
            'Product Moderation System',
            'User & Seller Management',
            'Analytics Dashboard',
            'Role-based Access Control',
            'Order & Payment Monitoring',
        ],
        architecture:
            'Laravel Backend → Filament Admin Dashboard → MySQL Database',
        featured: false,
    },

    {
        slug: 'email-eu',
        theme: 'Graph Machine Learning',
        title: 'Email EU Graph Platform',
        description:
            'A graph machine learning platform for analyzing organizational email communication networks and predicting relationships.',
        longDescription:
            'The Email EU Graph Platform is a full-stack graph analytics system built on the Email-EU-Core dataset. It enables exploration of organizational email communication networks through interactive visualizations and machine learning models. The platform supports node classification, link prediction, and graph embedding generation using algorithms such as Node2Vec. Users can visualize network structures, inspect nodes, and analyze communication patterns through a modern web interface.',
        technologies: [
            'Next.js',
            'Tailwind CSS',
            'NestJS',
            'FastAPI',
            'Python',
            'NetworkX',
            'Node2Vec',
            'Scikit-learn',
            'UMAP',
            'Cytoscape.js',
        ],
        image: '/emaileu.png',
        category: 'AI',
        links: {
            link: 'https://email-eu-graph-platform.vercel.app/',
            github: 'https://github.com/sahki-abderrahemane/email-eu-graph-platform',
        },
        status: 'Completed',
        highlights: [
            'Graph-based Email Network Analysis',
            'Node Classification Models',
            'Link Prediction Algorithms',
            'Interactive Graph Visualization',
            'Node Embedding Generation',
            'Explainable ML Insights',
        ],
        architecture:
            'Next.js Frontend → NestJS API Gateway → FastAPI ML Service → Graph ML Models (Node2Vec / NetworkX / Scikit-learn)',
        featured: true,
    },

    {
        slug: 'n7awsou',
        theme: 'AI Travel Platform',
        title: 'N7awsou Platform',
        description:
            'A travel and tourism platform integrating web technologies with AI-powered services for exploring and managing travel experiences.',
        longDescription:
            'N7awsou is a travel and tourism platform designed to help users explore destinations, plan trips, and interact with travel services through a modern web interface. The platform combines a full-stack web application with an AI service capable of assisting users through intelligent recommendations and conversational interaction. It integrates a TypeScript-based backend, a Next.js frontend, and a Python AI service for advanced features.',
        technologies: [
            'Next.js',
            'React',
            'NestJS',
            'TypeScript',
            'Python',
            'FastAPI',
            'AI Services',
        ],
        image: '/n7awsou.png',
        category: 'Full Stack',
        links: {
            link: 'https://n7awsou-platform.vercel.app/',
            github: 'https://github.com/sahki-abderrahemane/N7awsou-Platform',
        },
        status: 'Completed',
        highlights: [
            'Travel Discovery Platform',
            'AI-powered Assistance',
            'Trip Planning Tools',
            'Full-stack Web Architecture',
            'Interactive User Interface',
            'AI Service Integration',
        ],
        architecture:
            'Next.js Frontend → NestJS Backend API → Python AI Service → Database Layer',
        featured: true,
    },

    {
        slug: 'healseek',
        theme: 'Healthcare Platform',
        title: 'HealSeek',
        description:
            'A revolutionary healthcare platform that bridges the gap between patients and healthcare providers.',
        longDescription:
            'HealSeek offers seamless doctor discovery with advanced filtering, intelligent appointment booking system, comprehensive patient management, and secure real-time communication. Built with modern technologies to ensure scalability, security, and exceptional user experience. The platform supports multi-language, real-time notifications, and role-based dashboards for patients and doctors.',
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary'],
        image: '/healseek.png',
        category: 'Full Stack',
        links: {
            link: 'https://healseek.vercel.app/en',
            github: null,
        },
        status: 'Live',
        highlights: [
            'Smart Doctor Discovery',
            'Real-time Booking',
            'Doctor Dashboard',
            'Medical Records',
            'Real-time Chat',
            'Multi-language Support',
        ],
        architecture:
            'React SPA → Express REST API → MongoDB Atlas | Socket.io for real-time | JWT Auth | Cloudinary for image storage',
        featured: true,
    },
    {
        slug: 'edu-plus',
        theme: 'Educational Platform',
        title: 'Edu+',
        description:
            'An innovative learning platform that empowers students to enhance their skills across various domains.',
        longDescription:
            'Edu+ features interactive courses, practice exercises, progress tracking, and collaborative learning tools. Students can join live sessions, track their skill progression, and communicate with instructors in real time. Built with Next.js for SSR performance and Socket.io for live collaboration.',
        technologies: ['Next.js', 'Express.js', 'MongoDB', 'Socket.io'],
        image: '/edu+.png',
        category: 'Full Stack',
        links: {
            link: 'https://edu-plus-nine.vercel.app',
            github: 'https://github.com/Abdousa23/Edu-plus',
        },
        status: 'Live',
        highlights: [
            'Interactive Courses',
            'Real-time Chat',
            'Progress Tracking',
            'Skill Assessment',
            'Live Sessions',
            'Instructor Dashboard',
        ],
        architecture:
            'Next.js Frontend → Express REST API → MongoDB | Socket.io for live sessions',
        featured: true,
    },
    {
        slug: 'orgtel',
        theme: 'Hotel Management',
        title: 'OrgTel',
        description:
            'A sophisticated hotel reservation system designed to streamline hospitality operations.',
        longDescription:
            'OrgTel includes booking management, customer profiles, room availability tracking, and comprehensive reporting. The system supports real-time room status updates, automated invoicing, and a clean admin dashboard for hotel staff.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        image: '/orgtel.png',
        category: 'Web',
        links: {
            link: null,
            github: 'https://github.com/Abdousa23/OrgTel',
        },
        status: 'Completed',
        highlights: [
            'Reservation System',
            'Customer Management',
            'Room Tracking',
            'Analytics Dashboard',
            'Automated Invoicing',
            'Admin Panel',
        ],
        architecture:
            'React Frontend → Express REST API → MongoDB | Role-based auth',
        featured: true,
    },
    {
        slug: 'mon-atelier',
        theme: 'Workshop Management',
        title: 'Mon Atelier',
        description:
            'A freelance project developing a comprehensive workshop management system.',
        longDescription:
            'Mon Atelier handles employee scheduling, supplier relationships, equipment maintenance, and repair order workflows. Built for a real client, it supports multiple user roles, email notifications, and a full reporting module.',
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        image: '/monatelier.png',
        category: 'Web',
        links: {
            link: null,
            github: null,
        },
        status: 'Private',
        highlights: [
            'Employee Management',
            'Supplier Integration',
            'Equipment Tracking',
            'Order Management',
            'Email Notifications',
            'Reporting Module',
        ],
        architecture:
            'React Frontend → Express REST API → MongoDB | Multi-role auth',
        featured: true,
    },
    {
        slug: 'portfolio-v1',
        theme: 'Developer Portfolio',
        title: 'Portfolio v1',
        description:
            'The first version of my personal developer portfolio showcasing my projects, skills, and experience.',
        longDescription:
            'Portfolio v1 is the first iteration of my personal developer portfolio. It presents my projects, technical skills, and background through a clean and modern web interface. The goal of this project was to create a professional online presence and a centralized place to showcase my work, including full-stack applications, AI projects, and experimental platforms. The site focuses on performance, responsive design, and simple navigation while highlighting project architecture and technologies used.',
        technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Vercel',
        ],
        image: '/portfolio.png',
        category: 'Web',
        links: {
            link: 'https://saabderrahemaneportfolio.vercel.app/',
            github: 'https://github.com/sahki-abderrahemane/Portfolio',
        },
        status: 'Completed',
        highlights: [
            'Modern Developer Portfolio',
            'Project Showcase',
            'Responsive UI Design',
            'Performance Optimized',
            'Clean Component Architecture',
        ],
        architecture:
            'Next.js Application → React Components → Tailwind CSS Styling → Vercel Deployment',
        featured: false,
    },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
    projects.filter((p) => p.featured);
