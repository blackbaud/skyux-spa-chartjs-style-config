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
  const barBorderWidth = skyuxChartStyles.barBorderWidth;
  const barBorderRadius = skyuxChartStyles.barBorderRadius;
  const fontSize = skyuxChartStyles.axisTickFontSize;
  const fontFamily = skyuxChartStyles.fontFamily;
  const fontWeight = skyuxChartStyles.axisTickFontWeight as any;
  const labelPaddingX = skyuxChartStyles.axisTickPaddingX;
  const labelPaddingY = skyuxChartStyles.axisTickPaddingY;
  const tickLengthX = skyuxChartStyles.axisTickLengthX;
  const tickLengthY = skyuxChartStyles.axisTickLengthY;
  
  console.log('Base config axis color:', axisColor);
  console.log('Base config gridline color:', gridlineColor);
  console.log('Base config text color:', textColor);
  console.log('Base config bar border color:', barBorderColor);
  console.log('Base config bar border radius:', barBorderRadius);
  console.log('Base config font size:', fontSize);
  console.log('Base config font family:', fontFamily);
  console.log('Base config font weight:', fontWeight);
  console.log('Base config label padding (X):', labelPaddingX);
  console.log('Base config label padding (Y):', labelPaddingY);
  
  return {
    indexAxis: 'x',
    responsive: true,
    maintainAspectRatio: false,
    
    layout: {
      padding: skyuxChartStyles.chartPadding,
    },
    
    datasets: {
      bar: {
        categoryPercentage: .7,
        // barPercentage: 0.7,
      },
    },
    
    elements: {
      bar: {
        borderWidth: barBorderWidth,
        borderColor: barBorderColor,
        borderRadius: barBorderRadius,
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
  };
}

/**
 * Base Bar Chart Configuration (deprecated - use getSkyuxBarChartConfig instead)
 * @deprecated Use getSkyuxBarChartConfig() for proper color resolution
 */
export const skyuxBarChartConfig: Partial<ChartOptions<'bar'>> = {
  indexAxis: 'x',
  responsive: true,
  maintainAspectRatio: true,
  
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
          family: 'BLKB Sans, Arial, sans-serif',
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
          family: 'BLKB Sans, Arial, sans-serif',
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
        padding: 10,
        font: {
          size: 11,
          family: 'BLKB Sans, Arial, sans-serif',
        },
        color: 'var(--sky-color-text-deemphasized)',
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
 * Configuration options for responsive behavior and aspect ratio
 */
export interface ResponsiveChartOptions {
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  aspectRatio?: number;
}

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
 * 
 * @param customConfig - Custom chart configuration options
 * @param responsiveOptions - Responsive behavior options (responsive, maintainAspectRatio, aspectRatio)
 */
export function getSkyuxBarChartConfig(
  customConfig?: Partial<ChartOptions<'bar'>>,
  responsiveOptions?: ResponsiveChartOptions
): Partial<ChartOptions<'bar'>> {
  const baseConfig = getBaseBarChartConfig();
  
  // Apply responsive options if provided
  if (responsiveOptions) {
    if (responsiveOptions.responsive !== undefined) {
      baseConfig.responsive = responsiveOptions.responsive;
    }
    if (responsiveOptions.maintainAspectRatio !== undefined) {
      baseConfig.maintainAspectRatio = responsiveOptions.maintainAspectRatio;
    }
    if (responsiveOptions.aspectRatio !== undefined) {
      baseConfig.aspectRatio = responsiveOptions.aspectRatio;
    }
  }
  
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

  // Remove gridlines on the category axis (horizontal: y, vertical: x)
  const resolvedIndexAxis = customConfig?.indexAxis ?? baseConfig.indexAxis ?? 'x';
  const categoryAxisKey = resolvedIndexAxis === 'y' ? 'y' : 'x';
  if (mergedScales[categoryAxisKey]) {
    const categoryScale = mergedScales[categoryAxisKey];
    const categoryGrid = categoryScale.grid || {};
    mergedScales[categoryAxisKey] = {
      ...categoryScale,
      grid: {
        ...categoryGrid,
        display: false,
        lineWidth: 0,
        drawTicks: false,
        tickLength: 0,
      },
    };
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
  
  // Merge with global config to ensure tooltip and other global settings are applied
  const finalConfig = mergeChartConfig({
    ...baseConfig,
    ...customConfig,
    scales: mergedScales,
    plugins: mergedPlugins,
  });
  
  return finalConfig;
}

/**
 * Bar Sizing Configuration Interface
 * Defines parameters for calculating optimal chart height
 * All measurements in rem units (1rem = 16px)
 */
export interface BarSizingConfig {
  /** Target bar width in rem (default: 1rem = 16px) */
  idealBarWidth?: number;
  /** Minimum bar width in rem (default: 0.75rem = 12px) */
  minBarWidth?: number;
  /** Maximum bar width in rem (default: 1.5rem = 24px) */
  maxBarWidth?: number;
  /** Space reserved for title/legend at top in pixels (default: 60px) */
  paddingTop?: number;
  /** Space reserved for x-axis labels at bottom in pixels (default: 40px) */
  paddingBottom?: number;
}

/**
 * Result of optimal bar settings calculation
 */
export interface BarSizingResult {
  /** Calculated height in pixels */
  height: number;
  /** Optimal category percentage (0-1) */
  categoryPercentage: number;
  /** Optimal bar percentage (0-1) */
  barPercentage: number;
  /** Space between categories in rem */
  spaceBetweenCategories: number;
}

// =============================================================================
// HORIZONTAL BAR CHART SIZING
// =============================================================================

// =============================================================================
// HORIZONTAL BAR CHART SIZING: TUNING CONSTANTS
// =============================================================================
const BAR_CATEGORY_TUNING = {
  // Overall density behavior
  barDensityThreshold: 12,

  // Bar thickness behavior
  idealBarWidthRem: 1, // 1rem = 16px
  barPercentage: 1,

  // Sparse layouts (<= threshold)
  sparse: {
    baseSpacingRem: 1,
    minSpacingRem: 0.15,
    categoryPercentageCap: 0.75,
    verticalPaddingPerCategoryRem: .5,
  },

  // Dense layouts (> threshold)
  dense: {
    baseSpacingRem: 0.4,
    minSpacingRem: 0.125,
    categoryPercentageCap: 0.85,
    datasetSpacingReductionDivisor: 4,
  },
};

/**
 * Calculate optimal categoryPercentage and barPercentage for horizontal bar charts
 * Based on total bar density (numCategories × numDatasets) to ensure consistent bar widths
 * 
 * Uses relative rem units for calculations (1rem = 16px in most browsers):
 * - Ideal bar width: 1rem (16px)
 * - Base inter-category spacing: 0.2rem (3.2px) for sparse charts, 0.25rem (4px) for dense
 * - Minimum spacing: 0.125rem (2px)
 * - Bar density threshold: 12 total bars (numCategories × numDatasets)
 * 
 * @param numCategories - Number of categories in the chart
 * @param numDatasets - Number of datasets (grouped bars per category, or 1 for stacked)
 * @returns Optimal categoryPercentage and barPercentage values
 */
export function calculateOptimalBarSettings(numCategories: number, numDatasets: number): { categoryPercentage: number; barPercentage: number; spaceBetweenCategories: number } {
  const totalBars = numCategories * numDatasets;
  const { barDensityThreshold, idealBarWidthRem, barPercentage, sparse, dense } = BAR_CATEGORY_TUNING;
  
  // Calculate space per bar
  const spacePerBar = idealBarWidthRem / barPercentage;
  const spaceForAllBars = spacePerBar * numDatasets;
  
  // Determine spacing and cap based on bar density
  let spaceBetweenCategories: number;
  let categoryPercentageCap: number;
  
  if (totalBars <= barDensityThreshold) {
    // Sparse chart: prioritize wide bars (1rem) with more spacing for clarity
    // Scale spacing inversely with category count to prevent accumulation from making bars appear narrower
    spaceBetweenCategories = Math.max(sparse.minSpacingRem, sparse.baseSpacingRem / Math.sqrt(numCategories));
    categoryPercentageCap = sparse.categoryPercentageCap;
  } else {
    // Dense chart: reduce spacing and apply lower cap
    spaceBetweenCategories = dense.baseSpacingRem;
    categoryPercentageCap = dense.categoryPercentageCap;
    
    // For very dense charts (4+ datasets), further reduce spacing
    if (numDatasets > 3) {
      const excessDatasets = numDatasets - 3;
      const reductionPerDataset = idealBarWidthRem / dense.datasetSpacingReductionDivisor;
      const totalReduction = Math.min(excessDatasets * reductionPerDataset, idealBarWidthRem);
      spaceBetweenCategories = Math.max(dense.minSpacingRem, spaceBetweenCategories - totalReduction);
    }
  }
  
  // Calculate category percentage: space for bars / (space for bars + spacing)
  const totalCategorySpace = spaceForAllBars + spaceBetweenCategories;
  const categoryPercentage = spaceForAllBars / totalCategorySpace;
  
  return {
    categoryPercentage: Math.min(categoryPercentageCap, Math.max(0.5, categoryPercentage)),
    barPercentage,
    spaceBetweenCategories
  };
}

/**
 * Calculate optimal chart height for horizontal bar charts
 * Ensures bars render at consistent width across different data sizes
 * 
 * Uses relative rem units for calculations (1rem = 16px):
 * - Ideal bar width: 1rem (16px)
 * - Min bar width: 0.875rem (14px)
 * - Max bar width: 1.5rem (24px)
 * - Base spacing: 0.25rem (4px)
 * - Converts to pixels for ChartJS height requirement
 * 
 * Algorithm determines optimal categoryPercentage based on number of datasets:
 * - Reduces inter-category spacing from 0.25rem base to minimum 0.125rem as datasets increase
 * - For 4+ datasets, reduces spacing by up to one full bar width to maximize bar space
 * 
 * @param numCategories - Number of categories (bars) in the chart
 * @param numDatasets - Number of datasets (grouped bars per category, or 1 for stacked)
 * @param config - Configuration for bar sizing parameters (in rem units)
 * @returns Object with calculated height (in pixels) and optimal bar settings
 * 
 * @example
 * // For 5 categories with 2 grouped datasets
 * const result = calculateHorizontalBarChartHeight(5, 2, {
 *   idealBarWidth: 1,
 *   minBarWidth: 0.875
 * });
 * // result = { height: 200, categoryPercentage: 0.96, barPercentage: 0.9 }
 * 
 * @example
 * // For stacked bar chart with 4 categories
 * const result = calculateHorizontalBarChartHeight(4, 1);
 * // result = { height: 160, categoryPercentage: 0.98, barPercentage: 0.9 }
 */
export function calculateHorizontalBarChartHeight(
  numCategories: number,
  numDatasets: number,
  config: BarSizingConfig = {}
): BarSizingResult {
  // Convert rem values to pixels for calculations (1rem = 16px)
  const pxPerRem = 16;
  const heightRoundingIncrement = 0.5 * pxPerRem;
  
  // ---------------------------------------------------------------------------
  // BAR/CATEGORY SIZING OPTIONS (OVERRIDABLE VIA config)
  // ---------------------------------------------------------------------------
  const {
    idealBarWidth = BAR_CATEGORY_TUNING.idealBarWidthRem,
    minBarWidth = 0.875,
    maxBarWidth = 1.25,
    paddingTop = 60,
    paddingBottom = 40,
  } = config;

  // Get optimal bar settings based on total bar density
  const optimalSettings = calculateOptimalBarSettings(numCategories, numDatasets);
  const barPercentage = optimalSettings.barPercentage;
  const spaceBetweenCategoriesRem = optimalSettings.spaceBetweenCategories;

  // Convert ideal bar width from rem to pixels for height calculation
  const idealBarWidthPx = idealBarWidth * pxPerRem;
  
  // Calculate space needed per category to fit bars at ideal width
  const spacePerBar = idealBarWidthPx / barPercentage;
  
  // Use spacing from optimal settings (in rem) and convert to pixels
  const spaceBetweenCategories = spaceBetweenCategoriesRem * pxPerRem;
  
  // Category space includes all bars plus spacing between them
  let spacePerCategory = (spacePerBar * numDatasets) + spaceBetweenCategories;
  
  // Add vertical padding for sparse layouts to increase breathing room
  const totalBars = numCategories * numDatasets;
  if (totalBars <= BAR_CATEGORY_TUNING.barDensityThreshold) {
    const verticalPaddingPx = BAR_CATEGORY_TUNING.sparse.verticalPaddingPerCategoryRem * pxPerRem;
    spacePerCategory += verticalPaddingPx;
  }
  
  // Total chart area for all categories
  const chartArea = spacePerCategory * numCategories;
  
  // Add padding for labels, title, legend
  let totalHeight = chartArea + paddingTop + paddingBottom;
  
  // Apply constraints - calculate min/max heights based on bar width limits
  const minBarWidthPx = minBarWidth * pxPerRem;
  const maxBarWidthPx = maxBarWidth * pxPerRem;
  
  const minSpacePerBar = minBarWidthPx / barPercentage;
  const maxSpacePerBar = maxBarWidthPx / barPercentage;
  
  const minSpacePerCategory = (minSpacePerBar * numDatasets) + spaceBetweenCategories;
  const maxSpacePerCategory = (maxSpacePerBar * numDatasets) + spaceBetweenCategories;
  
  const minHeight = minSpacePerCategory * numCategories + paddingTop + paddingBottom;
  const maxHeight = maxSpacePerCategory * numCategories + paddingTop + paddingBottom;
  
  // Clamp to reasonable bounds
  totalHeight = Math.max(minHeight, Math.min(maxHeight, totalHeight));
  
  // Round to reasonable increments (40px for clean values)
  const height = Math.round(totalHeight / heightRoundingIncrement) * heightRoundingIncrement;
  
  return {
    height,
    categoryPercentage: optimalSettings.categoryPercentage,
    barPercentage: optimalSettings.barPercentage,
    spaceBetweenCategories: spaceBetweenCategoriesRem
  };
}

// =============================================================================
// VERTICAL BAR CHART SIZING
// =============================================================================

/**
 * Vertical Bar Chart Sizing Configuration
 * Contains all tunable parameters for responsive vertical bar chart sizing
 * Adjust these values to tweak the responsive sizing strategy
 */
export const verticalBarChartSizing = {
  // Data-range-driven height controls (in pixels)
  heightRange: {
    min: 180,
    max: 400,
  },

  // Data-range-driven tuning
  dataRangeHeight: {
    // Prevent extreme height swings for very tight ranges
    rangeRatioFloor: 0.15,
    // Cap height for smaller viewports
    smallViewportMax: 360,
  },

  // Bar percentage for different data densities
  // Determines how much of the category space is used by bars
  barPercentages: {
    fewBars: 1,     // 2-3 bars: leave more breathing room
    mediumBars: 1,  // 4-8 bars: balanced sizing
    manyBars: 1,    // 9+ bars: maximize use of space
  },

  // Category percentage for different data densities
  // Determines how much of the available width is allocated to each category
  categoryPercentages: {
    fewBars: 0.4,     // 2-3 bars: more space between categories
    mediumBars: 0.7,  // 4-8 bars: balanced spacing
    manyBars: 0.95,   // 9+ bars: tight spacing for density
  },

  // Hard limits on bar dimensions
  limits: {
    maxBarThickness: 32,  // Maximum bar width in pixels for narrow containers
    maxBarThicknessWide: 160,  // Maximum bar width in pixels for wide containers (>768px)
  },

  // Container width breakpoints (in pixels)
  breakpoints: {
    mobile: 600,    // Below this: use mobile height
    wide: 768,      // Above this: allow wider bars
    desktop: 1200,  // Above 600, below this: use tablet height; above this: use desktop height
  },

  // Thresholds for data density categorization
  thresholds: {
    few: 3,   // <= 3 data points
    medium: 8, // <= 8 data points
  },
};

/**
 * Get optimized sizing configuration for vertical bar charts
 * Implements a hybrid responsive strategy that adapts to data density and container width
 * @param dataPointCount Number of data points/categories in the chart
 * @param containerWidth Width of the chart's container in pixels (optional, default 800)
 * @param seriesCount Number of series/datasets (optional, default 1)
 * @param dataRange Optional data range for height calculation
 * @returns Calculated chart height in pixels
 */
export function getVerticalBarChartHeight(
  dataPointCount: number,
  containerWidth: number = 800,
  seriesCount: number = 1,
  dataRange?: { min: number; max: number }
): number {
  // Determine data density category
  const isFewBars = dataPointCount <= verticalBarChartSizing.thresholds.few;
  const isManyBars = dataPointCount > verticalBarChartSizing.thresholds.medium;

  // Select bar/category percentages based on data density
  let barPercentage = isFewBars
    ? verticalBarChartSizing.barPercentages.fewBars
    : isManyBars
    ? verticalBarChartSizing.barPercentages.manyBars
    : verticalBarChartSizing.barPercentages.mediumBars;

  const categoryPercentage = isFewBars
    ? verticalBarChartSizing.categoryPercentages.fewBars
    : isManyBars
    ? verticalBarChartSizing.categoryPercentages.manyBars
    : verticalBarChartSizing.categoryPercentages.mediumBars;

  // For grouped vertical bars, remove gaps within each category
  if (seriesCount > 1) {
    barPercentage = 1;
  }

  // Determine height based on data range when available
  let height: number;
  if (dataRange && dataRange.max > 0) {
    const range = Math.max(0, dataRange.max - dataRange.min);
    const ratio = range / dataRange.max;
    const rangeRatioFloor = verticalBarChartSizing.dataRangeHeight.rangeRatioFloor;
    const clampedRatio = Math.min(1, Math.max(rangeRatioFloor, ratio));
    const normalized = 1 - clampedRatio;
    height = verticalBarChartSizing.heightRange.min
      + normalized * (verticalBarChartSizing.heightRange.max - verticalBarChartSizing.heightRange.min);
  } else {
    height = verticalBarChartSizing.heightRange.min;
  }

  // Adjust height slightly for multi-series charts
  if (seriesCount > 1) {
    const seriesAdjustment = (seriesCount - 1) * 20;
    height += seriesAdjustment;
  }

  const maxHeight = containerWidth <= verticalBarChartSizing.breakpoints.mobile
    ? Math.min(verticalBarChartSizing.heightRange.max, verticalBarChartSizing.dataRangeHeight.smallViewportMax)
    : verticalBarChartSizing.heightRange.max;
  height = Math.max(verticalBarChartSizing.heightRange.min, Math.min(maxHeight, height));

  return height;
}

/**
 * Get optimized sizing configuration for vertical bar charts
 * Implements a hybrid responsive strategy that adapts to data density and container width
 * @param dataPointCount Number of data points/categories in the chart
 * @param containerWidth Width of the chart's container in pixels (optional, default 800)
 * @param seriesCount Number of series/datasets (optional, default 1)
 * @param dataRange Optional data range (used by height helper)
 * @param allowWiderBars Whether to allow wider bars (120px) for wide containers over 768px (optional, default false)
 * @returns Partial ChartOptions with optimized sizing configuration
 */
export function getVerticalBarChartSizing(
  dataPointCount: number,
  containerWidth: number = 800,
  seriesCount: number = 1,
  dataRange?: { min: number; max: number },
  allowWiderBars: boolean = false
): Partial<ChartOptions> {
  // Determine data density category
  const isFewBars = dataPointCount <= verticalBarChartSizing.thresholds.few;
  const isManyBars = dataPointCount > verticalBarChartSizing.thresholds.medium;

  // Select bar/category percentages based on data density
  let barPercentage = isFewBars
    ? verticalBarChartSizing.barPercentages.fewBars
    : isManyBars
    ? verticalBarChartSizing.barPercentages.manyBars
    : verticalBarChartSizing.barPercentages.mediumBars;

  const categoryPercentage = isFewBars
    ? verticalBarChartSizing.categoryPercentages.fewBars
    : isManyBars
    ? verticalBarChartSizing.categoryPercentages.manyBars
    : verticalBarChartSizing.categoryPercentages.mediumBars;

  // For grouped vertical bars, remove gaps within each category
  if (seriesCount > 1) {
    barPercentage = 1;
  }

  // Determine maxBarThickness based on container width and allowWiderBars flag
  const maxBarThickness = allowWiderBars && containerWidth > verticalBarChartSizing.breakpoints.wide
    ? verticalBarChartSizing.limits.maxBarThicknessWide
    : verticalBarChartSizing.limits.maxBarThickness;

  return {
    maintainAspectRatio: false,
    indexAxis: 'x',
    datasets: {
      bar: {
        barPercentage,
        categoryPercentage,
        maxBarThickness,
      },
    },
  };
}
