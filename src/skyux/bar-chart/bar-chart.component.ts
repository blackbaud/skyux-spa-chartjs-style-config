import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  input, viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyThemeService } from '@skyux/theme';

import {
  Chart,
  ChartConfiguration, UpdateMode,
  registerables
} from 'chart.js';

// Register Chart.js components globally
Chart.register(...registerables);

@Component({
  selector: 'sky-bar-chart',
  templateUrl: 'bar-chart.component.html',
  styleUrl: 'bar-chart.component.scss',
  imports: [SkyDropdownModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyBarChartComponent implements AfterViewInit, OnDestroy {
  // #region Dependency Injection
  readonly #destroyRef = inject(DestroyRef);
  readonly #changeDetector = inject(ChangeDetectorRef);
  readonly #themeSvc = inject(SkyThemeService, { optional: true });
  readonly #zone = inject(NgZone);
  // #endregion

  // #region Inputs
  public readonly headingText = input<string | undefined>();
  
  public readonly chartHeight = input.required<number>();

  /**
   * TODO: This isn't the final input model. Using ChartJS directly is a QOL for quick iteration.
   */
  public readonly config = input.required<ChartConfiguration<'bar'>>();

    /**
   * The ARIA label for the box. This sets the box's `aria-label` attribute to provide a text equivalent for screen readers
   * [to support accessibility](https://developer.blackbaud.com/skyux/learn/accessibility).
   * For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).
   */
    public readonly ariaLabel = input<string>('Chart');
  // #endregion

  // #region Outputs
  // #endregion

  // #region View Child(ren)
  public readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  // #endregion

  #chart: Chart<'bar'> | undefined;

  public ngAfterViewInit(): void {
    this.#renderChart();

    /* istanbul ignore else */
    if (this.#themeSvc) {
      this.#themeSvc.settingsChange
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe(() => this.#onThemeChange());
    }
  }

  public ngOnDestroy(): void {
    if (this.#chart) {
      this.#chart.destroy();
      this.#chart = undefined;
    }
  }

  protected onViewDataTable(): void {
    console.log('View data table');
  }

  protected exportToPng(): void {
    if (!this.#chart) {
      return;
    }

    const sourceCanvas = this.canvasRef().nativeElement;

    // Create a temporary canvas with white background
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = sourceCanvas.width;
    tempCanvas.height = sourceCanvas.height;

    const tempContext = tempCanvas.getContext('2d');
    if (!tempContext) {
      return;
    }

    // Fill with white background
    tempContext.fillStyle = '#ffffff';
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw the chart on top of the white background
    tempContext.drawImage(sourceCanvas, 0, 0);

    // Export the temporary canvas
    const imageBase64 = tempCanvas.toDataURL('image/png');
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = imageBase64;
    link.download = 'chart.png';
    link.click();
  }

  // #region Private
  #renderChart(): void {
    if (this.#chart) {
      this.#chart.destroy();
    }

    const canvasContext = this.#getCanvasContext();
    const config = this.#getChartConfig();

    this.#zone.runOutsideAngular(
      () => (this.#chart = new Chart(canvasContext, config)),
    );
  }

  #updateChart(mode?: UpdateMode): void {
    if (this.#chart) {
      this.#zone.runOutsideAngular(() => this.#chart?.update(mode));
    }
  }

  #getCanvasContext(): CanvasRenderingContext2D {
    const canvasEle = this.canvasRef().nativeElement;
    const canvasContext = canvasEle.getContext('2d');

    if (!canvasContext) {
      throw new Error('Cannot create chart without a canvas');
    }

    return canvasContext;
  }

  #getChartConfig(): ChartConfiguration<'bar'> {
    const userConfig = this.config();
    return userConfig;
  }

  #onThemeChange(): void {
    if (this.#chart?.config.options) {
      // See https://www.chartjs.org/docs/latest/developers/updates.html#updating-options

      // 1. If the options are mutated in place, other option properties would be preserved, including those calculated by Chart.js.
      const newOptions = this.#getChartConfig().options;
      Object.assign(this.#chart.config.options, newOptions);

      // 2. If created as a new object, it would be like creating a new chart with the options - old options would be discarded.
      // this.#chart.config.options = this.#getChartConfig().options;

      this.#updateChart();
    }

    this.#changeDetector.markForCheck();
  }
  // #endregion
}
