export interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
    certificateUrl?: string;
    linkedinUrl?: string;
    image: string;
    category: 'Machine Learning' | 'Development' | 'Cloud' | 'Other';
}

export const certifications: Certification[] = [
    {
        id: 1,
        title: 'Machine Learning Specialization',
        issuer: 'Coursera – Stanford University',
        date: '2024',
        description:
            'Comprehensive program covering supervised learning, unsupervised learning, and best practices in machine learning.',
        skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Neural Networks', 'Deep Learning'],
        image: '/Coursera Machine Learning Specialization.pdf',
        linkedinUrl:
            'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/',
        category: 'Machine Learning',
    },
    {
        id: 2,
        title: 'Advanced Learning Algorithms',
        issuer: 'Coursera – DeepLearning.AI',
        date: '2024',
        description:
            'Advanced concepts in machine learning including neural networks, decision trees, and ensemble methods.',
        skills: ['Neural Networks', 'Decision Trees', 'Random Forest', 'XGBoost', 'Model Optimization'],
        image: '/Coursera Advanced Learning algorithms.pdf',
        linkedinUrl:
            'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/',
        category: 'Machine Learning',
    },
    {
        id: 3,
        title: 'Supervised Machine Learning',
        issuer: 'Coursera – Stanford University',
        date: '2024',
        description:
            'Foundations of supervised learning including regression, classification, and regularization techniques.',
        skills: [
            'Linear Regression',
            'Logistic Regression',
            'Regularization',
            'Classification',
            'Feature Engineering',
        ],
        image: '/Coursera supervised ml.pdf',
        linkedinUrl:
            'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/',
        category: 'Machine Learning',
    },
    {
        id: 4,
        title: 'Machine Learning Foundations',
        issuer: 'Coursera',
        date: '2023',
        description:
            'Introduction to machine learning concepts, algorithms, and practical applications.',
        skills: [
            'Python',
            'Data Analysis',
            'Statistical Learning',
            'Model Evaluation',
            'Cross-validation',
        ],
        image: '/Coursera Machine Learning.pdf',
        linkedinUrl:
            'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/',
        category: 'Machine Learning',
    },
    {
        id: 5,
        title: 'Data Science Associate',
        issuer: 'DataCamp',
        date: '2024',
        description:
            'Professional certification validating expertise in data manipulation, exploratory analysis, statistical experimentation, and model development using Python and SQL.',
        skills: ['Python', 'SQL', 'Data Manipulation', 'Statistical Analysis', 'Data Visualization', 'Pandas', 'NumPy'],
        image: '/DataCamp Data Science Associate.pdf',
        linkedinUrl:
            'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/',
        category: 'Machine Learning',
    },
    {
        id: 6,
        title: 'AI Engineer for Data Scientists Associate',
        issuer: 'DataCamp',
        date: '2024',
        description:
            'Comprehensive certification covering AI engineering fundamentals, machine learning deployment, MLOps practices, and building production-ready AI systems.',
        skills: [
            'MLOps',
            'Model Deployment',
            'AI Engineering',
            'TensorFlow',
            'scikit-learn',
            'Model Monitoring',
            'Production AI',
        ],
        image: '/DataCamp AI Engineer Associate.pdf',
        linkedinUrl:
            'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/',
        category: 'Machine Learning',
    },
];
