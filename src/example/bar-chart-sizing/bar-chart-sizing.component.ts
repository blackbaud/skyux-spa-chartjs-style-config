import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyBoxModule, SkyFluidGridModule } from '@skyux/layout';
import { SkyPageModule } from '@skyux/pages';
import { SkyTabsModule } from '@skyux/tabs';
import { SkyInputBoxModule } from '@skyux/forms';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig, calculateHorizontalBarChartHeight, BarSizingResult, getVerticalBarChartHeight, getVerticalBarChartSizing } from '../chartjs-config/bar-chart.config';
import { skyuxChartStyles, mergeChartConfig } from '../chartjs-config/global-chart.config';
import { SkyBarChartComponent } from '../../skyux/bar-chart/bar-chart.component';

Chart.register(...registerables);

export interface ChartMetrics {
  categoryPercentage: number;
  barPercentage: number;
  actualBarWidth: number;
  borderWidth: number;
}

@Component({
  selector: 'app-bar-chart-sizing',
  standalone: true,
  templateUrl: './bar-chart-sizing.component.html',
  imports: [CommonModule, FormsModule, SkyBoxModule, SkyFluidGridModule, SkyPageModule, SkyTabsModule, SkyInputBoxModule, SkyBarChartComponent],
})
export class BarChartSizingComponent implements AfterViewInit, OnDestroy {
  //#region Chart Configuration Options
  protected barPercentage = 0.66;
  protected barThickness = 'flex';
  protected maxBarThickness!: number;
  protected borderWidth = 1;
  protected borderRadius = 2;
  protected categoryPercentage = 0.8;
  protected useCustomOptions = false; // Control whether custom options are applied
  // #endregion

  //#region Chart Configs
  public chart1Config!: ChartConfiguration<'bar'>;
  public chart2Config!: ChartConfiguration<'bar'>;
  public chart3Config!: ChartConfiguration<'bar'>;
  public chart4Config!: ChartConfiguration<'bar'>;
  public chart5Config!: ChartConfiguration<'bar'>;
  public chart6Config!: ChartConfiguration<'bar'>;
  public chart7Config!: ChartConfiguration<'bar'>;
  public chart8Config!: ChartConfiguration<'bar'>;
  public chart9Config!: ChartConfiguration<'bar'>;
  public chart10Config!: ChartConfiguration<'bar'>;
  public chart11Config!: ChartConfiguration<'bar'>;
  public chart12Config!: ChartConfiguration<'bar'>;

  public chartV1Config!: ChartConfiguration<'bar'>;
  public chartV2Config!: ChartConfiguration<'bar'>;
  public chartV3Config!: ChartConfiguration<'bar'>;
  public chartV4Config!: ChartConfiguration<'bar'>;
  public chartV5Config!: ChartConfiguration<'bar'>;
  public chartV6Config!: ChartConfiguration<'bar'>;
  public chartV7Config!: ChartConfiguration<'bar'>;
  public chartV8Config!: ChartConfiguration<'bar'>;
  public chartV9Config!: ChartConfiguration<'bar'>;
  public chartV10Config!: ChartConfiguration<'bar'>;
  public chartV11Config!: ChartConfiguration<'bar'>;
  public chartV12Config!: ChartConfiguration<'bar'>;

  public chartStackedConfig!: ChartConfiguration<'bar'>;
  public chartStackedVerticalConfig!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Calculated Heights for Horizontal Charts
  public chart1Height!: number;
  public chart2Height!: number;
  public chart3Height!: number;
  public chart4Height!: number;
  public chart5Height!: number;
  public chart6Height!: number;
  public chart7Height!: number;
  public chart8Height!: number;
  public chart9Height!: number;
  public chart10Height!: number;
  public chart11Height!: number;
  public chart12Height!: number;
  public chartStackedHeight!: number;
  // #endregion

  //#region Calculated Heights for Vertical Charts
  public chartV1Height!: number;
  public chartV2Height!: number;
  public chartV3Height!: number;
  public chartV4Height!: number;
  public chartV5Height!: number;
  public chartV6Height!: number;
  public chartV7Height!: number;
  public chartV8Height!: number;
  public chartV9Height!: number;
  public chartV10Height!: number;
  public chartV11Height!: number;
  public chartV12Height!: number;
  public chartStackedVerticalHeight!: number;
  // #endregion

  //#region Chart Metrics for Display
  public chart1Metrics!: ChartMetrics;
  public chart2Metrics!: ChartMetrics;
  public chart3Metrics!: ChartMetrics;
  public chart4Metrics!: ChartMetrics;
  public chart5Metrics!: ChartMetrics;
  public chart6Metrics!: ChartMetrics;
  public chart7Metrics!: ChartMetrics;
  public chart8Metrics!: ChartMetrics;
  public chart9Metrics!: ChartMetrics;
  public chart10Metrics!: ChartMetrics;
  public chart11Metrics!: ChartMetrics;
  public chart12Metrics!: ChartMetrics;
  public chartStackedMetrics!: ChartMetrics;
  // #endregion

