/**
 * Chart Component
 * Handles GPA chart initialization and rendering
 * Follows Single Responsibility Principle - only handles charts
 */

import { getGPAChartData } from '../data/academic.js';

/**
 * Initialize GPA Chart
 * @param {string} canvasId - Canvas element ID
 */
export function initGPAChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id "${canvasId}" not found`);
        return null;
    }

    const ctx = canvas.getContext('2d');
    const chartData = getGPAChartData();

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.5)');
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)');

    // Initialize Chart.js
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'GPA',
                data: chartData.data,
                borderColor: '#8b5cf6',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 31, 58, 0.95)',
                    padding: 12,
                    titleColor: '#e4e6eb',
                    bodyColor: '#b0b3b8',
                    borderColor: '#8b5cf6',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return 'GPA: ' + context.parsed.y.toFixed(2);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 2.5,
                    max: 4.0,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#b0b3b8',
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#b0b3b8',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    return chart;
}

/**
 * Update chart data
 * @param {Chart} chart - Chart instance
 * @param {Object} newData - New chart data
 */
export function updateChartData(chart, newData) {
    if (!chart) return;

    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.data;
    chart.update();
}
