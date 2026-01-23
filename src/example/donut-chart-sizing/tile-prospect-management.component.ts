import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyIconModule } from '@skyux/icon';
import { SkyKeyInfoModule } from '@skyux/indicators';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getSkyuxDoughnutChartConfig, getSkyuxDoughnutDatasetBorder, skyuxChartStyles } from '../chartjs-config';

Chart.register(...registerables);

// Plugin to add box shadow and accent border to tooltips (matches SKY UX popover style)
const tooltipShadowPlugin = {
  id: 'tooltipShadow',
  beforeTooltipDraw: (chart: any) => {
    const tooltip = chart.tooltip;
    if (!tooltip || tooltip.opacity === 0) return;

    const ctx = chart.ctx;
    const shadow = skyuxChartStyles.tooltipShadow;
    
    const { x, y, width, height } = tooltip;
    const borderRadius = 6;
    
    ctx.save();
    
    ctx.shadowColor = shadow.color;
    ctx.shadowBlur = shadow.blur;
    ctx.shadowOffsetX = shadow.offsetX;
    ctx.shadowOffsetY = shadow.offsetY;
    
    ctx.fillStyle = skyuxChartStyles.tooltipBackgroundColor;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, borderRadius);
    ctx.fill();
    
    ctx.restore();
  },
  afterTooltipDraw: (chart: any) => {
    const tooltip = chart.tooltip;
    if (!tooltip || tooltip.opacity === 0) return;

    const ctx = chart.ctx;
    const accentColor = skyuxChartStyles.tooltipAccentBorderColor;
    const accentWidth = skyuxChartStyles.tooltipAccentBorderWidth;
    
    const { x, y, width, height, caretX, caretY } = tooltip;
    const borderRadius = 6;
    
    ctx.save();
    
    const caretWidth = 20;
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    
    if (caretX < x) {
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(x, caretY - caretWidth / 2);
      ctx.lineTo(x, caretY + caretWidth / 2);
    } else if (caretX > x + width) {
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(x + width, caretY - caretWidth / 2);
      ctx.lineTo(x + width, caretY + caretWidth / 2);
    } else if (caretY < y) {
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(caretX - caretWidth / 2, y);
      ctx.lineTo(caretX + caretWidth / 2, y);
    } else {
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(caretX - caretWidth / 2, y + height);
      ctx.lineTo(caretX + caretWidth / 2, y + height);
    }
    
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = accentWidth;
    ctx.beginPath();
    
    const inset = accentWidth / 2;
    
    if (caretX < x) {
      ctx.moveTo(x + inset, y + borderRadius);
      ctx.lineTo(x + inset, y + height - borderRadius);
    } else if (caretX > x + width) {
      ctx.moveTo(x + width - inset, y + borderRadius);
      ctx.lineTo(x + width - inset, y + height - borderRadius);
    } else if (caretY < y) {
      ctx.moveTo(x + borderRadius, y + inset);
      ctx.lineTo(x + width - borderRadius, y + inset);
    } else {
      ctx.moveTo(x + borderRadius, y + height - inset);
      ctx.lineTo(x + width - borderRadius, y + height - inset);
    }
    
    ctx.stroke();
    ctx.restore();
  },
};

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
      plugins: [tooltipShadowPlugin, ChartDataLabels],
    };

    this.chart = new Chart(ctx, config);
  }
}
