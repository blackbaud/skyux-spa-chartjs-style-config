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
  const labelPaddingX = skyuxChartStyles.axisTickPaddingX;
  const labelPaddingY = skyuxChartStyles.axisTickPaddingY;
  const tickLengthX = skyuxChartStyles.axisTickLengthX;
  const tickLengthY = skyuxChartStyles.axisTickLengthY;
  const lineTension = skyuxChartStyles.lineTension;
  const lineBorderWidth = skyuxChartStyles.lineBorderWidth;
  const pointRadius = skyuxChartStyles.linePointRadius;
  const pointHoverRadius = skyuxChartStyles.linePointHoverRadius;
  const pointBorderWidth = skyuxChartStyles.linePointBorderWidth;
  
  return {
    responsive: true,
    maintainAspectRatio: false,
    
    layout: {
      padding: skyuxChartStyles.chartPadding,
    },
    
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
          tickColor: gridlineColor,
          drawTicks: true,
          tickLength: tickLengthX,
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
          padding: labelPaddingX,
          major: {
            enabled: true,
          },
        },
        title: {
          display: false,
          font: {
            size: skyuxChartStyles.scaleTitleFontSize,
            family: skyuxChartStyles.scaleTitleFontFamily,
          },
          color: skyuxChartStyles.scaleTitleColor,
          padding: {
            top: skyuxChartStyles.scaleXTitlePaddingTop,
            bottom: skyuxChartStyles.scaleXTitlePaddingBottom,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: gridlineColor,
          tickColor: gridlineColor,
          drawTicks: true,
          tickLength: tickLengthY,
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
          padding: labelPaddingY,
          major: {
            enabled: true,
          },
        },
        title: {
          display: false,
          font: {
            size: skyuxChartStyles.scaleTitleFontSize,
            family: skyuxChartStyles.scaleTitleFontFamily,
          },
          color: skyuxChartStyles.scaleTitleColor,
          padding: {
            top: skyuxChartStyles.scaleYTitlePaddingLeft,
            bottom: skyuxChartStyles.scaleYTitlePaddingRight,
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
          pointStyle: 'circle',
          boxWidth: skyuxChartStyles.legendPointSize,
          boxHeight: skyuxChartStyles.legendPointSize,
          padding: skyuxChartStyles.legendLabelsPadding,
          font: {
            size: skyuxChartStyles.legendFontSize,
            weight: skyuxChartStyles.legendFontWeight as any,
            family: skyuxChartStyles.legendFontFamily,
            lineHeight: skyuxChartStyles.legendFontLineHeight,
          },
          color: skyuxChartStyles.legendLabelColor,
        },
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
      
      // Extract nested objects that need deep merging
      const { grid: customGrid, border: customBorder, ticks: customTicks, title: customTitle, ...customRest } = customScale;
      const { grid: baseGrid, border: baseBorder, ticks: baseTicks, title: baseTitle, ...baseRest } = baseScale;
      
      mergedScales[scaleKey] = {
        ...baseRest,
        ...customRest,
        grid: {
          ...(baseGrid || {}),
          ...(customGrid || {}),
        },
        border: {
          ...(baseBorder || {}),
          ...(customBorder || {}),
        },
        ticks: {
          ...(baseTicks || {}),
          ...(customTicks || {}),
        },
        title: {
          ...(baseTitle || {}),
          ...(customTitle || {}),
          font: {
            ...(baseTitle?.font || {}),
            ...(customTitle?.font || {}),
          },
          padding: {
            ...(baseTitle?.padding || {}),
            ...(customTitle?.padding || {}),
          },
        },
      };
    });
  }
  
  // Normalize tick lengths per axis and reduce when ticks are hidden
  Object.keys(mergedScales).forEach((scaleKey) => {
    const scale = mergedScales[scaleKey] || {};
    const grid = scale.grid || {};
    const isXAxis = scaleKey.toLowerCase().startsWith('x');
    const isYAxis = scaleKey.toLowerCase().startsWith('y');
    const defaultTickLength = isXAxis
      ? skyuxChartStyles.axisTickLengthX
      : skyuxChartStyles.axisTickLengthY;
    const hiddenTickLength = isXAxis
      ? skyuxChartStyles.axisTickLengthXHidden
      : skyuxChartStyles.axisTickLengthYHidden;
    const ticksHidden = grid.display === false || grid.drawTicks === false || grid.tickColor === 'transparent';
    if (isXAxis || isYAxis) {
      scale.grid = {
        ...grid,
        tickLength: ticksHidden ? hiddenTickLength : (grid.tickLength ?? defaultTickLength),
      };
      mergedScales[scaleKey] = scale;
    }
  });
  
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
  
  // Merge everything together and apply global config
  const finalConfig = mergeChartConfig({
    ...baseConfig,
    ...customConfig,
    scales: mergedScales,
    plugins: mergedPlugins,
  });
  
  return finalConfig;
}
