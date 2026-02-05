/**
 * Skills Data
 * Centralized skills information
 */

export const skillCategories = [
    {
        id: 'data-ai',
        name: 'Data Analysis & AI',
        icon: '🤖',
        skills: [
            { name: 'Python', icon: 'devicon-python-plain colored', type: 'icon' },
            { name: 'NumPy', icon: 'devicon-numpy-original colored', type: 'icon' },
            { name: 'Intent Classification', type: 'badge' },
            { name: 'TF-IDF', type: 'badge' },
            { name: 'Word2Vec', type: 'badge' },
            { name: 'Cosine Similarity', type: 'badge' },
            { name: 'NLP', type: 'badge' },
            { name: 'Entity Extraction', type: 'badge' },
            { name: 'NL2SQL', type: 'badge' },
            { name: 'Scikit-learn', type: 'badge' },
            { name: 'Gensim', type: 'badge' }
        ]
    },
    {
        id: 'programming',
        name: 'Programming Languages',
        icon: '💻',
        skills: [
            { name: 'Python', icon: 'devicon-python-plain colored', type: 'icon' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored', type: 'icon' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored', type: 'icon' },
            { name: 'SQL', icon: 'devicon-mysql-plain colored', type: 'icon' },
            { name: 'Java', icon: 'devicon-java-plain colored', type: 'icon' },
            { name: 'Kotlin', icon: 'devicon-kotlin-plain colored', type: 'icon' },
            { name: 'PHP', icon: 'devicon-php-plain colored', type: 'icon' },
            { name: 'C/C++', icon: 'devicon-c-plain colored', type: 'icon' },
            { name: 'HTML/CSS', icon: 'devicon-html5-plain colored', type: 'icon' }
        ]
    },
    {
        id: 'web-dev',
        name: 'Web Development',
        icon: '🌐',
        skills: [
            { name: 'React 19', icon: 'devicon-react-original colored', type: 'icon' },
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', type: 'icon' },
            { name: 'FastAPI', icon: 'devicon-fastapi-plain colored', type: 'icon' },
            { name: 'SQLAlchemy', icon: 'devicon-sqlalchemy-plain colored', type: 'icon' },
            { name: 'Vite', icon: 'devicon-vitejs-plain colored', type: 'icon' },
            { name: 'Ant Design 5', type: 'badge' },
            { name: 'Chart.js', type: 'badge' },
            { name: 'Uvicorn', type: 'badge' },
            { name: 'JWT', type: 'badge' },
            { name: 'Bcrypt', type: 'badge' }
        ]
    },
    {
        id: 'other',
        name: 'Other Skills',
        icon: '🛠️',
        skills: [
            { name: 'Git', icon: 'devicon-git-plain colored', type: 'icon' }
        ]
    }
];

/**
 * Get skill category by ID
 * @param {string} id - Category ID
 * @returns {Object|null} Category object or null if not found
 */
export function getSkillCategoryById(id) {
    return skillCategories.find(category => category.id === id) || null;
}

/**
 * Get all skill categories
 * @returns {Array} Array of all skill categories
 */
export function getAllSkillCategories() {
    return skillCategories;
}
