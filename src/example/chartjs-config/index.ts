/**
 * SKY UX Chart.js Configuration Module
 * 
 * This module provides standardized Chart.js configurations that align with
 * the SKY UX design system. Use these configurations to ensure consistency
 * across all charts in your application.
 * 
 * Usage:
 * ```typescript
 * import { getSkyuxBarChartConfig, skyuxChartStyles } from './chartjs-config';
 * 
 * const config = getSkyuxBarChartConfig({
 *   // Your custom options here
 * });
 * ```
 */

// Global configuration
export {
  skyuxChartStyles,
  mergeChartConfig,
} from './global-chart.config';

// Bar chart configuration
export {
  getSkyuxBarChartConfig,
  calculateHorizontalBarChartHeight,
  getVerticalBarChartSizing,
  getVerticalBarChartHeight,
} from './bar-chart.config';

export type {
  ResponsiveChartOptions,
} from './bar-chart.config';

// Line chart configuration
export {
  getSkyuxLineChartConfig,
} from './line-chart.config';

// Doughnut chart configuration
export {
  getSkyuxDoughnutChartConfig,
  getSkyuxDoughnutDatasetBorder,
} from './doughnut-chart.config';
