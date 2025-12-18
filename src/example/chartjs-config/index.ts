/**
 * SKY UX Chart.js Configuration Module
 * 
 * This module provides standardized Chart.js configurations that align with
 * the SKY UX design system. Use these configurations to ensure consistency
 * across all charts in your application.
 * 
 * Usage:
 * ```typescript
 * import { getSkyuxBarChartConfig, skyuxChartColors } from './chartjs-config';
 * 
 * const config = getSkyuxBarChartConfig({
 *   // Your custom options here
 * });
 * ```
 */

// Global configuration
export {
  skyuxGlobalChartConfig,
  skyuxChartColors,
  mergeChartConfig,
} from './global-chart.config';

// Bar chart configuration
export {
  skyuxBarChartConfig,
  skyuxHorizontalBarChartConfig,
  skyuxStackedBarChartConfig,
  getSkyuxBarChartConfig,
} from './bar-chart.config';
