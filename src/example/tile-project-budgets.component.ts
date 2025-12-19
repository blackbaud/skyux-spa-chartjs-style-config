import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig, skyuxChartStyles } from './chartjs-config';

Chart.register(...registerables);

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
            barThickness: 12,
          },
          {
            label: 'Actuals',
            data: [project.revenueActuals, project.expensesActuals],
            backgroundColor: seriesColors[1] || '#6d3c96', // Fallback to category 2 color (purple-800)
            barThickness: 12,
          },
        ],
      },
      options: baseConfig,
      plugins: [{
        id: 'tooltipShadow',
        beforeDraw: (chart: any) => {
          const ctx = chart.ctx;
          const tooltip = chart.tooltip;
          
          if (tooltip && tooltip.opacity > 0) {
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 2;
            ctx.restore();
          }
        }
      }],
    };

    return new Chart(ctx, config);
  }
}
