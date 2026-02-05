/**
 * Main JavaScript Entry Point
 * Initializes all components and features
 */

import { initGPAChart } from './components/chart.js';
import { initSmoothScroll, initActiveNavHighlight, initHeaderShadow } from './components/navigation.js';
import { animateOnScroll } from './utils/helpers.js';

/**
 * Initialize application
 */
function init() {
    console.log('🚀 Initializing portfolio...');

    // Initialize navigation features
    initSmoothScroll();
    initActiveNavHighlight();
    initHeaderShadow();

    // Initialize GPA chart
    try {
        const chart = initGPAChart('gpaChart');
        if (chart) {
            console.log('✅ GPA Chart initialized');
        }
    } catch (error) {
        console.error('❌ Error initializing GPA chart:', error);
    }

    // Initialize scroll animations
    animateOnScroll('.project-card', 'fade-in-up');
    animateOnScroll('.skill-category', 'fade-in-up');
    animateOnScroll('.cert-item', 'fade-in-up');

    console.log('✅ Portfolio initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential external use
export { init };
