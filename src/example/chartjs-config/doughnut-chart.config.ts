import { ChartOptions, TooltipItem } from 'chart.js';
import { skyuxChartStyles, mergeChartConfig } from './global-chart.config';

/**
 * SKY UX Doughnut Chart Configuration
 * Specific style options for doughnut and pie charts
 * Provides reusable configurations aligned with SKY UX design system
 */

/**
 * Get Base Doughnut Chart Configuration
 * Returns a fresh config with resolved colors at runtime
 * Use this as a starting point for doughnut/pie charts
 */
function getBaseDoughnutChartConfig(): Partial<ChartOptions<'doughnut'>> {
  const textColor = skyuxChartStyles.axisTickColor;
  const fontSize = skyuxChartStyles.axisTickFontSize;
  const fontFamily = skyuxChartStyles.fontFamily;
  const fontWeight = skyuxChartStyles.axisTickFontWeight as any;
  
  return {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 12,
          font: {
            size: fontSize,
            family: fontFamily,
            weight: fontWeight,
          },
          color: textColor,
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: skyuxChartStyles.tooltipBackgroundColor,
        titleColor: skyuxChartStyles.tooltipTitleColor,
        bodyColor: skyuxChartStyles.tooltipBodyColor,
        borderColor: 'transparent',
        borderWidth: 0,
        padding: skyuxChartStyles.tooltipPadding,
        displayColors: true,
        multiKeyBackground: 'transparent',
        bodySpacing: skyuxChartStyles.tooltipBodySpacing,
        titleMarginBottom: skyuxChartStyles.tooltipTitleMarginBottom,
        caretSize: skyuxChartStyles.tooltipCaretSize,
        boxPadding: skyuxChartStyles.tooltipBoxPadding,
        caretPadding: 4,
        usePointStyle: true,
        titleFont: {
          family: skyuxChartStyles.fontFamily,
          size: skyuxChartStyles.tooltipTitleFontSize,
          weight: skyuxChartStyles.tooltipTitleFontWeight as any,
        },
        bodyFont: {
          family: skyuxChartStyles.fontFamily,
          size: skyuxChartStyles.tooltipBodyFontSize,
          weight: skyuxChartStyles.tooltipBodyFontWeight as any,
        },
      },
    },
  };
}

/**
 * Doughnut Chart Configuration (deprecated - use getSkyuxDoughnutChartConfig instead)
 * @deprecated Use getSkyuxDoughnutChartConfig() for proper color resolution
 */
export const skyuxDoughnutChartConfig: Partial<ChartOptions<'doughnut'>> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          size: 11,
          family: 'Blackbaud Sans, Arial, sans-serif',
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
};

/**
 * Helper function to get complete doughnut chart configuration
 * Merges doughnut chart config with custom configuration
 * Colors are resolved at runtime for proper theme support
 */
export function getSkyuxDoughnutChartConfig(
  customConfig?: Partial<ChartOptions<'doughnut'>>
): Partial<ChartOptions<'doughnut'>> {
  const baseConfig = getBaseDoughnutChartConfig();
  
  if (!customConfig) {
    return baseConfig;
  }
  
  // Deep merge plugins configuration
  const mergedPlugins: any = {
    ...(baseConfig.plugins || {}),
  };
  
  if (customConfig.plugins) {
    Object.keys(customConfig.plugins).forEach((pluginKey) => {
      const customPlugin = (customConfig.plugins as any)[pluginKey];
      const basePlugin = mergedPlugins[pluginKey] || {};
      
      if (pluginKey === 'tooltip' && customPlugin) {
        // Deep merge tooltip to preserve backgroundColor, titleColor, bodyColor
        mergedPlugins[pluginKey] = {
          ...basePlugin,
          ...customPlugin,
          callbacks: {
            ...(basePlugin.callbacks || {}),
            ...(customPlugin.callbacks || {}),
          },
        };
      } else if (pluginKey === 'legend' && customPlugin) {
        // Deep merge legend to preserve labels configuration
        mergedPlugins[pluginKey] = {
          ...basePlugin,
          ...customPlugin,
          labels: {
            ...(basePlugin.labels || {}),
            ...(customPlugin.labels || {}),
          },
        };
      } else {
        mergedPlugins[pluginKey] = {
          ...basePlugin,
          ...customPlugin,
        };
      }
    });
  }
  
  return {
    ...baseConfig,
    ...customConfig,
    plugins: mergedPlugins,
  };
}
