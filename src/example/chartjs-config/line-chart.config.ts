import { ChartOptions, TooltipItem } from 'chart.js';
import { skyuxChartStyles, mergeChartConfig } from './global-chart.config';

/**
 * SKY UX Line Chart Configuration
 * Specific style options for line charts
 * Provides reusable configurations aligned with SKY UX design system
 */

/**
 * Get Base Line Chart Configuration
 * Returns a fresh config with resolved colors at runtime
 * Use this as a starting point for line charts
 */
function getBaseLineChartConfig(): Partial<ChartOptions<'line'>> {
  const axisColor = skyuxChartStyles.axisLineColor;
  const gridlineColor = skyuxChartStyles.axisGridlineColor;
  const textColor = skyuxChartStyles.axisTickColor;
  const fontSize = skyuxChartStyles.axisTickFontSize;
  const fontFamily = skyuxChartStyles.fontFamily;
  const fontWeight = skyuxChartStyles.axisTickFontWeight as any;
  const labelPadding = skyuxChartStyles.axisTickPadding;
  const lineTension = skyuxChartStyles.lineTension;
  const lineBorderWidth = skyuxChartStyles.lineBorderWidth;
  const pointRadius = skyuxChartStyles.linePointRadius;
  const pointHoverRadius = skyuxChartStyles.linePointHoverRadius;
  const pointBorderWidth = skyuxChartStyles.linePointBorderWidth;
  
  return {
    responsive: true,
    maintainAspectRatio: false,
    
    elements: {
      line: {
        tension: lineTension,
        borderWidth: lineBorderWidth,
      },
      point: {
        radius: pointRadius,
        hoverRadius: pointHoverRadius,
        borderWidth: pointBorderWidth,
        hoverBorderWidth: pointBorderWidth,
        pointStyle: 'circle',
      },
    },
    
    scales: {
      x: {
        grid: {
          display: true,
          color: gridlineColor,
          drawTicks: false,
        },
        border: {
          display: true,
          color: axisColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: fontSize,
            family: fontFamily,
            weight: fontWeight,
          },
          padding: labelPadding,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: gridlineColor,
          drawTicks: false,
        },
        border: {
          display: true,
          color: axisColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: fontSize,
            family: fontFamily,
            weight: fontWeight,
          },
          padding: labelPadding,
        },
      },
    },
    
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 10,
          font: {
            size: 11,
            family: fontFamily,
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: skyuxChartStyles.tooltipBackgroundColor,
        titleColor: skyuxChartStyles.tooltipTitleColor,
        bodyColor: skyuxChartStyles.tooltipBodyColor,
        borderColor: 'transparent',
        borderWidth: 0,
        padding: skyuxChartStyles.tooltipPadding,
        titleMarginBottom: skyuxChartStyles.tooltipTitleMarginBottom,
        bodySpacing: skyuxChartStyles.tooltipBodySpacing,
        caretSize: skyuxChartStyles.tooltipCaretSize,
        boxPadding: skyuxChartStyles.tooltipBoxPadding,
        titleFont: {
          size: skyuxChartStyles.tooltipTitleFontSize,
          family: fontFamily,
          weight: skyuxChartStyles.tooltipTitleFontWeight as any,
        },
        bodyFont: {
          size: skyuxChartStyles.tooltipBodyFontSize,
          family: fontFamily,
          weight: skyuxChartStyles.tooltipBodyFontWeight as any,
        },
        displayColors: true,
        multiKeyBackground: 'transparent',
      },
    },
    
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };
}

/**
 * Get SKY UX Line Chart Configuration with custom options
 * Merges base config with custom options provided
 * @param customConfig Optional custom chart options to merge
 * @returns Merged chart configuration
 */
export function getSkyuxLineChartConfig(
  customConfig?: Partial<ChartOptions<'line'>>
): Partial<ChartOptions<'line'>> {
  const baseConfig = getBaseLineChartConfig();
  
  if (!customConfig) {
    return baseConfig;
  }
  
  // Deep merge scales configuration
  const mergedScales: any = {
    ...(baseConfig.scales || {}),
  };
  
  if (customConfig.scales) {
    Object.keys(customConfig.scales).forEach((scaleKey) => {
      const customScale = (customConfig.scales as any)[scaleKey];
      const baseScale = mergedScales[scaleKey] || {};
      
      mergedScales[scaleKey] = {
        ...baseScale,
        ...customScale,
        grid: {
          ...(baseScale.grid || {}),
          ...(customScale.grid || {}),
        },
        border: {
          ...(baseScale.border || {}),
          ...(customScale.border || {}),
        },
        ticks: {
          ...(baseScale.ticks || {}),
          ...(customScale.ticks || {}),
        },
      };
    });
  }
  
  // Deep merge plugins configuration
  const mergedPlugins: any = {
    ...(baseConfig.plugins || {}),
  };
  
  if (customConfig.plugins) {
    Object.keys(customConfig.plugins).forEach((pluginKey) => {
      const customPlugin = (customConfig.plugins as any)[pluginKey];
      const basePlugin = mergedPlugins[pluginKey] || {};
      
      if (typeof customPlugin === 'object' && customPlugin !== null) {
        mergedPlugins[pluginKey] = {
          ...basePlugin,
          ...customPlugin,
        };
      } else {
        mergedPlugins[pluginKey] = customPlugin;
      }
    });
  }
  
  // Merge everything together
  return {
    ...baseConfig,
    ...customConfig,
    scales: mergedScales,
    plugins: mergedPlugins,
  };
}
