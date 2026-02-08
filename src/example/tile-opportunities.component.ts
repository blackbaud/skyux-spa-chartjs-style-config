import { Component } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyKeyInfoModule } from '@skyux/indicators';
import { Chart, ChartConfiguration, registerables, Plugin } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getSkyuxBarChartConfig, skyuxChartStyles, calculateHorizontalBarChartHeight } from './chartjs-config';
import { SkyBarChartComponent } from '../skyux/bar-chart/bar-chart.component';

Chart.register(...registerables);

interface OpportunityStage {
  stage: string;
  count: number;
  value: number;
}

@Component({
  selector: 'app-tile-opportunities',
  styles: ``,
  templateUrl: './tile-opportunities.component.html',
  imports: [SkyTilesModule, SkyDropdownModule, SkyKeyInfoModule, SkyBarChartComponent],
})
export class TileOpportunitiesComponent {
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

  public chartHeight: number = 0;
  public chartConfig: ChartConfiguration<'bar'> = this.getChartConfiguration();

  protected formatCurrency(value: number): string {
    if (value >= 1000000) {
      return '$' + (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return '$' + (value / 1000).toFixed(1) + 'K';
    }
    return '$' + value.toFixed(0);
  }

  private getChartConfiguration(): ChartConfiguration<'bar'> {
    // Calculate optimal chart height based on all categories (including zero values)
    const numCategories = this.opportunityStages.length; // All stages, including those with zero values
    const numDatasets = 1; // Single dataset for values
    const heightResult = calculateHorizontalBarChartHeight(numCategories, numDatasets);
    this.chartHeight = heightResult.height;

    // Get the base configuration for horizontal bar charts
    const baseConfig = getSkyuxBarChartConfig({
      indexAxis: 'y',
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
            barPercentage: heightResult.barPercentage,
            categoryPercentage: heightResult.categoryPercentage,
          },
        ],
      },
      options: baseConfig,
      plugins: [ChartDataLabels as Plugin<'bar'>],
    };

    return config;
  }
}
