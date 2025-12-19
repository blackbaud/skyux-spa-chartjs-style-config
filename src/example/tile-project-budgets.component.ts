import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
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

interface ProjectData {
  name: string;
  revenueBudget: number;
  revenueActuals: number;
  expensesBudget: number;
  expensesActuals: number;
}

@Component({
  selector: 'app-tile-project-budgets',
  styles: `
    :host {
      display: block;
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .chart-container {
      position: relative;
      height: 180px;
      width: 100%;
    }
  `,
  templateUrl: './tile-project-budgets.component.html',
  imports: [SkyTilesModule, SkyDropdownModule],
})
export class TileProjectBudgetsComponent implements AfterViewInit {
  @ViewChildren('projectChart') projectCharts!: QueryList<ElementRef<HTMLCanvasElement>>;
  private charts: Chart<'bar'>[] = [];

  protected projects: ProjectData[] = [
    { 
      name: 'Project Alpha', 
      revenueBudget: 120000, 
      revenueActuals: 115000,
      expensesBudget: 85000,
      expensesActuals: 78000
    },
    { 
      name: 'Project Beta', 
      revenueBudget: 95000, 
      revenueActuals: 102000,
      expensesBudget: 70000,
      expensesActuals: 75000
    },
    { 
      name: 'Project Gamma', 
      revenueBudget: 80000, 
      revenueActuals: 73000,
      expensesBudget: 55000,
      expensesActuals: 52000
    },
  ];

  ngAfterViewInit(): void {
    this.createCharts();
  }

  protected onViewDataTable(projectName: string): void {
    console.log('View data table for:', projectName);
    // TODO: Implement data table view
  }

  private createCharts(): void {
    this.projectCharts.forEach((chartRef, index) => {
      const ctx = chartRef.nativeElement.getContext('2d');
      if (!ctx) return;

      const project = this.projects[index];
      const chart = this.createChart(ctx, project);
      this.charts.push(chart);
    });
  }

  private createChart(ctx: CanvasRenderingContext2D, project: ProjectData): Chart<'bar'> {
    // Get the base configuration for horizontal bar charts
    const baseConfig = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: (value: string | number) => {
              return '$' + (Number(value) / 1000).toFixed(0) + 'K';
            },
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.dataset.label || '';
              const value = context.parsed.x;
              return `${label}: $${value?.toLocaleString() ?? '0'}`;
            },
          },
        },
      },
    });

    // Get SKY UX visualization category colors for the series
    const seriesColors = skyuxChartStyles.series;
    console.log('Chart colors for', project.name, ':', seriesColors);
    console.log('Grid color from config:', (baseConfig.scales as any)?.x?.grid?.color);
    console.log('Axis color from config:', (baseConfig.scales as any)?.x?.border?.color);
    console.log('Tooltip backgroundColor:', (baseConfig.plugins as any)?.tooltip?.backgroundColor);
    console.log('Tooltip titleColor:', (baseConfig.plugins as any)?.tooltip?.titleColor);
    console.log('Tooltip bodyColor:', (baseConfig.plugins as any)?.tooltip?.bodyColor);

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['Revenue', 'Expenses'],
        datasets: [
          {
            label: 'Budget',
            data: [project.revenueBudget, project.expensesBudget],
            backgroundColor: seriesColors[0] || '#06a39e', // Fallback to category 1 color (teal-500)
          },
          {
            label: 'Actuals',
            data: [project.revenueActuals, project.expensesActuals],
            backgroundColor: seriesColors[1] || '#6d3c96', // Fallback to category 2 color (purple-800)
          },
        ],
      },
      options: baseConfig,
      plugins: [tooltipShadowPlugin],
    };

    return new Chart(ctx, config);
  }
}
