import { ChartOptions, TooltipItem } from 'chart.js';
import { skyuxChartStyles, mergeChartConfig } from './global-chart.config';

/**
 * SKY UX Bar Chart Configuration
 * Specific style options for bar and horizontal bar charts
 * Provides reusable configurations aligned with SKY UX design system
 */

/**
 * Get Base Bar Chart Configuration
 * Returns a fresh config with resolved colors at runtime
 * Use this as a starting point for vertical bar charts
 */
function getBaseBarChartConfig(): Partial<ChartOptions<'bar'>> {
  const axisColor = skyuxChartStyles.axisLineColor;
  const gridlineColor = skyuxChartStyles.axisGridlineColor;
  const textColor = skyuxChartStyles.axisTickColor;
  const barBorderColor = skyuxChartStyles.barBorderColor;
  const barBorderRadius = skyuxChartStyles.barBorderRadius;
  const fontSize = skyuxChartStyles.axisTickFontSize;
  const fontFamily = skyuxChartStyles.fontFamily;
  const fontWeight = skyuxChartStyles.axisTickFontWeight as any;
  const labelPadding = skyuxChartStyles.axisTickPadding;
  
  console.log('Base config axis color:', axisColor);
  console.log('Base config gridline color:', gridlineColor);
  console.log('Base config text color:', textColor);
  console.log('Base config bar border color:', barBorderColor);
  console.log('Base config bar border radius:', barBorderRadius);
  console.log('Base config font size:', fontSize);
  console.log('Base config font family:', fontFamily);
  console.log('Base config font weight:', fontWeight);
  console.log('Base config label padding:', labelPadding);
  
  return {
    indexAxis: 'x',
    responsive: true,
    maintainAspectRatio: false,
    
    elements: {
      bar: {
        borderWidth: 2,
        borderColor: barBorderColor,
        borderRadius: barBorderRadius,
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
            family: 'Blackbaud Sans, Arial, sans-serif',
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
        borderColor: skyuxChartStyles.tooltipBorderColor,
        borderWidth: 1,
        padding: skyuxChartStyles.tooltipPadding,
        bodySpacing: skyuxChartStyles.tooltipBodySpacing,
        titleMarginBottom: skyuxChartStyles.tooltipTitleMarginBottom,
        caretSize: skyuxChartStyles.tooltipCaretSize,
        boxPadding: skyuxChartStyles.tooltipBoxPadding,
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
 * Base Bar Chart Configuration (deprecated - use getSkyuxBarChartConfig instead)
 * @deprecated Use getSkyuxBarChartConfig() for proper color resolution
 */
export const skyuxBarChartConfig: Partial<ChartOptions<'bar'>> = {
  indexAxis: 'x',
  responsive: true,
  maintainAspectRatio: false,
  
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: true,
      },
      ticks: {
        font: {
          size: 11,
          family: 'Blackbaud Sans, Arial, sans-serif',
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
      border: {
        display: true,
      },
      ticks: {
        font: {
          size: 11,
          family: 'Blackbaud Sans, Arial, sans-serif',
        },
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
          family: 'Blackbaud Sans, Arial, sans-serif',
        },
      },
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
};

/**
 * Horizontal Bar Chart Configuration (deprecated - use getSkyuxBarChartConfig with indexAxis: 'y')
 * @deprecated Use getSkyuxBarChartConfig({ indexAxis: 'y' }) for proper color resolution
 */
export const skyuxHorizontalBarChartConfig: Partial<ChartOptions<'bar'>> = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
};

/**
 * Stacked Bar Chart Configuration (deprecated)
 * @deprecated Use getSkyuxBarChartConfig() with scales.x.stacked and scales.y.stacked
 */
export const skyuxStackedBarChartConfig: Partial<ChartOptions<'bar'>> = {
  ...skyuxBarChartConfig,
};

/**
 * Helper function to get complete bar chart configuration
 * Merges bar chart config with custom configuration
 * Colors are resolved at runtime for proper theme support
 */
export function getSkyuxBarChartConfig(
  customConfig?: Partial<ChartOptions<'bar'>>
): Partial<ChartOptions<'bar'>> {
  const baseConfig = getBaseBarChartConfig();
  
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
  
  // Deep merge plugins configuration, especially tooltip
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
    scales: mergedScales,
    plugins: mergedPlugins,
  };
}
