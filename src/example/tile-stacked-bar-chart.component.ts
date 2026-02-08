import { Component } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { SkyDropdownModule } from '@skyux/popovers';
import { ChartConfiguration } from 'chart.js';
import { getSkyuxBarChartConfig, skyuxChartStyles, calculateHorizontalBarChartHeight } from './chartjs-config';
import { SkyBarChartComponent } from '../skyux/bar-chart/bar-chart.component';

@Component({
  selector: 'app-tile-stacked-bar-chart',
  styles: ``,
  templateUrl: './tile-stacked-bar-chart.component.html',
  imports: [SkyTilesModule, SkyDropdownModule, SkyBarChartComponent],
})
export class TileStackedBarChartComponent {
  protected chartHeight: number = 0;
  protected chartConfig: ChartConfiguration<'bar'> = this.getChartConfiguration();

  private getChartConfiguration(): ChartConfiguration<'bar'> {
    // Calculate optimal sizing
    const numCategories = 2; // Oranges, Lemons
    const numDatasets = 2; // Data series 1, Data series 2
    const sizingResult = calculateHorizontalBarChartHeight(numCategories, numDatasets);
    this.chartHeight = sizingResult.height;

    // Get the base configuration for horizontal bar charts with stacked option
    const baseConfig = getSkyuxBarChartConfig({
      indexAxis: 'y',
      scales: {
        x: {
          max: 600,
          stacked: true,
          ticks: {
            stepSize: 100,
          },
          title: {
            display: true,
            text: 'x Axis label',
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'y Axis label',
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
            barPercentage: sizingResult.barPercentage,
            categoryPercentage: sizingResult.categoryPercentage,
          },
          {
            label: 'Data series 2',
            data: [120, 100],
            backgroundColor: seriesColors[1],
            barPercentage: sizingResult.barPercentage,
            categoryPercentage: sizingResult.categoryPercentage,
          },
        ],
      },
      options: baseConfig,
    };

    return config;
  }
}
