import { Component } from '@angular/core';
import { SkyTilesModule } from '@skyux/tiles';

@Component({
  selector: 'app-tile-line-chart',
  styles: `
    :host {
      display: block;
    }
  `,
  templateUrl: './tile-line-chart.component.html',
  imports: [SkyTilesModule],
})
export class TileLineChartComponent {}
