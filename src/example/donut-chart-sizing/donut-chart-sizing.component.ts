import { Component } from '@angular/core';
import { SkyPageModule } from '@skyux/pages';
import { SkyTileDashboardConfig, SkyTilesModule } from '@skyux/tiles';
import { TileProspectManagementComponent } from './tile-prospect-management.component';
import { TileProspectManagement2Component } from './tile-prospect-management-2.component';
import { TileProspectManagement3Component } from './tile-prospect-management-3.component';

@Component({
  selector: 'app-donut-chart-sizing',
  standalone: true,
  templateUrl: './donut-chart-sizing.component.html',
  imports: [
    SkyPageModule,
    SkyTilesModule,
    TileProspectManagementComponent,
    TileProspectManagement2Component,
    TileProspectManagement3Component,
  ],
})
export class DonutChartSizingComponent {
  protected dashboardConfig: SkyTileDashboardConfig = {
    tiles: [
      {
        id: 'tile-prospect-management',
        componentType: TileProspectManagementComponent,
      },
      {
        id: 'tile-prospect-management-2',
        componentType: TileProspectManagement2Component,
      },
      {
        id: 'tile-prospect-management-3',
        componentType: TileProspectManagement3Component,
      },
    ],
    layout: {
      singleColumn: {
        tiles: [
          {
            id: 'tile-prospect-management',
            isCollapsed: false,
          },
          {
            id: 'tile-prospect-management-2',
            isCollapsed: false,
          },
          {
            id: 'tile-prospect-management-3',
            isCollapsed: false,
          },
        ],
      },
      multiColumn: [
        {
          tiles: [
            {
              id: 'tile-prospect-management',
              isCollapsed: false,
            },
          ],
        },
        {
          tiles: [
            {
              id: 'tile-prospect-management-2',
              isCollapsed: false,
            },
          ],
        },
        {
          tiles: [
            {
              id: 'tile-prospect-management-3',
              isCollapsed: false,
            },
          ],
        },
      ],
    },
  };
}
