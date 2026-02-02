import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyKeyInfoModule } from '@skyux/indicators';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxLineChartConfig } from './chartjs-config/line-chart.config';
import { skyuxChartStyles } from './chartjs-config/global-chart.config';

Chart.register(...registerables);

@Component({
  selector: 'app-tile-line-chart',
  styles: `
    :host {
      display: block;
    }
    .chart-container {
      height: 250px;
      position: relative;
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .key-info-container {
      display: flex;
      align-items: center;
    }
  `,
  templateUrl: './tile-line-chart.component.html',
  imports: [SkyTilesModule, SkyDropdownModule, SkyInputBoxModule, SkyKeyInfoModule, ReactiveFormsModule],
})
export class TileLineChartComponent implements AfterViewInit {
  @ViewChild('lineChartCanvas') lineChartCanvas!: ElementRef<HTMLCanvasElement>;
  
  protected timePeriodControl = new FormControl('committed');
  protected year2025Total = '$542K';
  protected year2024Total = '$487K';
  protected year2023Total = '$423K';
  protected year2022Total = '$365K';
  
  private chart?: Chart<'line'>;

  ngAfterViewInit(): void {
    this.createChart();
  }

  onViewDataTable(): void {
    console.log('View data table clicked');
  }

  private createChart(): void {
    const ctx = this.lineChartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const baseConfig = getSkyuxLineChartConfig({
      scales: {
        y: {
          ticks: {
            callback: (value: string | number) => {
              return '$' + value + 'K';
            },
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.dataset.label || '';
              const value = context.parsed.y;
              return `${label}: $${value?.toLocaleString() ?? '0'}K`;
            },
          },
        },
      },
    });

    const seriesColors = skyuxChartStyles.series;

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '2022',
            data: [25, 28, 22, 35, 30, 45, 38, 42, 50, 40, 55, 48],
            borderColor: seriesColors[0],
            backgroundColor: seriesColors[0],
            pointBackgroundColor: seriesColors[0],
            pointBorderColor: '#fff',
          },
          {
            label: '2023',
            data: [28, 35, 30, 42, 38, 50, 42, 48, 58, 45, 62, 55],
            borderColor: seriesColors[1],
            backgroundColor: seriesColors[1],
            pointBackgroundColor: seriesColors[1],
            pointBorderColor: '#fff',
          },
          {
            label: '2024',
            data: [32, 42, 35, 48, 40, 55, 48, 52, 65, 50, 68, 60],
            borderColor: seriesColors[2],
            backgroundColor: seriesColors[2],
            pointBackgroundColor: seriesColors[2],
            pointBorderColor: '#fff',
          },
          {
            label: '2025',
            data: [35, 48, 38, 52, 45, 60, 52, 58, 70, 55, 75, 65],
            borderColor: seriesColors[3],
            backgroundColor: seriesColors[3],
            pointBackgroundColor: seriesColors[3],
            pointBorderColor: '#fff',
          },
        ],
      },
      options: baseConfig,
    };

    this.chart = new Chart(ctx, config);
  }
}
