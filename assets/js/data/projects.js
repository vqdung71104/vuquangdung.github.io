/**
 * Projects Data
 * Centralized project information
 * Easy to add, update, or remove projects
 */

export const projects = [
    {
        id: 'student-management',
        title: 'Student Management System',
        tag: 'Full-Stack developer',
        gradient: 'preview-gradient-1',
        icon: 'devicon-react-original',
        problem: 'Students struggle to choose optimal course schedules and choose favorite classes based on their personal academic performance and preferences.',
        solution: 'Built a comprehensive platform with AI-powered chatbot using TF-IDF, Word2Vec, and Cosine Similarity for intent classification and natural language queries. Implemented NL2SQL service with 45 templates and intelligent Rule Engine for recommendations.',
        result: 'Delivered a three-tier architecture system with schedule optimization algorithm generating conflict-free timetables. Features secure JWT authentication, bulk Excel upload, and real-time GPA visualization.',
        technologies: {
            icons: [
                { name: 'Python', icon: 'devicon-python-plain colored' },
                { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
                { name: 'React', icon: 'devicon-react-original colored' },
                { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
                { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
                { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' }
            ],
            badges: ['NLP', 'TF-IDF', 'Word2Vec', 'SQLAlchemy', 'Ant Design', 'Chart.js', 'JWT']
        }
    },
    {
        id: 'itss-collaboration',
        title: 'ITSS - Team Collaboration Platform',
        tag: 'Backend developer',
        gradient: 'preview-gradient-2',
        icon: 'devicon-typescript-plain',
        problem: 'Tutors and team leaders lack efficient tools to assign, track, and evaluate team member contributions in collaborative class projects.',
        solution: 'Developed backend CRUD API to enable tutors to assign and manage team tasks. Group monitors can delegate work to members, while the system tracks progress and facilitates peer evaluation.',
        result: 'Created a comprehensive collaboration platform where team members are rated by both peers and tutors based on their contributions, promoting accountability and fair assessment. Groups can also check the contribution of each member based on git commits.',
        technologies: {
            icons: [
                { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
                { name: 'Python', icon: 'devicon-python-plain colored' }
            ],
            badges: []
        }
    },
    {
        id: 'chat-call-app',
        title: 'IT4409-FE - Real-Time Chat & Call',
        tag: 'frontend developer',
        gradient: 'preview-gradient-3',
        icon: 'devicon-javascript-plain',
        problem: 'Users need a reliable platform for real-time communication with integrated chat and video/audio calling capabilities.',
        solution: 'Integrated GetStream.io API and custom backend APIs to build a real-time messaging and calling application with seamless user experience.',
        result: 'Delivered a fully functional chat and call application with real-time synchronization, online status indicators, add/recieve friend requests and reliable video/audio communication.',
        technologies: {
            icons: [
                { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
                { name: 'React', icon: 'devicon-react-original colored' }
            ],
            badges: ['GetStream.io']
        }
    }
];

/**
 * Get project by ID
 * @param {string} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
export function getProjectById(id) {
    return projects.find(project => project.id === id) || null;
}

/**
 * Get all projects
 * @returns {Array} Array of all projects
 */
export function getAllProjects() {
    return projects;
}

/**
 * Get projects by tag
 * @param {string} tag - Project tag
 * @returns {Array} Array of projects with matching tag
 */
export function getProjectsByTag(tag) {
    return projects.filter(project => project.tag === tag);
}
