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
  selector: 'app-bar-chart-sizing',
  standalone: true,
  templateUrl: './bar-chart-sizing.component.html',
  imports: [SkyBoxModule, SkyFluidGridModule, SkyPageModule, SkyTabsModule, SkyBarChartComponent],
})
export class BarChartSizingComponent {
  //#region Chart Configs
  public chart1Config: ChartConfiguration<'bar'>;
  public chart2Config: ChartConfiguration<'bar'>;
  public chart3Config: ChartConfiguration<'bar'>;
  public chart4Config: ChartConfiguration<'bar'>;
  public chart5Config: ChartConfiguration<'bar'>;
  public chart6Config: ChartConfiguration<'bar'>;
  public chart7Config: ChartConfiguration<'bar'>;
  public chart8Config: ChartConfiguration<'bar'>;
  public chart9Config: ChartConfiguration<'bar'>;
  public chart10Config: ChartConfiguration<'bar'>;
  public chart11Config: ChartConfiguration<'bar'>;
  public chart12Config: ChartConfiguration<'bar'>;

  public chartV1Config: ChartConfiguration<'bar'>;
  public chartV2Config: ChartConfiguration<'bar'>;
  public chartV3Config: ChartConfiguration<'bar'>;
  public chartV4Config: ChartConfiguration<'bar'>;
  public chartV5Config: ChartConfiguration<'bar'>;
  public chartV6Config: ChartConfiguration<'bar'>;
  public chartV7Config: ChartConfiguration<'bar'>;
  public chartV8Config: ChartConfiguration<'bar'>;
  public chartV9Config: ChartConfiguration<'bar'>;
  public chartV10Config: ChartConfiguration<'bar'>;
  public chartV11Config: ChartConfiguration<'bar'>;
  public chartV12Config: ChartConfiguration<'bar'>;
  // #endregion

  constructor() {
    const chartConfig = this.getChartConfiguration();
    const chartConfigByGender = this.getChartConfigurationByGender();
    const chartConfigByGradeGender = this.getChartConfigurationByGradeAndGender();
    const chartConfigByGradeMetrics = this.getChartConfigurationByGradeMetrics();
    const chartConfigVertical = this.getVerticalChartConfiguration();
    const chartConfigVerticalByGender = this.getVerticalChartConfigurationByGender();
    const chartConfigVerticalByGradeGender = this.getVerticalChartConfigurationByGradeAndGender();
    const chartConfigVerticalByGradeMetrics = this.getVerticalChartConfigurationByGradeMetrics();

    // Chart 1: Student Enrollment
    this.chart1Config = chartConfig;

    // Chart 2: Same as Chart 1
    this.chart2Config = this.getChartConfiguration();

    // Chart 3: Same as Chart 1
    this.chart3Config = this.getChartConfiguration();

    // Chart 4: Student Enrollment by Gender
    this.chart4Config = chartConfigByGender;

    // Chart 5: Same as Chart 4
    this.chart5Config = this.getChartConfigurationByGender();

    // Chart 6: Same as Chart 4
    this.chart6Config = this.getChartConfigurationByGender();

    // Chart 7: Grade Level Enrollment by Gender
    this.chart7Config = chartConfigByGradeGender;

    // Chart 8: Same as Chart 7
    this.chart8Config = this.getChartConfigurationByGradeAndGender();

    // Chart 9: Same as Chart 7
    this.chart9Config = this.getChartConfigurationByGradeAndGender();

    // Chart 10: Grade Metrics (Absences, Tardies, Infractions, Awards)
    this.chart10Config = chartConfigByGradeMetrics;

    // Chart 11: Same as Chart 10
    this.chart11Config = this.getChartConfigurationByGradeMetrics();

    // Chart 12: Same as Chart 10
    this.chart12Config = this.getChartConfigurationByGradeMetrics();

    // Vertical tab charts
    this.chartV1Config = chartConfigVertical;
    this.chartV2Config = this.getVerticalChartConfiguration();
    this.chartV3Config = this.getVerticalChartConfiguration();
    this.chartV4Config = chartConfigVerticalByGender;
    this.chartV5Config = this.getVerticalChartConfigurationByGender();
    this.chartV6Config = this.getVerticalChartConfigurationByGender();
    this.chartV7Config = chartConfigVerticalByGradeGender;
    this.chartV8Config = this.getVerticalChartConfigurationByGradeAndGender();
    this.chartV9Config = this.getVerticalChartConfigurationByGradeAndGender();
    this.chartV10Config = chartConfigVerticalByGradeMetrics;
    this.chartV11Config = this.getVerticalChartConfigurationByGradeMetrics();
    this.chartV12Config = this.getVerticalChartConfigurationByGradeMetrics();
  }

