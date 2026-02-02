import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig, skyuxChartStyles } from './chartjs-config';

Chart.register(...registerables);

@Component({
  selector: 'app-tile-stacked-bar-chart',
  styles: `
    :host {
      display: block;
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .chart-heading {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .chart-subtitle {
      color: var(--sky-color-text-deemphasized, #686c73);
      font-size: 15px;
      line-height: 20px;
    }
    .chart-container {
      height: 180px;
      position: relative;
    }
  `,
  templateUrl: './tile-stacked-bar-chart.component.html',
  imports: [SkyTilesModule, SkyDropdownModule],
})
export class TileStackedBarChartComponent implements AfterViewInit {
  @ViewChild('stackedBarChartCanvas') stackedBarChartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart<'bar'>;

  ngAfterViewInit(): void {
    this.createChart();
  }

  protected onViewDataTable(): void {
    console.log('View data table clicked');
  }

  private createChart(): void {
    const ctx = this.stackedBarChartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      return;
    }

    const baseConfig = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 600,
          stacked: true,
          ticks: {
            stepSize: 100,
          },
          title: {
            display: true,
            text: 'x Axis label',
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
          stacked: true,
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: 'y Axis label',
            font: {
              size: skyuxChartStyles.scaleTitleFontSize,
              family: skyuxChartStyles.scaleTitleFontFamily,
            },
            color: skyuxChartStyles.scaleTitleColor,
            padding: {
              top: skyuxChartStyles.scaleTitlePaddingTop,
              bottom: skyuxChartStyles.scaleTitlePaddingTop,
            },
          },
        },
      },
    });

    const seriesColors = skyuxChartStyles.series;

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['Oranges', 'Lemons'],
        datasets: [
          {
            label: 'Data series 1',
            data: [450, 300],
            backgroundColor: seriesColors[0],
            borderColor: skyuxChartStyles.barBorderColor,
            borderWidth: 1,
          },
          {
            label: 'Data series 2',
            data: [120, 100],
            backgroundColor: seriesColors[1],
            borderColor: skyuxChartStyles.barBorderColor,
            borderWidth: 1,
          },
        ],
      },
      options: baseConfig,
    };

    this.chart = new Chart(ctx, config);
  }
}
