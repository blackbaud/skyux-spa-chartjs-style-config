import { Component } from '@angular/core';
import { SkyBoxModule, SkyFluidGridModule } from '@skyux/layout';
import { SkyPageModule } from '@skyux/pages';
import { SkyTabsModule } from '@skyux/tabs';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig } from '../chartjs-config/bar-chart.config';
import { skyuxChartStyles } from '../chartjs-config/global-chart.config';
import { SkyBarChartComponent } from '../../skyux/bar-chart/bar-chart.component';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart-styles',
  standalone: true,
  templateUrl: './bar-chart-styles.component.html',
  imports: [SkyBoxModule, SkyFluidGridModule, SkyPageModule, SkyTabsModule, SkyBarChartComponent],
})
export class BarChartStylesComponent {
  //#region Chart Configs - Horizontal (Top Row)
  public chartEnrollmentSchoolsConfig!: ChartConfiguration<'bar'>;
  public chartEnrollmentSchoolsByGenderConfig!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGradeConfig!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Horizontal (Bottom Row)
  public chartEnrollmentConfig!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGenderConfig!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Vertical (Top Row)
  public chartEnrollmentSchoolsVerticalConfig!: ChartConfiguration<'bar'>;
  public chartEnrollmentSchoolsByGenderVerticalConfig!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGradeVerticalConfig!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Vertical (Bottom Row)
  public chartEnrollmentVerticalConfig!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGenderVerticalConfig!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Option B - Horizontal (Top Row)
  public chartEnrollmentSchoolsConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentSchoolsByGenderConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGradeConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Option B - Horizontal (Bottom Row)
  public chartEnrollmentConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGenderConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Option B - Vertical (Top Row)
  public chartEnrollmentSchoolsVerticalConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentSchoolsByGenderVerticalConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGradeVerticalConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Option B - Vertical (Bottom Row)
  public chartEnrollmentVerticalConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGenderVerticalConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  constructor() {
    this.initializeCharts();
  }

  private initializeCharts(): void {
    // Horizontal charts - Top Row - Option A styling
    this.chartEnrollmentSchoolsConfig = this.getChartConfigurationSchools(true);
    this.chartEnrollmentSchoolsByGenderConfig = this.getChartConfigurationSchoolsByGender(true);
    this.chartEnrollmentByGradeConfig = this.getChartConfigurationByGrade(true);

    // Horizontal charts - Bottom Row - Option A styling
    this.chartEnrollmentConfig = this.getChartConfiguration(true);
    this.chartEnrollmentByGenderConfig = this.getChartConfigurationByGender(true);

    // Vertical charts - Top Row - Option A styling
    this.chartEnrollmentSchoolsVerticalConfig = this.getVerticalChartConfigurationSchools(true);
    this.chartEnrollmentSchoolsByGenderVerticalConfig = this.getVerticalChartConfigurationSchoolsByGender(true);
    this.chartEnrollmentByGradeVerticalConfig = this.getVerticalChartConfigurationByGrade(true);

    // Vertical charts - Bottom Row - Option A styling
    this.chartEnrollmentVerticalConfig = this.getVerticalChartConfiguration(true);
    this.chartEnrollmentByGenderVerticalConfig = this.getVerticalChartConfigurationByGender(true);

    // Option B - Horizontal charts - Top Row
    this.chartEnrollmentSchoolsConfigB = this.getChartConfigurationSchools();
    this.chartEnrollmentSchoolsByGenderConfigB = this.getChartConfigurationSchoolsByGender();
    this.chartEnrollmentByGradeConfigB = this.getChartConfigurationByGrade();

    // Option B - Horizontal charts - Bottom Row
    this.chartEnrollmentConfigB = this.getChartConfiguration();
    this.chartEnrollmentByGenderConfigB = this.getChartConfigurationByGender();

    // Option B - Vertical charts - Top Row
    this.chartEnrollmentSchoolsVerticalConfigB = this.getVerticalChartConfigurationSchools();
    this.chartEnrollmentSchoolsByGenderVerticalConfigB = this.getVerticalChartConfigurationSchoolsByGender();
    this.chartEnrollmentByGradeVerticalConfigB = this.getVerticalChartConfigurationByGrade();

    // Option B - Vertical charts - Bottom Row
    this.chartEnrollmentVerticalConfigB = this.getVerticalChartConfiguration();
    this.chartEnrollmentByGenderVerticalConfigB = this.getVerticalChartConfigurationByGender();
  }