  private getChartConfiguration(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

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
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 2500,
            },
          },
        }),
      } as any,
    };
  }

  private getChartConfigurationByGender(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

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
            borderWidth: 2,
          },
          {
            label: 'Female Students',
            data: [635, 970],
            backgroundColor: colors[1],
            borderColor: borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 2500,
            },
          },
        }),
      } as any,
    };
  }

  private getChartConfigurationByGradeAndGender(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    return {
      type: 'bar',
      data: {
        labels: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
        datasets: [
          {
            label: 'Male Students',
            data: [145, 138, 142, 151, 148, 155, 165],
            backgroundColor: colors[0],
            borderColor: borderColor,
            borderWidth: 2,
          },
          {
            label: 'Female Students',
            data: [152, 146, 148, 157, 159, 162, 172],
            backgroundColor: colors[1],
            borderColor: borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 200,
            },
          },
        }),
      } as any,
    };
  }

  private getChartConfigurationByGradeMetrics(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    return {
      type: 'bar',
      data: {
        labels: ['Absences', 'Tardies', 'Infractions', 'Awards'],
        datasets: [
          {
            label: 'Grade 6',
            data: [8, 14, 3, 5],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 7',
            data: [9, 16, 4, 6],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 8',
            data: [10, 15, 5, 6],
            backgroundColor: colors[2],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 9',
            data: [11, 18, 6, 7],
            backgroundColor: colors[3],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 10',
            data: [10, 17, 5, 8],
            backgroundColor: colors[4],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 11',
            data: [9, 13, 4, 9],
            backgroundColor: colors[5],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 12',
            data: [8, 12, 3, 10],
            backgroundColor: colors[6],
            borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 20,
            },
          },
        }),
      } as any,
    };
  }

  private getVerticalChartConfiguration(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

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
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'x',
          scales: {
            y: {
              beginAtZero: true,
              max: 2500,
            },
          },
        }),
      } as any,
    };
  }

  private getVerticalChartConfigurationByGender(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

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
            borderWidth: 2,
          },
          {
            label: 'Female Students',
            data: [635, 970],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'x',
          scales: {
            y: {
              beginAtZero: true,
              max: 2500,
            },
          },
        }),
      } as any,
    };
  }

  private getVerticalChartConfigurationByGradeAndGender(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    return {
      type: 'bar',
      data: {
        labels: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
        datasets: [
          {
            label: 'Male Students',
            data: [145, 138, 142, 151, 148, 155, 165],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Female Students',
            data: [152, 146, 148, 157, 159, 162, 172],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'x',
          scales: {
            y: {
              beginAtZero: true,
              max: 200,
            },
          },
        }),
      } as any,
    };
  }

  private getVerticalChartConfigurationByGradeMetrics(): ChartConfiguration<'bar'> {
    const colors = skyuxChartStyles.series;
    const borderColor = skyuxChartStyles.barBorderColor;

    return {
      type: 'bar',
      data: {
        labels: ['Absences', 'Tardies', 'Infractions', 'Awards'],
        datasets: [
          {
            label: 'Grade 6',
            data: [8, 14, 3, 5],
            backgroundColor: colors[0],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 7',
            data: [9, 16, 4, 6],
            backgroundColor: colors[1],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 8',
            data: [10, 15, 5, 6],
            backgroundColor: colors[2],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 9',
            data: [11, 18, 6, 7],
            backgroundColor: colors[3],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 10',
            data: [10, 17, 5, 8],
            backgroundColor: colors[4],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 11',
            data: [9, 13, 4, 9],
            backgroundColor: colors[5],
            borderColor,
            borderWidth: 2,
          },
          {
            label: 'Grade 12',
            data: [8, 12, 3, 10],
            backgroundColor: colors[6],
            borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...getSkyuxBarChartConfig({
          indexAxis: 'x',
          scales: {
            y: {
              beginAtZero: true,
              max: 20,
            },
          },
        }),
      } as any,
    };
  }
}
