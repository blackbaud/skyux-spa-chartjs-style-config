import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SkyBoxModule, SkyFluidGridModule } from '@skyux/layout';
import { SkyPageModule } from '@skyux/pages';
import { SkyTabsModule } from '@skyux/tabs';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig } from '../chartjs-config/bar-chart.config';
import { skyuxChartStyles } from '../chartjs-config/global-chart.config';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart-sizing',
  standalone: true,
  templateUrl: './bar-chart-sizing.component.html',
  imports: [SkyBoxModule, SkyFluidGridModule, SkyPageModule, SkyTabsModule],
})
export class BarChartSizingComponent implements AfterViewInit {
  @ViewChild('chart1') chart1Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart2') chart2Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart3') chart3Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart4') chart4Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart5') chart5Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart6') chart6Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart7') chart7Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart8') chart8Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart9') chart9Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart10') chart10Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart11') chart11Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart12') chart12Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV1') chartV1Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV2') chartV2Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV3') chartV3Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV4') chartV4Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV5') chartV5Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV6') chartV6Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV7') chartV7Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV8') chartV8Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV9') chartV9Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV10') chartV10Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV11') chartV11Ref!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartV12') chartV12Ref!: ElementRef<HTMLCanvasElement>;

  private chartInstances: Chart[] = [];

  ngAfterViewInit() {
    this.initializeCharts();
  }

  private initializeCharts() {
    const chartConfig = this.getChartConfiguration();
    const chartConfigByGender = this.getChartConfigurationByGender();
    const chartConfigByGradeGender = this.getChartConfigurationByGradeAndGender();
    const chartConfigByGradeMetrics = this.getChartConfigurationByGradeMetrics();
    const chartConfigVertical = this.getVerticalChartConfiguration();
    const chartConfigVerticalByGender = this.getVerticalChartConfigurationByGender();
    const chartConfigVerticalByGradeGender = this.getVerticalChartConfigurationByGradeAndGender();
    const chartConfigVerticalByGradeMetrics = this.getVerticalChartConfigurationByGradeMetrics();

    // Chart 1: Student Enrollment
    if (this.chart1Ref) {
      this.chartInstances.push(
        new Chart(this.chart1Ref.nativeElement, chartConfig)
      );
    }

    // Chart 2: Same as Chart 1
    if (this.chart2Ref) {
      this.chartInstances.push(
        new Chart(this.chart2Ref.nativeElement, this.getChartConfiguration())
      );
    }

    // Chart 3: Same as Chart 1
    if (this.chart3Ref) {
      this.chartInstances.push(
        new Chart(this.chart3Ref.nativeElement, this.getChartConfiguration())
      );
    }

    // Chart 4: Student Enrollment by Gender
    if (this.chart4Ref) {
      this.chartInstances.push(
        new Chart(this.chart4Ref.nativeElement, chartConfigByGender)
      );
    }

    // Chart 5: Same as Chart 4
    if (this.chart5Ref) {
      this.chartInstances.push(
        new Chart(this.chart5Ref.nativeElement, this.getChartConfigurationByGender())
      );
    }

    // Chart 6: Same as Chart 4
    if (this.chart6Ref) {
      this.chartInstances.push(
        new Chart(this.chart6Ref.nativeElement, this.getChartConfigurationByGender())
      );
    }

    // Chart 7: Grade Level Enrollment by Gender
    if (this.chart7Ref) {
      this.chartInstances.push(
        new Chart(this.chart7Ref.nativeElement, chartConfigByGradeGender)
      );
    }

    // Chart 8: Same as Chart 7
    if (this.chart8Ref) {
      this.chartInstances.push(
        new Chart(this.chart8Ref.nativeElement, this.getChartConfigurationByGradeAndGender())
      );
    }

    // Chart 9: Same as Chart 7
    if (this.chart9Ref) {
      this.chartInstances.push(
        new Chart(this.chart9Ref.nativeElement, this.getChartConfigurationByGradeAndGender())
      );
    }

    // Chart 10: Grade Metrics (Absences, Tardies, Infractions, Awards)
    if (this.chart10Ref) {
      this.chartInstances.push(
        new Chart(this.chart10Ref.nativeElement, chartConfigByGradeMetrics)
      );
    }

    // Chart 11: Same as Chart 10
    if (this.chart11Ref) {
      this.chartInstances.push(
        new Chart(this.chart11Ref.nativeElement, this.getChartConfigurationByGradeMetrics())
      );
    }

    // Chart 12: Same as Chart 10
    if (this.chart12Ref) {
      this.chartInstances.push(
        new Chart(this.chart12Ref.nativeElement, this.getChartConfigurationByGradeMetrics())
      );
    }

    // Vertical tab charts
    if (this.chartV1Ref) {
      this.chartInstances.push(new Chart(this.chartV1Ref.nativeElement, chartConfigVertical));
    }
    if (this.chartV2Ref) {
      this.chartInstances.push(new Chart(this.chartV2Ref.nativeElement, this.getVerticalChartConfiguration()));
    }
    if (this.chartV3Ref) {
      this.chartInstances.push(new Chart(this.chartV3Ref.nativeElement, this.getVerticalChartConfiguration()));
    }

    if (this.chartV4Ref) {
      this.chartInstances.push(new Chart(this.chartV4Ref.nativeElement, chartConfigVerticalByGender));
    }
    if (this.chartV5Ref) {
      this.chartInstances.push(new Chart(this.chartV5Ref.nativeElement, this.getVerticalChartConfigurationByGender()));
    }
    if (this.chartV6Ref) {
      this.chartInstances.push(new Chart(this.chartV6Ref.nativeElement, this.getVerticalChartConfigurationByGender()));
    }

    if (this.chartV7Ref) {
      this.chartInstances.push(new Chart(this.chartV7Ref.nativeElement, chartConfigVerticalByGradeGender));
    }
    if (this.chartV8Ref) {
      this.chartInstances.push(new Chart(this.chartV8Ref.nativeElement, this.getVerticalChartConfigurationByGradeAndGender()));
    }
    if (this.chartV9Ref) {
      this.chartInstances.push(new Chart(this.chartV9Ref.nativeElement, this.getVerticalChartConfigurationByGradeAndGender()));
    }

    if (this.chartV10Ref) {
      this.chartInstances.push(new Chart(this.chartV10Ref.nativeElement, chartConfigVerticalByGradeMetrics));
    }
    if (this.chartV11Ref) {
      this.chartInstances.push(new Chart(this.chartV11Ref.nativeElement, this.getVerticalChartConfigurationByGradeMetrics()));
    }
    if (this.chartV12Ref) {
      this.chartInstances.push(new Chart(this.chartV12Ref.nativeElement, this.getVerticalChartConfigurationByGradeMetrics()));
    }
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

  ngOnDestroy() {
    // Clean up chart instances
    this.chartInstances.forEach((chart) => chart.destroy());
  }
}
