import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyIconModule } from '@skyux/icon';
import { SkyKeyInfoModule } from '@skyux/indicators';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getSkyuxDoughnutChartConfig, getSkyuxDoughnutDatasetBorder, skyuxChartStyles } from './chartjs-config';

Chart.register(...registerables);

interface AssetCategory {
  name: string;
  value: number;
  percentage: number;
}

@Component({
  selector: 'app-tile-prospect-management',
  styles: `
    :host {
      display: block;
    }
    .total-amount {
      font-size: 24px;
      font-weight: 600;
      color: #0f72ce;
      margin: 0;
    }
    .chart-container {
      position: relative;
      height: 240px;
      width: 100%;
    }
  `,
  templateUrl: './tile-prospect-management.component.html',
  imports: [SkyTilesModule, SkyDropdownModule, SkyToolbarModule, SkyIconModule, SkyKeyInfoModule],
})
export class TileProspectManagementComponent implements AfterViewInit {
  @ViewChild('assetChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart<'doughnut'>;

  protected currentStatus = 'Research';
  protected daysInStatus = 1636;
  protected classification = 'No classification';
  
  protected totalAssets = 10000000;
  
  protected assetCategories: AssetCategory[] = [
    { name: 'Securities - WP', value: 5000000, percentage: 50 },
    { name: 'Income/Compensation - WP', value: 2500000, percentage: 25 },
    { name: 'Private Co. Valuation - WP', value: 1500000, percentage: 15 },
    { name: 'Real Estate - WP', value: 1000000, percentage: 10 },
  ];

  ngAfterViewInit(): void {
    this.createChart();
  }

  protected onEdit(): void {
    console.log('Edit prospect management');
    // TODO: Implement edit functionality
  }

  protected onViewStatusHistory(): void {
    console.log('View status history');
    // TODO: Implement status history view
  }

  protected formatCurrency(value: number): string {
    if (value >= 1000000) {
      return '$' + (value / 1000000).toFixed(0) + 'M';
    } else if (value >= 1000) {
      return '$' + (value / 1000).toFixed(0) + 'K';
    }
    return '$' + value.toFixed(0);
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const baseConfig = getSkyuxDoughnutChartConfig({
      layout: {
        padding: {
          top: 46,
          bottom: 26,
          left: 46,
          right: 46,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = context.parsed;
              const category = this.assetCategories[context.dataIndex];
              return `${label}: ${this.formatCurrency(value)} (${category.percentage}%)`;
            },
          },
        },
        datalabels: {
          color: '#212327',
          font: {
            size: 13,
            weight: 'normal',
            family: 'Blackbaud Sans, Arial, sans-serif',
            lineHeight: 1.4,
          },
          formatter: (value: number, context: any) => {
            const category = this.assetCategories[context.dataIndex];
            const label = category.name;
            const formattedValue = this.formatCurrency(value);
            return `${label}\n${formattedValue} (${category.percentage}%)`;
          },
          anchor: 'end',
          align: 'end',
          offset: 2,
          clamp: false,
          textAlign: 'center',
        },
      },
    });

    const seriesColors = skyuxChartStyles.series;
    const datasetBorder = getSkyuxDoughnutDatasetBorder();
    
    const labels = this.assetCategories.map((cat) => cat.name);
    const data = this.assetCategories.map((cat) => cat.value);
    const backgroundColors = this.assetCategories.map(
      (_, index) => seriesColors[index % seriesColors.length]
    );

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColors,
            ...datasetBorder,
          },
        ],
      },
      options: baseConfig,
      plugins: [ChartDataLabels as any],
    };

    this.chart = new Chart(ctx, config);
  }
}
