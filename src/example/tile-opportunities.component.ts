import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getSkyuxBarChartConfig, skyuxChartStyles } from './chartjs-config';

Chart.register(...registerables);

// Plugin to add box shadow and accent border to tooltips (matches SKY UX popover style)
const tooltipShadowPlugin = {
  id: 'tooltipShadow',
  beforeTooltipDraw: (chart: any) => {
    const tooltip = chart.tooltip;
    if (!tooltip || tooltip.opacity === 0) return;

    const ctx = chart.ctx;
    const shadow = skyuxChartStyles.tooltipShadow;
    
    // Get tooltip position and dimensions
    const { x, y, width, height } = tooltip;
    const borderRadius = 6;
    
    ctx.save();
    
    // Set shadow properties
    ctx.shadowColor = shadow.color;
    ctx.shadowBlur = shadow.blur;
    ctx.shadowOffsetX = shadow.offsetX;
    ctx.shadowOffsetY = shadow.offsetY;
    
    // Draw the main tooltip background with shadow
    // This will be underneath the Chart.js tooltip content
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
    
    // Get tooltip position and dimensions
    const { x, y, width, height, caretX, caretY } = tooltip;
    const borderRadius = 6;
    
    ctx.save();
    
    // Draw colored caret (20px wide x 8px tall)
    const caretWidth = 20;
    const caretHeight = 8;
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    
    if (caretX < x) {
      // Caret on left side (pointing left)
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(x, caretY - caretWidth / 2);
      ctx.lineTo(x, caretY + caretWidth / 2);
    } else if (caretX > x + width) {
      // Caret on right side (pointing right)
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(x + width, caretY - caretWidth / 2);
      ctx.lineTo(x + width, caretY + caretWidth / 2);
    } else if (caretY < y) {
      // Caret on top (pointing up)
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(caretX - caretWidth / 2, y);
      ctx.lineTo(caretX + caretWidth / 2, y);
    } else {
      // Caret on bottom (pointing down)
      ctx.moveTo(caretX, caretY);
      ctx.lineTo(caretX - caretWidth / 2, y + height);
      ctx.lineTo(caretX + caretWidth / 2, y + height);
    }
    
    ctx.closePath();
    ctx.fill();
    
    // Draw accent border as a straight line on the inside, only on the side with the caret
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = accentWidth;
    ctx.beginPath();
    
    const inset = accentWidth / 2;
    
    if (caretX < x) {
      // Caret on left - draw vertical line on left side
      ctx.moveTo(x + inset, y + borderRadius);
      ctx.lineTo(x + inset, y + height - borderRadius);
    } else if (caretX > x + width) {
      // Caret on right - draw vertical line on right side
      ctx.moveTo(x + width - inset, y + borderRadius);
      ctx.lineTo(x + width - inset, y + height - borderRadius);
    } else if (caretY < y) {
      // Caret on top - draw horizontal line on top side
      ctx.moveTo(x + borderRadius, y + inset);
      ctx.lineTo(x + width - borderRadius, y + inset);
    } else {
      // Caret on bottom - draw horizontal line on bottom side
      ctx.moveTo(x + borderRadius, y + height - inset);
      ctx.lineTo(x + width - borderRadius, y + height - inset);
    }
    
    ctx.stroke();
    ctx.restore();
  },
};

interface OpportunityStage {
  stage: string;
  count: number;
  value: number;
}

@Component({
  selector: 'app-tile-opportunities',
  styles: `
    :host {
      display: block;
    }
    .key-metrics {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
    .metric {
      text-align: left;
    }
    .metric-value {
      font-size: 20px;
      font-weight: 600;
      color: #212327;
      margin: 0;
    }
    .metric-label {
      font-size: 14px;
      color: #686c73;
      margin: 0;
    }
    .chart-container {
      position: relative;
      height: 400px;
      width: 100%;
    }
  `,
  templateUrl: './tile-opportunities.component.html',
  imports: [SkyTilesModule, SkyDropdownModule],
})
export class TileOpportunitiesComponent implements AfterViewInit {
  @ViewChild('opportunityChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart<'bar'>;

  protected keyMetrics = {
    ask: 1500000,
    funded: 160500,
    expected: 1100000
  };

  protected opportunityStages: OpportunityStage[] = [
    { stage: 'Closed', count: 0, value: 0 },
    { stage: 'Cultivation', count: 5, value: 750000 },
    { stage: 'Follow-Up', count: 0, value: 0 },
    { stage: 'Identification', count: 1, value: 150000 },
    { stage: 'On hold', count: 1, value: 100000 },
    { stage: 'Proposal', count: 2, value: 250000 },
    { stage: 'Solicitation Visit', count: 0, value: 0 },
    { stage: 'Stewardship', count: 1, value: 120000 },
    { stage: 'Strategy', count: 0, value: 0 },
    { stage: 'No status', count: 3, value: 350000 },
  ];

  ngAfterViewInit(): void {
    this.createChart();
  }

  protected onViewDataTable(): void {
    console.log('View data table for opportunities');
    // TODO: Implement data table view
  }

  protected formatCurrency(value: number): string {
    if (value >= 1000000) {
      return '$' + (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return '$' + (value / 1000).toFixed(1) + 'K';
    }
    return '$' + value.toFixed(0);
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    // Get the base configuration for horizontal bar charts
    const baseConfig = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: (value: string | number) => {
              const numValue = Number(value);
              if (numValue >= 1000000) {
                return '$' + (numValue / 1000000).toFixed(1) + 'M';
              } else if (numValue >= 1000) {
                return '$' + (numValue / 1000).toFixed(0) + 'K';
              }
              return '$' + numValue.toFixed(0);
            },
          },
        },
        y: {
          grid: {
            display: false, // Remove y-axis gridlines (vertical lines in horizontal chart)
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide legend since we only have one dataset
        },
        tooltip: {
          callbacks: {
            title: (context: any) => {
              const index = context[0].dataIndex;
              const stage = this.opportunityStages[index];
              return `${stage.stage} (${stage.count})`;
            },
            label: (context: any) => {
              const value = context.parsed.x;
              return `Value: $${value?.toLocaleString() ?? '0'}`;
            },
          },
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#212327',
          font: {
            size: 11,
            family: 'Blackbaud Sans, Arial, sans-serif',
            weight: 400,
          },
          formatter: (value: number) => {
            if (value === 0) return '';
            if (value >= 1000000) {
              return '$' + (value / 1000000).toFixed(1) + 'M';
            } else if (value >= 1000) {
              return '$' + (value / 1000).toFixed(0) + 'K';
            }
            return '$' + value.toFixed(0);
          },
        },
      },
    });

    // Get SKY UX visualization category colors for the series
    const seriesColors = skyuxChartStyles.series;

    // Prepare data with labels including counts
    const labels = this.opportunityStages.map(
      (stage) => `${stage.stage} (${stage.count})`
    );
    const data = this.opportunityStages.map((stage) => stage.value);
    
    // Use only the first category color for all bars (these are totals, not categories)
    const backgroundColor = seriesColors[0] || '#06a39e';

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Opportunity Value',
            data: data,
            backgroundColor: backgroundColor,
          },
        ],
      },
      options: baseConfig,
      plugins: [tooltipShadowPlugin, ChartDataLabels],
    };

    this.chart = new Chart(ctx, config);
  }
}