  @ViewChild('verticalTabContainer')
  private verticalTabContainer?: ElementRef<HTMLElement>;
  private verticalResizeObserver?: ResizeObserver;
  private verticalContainerWidth = 800;

  constructor() {
    this.initializeCharts();
  }

  public ngAfterViewInit(): void {
    if (!this.verticalTabContainer?.nativeElement || typeof ResizeObserver === 'undefined') {
      return;
    }

    const element = this.verticalTabContainer.nativeElement;
    const updateWidth = (width: number) => {
      if (width > 0 && Math.abs(width - this.verticalContainerWidth) > 1) {
        this.verticalContainerWidth = width;
        this.initializeCharts();
      }
    };

    updateWidth(element.getBoundingClientRect().width);
    this.verticalResizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateWidth(entry.contentRect.width);
      }
    });
    this.verticalResizeObserver.observe(element);
  }

  public ngOnDestroy(): void {
    this.verticalResizeObserver?.disconnect();
  }

  private initializeCharts(): void {
    const chartConfig = this.getChartConfiguration();
    const chartConfigByGender = this.getChartConfigurationByGender();
    const chartConfigByGradeGender = this.getChartConfigurationByGradeAndGender();
    const chartConfigByGradeMetrics = this.getChartConfigurationByGradeMetrics();
    const chartConfigByGradeMetrics1 = this.getChartConfigurationByGradeMetrics1();
    const chartConfigByGradeMetrics3 = this.getChartConfigurationByGradeMetrics3();
    const chartConfigVertical = this.getVerticalChartConfiguration();
    const chartConfigVerticalByGender = this.getVerticalChartConfigurationByGender();
    const chartConfigVerticalByGradeGender = this.getVerticalChartConfigurationByGradeAndGender();
    const chartConfigVerticalByGradeMetrics = this.getVerticalChartConfigurationByGradeMetrics();
    const chartConfigVerticalByGradeMetrics1 = this.getVerticalChartConfigurationByGradeMetrics1();
    const chartConfigVerticalByGradeMetrics3 = this.getVerticalChartConfigurationByGradeMetrics3();

    // Chart 1: Student Enrollment
    this.chart1Config = chartConfig;

    // Chart 2: Student Enrollment with 1 extra category
    this.chart2Config = this.getChartConfigurationEnrollment2();

    // Chart 3: Student Enrollment with 3 extra categories
    this.chart3Config = this.getChartConfigurationEnrollment3();

    // Chart 4: Student Enrollment by Gender
    this.chart4Config = chartConfigByGender;

    // Chart 5: Student Enrollment by Gender with 1 extra category
    this.chart5Config = this.getChartConfigurationByGenderEnrollment2();

    // Chart 6: Student Enrollment by Gender with 3 extra categories
    this.chart6Config = this.getChartConfigurationByGenderEnrollment3();

    // Chart 7: Grade Level Enrollment by Gender
    this.chart7Config = chartConfigByGradeGender;

    // Chart 8: Grade Level Enrollment by Gender with 1 extra dataset
    this.chart8Config = this.getChartConfigurationByGradeAndGender2();

    // Chart 9: Grade Level Enrollment by Gender with 2 extra datasets
    this.chart9Config = this.getChartConfigurationByGradeAndGender3();

    // Chart 10: Grade Metrics 1 (Absences, Tardies, Infractions, Awards) - fewer datasets
    this.chart10Config = chartConfigByGradeMetrics1;

    // Chart 11: Same as Chart 10
    this.chart11Config = this.getChartConfigurationByGradeMetrics();

    // Chart 12: Grade Metrics 3 (adds Grade 5 + one category)
    this.chart12Config = chartConfigByGradeMetrics3;

    // Vertical tab charts
    this.chartV1Config = chartConfigVertical;
    this.chartV2Config = this.getVerticalChartConfigurationEnrollment2();
    this.chartV3Config = this.getVerticalChartConfigurationEnrollment3();
    this.chartV4Config = chartConfigVerticalByGender;
    this.chartV5Config = this.getVerticalChartConfigurationByGenderEnrollment2();
    this.chartV6Config = this.getVerticalChartConfigurationByGenderEnrollment3();
    this.chartV7Config = chartConfigVerticalByGradeGender;
    this.chartV8Config = this.getVerticalChartConfigurationByGradeAndGender2();
    this.chartV9Config = this.getVerticalChartConfigurationByGradeAndGender3();
    this.chartV10Config = chartConfigVerticalByGradeMetrics1;
    this.chartV11Config = this.getVerticalChartConfigurationByGradeMetrics();
    this.chartV12Config = chartConfigVerticalByGradeMetrics3;

    // Stacked bar charts
    this.chartStackedConfig = this.getStackedEnrollmentChartConfiguration();
    this.chartStackedVerticalConfig = this.getStackedEnrollmentChartConfiguration(true);

    // Calculate optimal heights and settings for horizontal charts (indexAxis: 'y')
    // Charts 1-3: 2, 3, and 5 categories, 1 dataset
    const result1 = calculateHorizontalBarChartHeight(2, 1);
    this.chart1Height = result1.height;
    const result2 = calculateHorizontalBarChartHeight(3, 1);
    this.chart2Height = result2.height;
    const result3 = calculateHorizontalBarChartHeight(5, 1);
    this.chart3Height = result3.height;
    
    // Charts 4-6: 2, 3, and 5 categories, 2 datasets (grouped)
    const result4 = calculateHorizontalBarChartHeight(2, 2);
    this.chart4Height = result4.height;
    const result5 = calculateHorizontalBarChartHeight(3, 2);
    this.chart5Height = result5.height;
    const result6 = calculateHorizontalBarChartHeight(5, 2);
    this.chart6Height = result6.height;
    
    // Charts 7-9: 7 categories (grades), 2/3/4 datasets (gender + additional)
    const result7 = calculateHorizontalBarChartHeight(7, 2);
    this.chart7Height = result7.height;
    const result8 = calculateHorizontalBarChartHeight(7, 3);
    this.chart8Height = result8.height;
    const result9 = calculateHorizontalBarChartHeight(7, 4);
    this.chart9Height = result9.height;
    
    // Charts 10-12: 4/4/5 categories (metrics), 5/7/8 datasets (grades)
    const result10 = calculateHorizontalBarChartHeight(4, 5);
    this.chart10Height = result10.height;
    const result11 = calculateHorizontalBarChartHeight(4, 7);
    this.chart11Height = result11.height;
    const result12 = calculateHorizontalBarChartHeight(5, 8);
    this.chart12Height = result12.height;
    
    // Stacked chart: 4 categories, 3 datasets (but stacked, so treat as 1 bar visually)
    const resultStacked = calculateHorizontalBarChartHeight(4, 1);
    this.chartStackedHeight = resultStacked.height;

    // Calculate heights for vertical charts (indexAxis: 'x')
    this.chartV1Height = this.getVerticalChartHeight(this.chartV1Config, 2, 1);
    this.chartV2Height = this.getVerticalChartHeight(this.chartV2Config, 3, 1);
    this.chartV3Height = this.getVerticalChartHeight(this.chartV3Config, 5, 1);
    this.chartV4Height = this.getVerticalChartHeight(this.chartV4Config, 2, 2);
    this.chartV5Height = this.getVerticalChartHeight(this.chartV5Config, 3, 2);
    this.chartV6Height = this.getVerticalChartHeight(this.chartV6Config, 5, 2);
    this.chartV7Height = this.getVerticalChartHeight(this.chartV7Config, 7, 2);
    this.chartV8Height = this.getVerticalChartHeight(this.chartV8Config, 7, 3);
    this.chartV9Height = this.getVerticalChartHeight(this.chartV9Config, 7, 4);
    this.chartV10Height = this.getVerticalChartHeight(this.chartV10Config, 4, 5);
    this.chartV11Height = this.getVerticalChartHeight(this.chartV11Config, 4, 7);
    this.chartV12Height = this.getVerticalChartHeight(this.chartV12Config, 5, 8);
    this.chartStackedVerticalHeight = this.getVerticalChartHeight(this.chartStackedVerticalConfig, 4, 3, true);

    // Calculate metrics for each chart using optimal settings from algorithm
    this.chart1Metrics = this.calculateChartMetrics(2, 1, result1);
    this.chart2Metrics = this.calculateChartMetrics(3, 1, result2);
    this.chart3Metrics = this.calculateChartMetrics(5, 1, result3);
    this.chart4Metrics = this.calculateChartMetrics(2, 2, result4);
    this.chart5Metrics = this.calculateChartMetrics(3, 2, result5);
    this.chart6Metrics = this.calculateChartMetrics(5, 2, result6);
    this.chart7Metrics = this.calculateChartMetrics(7, 2, result7);
    this.chart8Metrics = this.calculateChartMetrics(7, 3, result8);
    this.chart9Metrics = this.calculateChartMetrics(7, 4, result9);
    this.chart10Metrics = this.calculateChartMetrics(4, 5, result10);
    this.chart11Metrics = this.calculateChartMetrics(4, 7, result11);
    this.chart12Metrics = this.calculateChartMetrics(5, 8, result12);
    this.chartStackedMetrics = this.calculateChartMetrics(4, 1, resultStacked);

    // Apply bar options to all configs
    const allConfigs = [
      this.chart1Config, this.chart2Config, this.chart3Config,
      this.chart4Config, this.chart5Config, this.chart6Config,
      this.chart7Config, this.chart8Config, this.chart9Config,
      this.chart10Config, this.chart11Config, this.chart12Config,
      this.chartV1Config, this.chartV2Config, this.chartV3Config,
      this.chartV4Config, this.chartV5Config, this.chartV6Config,
      this.chartV7Config, this.chartV8Config, this.chartV9Config,
      this.chartV10Config, this.chartV11Config, this.chartV12Config,
      this.chartStackedConfig, this.chartStackedVerticalConfig,
    ];

    allConfigs.forEach((config) => this.applyBarOptions(config));
  }

  protected onChartOptionsChanged(): void {
    // Only reinitialize if custom options are enabled
    if (this.useCustomOptions) {
      this.initializeCharts();
    }
  }

  protected applyCustomOptions(): void {
    this.useCustomOptions = true;
    this.initializeCharts();
  }

  private calculateChartMetrics(numCategories: number, numDatasets: number, optimalSettings: BarSizingResult): ChartMetrics {
    // Use optimal settings from algorithm unless custom options are enabled
    const categoryPercentage = this.useCustomOptions ? this.categoryPercentage : optimalSettings.categoryPercentage;
    const barPercentage = this.useCustomOptions ? this.barPercentage : optimalSettings.barPercentage;
    
    // Calculate actual bar width based on settings
    const idealBarWidth = 16;
    const spacePerBar = idealBarWidth / barPercentage;
    
    // Calculate spacing between categories (matches algorithm)
    let spaceBetweenCategories = 4;
    if (numDatasets > 3) {
      const excessDatasets = numDatasets - 3;
      const reductionPerDataset = idealBarWidth / 4;
      const totalReduction = Math.min(excessDatasets * reductionPerDataset, idealBarWidth);
      spaceBetweenCategories = Math.max(2, spaceBetweenCategories - totalReduction);
    }
    
    const spacePerCategory = (spacePerBar * numDatasets) + spaceBetweenCategories;
    
    // Approximate actual bar width within category space
    const barSpacePerCategory = categoryPercentage * spacePerCategory;
    const actualBarWidth = Math.round((barSpacePerCategory / numDatasets) * barPercentage);
    
    // Get actual borderWidth from base config (elements.bar.borderWidth)
    const borderWidth = this.useCustomOptions ? this.borderWidth : skyuxChartStyles.barBorderWidth;
    
    return {
      categoryPercentage: Number(categoryPercentage.toFixed(2)),
      barPercentage: Number(barPercentage.toFixed(2)),
      actualBarWidth,
      borderWidth,
    };
  }

  private getDataRangeFromConfig(
    config: ChartConfiguration<'bar'>,
    isStacked = false
  ): { min: number; max: number } | undefined {
    const datasets = config.data?.datasets
      ?.map((dataset: any) => dataset?.data)
      .filter((data: any) => Array.isArray(data)) as number[][] | undefined;

    if (!datasets || datasets.length === 0) {
      return undefined;
    }

    const values: number[] = [];

    if (isStacked) {
      const length = datasets[0]?.length || 0;
      for (let index = 0; index < length; index += 1) {
        let total = 0;
        for (const dataset of datasets) {
          const value = Number(dataset?.[index] ?? 0);
          total += Number.isNaN(value) ? 0 : value;
        }
        values.push(total);
      }
    } else {
      for (const dataset of datasets) {
        for (const value of dataset) {
          const num = Number(value);
          if (!Number.isNaN(num)) {
            values.push(num);
          }
        }
      }
    }

    if (values.length === 0) {
      return undefined;
    }

    return {
      min: Math.min(...values),
      max: Math.max(...values),
    };
  }

  private getVerticalChartHeight(
    config: ChartConfiguration<'bar'>,
    dataPointCount: number,
    seriesCount: number,
    isStacked = false
  ): number {
    const dataRange = this.getDataRangeFromConfig(config, isStacked);
    return getVerticalBarChartHeight(
      dataPointCount,
      this.verticalContainerWidth,
      seriesCount,
      dataRange
    );
  }

  private applyBarOptions(config: ChartConfiguration<'bar'>): void {
    // Determine which settings to use based on useCustomOptions flag
    let categoryPercentage: number;
    let barPercentage: number;
    let borderWidth: number;
    let borderRadius: number;
    let barThicknessValue: number | 'flex';
    let maxBarThickness: number | undefined;
    const indexAxis = (config.options as any)?.indexAxis ?? 'x';

    if (!this.useCustomOptions && indexAxis === 'x') {
      // Respect vertical sizing helper output; avoid overriding its values.
      return;
    }

    if (this.useCustomOptions) {
      // Use form input values
      categoryPercentage = this.categoryPercentage;
      barPercentage = this.barPercentage;
      borderWidth = this.borderWidth;
      borderRadius = this.borderRadius;
      barThicknessValue = this.barThickness === 'flex' ? 'flex' : parseInt(this.barThickness as string, 10);
      maxBarThickness = this.maxBarThickness;
    } else {
      // Use algorithm-calculated values from the config's associated metrics
      // Extract dataset count from config to determine optimal settings
      const numDatasets = config.data?.datasets?.length || 1;
      const numCategories = config.data?.labels?.length || 1;
      const optimalSettings = calculateHorizontalBarChartHeight(numCategories, numDatasets); // Use actual dimensions for settings
      
      categoryPercentage = optimalSettings.categoryPercentage;
      barPercentage = optimalSettings.barPercentage;
      // Don't set borderWidth/borderRadius - use values from base config
      barThicknessValue = 'flex';
      maxBarThickness = undefined;
    }
    
    // Update dataset properties
    if (config.data?.datasets) {
      config.data.datasets.forEach((dataset: any) => {
        // Only set border properties when using custom options
        if (this.useCustomOptions) {
          dataset.borderWidth = borderWidth;
          dataset.borderRadius = borderRadius;
        }
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        dataset.barThickness = barThicknessValue;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }

    // Also set defaults in elements for consistency
    if (config.options && typeof config.options === 'object') {
      const existingElements = (config.options as any).elements || {};
      const existingBar = existingElements.bar || {};
      const elementBar: any = {
        ...existingBar,
        barPercentage: barPercentage,
        barThickness: barThicknessValue,
        categoryPercentage: categoryPercentage,
      };
      
      // Only override border properties when using custom options
      if (this.useCustomOptions) {
        elementBar.borderRadius = this.borderRadius;
        elementBar.borderWidth = this.borderWidth;
      }
      
      if (maxBarThickness) {
        elementBar.maxBarThickness = maxBarThickness;
      }
      
      (config.options as any).elements = {
        ...existingElements,
        bar: elementBar,
      };
    }
  }

  private getChartConfiguration(): ChartConfiguration<'bar'> {
    return this.getEnrollmentChartConfiguration(
      ['Lower School', 'Upper School'],
      [1245, 1890],
      'y'
    );
  }

  private getChartConfigurationEnrollment2(): ChartConfiguration<'bar'> {
    return this.getEnrollmentChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School'],
      [1245, 1560, 1890],
      'y'
    );
  }

  private getChartConfigurationEnrollment3(): ChartConfiguration<'bar'> {
    return this.getEnrollmentChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School', 'High School', 'Advanced Placement'],
      [1245, 1560, 1890, 1420, 980],
      'y'
    );
  }

  private getEnrollmentChartConfiguration(
    labels: string[],
    data: number[],
    indexAxis: 'x' | 'y'
  ): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const valueAxis = indexAxis === 'y' ? 'x' : 'y';

    return {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Total Students',
            data,
            backgroundColor: colors[0],
            borderColor: borderColor,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis,
          scales: {
            [valueAxis]: {
              beginAtZero: true,
              max: 2500,
            },
          },
        }),
      } as any,
    };
  }

  private getChartConfigurationByGender(): ChartConfiguration<'bar'> {
    return this.getEnrollmentByGenderChartConfiguration(
      ['Lower School', 'Upper School'],
      [610, 920],
      [635, 970],
      'y'
    );
  }

  private getChartConfigurationByGenderEnrollment2(): ChartConfiguration<'bar'> {
    return this.getEnrollmentByGenderChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School'],
      [610, 780, 920],
      [635, 820, 970],
      'y'
    );
  }

  private getChartConfigurationByGenderEnrollment3(): ChartConfiguration<'bar'> {
    return this.getEnrollmentByGenderChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School', 'High School', 'Advanced Placement'],
      [610, 780, 920, 690, 480],
      [635, 820, 970, 730, 500],
      'y'
    );
  }

  private getEnrollmentByGenderChartConfiguration(
    labels: string[],
    maleData: number[],
    femaleData: number[],
    indexAxis: 'x' | 'y'
  ): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;
    const valueAxis = indexAxis === 'y' ? 'x' : 'y';

    return {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Male Students',
            data: maleData,
            backgroundColor: colors[0],
            borderColor: borderColor,
          },
          {
            label: 'Female Students',
            data: femaleData,
            backgroundColor: colors[1],
            borderColor: borderColor,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis,
          scales: {
            [valueAxis]: {
              beginAtZero: true,
              max: 2500,
            },
          },
        }),
      } as any,
    };
  }

  private getChartConfigurationByGradeAndGender(): ChartConfiguration<'bar'> {
    return this.getGradeDistributionByGenderChartConfiguration(
      [
        {
          label: 'Male Students',
          data: [145, 138, 142, 151, 148, 155, 165],
        },
        {
          label: 'Female Students',
          data: [152, 146, 148, 157, 159, 162, 172],
        },
      ],
      'y'
    );
  }

  private getChartConfigurationByGradeAndGender2(): ChartConfiguration<'bar'> {
    return this.getGradeDistributionByGenderChartConfiguration(
      [
        {
          label: 'Male Students',
          data: [145, 138, 142, 151, 148, 155, 165],
        },
        {
          label: 'Female Students',
          data: [152, 146, 148, 157, 159, 162, 172],
        },
        {
          label: 'Non-binary Students',
          data: [6, 5, 6, 7, 6, 8, 9],
        },
      ],
      'y'
    );
  }

  private getChartConfigurationByGradeAndGender3(): ChartConfiguration<'bar'> {
    return this.getGradeDistributionByGenderChartConfiguration(
      [
        {
          label: 'Male Students',
          data: [145, 138, 142, 151, 148, 155, 165],
        },
        {
          label: 'Female Students',
          data: [152, 146, 148, 157, 159, 162, 172],
        },
        {
          label: 'Non-binary Students',
          data: [6, 5, 6, 7, 6, 8, 9],
        },
        {
          label: 'Unreported',
          data: [3, 4, 3, 4, 3, 4, 5],
        },
      ],
      'y'
    );
  }

  private getGradeDistributionByGenderChartConfiguration(
    datasets: Array<{ label: string; data: number[] }>,
    indexAxis: 'x' | 'y'
  ): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;
    const valueAxis = indexAxis === 'y' ? 'x' : 'y';

    return {
      type: 'bar',
      data: {
        labels: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
        datasets: datasets.map((dataset, index) => ({
          label: dataset.label,
          data: dataset.data,
          backgroundColor: colors[index % colors.length],
          borderColor: borderColor,
        })),
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis,
          scales: {
            [valueAxis]: {
              beginAtZero: true,
              max: 200,
            },
          },
        }),
      } as any,
    };
  }

  private getChartConfigurationByGradeMetrics(): ChartConfiguration<'bar'> {
    return this.getGradeMetricsChartConfiguration(
      ['Absences', 'Tardies', 'Infractions', 'Awards'],
      [
        { label: 'Grade 6', data: [8, 14, 3, 5] },
        { label: 'Grade 7', data: [9, 16, 4, 6] },
        { label: 'Grade 8', data: [10, 15, 5, 6] },
        { label: 'Grade 9', data: [11, 18, 6, 7] },
        { label: 'Grade 10', data: [10, 17, 5, 8] },
        { label: 'Grade 11', data: [9, 13, 4, 9] },
        { label: 'Grade 12', data: [8, 12, 3, 10] },
      ],
      'y'
    );
  }

  private getChartConfigurationByGradeMetrics1(): ChartConfiguration<'bar'> {
    return this.getGradeMetricsChartConfiguration(
      ['Absences', 'Tardies', 'Infractions', 'Awards'],
      [
        { label: 'Grade 6', data: [8, 14, 3, 5] },
        { label: 'Grade 7', data: [9, 16, 4, 6] },
        { label: 'Grade 8', data: [10, 15, 5, 6] },
        { label: 'Grade 9', data: [11, 18, 6, 7] },
        { label: 'Grade 10', data: [10, 17, 5, 8] },
      ],
      'y'
    );
  }

  private getChartConfigurationByGradeMetrics3(): ChartConfiguration<'bar'> {
    return this.getGradeMetricsChartConfiguration(
      ['Absences', 'Tardies', 'Infractions', 'Awards', 'Detentions'],
      [
        { label: 'Grade 5', data: [7, 12, 3, 4, 2] },
        { label: 'Grade 6', data: [8, 14, 3, 5, 3] },
        { label: 'Grade 7', data: [9, 16, 4, 6, 3] },
        { label: 'Grade 8', data: [10, 15, 5, 6, 4] },
        { label: 'Grade 9', data: [11, 18, 6, 7, 4] },
        { label: 'Grade 10', data: [10, 17, 5, 8, 5] },
        { label: 'Grade 11', data: [9, 13, 4, 9, 5] },
        { label: 'Grade 12', data: [8, 12, 3, 10, 6] },
      ],
      'y'
    );
  }

  private getGradeMetricsChartConfiguration(
    labels: string[],
    datasets: Array<{ label: string; data: number[] }>,
    indexAxis: 'x' | 'y'
  ): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;
    const valueAxis = indexAxis === 'y' ? 'x' : 'y';

    return {
      type: 'bar',
      data: {
        labels,
        datasets: datasets.map((dataset, index) => ({
          label: dataset.label,
          data: dataset.data,
          backgroundColor: colors[index % colors.length],
          borderColor,
        })),
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis,
          scales: {
            [valueAxis]: {
              beginAtZero: true,
              max: 20,
            },
          },
        }),
      } as any,
    };
  }

  private getVerticalChartConfiguration(): ChartConfiguration<'bar'> {
    const baseConfig = this.getEnrollmentChartConfiguration(
      ['Lower School', 'Upper School'],
      [1245, 1890],
      'x'
    );
    
    // Apply vertical bar chart sizing for 2 categories, 1 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(2, this.verticalContainerWidth, 1, dataRange);
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationEnrollment2(): ChartConfiguration<'bar'> {
    const baseConfig = this.getEnrollmentChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School'],
      [1245, 1560, 1890],
      'x'
    );
    
    // Apply vertical bar chart sizing for 3 categories, 1 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(3, this.verticalContainerWidth, 1, dataRange);
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationEnrollment3(): ChartConfiguration<'bar'> {
    const baseConfig = this.getEnrollmentChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School', 'High School', 'Advanced Placement'],
      [1245, 1560, 1890, 1420, 980],
      'x'
    );
    
    // Apply vertical bar chart sizing for 5 categories, 1 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(5, this.verticalContainerWidth, 1, dataRange);
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGender(): ChartConfiguration<'bar'> {
    const baseConfig = this.getEnrollmentByGenderChartConfiguration(
      ['Lower School', 'Upper School'],
      [610, 920],
      [635, 970],
      'x'
    );
    
    // Apply vertical bar chart sizing for 2 categories, 2 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(2, this.verticalContainerWidth, 2, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGenderEnrollment2(): ChartConfiguration<'bar'> {
    const baseConfig = this.getEnrollmentByGenderChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School'],
      [610, 780, 920],
      [635, 820, 970],
      'x'
    );
    
    // Apply vertical bar chart sizing for 3 categories, 2 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(3, this.verticalContainerWidth, 2, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGenderEnrollment3(): ChartConfiguration<'bar'> {
    const baseConfig = this.getEnrollmentByGenderChartConfiguration(
      ['Lower School', 'Middle School', 'Upper School', 'High School', 'Advanced Placement'],
      [610, 780, 920, 690, 480],
      [635, 820, 970, 730, 500],
      'x'
    );
    
    // Apply vertical bar chart sizing for 5 categories, 2 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(5, this.verticalContainerWidth, 2, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGradeAndGender(): ChartConfiguration<'bar'> {
    const baseConfig = this.getGradeDistributionByGenderChartConfiguration(
      [
        {
          label: 'Male Students',
          data: [145, 138, 142, 151, 148, 155, 165],
        },
        {
          label: 'Female Students',
          data: [152, 146, 148, 157, 159, 162, 172],
        },
      ],
      'x'
    );
    
    // Apply vertical bar chart sizing for 7 categories, 2 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(7, this.verticalContainerWidth, 2, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGradeAndGender2(): ChartConfiguration<'bar'> {
    const baseConfig = this.getGradeDistributionByGenderChartConfiguration(
      [
        {
          label: 'Male Students',
          data: [145, 138, 142, 151, 148, 155, 165],
        },
        {
          label: 'Female Students',
          data: [152, 146, 148, 157, 159, 162, 172],
        },
        {
          label: 'Non-binary Students',
          data: [6, 5, 6, 7, 6, 8, 9],
        },
      ],
      'x'
    );
    
    // Apply vertical bar chart sizing for 7 categories, 3 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(7, this.verticalContainerWidth, 3, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGradeAndGender3(): ChartConfiguration<'bar'> {
    const baseConfig = this.getGradeDistributionByGenderChartConfiguration(
      [
        {
          label: 'Male Students',
          data: [145, 138, 142, 151, 148, 155, 165],
        },
        {
          label: 'Female Students',
          data: [152, 146, 148, 157, 159, 162, 172],
        },
        {
          label: 'Non-binary Students',
          data: [6, 5, 6, 7, 6, 8, 9],
        },
        {
          label: 'Unreported',
          data: [3, 4, 3, 4, 3, 4, 5],
        },
      ],
      'x'
    );
    
    // Apply vertical bar chart sizing for 7 categories, 4 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(7, this.verticalContainerWidth, 4, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGradeMetrics(): ChartConfiguration<'bar'> {
    const baseConfig = this.getGradeMetricsChartConfiguration(
      ['Absences', 'Tardies', 'Infractions', 'Awards'],
      [
        { label: 'Grade 6', data: [8, 14, 3, 5] },
        { label: 'Grade 7', data: [9, 16, 4, 6] },
        { label: 'Grade 8', data: [10, 15, 5, 6] },
        { label: 'Grade 9', data: [11, 18, 6, 7] },
        { label: 'Grade 10', data: [10, 17, 5, 8] },
        { label: 'Grade 11', data: [9, 13, 4, 9] },
        { label: 'Grade 12', data: [8, 12, 3, 10] },
      ],
      'x'
    );
    
    // Apply vertical bar chart sizing for 4 categories, 7 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(4, this.verticalContainerWidth, 7, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGradeMetrics1(): ChartConfiguration<'bar'> {
    const baseConfig = this.getGradeMetricsChartConfiguration(
      ['Absences', 'Tardies', 'Infractions', 'Awards'],
      [
        { label: 'Grade 6', data: [8, 14, 3, 5] },
        { label: 'Grade 7', data: [9, 16, 4, 6] },
        { label: 'Grade 8', data: [10, 15, 5, 6] },
        { label: 'Grade 9', data: [11, 18, 6, 7] },
        { label: 'Grade 10', data: [10, 17, 5, 8] },
      ],
      'x'
    );
    
    // Apply vertical bar chart sizing for 4 categories, 5 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(4, this.verticalContainerWidth, 5, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getVerticalChartConfigurationByGradeMetrics3(): ChartConfiguration<'bar'> {
    const baseConfig = this.getGradeMetricsChartConfiguration(
      ['Absences', 'Tardies', 'Infractions', 'Awards', 'Detentions'],
      [
        { label: 'Grade 5', data: [7, 12, 3, 4, 2] },
        { label: 'Grade 6', data: [8, 14, 3, 5, 3] },
        { label: 'Grade 7', data: [9, 16, 4, 6, 3] },
        { label: 'Grade 8', data: [10, 15, 5, 6, 4] },
        { label: 'Grade 9', data: [11, 18, 6, 7, 4] },
        { label: 'Grade 10', data: [10, 17, 5, 8, 5] },
        { label: 'Grade 11', data: [9, 13, 4, 9, 5] },
        { label: 'Grade 12', data: [8, 12, 3, 10, 6] },
      ],
      'x'
    );
    
    // Apply vertical bar chart sizing for 5 categories, 8 series
    const dataRange = this.getDataRangeFromConfig(baseConfig);
    const sizing = getVerticalBarChartSizing(5, this.verticalContainerWidth, 8, dataRange);
    
    // Set bar sizing directly on datasets
    if (baseConfig.data?.datasets) {
      const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
      const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
      const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
      
      baseConfig.data.datasets.forEach((dataset: any) => {
        dataset.barPercentage = barPercentage;
        dataset.categoryPercentage = categoryPercentage;
        if (maxBarThickness) {
          dataset.maxBarThickness = maxBarThickness;
        }
      });
    }
    
    return mergeChartConfig({
      ...baseConfig,
      options: {
        ...baseConfig.options,
        ...sizing,
      },
    });
  }

  private getStackedEnrollmentChartConfiguration(isVertical = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const programs = ['Elementary', 'Middle School', 'High School', 'Advanced Placement'];
    const enrollmentData = {
      'Current Year': [450, 320, 280, 150],
      'Target': [480, 340, 300, 180],
      'Previous Year': [420, 310, 270, 140],
    };

    const baseConfig = {
      type: 'bar' as const,
      data: {
        labels: programs,
        datasets: [
          {
            label: 'Current Year',
            data: enrollmentData['Current Year'],
            backgroundColor: colors[0],
            borderColor,
          },
          {
            label: 'Target',
            data: enrollmentData['Target'],
            backgroundColor: colors[1],
            borderColor,
          },
          {
            label: 'Previous Year',
            data: enrollmentData['Previous Year'],
            backgroundColor: colors[2],
            borderColor,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: isVertical ? 'x' : 'y',
          scales: {
            x: {
              stacked: true,
              beginAtZero: true,
            },
            y: {
              stacked: true,
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => {
                  const label = context.dataset.label || '';
                  const value = context.parsed.y || context.parsed.x;
                  return `${label}: ${value} students`;
                },
              },
            },
          },
        }),
      },
    };

    // Apply vertical bar chart sizing for 4 categories, 3 series (stacked)
    if (isVertical) {
      const dataRange = this.getDataRangeFromConfig(baseConfig as ChartConfiguration<'bar'>, true);
      const sizing = getVerticalBarChartSizing(4, this.verticalContainerWidth, 3, dataRange, true);
      
      // Set bar sizing directly on datasets
      const typedConfig = baseConfig as ChartConfiguration<'bar'>;
      if (typedConfig.data?.datasets) {
        const barPercentage = (sizing as any).datasets?.bar?.barPercentage ?? 1;
        const categoryPercentage = (sizing as any).datasets?.bar?.categoryPercentage ?? 0.7;
        const maxBarThickness = (sizing as any).datasets?.bar?.maxBarThickness;
        
        typedConfig.data.datasets.forEach((dataset: any) => {
          dataset.barPercentage = barPercentage;
          dataset.categoryPercentage = categoryPercentage;
          if (maxBarThickness) {
            dataset.maxBarThickness = maxBarThickness;
          }
        });
      }
      
      return mergeChartConfig({
        ...baseConfig,
        options: {
          ...baseConfig.options,
          ...sizing,
        },
      }) as ChartConfiguration<'bar'>;
    }

    return baseConfig as ChartConfiguration<'bar'>;
  }
}
