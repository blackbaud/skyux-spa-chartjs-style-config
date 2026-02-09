import { Component } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { getSkyuxBarChartConfig, skyuxChartStyles, calculateHorizontalBarChartHeight } from './chartjs-config';
import { SkyBarChartComponent } from '../skyux/bar-chart/bar-chart.component';

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
