import { Component } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig, skyuxChartStyles, calculateHorizontalBarChartHeight } from './chartjs-config';
import { SkyBarChartComponent } from '../skyux/bar-chart/bar-chart.component';

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
  styles: ``,
  templateUrl: './tile-project-budgets.component.html',
  imports: [SkyTilesModule, SkyDropdownModule, SkyBarChartComponent],
})
export class TileProjectBudgetsComponent {
  protected projects: ProjectData[] = [
    {
      name: 'Project Alpha',
      revenueBudget: 120_000,
      revenueActuals: 115_000,
      expensesBudget: 85_000,
      expensesActuals: 78_000,
    },
    {
      name: 'Project Beta',
      revenueBudget: 95_000,
      revenueActuals: 102_000,
      expensesBudget: 70_000,
      expensesActuals: 75_000,
    },
    {
      name: 'Project Gamma',
      revenueBudget: 80_000,
      revenueActuals: 73_000,
      expensesBudget: 55_000,
      expensesActuals: 52_000,
    },
  ];
  protected readonly chartConfigs: ChartConfiguration<'bar'>[] = this.createChartConfigs();
  protected readonly chartHeights: number[] = this.projects.map(() => calculateHorizontalBarChartHeight(2, 2).height);

  //#region Private
  private createChartConfigs(): ChartConfiguration<'bar'>[] {
    const chartConfigs = this.projects.map(project => this.#getChartConfig(project));
    return chartConfigs;
  }

  #getChartConfig(project: ProjectData): ChartConfiguration<'bar'> {
    // Calculate optimal sizing settings
    const numCategories = 2; // Revenue and Expenses
    const numDatasets = 2; // Budget and Actuals
    const sizingResult = calculateHorizontalBarChartHeight(numCategories, numDatasets);
    
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
        y: {
          grid: {
            display: false, // Remove y-axis gridlines
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
            barPercentage: sizingResult.barPercentage,
            categoryPercentage: sizingResult.categoryPercentage,
          },
          {
            label: 'Actuals',
            data: [project.revenueActuals, project.expensesActuals],
            backgroundColor: seriesColors[1] || '#6d3c96', // Fallback to category 2 color (purple-800)
            barPercentage: sizingResult.barPercentage,
            categoryPercentage: sizingResult.categoryPercentage,
          },
        ],
      },
      options: baseConfig,
    };

    return config;
  }
  // #endregion
}
