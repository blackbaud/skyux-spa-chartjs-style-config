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
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'Root',
      option: 'maintainAspectRatio',
      value: 'false',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'layout',
      option: 'padding',
      value: 'skyuxChartStyles.chartPadding',
      skyuxCustomProperty: '--sky-space-inset-balanced-none',
      file: 'global-chart.config.ts',
    },
    {
      section: 'interaction',
      option: 'mode',
      value: 'nearest',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'interaction',
      option: 'intersect',
      value: 'false',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'animation',
      option: 'duration',
      value: '400',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'animation',
      option: 'easing',
      value: 'easeInOutQuart',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend',
      option: 'display',
      value: 'true',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend',
      option: 'position',
      value: 'bottom',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'usePointStyle',
      value: 'true',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'pointStyle',
      value: 'circle',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'boxWidth\nboxHeight',
      value: 'skyuxChartStyles.legendPointSize\nskyuxChartStyles.legendPointSize',
      skyuxCustomProperty: '--sky-size-icon-xs\n--sky-size-icon-xs',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'padding',
      value: 'skyuxChartStyles.legendLabelsPadding',
      skyuxCustomProperty: '--sky-space-stacked-s',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels.font',
      option: 'family\nsize\nweight',
      value: 'skyuxChartStyles.legendFontFamily\nskyuxChartStyles.legendFontSize\nskyuxChartStyles.legendFontWeight',
      skyuxCustomProperty: '--sky-font-family-primary\n--sky-font-size-body-s\n--sky-font-style-body-s',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'color',
      value: 'skyuxChartStyles.legendTextColor',
      skyuxCustomProperty: '--sky-color-text-deemphasized',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'enabled\nmode\nintersect',
      value: 'true\nindex\nfalse',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'backgroundColor',
      value: 'skyuxChartStyles.tooltipBackgroundColor',
      skyuxCustomProperty: '--sky-color-background-container-base',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'titleColor\nbodyColor',
      value: 'skyuxChartStyles.tooltipTitleColor\nskyuxChartStyles.tooltipBodyColor',
      skyuxCustomProperty: '--sky-color-text-heading\n--sky-color-text-default',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'borderColor\nborderWidth',
      value: 'skyuxChartStyles.tooltipBorderColor\nskyuxChartStyles.tooltipBorderWidth',
      skyuxCustomProperty: '--sky-color-border-container-base\n--sky-border-width-emphasized',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'padding',
      value: 'skyuxChartStyles.tooltipPadding\n(fallback: 16)',
      skyuxCustomProperty: '--sky-space-inset-balanced-l',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'displayColors\nmultiKeyBackground',
      value: 'true\ntransparent',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'bodySpacing\ntitleMarginBottom\ncaretSize\nboxPadding\ncaretPadding',
      value: 'skyuxChartStyles.tooltipBodySpacing\nskyuxChartStyles.tooltipTitleMarginBottom\nskyuxChartStyles.tooltipCaretSize\nskyuxChartStyles.tooltipBoxPadding\n4',
      skyuxCustomProperty: '--sky-space-stacked-s\n--sky-space-stacked-s\n--sky-size-icon-xs\n--sky-space-inset-balanced-l\nLiteral',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip',
      option: 'usePointStyle',
      value: 'true',
      skyuxCustomProperty: 'N/A',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip.titleFont',
      option: 'family\nsize\nweight',
      value: 'skyuxChartStyles.fontFamily\nskyuxChartStyles.tooltipTitleFontSize\nskyuxChartStyles.tooltipTitleFontWeight',
      skyuxCustomProperty: '--sky-font-family-primary\n--sky-font-size-heading-4\n--sky-font-style-heading-4',
      file: 'global-chart.config.ts',
    },
    {
      section: 'plugins.tooltip.bodyFont',
      option: 'family\nsize\nweight',
      value: 'skyuxChartStyles.fontFamily\nskyuxChartStyles.tooltipBodyFontSize\nskyuxChartStyles.tooltipBodyFontWeight',
      skyuxCustomProperty: '--sky-font-family-primary\n--sky-font-size-body-s\n--sky-font-style-body-s',
      file: 'global-chart.config.ts',
    },
  ];

  protected barConfigRows = [
    {
      section: 'Root',
      option: 'indexAxis',
      value: 'x',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'Root',
      option: 'responsive\nmaintainAspectRatio',
      value: 'true\nfalse',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'layout',
      option: 'padding',
      value: 'skyuxChartStyles.chartPadding',
      skyuxCustomProperty: '--sky-space-inset-balanced-none',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'datasets.bar',
      option: 'categoryPercentage',
      value: '0.7',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'elements.bar',
      option: 'borderWidth\nborderColor\nborderRadius',
      value: '2\nskyuxChartStyles.barBorderColor\nskyuxChartStyles.barBorderRadius',
      skyuxCustomProperty: 'N/A\n--sky-color-border-default\n--sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.grid',
      option: 'display\ncolor\ntickColor\ndrawTicks\ntickLength',
      value: 'true\nskyuxChartStyles.axisGridlineColor\nskyuxChartStyles.axisGridlineColor\ntrue\nskyuxChartStyles.axisTickLengthX',
      skyuxCustomProperty: 'N/A\n--sky-theme-color-viz-axis\n--sky-theme-color-viz-axis\nN/A\n--sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.border',
      option: 'display\ncolor',
      value: 'true\nskyuxChartStyles.axisLineColor',
      skyuxCustomProperty: 'N/A\n--sky-theme-color-viz-axis',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.ticks',
      option: 'color\nfont.size\nfont.family\nfont.weight\npadding',
      value: 'skyuxChartStyles.axisTickColor\nskyuxChartStyles.axisTickFontSize\nskyuxChartStyles.axisTickFontFamily\nskyuxChartStyles.axisTickFontWeight\nskyuxChartStyles.axisTickPaddingX',
      skyuxCustomProperty: '--sky-color-text-default\n--sky-font-size-body-s\n--sky-font-family-primary\n--sky-font-style-body-s\n--sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.x.title',
      option: 'display\nfont.size\nfont.family\ncolor\npadding.top\npadding.bottom',
      value: 'false\nskyuxChartStyles.scaleTitleFontSize\nskyuxChartStyles.scaleTitleFontFamily\nskyuxChartStyles.scaleTitleColor\nskyuxChartStyles.scaleXTitlePaddingTop\nskyuxChartStyles.scaleXTitlePaddingBottom',
      skyuxCustomProperty: 'N/A\nLiteral (13)\nBLKB Sans, Arial, sans-serif\n--sky-color-text-deemphasized\n--sky-space-stacked-0\n--sky-space-stacked-l',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y',
      option: 'beginAtZero',
      value: 'true',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.grid',
      option: 'display\ncolor\ntickColor\ndrawTicks\ntickLength',
      value: 'true\nskyuxChartStyles.axisGridlineColor\nskyuxChartStyles.axisGridlineColor\ntrue\nskyuxChartStyles.axisTickLengthY',
      skyuxCustomProperty: 'N/A\n--sky-theme-color-viz-axis\n--sky-theme-color-viz-axis\nN/A\n--sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.border',
      option: 'display\ncolor',
      value: 'true\nskyuxChartStyles.axisLineColor',
      skyuxCustomProperty: 'N/A\n--sky-theme-color-viz-axis',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.ticks',
      option: 'color\nfont.size\nfont.family\nfont.weight\npadding',
      value: 'skyuxChartStyles.axisTickColor\nskyuxChartStyles.axisTickFontSize\nskyuxChartStyles.axisTickFontFamily\nskyuxChartStyles.axisTickFontWeight\nskyuxChartStyles.axisTickPaddingY',
      skyuxCustomProperty: '--sky-color-text-default\n--sky-font-size-body-s\n--sky-font-family-primary\n--sky-font-style-body-s\n--sky-space-gap-label-m',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'scales.y.title',
      option: 'display\nfont.size\nfont.family\ncolor\npadding.top\npadding.bottom',
      value: 'false\nskyuxChartStyles.scaleTitleFontSize\nskyuxChartStyles.scaleTitleFontFamily\nskyuxChartStyles.scaleTitleColor\nskyuxChartStyles.scaleYTitlePaddingLeft\nskyuxChartStyles.scaleYTitlePaddingRight',
      skyuxCustomProperty: 'N/A\nLiteral (13)\nBLKB Sans, Arial, sans-serif\n--sky-color-text-deemphasized\n--sky-space-inline-l\n--sky-space-inline-0',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend',
      option: 'display\nposition',
      value: 'true\nbottom',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'usePointStyle\npointStyle',
      value: 'true\ncircle',
      skyuxCustomProperty: 'N/A',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'boxWidth\nboxHeight\npadding',
      value: 'skyuxChartStyles.legendPointSize\nskyuxChartStyles.legendPointSize\nskyuxChartStyles.legendLabelsPadding',
      skyuxCustomProperty: '--sky-size-icon-xs\n--sky-size-icon-xs\n--sky-space-stacked-s',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels.font',
      option: 'family\nsize\nweight',
      value: 'skyuxChartStyles.legendFontFamily\nskyuxChartStyles.legendFontSize\nskyuxChartStyles.legendFontWeight',
      skyuxCustomProperty: '--sky-font-family-primary\n--sky-font-size-body-s\n--sky-font-style-body-s',
      file: 'bar-chart.config.ts',
    },
    {
      section: 'plugins.legend.labels',
      option: 'color',
      value: 'skyuxChartStyles.legendLabelColor',
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
