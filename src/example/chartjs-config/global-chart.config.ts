import { ChartOptions, FontSpec, InteractionMode } from 'chart.js';

/**
 * Get SKY UX Global Chart.js Configuration
 * Contains default style options that apply to all chart types
 * These options align with SKY UX design system principles
 * Colors are resolved at runtime from CSS custom properties
 */
function getSkyuxGlobalChartConfig(): Partial<ChartOptions> {
  const tooltipBgColor = skyuxChartColors.backgroundContainer;
  const tooltipTextColor = skyuxChartColors.textDefault;
  
  return {
    // Responsiveness
    responsive: true,
    maintainAspectRatio: false,
    
    // Interaction options
    interaction: {
      mode: 'nearest' as InteractionMode,
      intersect: false,
    },
    
    // Animation options
    animation: {
      duration: 400,
      easing: 'easeInOutQuart',
    },
    
    // Layout options
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    
    // Global plugin options
    plugins: {
      // Legend configuration
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
          boxHeight: 8,
          font: {
            family: 'Blackbaud Sans, Arial, sans-serif',
            size: 12,
            style: 'normal',
            weight: 400,
            lineHeight: 1.5,
          },
          color: '#212121',
          pointStyle: 'circle',
          textAlign: 'left',
        },
        title: {
          display: false,
          color: '#212121',
          font: {
            family: 'Blackbaud Sans, Arial, sans-serif',
            size: 14,
            style: 'normal',
            weight: 600,
            lineHeight: 1.5,
          },
          padding: {
            top: 0,
            bottom: 10,
          },
        },
        fullSize: true,
        reverse: false,
        maxHeight: undefined,
        maxWidth: undefined,
      },
      
      // Tooltip configuration
      tooltip: {
        enabled: true,
        mode: 'nearest' as InteractionMode,
        intersect: false,
        backgroundColor: tooltipBgColor,
        titleColor: tooltipTextColor,
        bodyColor: tooltipTextColor,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: {
          top: 8,
          right: 12,
          bottom: 8,
          left: 12,
        },
        cornerRadius: 4,
        displayColors: true,
        boxWidth: 12,
        boxHeight: 12,
        boxPadding: 4,
        usePointStyle: true,
        titleFont: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 12,
          style: 'normal',
          weight: 600,
          lineHeight: 1.5,
        },
        bodyFont: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 12,
          style: 'normal',
          weight: 400,
          lineHeight: 1.5,
        },
        footerFont: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 11,
          style: 'normal',
          weight: 400,
          lineHeight: 1.5,
        },
        titleAlign: 'left',
        bodyAlign: 'left',
        footerAlign: 'left',
        titleSpacing: 2,
        titleMarginBottom: 6,
        bodySpacing: 4,
        footerSpacing: 2,
        footerMarginTop: 6,
        caretPadding: 4,
        caretSize: 6,
        multiKeyBackground: '#ffffff',
      },
      
      // Title configuration
      title: {
        display: false,
        position: 'top',
        align: 'center',
        color: '#212121',
        font: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 16,
          style: 'normal',
          weight: 600,
          lineHeight: 1.5,
        },
        padding: {
          top: 0,
          bottom: 10,
        },
        fullSize: true,
      },
      
      // Subtitle configuration
      subtitle: {
        display: false,
        position: 'top',
        align: 'center',
        color: '#686c73',
        font: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 13,
          style: 'normal',
          weight: 400,
          lineHeight: 1.5,
        },
        padding: {
          top: 0,
          bottom: 10,
        },
        fullSize: true,
      },
    },
    
    // Global element options
    elements: {
      point: {
        radius: 3,
        pointStyle: 'circle',
        backgroundColor: '#0078d4',
        borderWidth: 0,
        borderColor: '#ffffff',
        hitRadius: 4,
        hoverRadius: 5,
        hoverBorderWidth: 2,
      },
      line: {
        tension: 0.4,
        backgroundColor: 'rgba(0, 120, 212, 0.1)',
        borderWidth: 2,
        borderColor: '#0078d4',
        borderCapStyle: 'round',
        borderJoinStyle: 'round',
        fill: false,
        stepped: false,
      },
      arc: {
        backgroundColor: '#0078d4',
        borderWidth: 0,
        borderColor: '#ffffff',
        borderAlign: 'center',
        borderRadius: 0,
        circular: true,
        offset: 0,
      },
      bar: {
        backgroundColor: '#0078d4',
        borderWidth: 0,
        borderColor: '#ffffff',
        borderSkipped: 'start',
        borderRadius: 4,
        inflateAmount: 'auto',
      },
    },
    
    // Hover interaction mode
    hover: {
      mode: 'nearest' as InteractionMode,
      intersect: false,
    },
  };
}

