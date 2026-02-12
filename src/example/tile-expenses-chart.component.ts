import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';
import { ChartConfiguration } from 'chart.js';
import {
  getSkyuxBarChartConfig,
  skyuxChartStyles,
  mergeChartConfig,
  getVerticalBarChartSizing,
  getVerticalBarChartHeight,
} from './chartjs-config';
import { SkyBarChartComponent } from '../skyux/bar-chart/bar-chart.component';

@Component({
  selector: 'app-tile-expenses-chart',
  styles: ``,
  templateUrl: './tile-expenses-chart.component.html',
  imports: [SkyTilesModule, SkyBarChartComponent],
})
export class TileExpensesChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container') containerRef!: ElementRef;

  protected chartHeight: number = 300;
  protected chartConfig: ChartConfiguration<'bar'> = this.getChartConfiguration();
  private containerWidth: number = 800;
  private resizeObserver: ResizeObserver | null = null;

  private getChartConfiguration(): ChartConfiguration<'bar'> {
    // Get base config for vertical bar chart
    const baseConfig = getSkyuxBarChartConfig({
      indexAxis: 'x',
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: 'Quarter',
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Expenses ($)',
          },
        },
      },
    });

    const seriesColors = skyuxChartStyles.series;
    const dataPointCount = 6;
    const seriesCount = 3;

    // Create base configuration
    const baseChartConfig: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        datasets: [
          {
            label: 'Personnel',
            data: [45000, 48000, 52000, 50000, 55000, 58000],
            backgroundColor: seriesColors[0],
          },
          {
            label: 'Operations',
            data: [28000, 30000, 32000, 31000, 33000, 35000],
            backgroundColor: seriesColors[1],
          },
          {
            label: 'Travel',
            data: [15000, 18000, 16000, 20000, 19000, 22000],
            backgroundColor: seriesColors[2],
          },
        ],
      },
      options: baseConfig as any,
    };

    // Get data range and apply vertical sizing
    const dataRange = this.getDataRangeFromConfig(baseChartConfig);
    const sizing = getVerticalBarChartSizing(
      dataPointCount,
      this.containerWidth,
      seriesCount,
      dataRange
    );

    // Merge configurations properly
    const config = mergeChartConfig({
      ...baseChartConfig,
      options: {
        ...baseChartConfig.options,
        ...sizing,
      },
    }) as ChartConfiguration<'bar'>;

    // Calculate and store height
    this.chartHeight = getVerticalBarChartHeight(
      dataPointCount,
      this.containerWidth,
      seriesCount,
      dataRange
    );

    return config;
  }

  private getDataRangeFromConfig(config?: ChartConfiguration<'bar'>): { min: number; max: number } {
    const cfg = config || this.chartConfig;
    const datasets = cfg.data?.datasets || [];
    let min = Number.MAX_VALUE;
    let max = 0;

    datasets.forEach((dataset) => {
      const data = dataset.data as number[];
      data.forEach((value) => {
        if (typeof value === 'number') {
          min = Math.min(min, value);
          max = Math.max(max, value);
        }
      });
    });

    return {
      min: min === Number.MAX_VALUE ? 0 : min,
      max: max === 0 ? 1 : max,
    };
  }

  ngAfterViewInit(): void {
    this.setupResizeObserver();
  }

  private setupResizeObserver(): void {
    if (!this.containerRef) return;

    this.resizeObserver = new ResizeObserver(() => {
      const newWidth = this.containerRef.nativeElement.offsetWidth;
      if (newWidth !== this.containerWidth) {
        this.containerWidth = newWidth;
        this.updateChartHeight();
      }
    });

    this.resizeObserver.observe(this.containerRef.nativeElement);
  }

  private updateChartHeight(): void {
    const dataPointCount = 6;
    const seriesCount = 3;
    const dataRange = this.getDataRangeFromConfig();

    this.chartHeight = getVerticalBarChartHeight(
      dataPointCount,
      this.containerWidth,
      seriesCount,
      dataRange
    );
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}
