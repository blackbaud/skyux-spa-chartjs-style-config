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