/**
 * SKY UX Global Chart.js Configuration (deprecated)
 * @deprecated Use mergeChartConfig() which calls getSkyuxGlobalChartConfig() for proper color resolution
 */
export const skyuxGlobalChartConfig: Partial<ChartOptions> = {
  // Responsiveness
  responsive: true,
  maintainAspectRatio: false,
  
  // Interaction options
  interaction: {
    mode: 'nearest' as InteractionMode,
    intersect: false,
  },
  
  // Animation options
  animation: {
    duration: 400,
    easing: 'easeInOutQuart',
  },
  
  // Layout options
  layout: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  
  // Global plugin options
  plugins: {
    // Legend configuration
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        usePointStyle: true,
        padding: 15,
        boxWidth: 8,
        boxHeight: 8,
        font: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 12,
          style: 'normal',
          weight: 400,
          lineHeight: 1.5,
        },
        color: '#212121',
        pointStyle: 'circle',
        textAlign: 'left',
      },
      title: {
        display: false,
        color: '#212121',
        font: {
          family: 'Blackbaud Sans, Arial, sans-serif',
          size: 14,
          style: 'normal',
          weight: 600,
          lineHeight: 1.5,
        },
        padding: {
          top: 0,
          bottom: 10,
        },
      },
      fullSize: true,
      reverse: false,
      maxHeight: undefined,
      maxWidth: undefined,
    },
    
    // Tooltip configuration
    tooltip: {
      enabled: true,
      mode: 'nearest' as InteractionMode,
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      padding: {
        top: 8,
        right: 12,
        bottom: 8,
        left: 12,
      },
      cornerRadius: 4,
      displayColors: true,
      boxWidth: 12,
      boxHeight: 12,
      boxPadding: 4,
      usePointStyle: true,
      titleFont: {
        family: 'Blackbaud Sans, Arial, sans-serif',
        size: 12,
        style: 'normal',
        weight: 600,
        lineHeight: 1.5,
      },
      bodyFont: {
        family: 'Blackbaud Sans, Arial, sans-serif',
        size: 12,
        style: 'normal',
        weight: 400,
        lineHeight: 1.5,
      },
      footerFont: {
        family: 'Blackbaud Sans, Arial, sans-serif',
        size: 11,
        style: 'normal',
        weight: 400,
        lineHeight: 1.5,
      },
      titleAlign: 'left',
      bodyAlign: 'left',
      footerAlign: 'left',
      titleSpacing: 2,
      titleMarginBottom: 6,
      bodySpacing: 4,
      footerSpacing: 2,
      footerMarginTop: 6,
      caretPadding: 4,
      caretSize: 6,
      multiKeyBackground: '#ffffff',
    },
    
    // Title configuration
    title: {
      display: false,
      position: 'top',
      align: 'center',
      color: '#212121',
      font: {
        family: 'Blackbaud Sans, Arial, sans-serif',
        size: 16,
        style: 'normal',
        weight: 600,
        lineHeight: 1.5,
      },
      padding: {
        top: 0,
        bottom: 10,
      },
      fullSize: true,
    },
    
    // Subtitle configuration
    subtitle: {
      display: false,
      position: 'top',
      align: 'center',
      color: '#686c73',
      font: {
        family: 'Blackbaud Sans, Arial, sans-serif',
        size: 13,
        style: 'normal',
        weight: 400,
        lineHeight: 1.5,
      },
      padding: {
        top: 0,
        bottom: 10,
      },
      fullSize: true,
    },
  },
  
  // Global element options
  elements: {
    point: {
      radius: 3,
      pointStyle: 'circle',
      backgroundColor: '#0078d4',
      borderWidth: 0,
      borderColor: '#ffffff',
      hitRadius: 4,
      hoverRadius: 5,
      hoverBorderWidth: 2,
    },
    line: {
      tension: 0.4,
      backgroundColor: 'rgba(0, 120, 212, 0.1)',
      borderWidth: 2,
      borderColor: '#0078d4',
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      fill: false,
      stepped: false,
    },
    arc: {
      backgroundColor: '#0078d4',
      borderWidth: 0,
      borderColor: '#ffffff',
      borderAlign: 'center',
      borderRadius: 0,
      circular: true,
      offset: 0,
    },
    bar: {
      backgroundColor: '#0078d4',
      borderWidth: 0,
      borderColor: '#ffffff',
      borderSkipped: 'start',
      borderRadius: 4,
      inflateAmount: 'auto',
    },
  },
  
  // Hover interaction mode
  hover: {
    mode: 'nearest' as InteractionMode,
    intersect: false,
  },
};