  /**
   * Resolve CSS custom property to a hex color value
   * Similar to the approach used in global-chart.config.ts
   */
  private resolveCssVariableToHex(varName: string): string {
    if (typeof document === 'undefined') {
      return '#cccccc'; // Fallback for SSR
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

    // If it's already a hex value, return it
    if (value.startsWith('#')) {
      return value;
    }

    // If it's an RGB value, convert to hex
    const rgbMatch = value.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]).toString(16).padStart(2, '0');
      const g = parseInt(rgbMatch[2]).toString(16).padStart(2, '0');
      const b = parseInt(rgbMatch[3]).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }

    // Fallback if unable to resolve
    return '#cccccc';
  }

  private getChartConfigurationSchools(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;
    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 1200,
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'linear',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.yRight = {
        type: 'category',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    options.plugins = options.plugins || {};
    options.plugins.legend = options.plugins.legend || {};
    options.plugins.legend.labels = {
      font: {
        size: 13,
        weight: 'semibold'
      },
      color: this.resolveCssVariableToHex('--sky-color-text-default')
    };

    return {
      type: 'bar',
      data: {
        labels: ['Elementary School', 'Middle School', 'High School'],
        datasets: [
          {
            label: 'Total Students',
            data: [845, 620, 1210],
            backgroundColor: colors[0],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getChartConfigurationSchoolsByGender(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 1200,
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'linear',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.yRight = {
        type: 'category',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    options.plugins = options.plugins || {};
    options.plugins.legend = options.plugins.legend || {};
    options.plugins.legend.labels = {
      font: {
        size: 13,
        weight: '500',
        family: 'BLKB Sans, Arial, sans-serif'
      },
      color: this.resolveCssVariableToHex('--sky-color-text-default')
    };

    return {
      type: 'bar',
      data: {
        labels: ['Elementary School', 'Middle School', 'High School'],
        datasets: [
          {
            label: 'Male Students',
            data: [420, 305, 590],
            backgroundColor: colors[0],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: 'Female Students',
            data: [425, 315, 620],
            backgroundColor: colors[1],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getChartConfigurationByGrade(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 120,
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'linear',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.yRight = {
        type: 'category',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    options.plugins = options.plugins || {};
    options.plugins.legend = options.plugins.legend || {};
    options.plugins.legend.labels = {
      font: {
        size: 13,
        weight: '500',
        family: 'BLKB Sans, Arial, sans-serif'
      },
      color: this.resolveCssVariableToHex('--sky-color-text-default')
    };

    return {
      type: 'bar',
      data: {
        labels: ['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'],
        datasets: [
          {
            label: 'Male Students',
            data: [68, 72, 70, 75, 68, 67],
            backgroundColor: colors[0],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: 'Female Students',
            data: [70, 68, 73, 72, 70, 72],
            backgroundColor: colors[1],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getChartConfiguration(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 2500,
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'linear',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.yRight = {
        type: 'category',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    options.plugins = options.plugins || {};
    options.plugins.legend = options.plugins.legend || {};
    options.plugins.legend.labels = {
      font: {
        size: 13,
        weight: '600',
        family: 'BLKB Sans, Arial, sans-serif'
      },
      color: this.resolveCssVariableToHex('--sky-color-text-default')
    };

    return {
      type: 'bar',
      data: {
        labels: ['Lower School', 'Upper School'],
        datasets: [
          {
            label: 'Total Students',
            data: [1245, 1890],
            backgroundColor: colors[0],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getChartConfigurationByGender(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 2500,
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'linear',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.yRight = {
        type: 'category',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    options.plugins = options.plugins || {};
    options.plugins.legend = options.plugins.legend || {};
    options.plugins.legend.labels = {
      font: {
        size: 13,
        weight: '600',
        family: 'BLKB Sans, Arial, sans-serif'
      },
      color: this.resolveCssVariableToHex('--sky-color-text-default')
    };

    return {
      type: 'bar',
      data: {
        labels: ['Lower School', 'Upper School'],
        datasets: [
          {
            label: 'Male Students',
            data: [610, 920],
            backgroundColor: colors[0],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: 'Female Students',
            data: [635, 970],
            backgroundColor: colors[1],
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getVerticalChartConfiguration(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
          max: 2500,
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'category',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.yRight = {
        type: 'linear',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    return {
      type: 'bar',
      data: {
        labels: ['Lower School', 'Upper School'],
        datasets: [
          {
            label: 'Total Students',
            data: [1245, 1890],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getVerticalChartConfigurationByGender(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
          max: 2500,
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'category',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.yRight = {
        type: 'linear',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray300 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    return {
      type: 'bar',
      data: {
        labels: ['Lower School', 'Upper School'],
        datasets: [
          {
            label: 'Male Students',
            data: [610, 920],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: 'Female Students',
            data: [635, 970],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getVerticalChartConfigurationSchools(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
          max: 2000,
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'category',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.yRight = {
        type: 'linear',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    return {
      type: 'bar',
      data: {
        labels: ['Elementary School', 'Middle School', 'High School'],
        datasets: [
          {
            label: 'Total Students',
            data: [845, 620, 1210],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getVerticalChartConfigurationSchoolsByGender(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
          max: 1300,
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'category',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.yRight = {
        type: 'linear',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    return {
      type: 'bar',
      data: {
        labels: ['Elementary School', 'Middle School', 'High School'],
        datasets: [
          {
            label: 'Male Students',
            data: [420, 305, 590],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: 'Female Students',
            data: [425, 315, 620],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }

  private getVerticalChartConfigurationByGrade(optionA: boolean = false): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
          max: 120,
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });

    if (optionA) {
      const gray200 = this.resolveCssVariableToHex('--bb-color-gray-200');
      const gray300 = this.resolveCssVariableToHex('--bb-color-gray-300');
      options.scales = options.scales || {};
      options.scales.x = options.scales.x || {};
      options.scales.y = options.scales.y || {};
      options.scales.x.grid = {
        ...(options.scales.x.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      options.scales.y.grid = {
        ...(options.scales.y.grid || {}),
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: gray200,
        tickColor: gray200,
        // borderDash: [1, 1],
        // tickBorderDash: [1, 1],
        tickLength: 16,
      };
      // Top and right borders
      options.scales.xTop = {
        type: 'category',
        position: 'top',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.yRight = {
        type: 'linear',
        position: 'right',
        grid: { display: false, drawOnChartArea: false },
        ticks: { display: false },
        border: { display: true, color: gray200 }
      };
      options.scales.x.border = { ...(options.scales.x.border || {}), color: gray300 };
      options.scales.y.border = { ...(options.scales.y.border || {}), color: gray300 };
    }

    return {
      type: 'bar',
      data: {
        labels: ['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'],
        datasets: [
          {
            label: 'Male Students',
            data: [68, 72, 70, 75, 68, 67],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: 'Female Students',
            data: [70, 68, 73, 72, 70, 72],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options,
    };
  }
}
