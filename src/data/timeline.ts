/**
 * Timeline data — fill in your personal milestones here.
 * Each entry is a year/period + a list of things that happened.
 */
export interface TimelineEntry {
    year: string;
    title: string;
    description: string;
    tags?: string[];
    type: 'education' | 'project' | 'certification' | 'achievement' | 'work';
}

export const timeline: TimelineEntry[] = [
    {
        year: '2022',
        title: 'High School Graduation',
        description:
            'Graduated from high school with a focus on science and mathematics, with a very good academic record.',
        tags: ['High School', 'Graduation', 'Science'],
        type: 'education',
    },
    {
        year: '2022',
        title: 'Started Computer Science at ESTIN',
        description:
            'Enrolled in the Computer Science Engineering program at École Supérieure en Sciences et Technologies de l\'Informatique et du Numérique (ESTIN), Béjaïa.',
        tags: ['Education', 'ESTIN', 'Algeria'],
        type: 'education',
    },
    {
        year: '2023',
        title: 'First Full-Stack Projects',
        description:
            'Built my first MERN-stack projects, learning React, Node.js, Express, and MongoDB. Focused on clean architecture and REST API design.',
        tags: ['React', 'Node.js', 'MongoDB', 'MERN'],
        type: 'project',
    },
    {
        year: '2023',
        title: 'Discovered AI & Machine Learning',
        description:
            'Completed the Machine Learning Foundations certification on Coursera and started building ML models with Python, Scikit-learn, and TensorFlow.',
        tags: ['Python', 'Machine Learning', 'Coursera'],
        type: 'certification',
    },
    {
        year: '2024-2025',
        title: 'AI Engineer & ML Specialization',
        description:
            'Earned multiple certifications including ML Specialization (Stanford/Coursera) and AI Engineer Associate (DataCamp). Worked on HealSeek and Edu+ as full-stack projects.',
        tags: ['AI Engineering', 'MLOps', 'DataCamp', 'DeepLearning.AI'],
        type: 'certification',
    },
    {
        year: '2024–2025',
        title: 'Freelance & Advanced Projects',
        description:
            'Delivered Mon Atelier (workshop management system) as a freelance project. Deepened expertise in NestJS, FastAPI, and production ML deployment.',
        tags: ['Freelance', 'NestJS', 'FastAPI', 'MLOps'],
        type: 'project',
    },
    {
        year: '2024',
        title: 'Freelance Data Analyst — Research Statistical Pipeline',
        description:
            'Conducted full statistical analysis pipeline for a PhD researcher in plant biology, producing publication-ready outputs including Two-Way ANOVA, PCA, and correlation matrices for drought tolerance rankings.',
        tags: ['Data Analysis', 'Two-Way ANOVA', 'PCA', 'Statsmodels', 'Scikit-learn', 'Statistics'],
        type: 'work',
    },
    {
        year: '2024-',
        title: 'Full Stack Developer at Primaria Tech',
        description:
            'Joined Primaria Tech as a Full Stack Developer, contributing to the development of web applications . Gained experience in agile development and team collaboration.',
        tags: ['Full Stack Developer', 'Primaria Tech', 'Web Development', 'AI Solutions'],
        type: 'work',
    }
];
