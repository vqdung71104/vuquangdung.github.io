/**
 * Academic Data
 * GPA/CPA information by semester
 */

export const academicData = {
    semesters: [
        { id: '20221', gpa: 3.2, cpa: 3.2 },
        { id: '20222', gpa: 2.77, cpa: 2.96 },
        { id: '20231', gpa: 3.24, cpa: 3.16 },
        { id: '20232', gpa: 3.08, cpa: 3.14 },
        { id: '20241', gpa: 2.91, cpa: 3.04 },
        { id: '20242', gpa: 3.45, cpa: 3.12 }
    ],

    // Thresholds for grade badges
    thresholds: {
        high: 3.0,
        medium: 2.5
    }
};

/**
 * Get semester data by ID
 * @param {string} semesterId - Semester ID
 * @returns {Object|null} Semester data or null
 */
export function getSemesterById(semesterId) {
    return academicData.semesters.find(sem => sem.id === semesterId) || null;
}

/**
 * Get all semesters
 * @returns {Array} Array of all semesters
 */
export function getAllSemesters() {
    return academicData.semesters;
}

/**
 * Get GPA data for chart
 * @returns {Object} Chart data object
 */
export function getGPAChartData() {
    return {
        labels: academicData.semesters.map(sem => sem.id),
        data: academicData.semesters.map(sem => sem.gpa)
    };
}

/**
 * Get grade level (high/medium/low)
 * @param {number} grade - Grade value
 * @returns {string} Grade level
 */
export function getGradeLevel(grade) {
    if (grade >= academicData.thresholds.high) return 'high';
    if (grade >= academicData.thresholds.medium) return 'medium';
    return 'low';
}

/**
 * Calculate average GPA
 * @returns {number} Average GPA
 */
export function getAverageGPA() {
    const sum = academicData.semesters.reduce((acc, sem) => acc + sem.gpa, 0);
    return (sum / academicData.semesters.length).toFixed(2);
}

/**
 * Calculate average CPA
 * @returns {number} Average CPA
 */
export function getAverageCPA() {
    const sum = academicData.semesters.reduce((acc, sem) => acc + sem.cpa, 0);
    return (sum / academicData.semesters.length).toFixed(2);
}
