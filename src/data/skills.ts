export interface Skill {
    name: string;
    icon: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'AI/ML' | 'ML Libraries' | 'DevOps';
}

export const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', icon: '/js.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: '/typescript.svg', category: 'Frontend' },
    { name: 'React', icon: '/react.svg', category: 'Frontend' },
    { name: 'Next.js', icon: '/next.svg', category: 'Frontend' },
    // Backend
    { name: 'Node.js', icon: '/nodejs.svg', category: 'Backend' },
    { name: 'Express', icon: '/express.svg', category: 'Backend' },
    { name: 'NestJS', icon: '/nestjs.svg', category: 'Backend' },
    { name: 'FastAPI', icon: '/python.svg', category: 'Backend' },
    { name: 'GraphQL', icon: '/graphql.svg', category: 'Backend' },
    { name: "Socket.io", icon: '/socket.svg', category: 'Backend' },
    // Database
    { name: 'MongoDB', icon: '/mongo.svg', category: 'Database' },
    { name: 'MySQL', icon: '/mysql.svg', category: 'Database' },
    { name: 'PostgreSQL', icon: '/postgresql.svg', category: 'Database' },
    { name: 'Redis', icon: '/redis.svg', category: 'Database' },
    // AI/ML
    { name: 'Python', icon: '/python.svg', category: 'AI/ML' },
    { name: 'PyTorch', icon: '/pytorch.svg', category: 'AI/ML' },
    { name: 'TensorFlow', icon: '/tensorflow.svg', category: 'AI/ML' },
    { name: 'Scikit-learn', icon: '/scikit-learn.svg', category: 'AI/ML' },
    // ML Libraries
    { name: 'Pandas', icon: '/pandas.svg', category: 'ML Libraries' },
    { name: 'NumPy', icon: '/numpy.svg', category: 'ML Libraries' },
    { name: 'Matplotlib', icon: '/matplotlib.svg', category: 'ML Libraries' },
    { name: 'Seaborn', icon: '/seaborn.svg', category: 'ML Libraries' },
    { name: 'OpenCV', icon: '/opencv.svg', category: 'ML Libraries' },
    // DevOps
    { name: 'Socket.io', icon: '/socket.svg', category: 'DevOps' },
];

export const skillCategories = [
    'Frontend',
    'Backend',
    'Database',
    'AI/ML',
    'ML Libraries',
    'DevOps',
] as const;

export type SkillCategory = (typeof skillCategories)[number];