/**
 * Resolve CSS custom property value
 * Checks both document body and document element for theme classes
 */
function resolveCssVariable(varName: string): string {
  if (typeof document === 'undefined') {
    return ''; // Return empty for SSR
  }
  
  // Try to get from body first (where theme classes are typically applied)
  let value = getComputedStyle(document.body)
    .getPropertyValue(varName)
    .trim();
  
  // Fallback to document element
  if (!value) {
    value = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  
  return value || '';
}

/**
 * Get SKY UX visualization category colors
 * Resolves CSS custom properties at runtime
 */
function getSkyUXVizColors(): string[] {
  const colors = [
    resolveCssVariable('--sky-color-viz-category-1'),
    resolveCssVariable('--sky-color-viz-category-2'),
    resolveCssVariable('--sky-color-viz-category-3'),
    resolveCssVariable('--sky-color-viz-category-4'),
    resolveCssVariable('--sky-color-viz-category-5'),
    resolveCssVariable('--sky-color-viz-category-6'),
    resolveCssVariable('--sky-color-viz-category-7'),
    resolveCssVariable('--sky-color-viz-category-8'),
  ];
  
  // Debug: log resolved colors
  console.log('SKY UX Chart Series Colors:', colors);
  
  return colors;
}

/**
 * SKY UX Color Palette for Charts
 * Standard colors that align with SKY UX design system
 * All colors are resolved from CSS custom properties at runtime
 */
export const skyuxChartColors = {
  // Primary colors
  primary: '#0078d4',
  primaryLight: '#50e6ff',
  primaryDark: '#005a9e',
  
  // Semantic colors
  success: '#71bf44',
  warning: '#fbb034',
  danger: '#d13438',
  info: '#00b4f0',
  
  // Neutral colors
  black: '#212121',
  grayDark: '#686c73',
  gray: '#a5acb5',
  grayLight: '#cdcfd2',
  grayLighter: '#e1e1e1',
  grayLightest: '#f1f1f1',
  white: '#ffffff',
  
  // Chart series colors (for multi-series charts)
  // Uses SKY UX visualization category colors resolved from CSS custom properties
  // Always start with category 1 and increment for each additional series
  get series(): string[] {
    return getSkyUXVizColors();
  },
  
  // Visualization colors resolved from CSS custom properties
  get axis(): string {
    const color = resolveCssVariable('--sky-color-viz-axis');
    console.log('SKY UX Axis Color:', color);
    return color || '#85888d'; // Fallback to gray-500
  },
  
  get gridline(): string {
    const color = resolveCssVariable('--sky-color-viz-gridline');
    console.log('SKY UX Gridline Color:', color);
    return color || '#e0e1e2'; // Fallback to gray-200
  },
  
  get marker(): string {
    const color = resolveCssVariable('--sky-color-viz-marker');
    return color || '#252b33'; // Fallback to gray-900
  },
  
  get backgroundContainer(): string {
    const color = resolveCssVariable('--sky-color-background-container-base');
    console.log('SKY UX Background Container Color:', color);
    return color || '#ffffff'; // Fallback to white
  },
  
  get textDefault(): string {
    const color = resolveCssVariable('--sky-color-text-default');
    console.log('SKY UX Text Default Color:', color);
    return color || '#252b33'; // Fallback to gray-900
  },
  
  get borderContainer(): string {
    const color = resolveCssVariable('--sky-color-border-container-base');
    console.log('SKY UX Border Container Color:', color);
    return color || '#c2c4c6'; // Fallback to gray-300
  },
  
  get elevationOverlay(): string {
    const shadow = resolveCssVariable('--sky-elevation-overlay-100');
    console.log('SKY UX Elevation Overlay:', shadow);
    return shadow || '0px 2px 4px 0px rgba(0, 0, 0, 0.15)'; // Fallback
  },
  
  get spaceInsetBalanced(): string {
    const space = resolveCssVariable('--sky-space-inset-balanced-s');
    console.log('SKY UX Space Inset Balanced:', space);
    return space || '8px'; // Fallback
  },
};

/**
 * Helper function to merge global config with chart-specific config
 * Colors are resolved at runtime for proper theme support
 */
export function mergeChartConfig<T extends ChartOptions>(
  chartSpecificConfig: Partial<T>
): Partial<T> {
  const globalConfig = getSkyuxGlobalChartConfig();
  
  return {
    ...globalConfig,
    ...chartSpecificConfig,
    plugins: {
      ...globalConfig.plugins,
      ...chartSpecificConfig.plugins,
    },
    elements: {
      ...globalConfig.elements,
      ...chartSpecificConfig.elements,
    },
  } as Partial<T>;
}
