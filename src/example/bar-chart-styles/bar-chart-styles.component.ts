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
  protected globalConfigRows = [
    {
      section: 'Root',
      option: 'responsive',
      value: 'true',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'Root',
      option: 'maintainAspectRatio',
      value: 'false',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'layout',
      option: 'padding',
      value: 'skyuxChartStyles.chartPadding',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-space-inset-balanced-none',
      file: 'global-chart.config.ts',
    },
    {
      section: 'interaction',
      option: 'mode',
      value: 'nearest',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'interaction',
      option: 'intersect',
      value: 'false',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'animation',
      option: 'duration',
      value: '400',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'animation',
      option: 'easing',
      value: 'easeInOutQuart',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend',
      option: 'display',
      value: 'true',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend',
      option: 'position',
      value: 'bottom',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'usePointStyle',
      value: 'true',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'pointStyle',
      value: 'circle',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'boxWidth/boxHeight',
      value: 'skyuxChartStyles.legendPointSize',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-size-icon-xs',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'padding',
      value: 'skyuxChartStyles.legendLabelsPadding',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-space-stacked-s',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels.font',
      option: 'family/size/weight',
      value: 'skyuxChartStyles.legendFontFamily / legendFontSize / legendFontWeight',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-font-family-primary / --sky-font-size-body-s / --sky-font-style-body-s',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'color',
      value: 'skyuxChartStyles.legendTextColor',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-text-deemphasized',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'enabled/mode/intersect',
      value: 'true / index / false',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'backgroundColor',
      value: 'skyuxChartStyles.tooltipBackgroundColor',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-background-container-base',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'titleColor/bodyColor',
      value: 'skyuxChartStyles.tooltipTitleColor / tooltipBodyColor',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-text-heading / --sky-color-text-default',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'borderColor/borderWidth',
      value: 'skyuxChartStyles.tooltipBorderColor / skyuxChartStyles.tooltipBorderWidth',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-border-container-base / --sky-border-width-emphasized',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'padding',
      value: 'skyuxChartStyles.tooltipPadding (fallback 16)',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-space-inset-balanced-l',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'displayColors/multiKeyBackground',
      value: 'true / transparent',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'bodySpacing/titleMarginBottom/caretSize/boxPadding/caretPadding',
      value: 'skyuxChartStyles.tooltipBodySpacing / tooltipTitleMarginBottom / tooltipCaretSize / tooltipBoxPadding / 4',
      source: 'Resolved CSS vars + literal',
      skyuxCustomProperty: '--sky-space-stacked-s / --sky-space-stacked-s / --sky-size-icon-xs / --sky-space-inset-balanced-l / literal',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'usePointStyle',
      value: 'true',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip.titleFont',
      option: 'family/size/weight',
      value: 'skyuxChartStyles.fontFamily / tooltipTitleFontSize / tooltipTitleFontWeight',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-font-family-primary / --sky-font-size-heading-4 / --sky-font-style-heading-4',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip.bodyFont',
      option: 'family/size/weight',
      value: 'skyuxChartStyles.fontFamily / tooltipBodyFontSize / tooltipBodyFontWeight',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-font-family-primary / --sky-font-size-body-s / --sky-font-style-body-s',
      file: 'global-chart.config.ts',
    },
  ];

  protected barConfigRows = [
    {
      section: 'Root',
      option: 'indexAxis',
      value: 'x',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'Root',
      option: 'responsive/maintainAspectRatio',
      value: 'true / false',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'layout',
      option: 'padding',
      value: 'skyuxChartStyles.chartPadding',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-space-inset-balanced-none',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'datasets.bar',
      option: 'categoryPercentage',
      value: '0.7',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'elements.bar',
      option: 'borderWidth/borderColor/borderRadius',
      value: '2 / skyuxChartStyles.barBorderColor / skyuxChartStyles.barBorderRadius',
      source: 'Resolved CSS vars + literal',
      skyuxCustomProperty: 'N/A / --sky-color-border-default / --sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.grid',
      option: 'display/color/tickColor/drawTicks/tickLength',
      value: 'true / skyuxChartStyles.axisGridlineColor / axisGridlineColor / true / axisTickLengthX',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: 'N/A / --sky-theme-color-viz-axis / --sky-theme-color-viz-axis / N/A / --sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.border',
      option: 'display/color',
      value: 'true / skyuxChartStyles.axisLineColor',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: 'N/A / --sky-theme-color-viz-axis',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.ticks',
      option: 'color/font/padding',
      value: 'axisTickColor / axisTickFontSize + axisTickFontFamily + axisTickFontWeight / axisTickPaddingX',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-text-default / --sky-font-size-body-s + --sky-font-family-primary + --sky-font-style-body-s / --sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y',
      option: 'beginAtZero',
      value: 'true',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.grid',
      option: 'display/color/tickColor/drawTicks/tickLength',
      value: 'true / skyuxChartStyles.axisGridlineColor / axisGridlineColor / true / axisTickLengthY',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: 'N/A / --sky-theme-color-viz-axis / --sky-theme-color-viz-axis / N/A / --sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.border',
      option: 'display/color',
      value: 'true / skyuxChartStyles.axisLineColor',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: 'N/A / --sky-theme-color-viz-axis',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.ticks',
      option: 'color/font/padding',
      value: 'axisTickColor / axisTickFontSize + axisTickFontFamily + axisTickFontWeight / axisTickPaddingY',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-text-default / --sky-font-size-body-s + --sky-font-family-primary + --sky-font-style-body-s / --sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend',
      option: 'display/position',
      value: 'true / bottom',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'usePointStyle/pointStyle',
      value: 'true / circle',
      source: 'Literal',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'boxWidth/boxHeight/padding',
      value: 'legendPointSize / legendPointSize / legendLabelsPadding',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-size-icon-xs / --sky-size-icon-xs / --sky-space-stacked-s',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels.font',
      option: 'size/weight/family',
      value: 'legendFontSize / legendFontWeight / legendFontFamily',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-font-size-body-s / --sky-font-style-body-s / --sky-font-family-primary',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'color',
      value: 'skyuxChartStyles.legendLabelColor',
      source: 'Resolved CSS vars',
      skyuxCustomProperty: '--sky-color-text-deemphasized',
      file: 'bar-chart.config.ts',
    },
  ];
  //#region Chart Configs - Horizontal (Top Row)
  public chartEnrollmentSchoolsConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentSchoolsByGenderConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGradeConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Horizontal (Bottom Row)
  public chartEnrollmentConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGenderConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Vertical (Top Row)
  public chartEnrollmentSchoolsVerticalConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentSchoolsByGenderVerticalConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGradeVerticalConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  //#region Chart Configs - Vertical (Bottom Row)
  public chartEnrollmentVerticalConfigB!: ChartConfiguration<'bar'>;
  public chartEnrollmentByGenderVerticalConfigB!: ChartConfiguration<'bar'>;
  // #endregion

  constructor() {
    this.initializeCharts();
  }

  private initializeCharts(): void {
    // Horizontal charts - Top Row
    this.chartEnrollmentSchoolsConfigB = this.getChartConfigurationSchools();
    this.chartEnrollmentSchoolsByGenderConfigB = this.getChartConfigurationSchoolsByGender();
    this.chartEnrollmentByGradeConfigB = this.getChartConfigurationByGrade();

    // Horizontal charts - Bottom Row
    this.chartEnrollmentConfigB = this.getChartConfiguration();
    this.chartEnrollmentByGenderConfigB = this.getChartConfigurationByGender();

    // Vertical charts - Top Row
    this.chartEnrollmentSchoolsVerticalConfigB = this.getVerticalChartConfigurationSchools();
    this.chartEnrollmentSchoolsByGenderVerticalConfigB = this.getVerticalChartConfigurationSchoolsByGender();
    this.chartEnrollmentByGradeVerticalConfigB = this.getVerticalChartConfigurationByGrade();

    // Vertical charts - Bottom Row
    this.chartEnrollmentVerticalConfigB = this.getVerticalChartConfiguration();
    this.chartEnrollmentByGenderVerticalConfigB = this.getVerticalChartConfigurationByGender();
  }

  private getChartConfigurationSchools(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;
    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 1200,
          title: {
            display: true,
            text: '# of students',
            font: {
              size: skyuxChartStyles.scaleTitleFontSize,
              family: skyuxChartStyles.scaleTitleFontFamily
            },
            color: skyuxChartStyles.scaleTitleColor,
            padding: {
              top: skyuxChartStyles.scaleXTitlePaddingTop,
              bottom: skyuxChartStyles.scaleXTitlePaddingBottom
            }
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

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

  private getChartConfigurationSchoolsByGender(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 1200,
          title: {
            display: true,
            text: '# of students',
            font: {
              size: skyuxChartStyles.scaleTitleFontSize,
              family: skyuxChartStyles.scaleTitleFontFamily
            },
            color: skyuxChartStyles.scaleTitleColor,
            padding: {
              top: skyuxChartStyles.scaleXTitlePaddingTop,
              bottom: skyuxChartStyles.scaleXTitlePaddingBottom
            }
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

    return {
      type: 'bar',
      data: {
        labels: ['Kindergarten', '1st Grade', '2nd Grade'],
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

  private getChartConfigurationByGrade(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 120,
          title: {
            display: true,
            text: '# of students',
            font: {
              size: skyuxChartStyles.scaleTitleFontSize,
              family: skyuxChartStyles.scaleTitleFontFamily
            },
            color: skyuxChartStyles.scaleTitleColor,
            padding: {
              top: skyuxChartStyles.scaleXTitlePaddingTop,
              bottom: skyuxChartStyles.scaleXTitlePaddingBottom
            }
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

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

  private getChartConfiguration(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 2500,
          title: {
            display: true,
            text: '# of students',
            font: {
              size: skyuxChartStyles.scaleTitleFontSize,
              family: skyuxChartStyles.scaleTitleFontFamily
            },
            color: skyuxChartStyles.scaleTitleColor,
            padding: {
              top: skyuxChartStyles.scaleXTitlePaddingTop,
              bottom: skyuxChartStyles.scaleXTitlePaddingBottom
            }
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

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

  private getChartConfigurationByGender(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    const options: any = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 2500,
          title: {
            display: true,
            text: '# of students',
            font: {
              size: skyuxChartStyles.scaleTitleFontSize,
              family: skyuxChartStyles.scaleTitleFontFamily
            },
            color: skyuxChartStyles.scaleTitleColor,
            padding: {
              top: skyuxChartStyles.scaleXTitlePaddingTop,
              bottom: skyuxChartStyles.scaleXTitlePaddingBottom
            }
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });

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

  private getVerticalChartConfiguration(): ChartConfiguration<'bar'> {
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

  private getVerticalChartConfigurationByGender(): ChartConfiguration<'bar'> {
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

  private getVerticalChartConfigurationSchools(): ChartConfiguration<'bar'> {
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

  private getVerticalChartConfigurationSchoolsByGender(): ChartConfiguration<'bar'> {
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

  private getVerticalChartConfigurationByGrade(): ChartConfiguration<'bar'> {
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
