import { Component } from '@angular/core';
import { SkyTileDashboardConfig, SkyTilesModule } from '@skyux/tiles';

import { TileLineChartComponent } from './tile-line-chart.component';
import { TileMyActionsComponent } from './tile-my-actions.component';
import { TileProjectBudgetsComponent } from './tile-project-budgets.component';
import { TileUpdatesComponent } from './tile-updates.component';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  imports: [SkyTilesModule],
})
export class HomePageContentComponent {
  protected dashboardConfig: SkyTileDashboardConfig = {
    tiles: [
      {
        id: 'tile-updates',
        componentType: TileUpdatesComponent,
      },
      {
        id: 'tile-my-actions',
        componentType: TileMyActionsComponent,
      },
      {
        id: 'tile-project-budgets',
        componentType: TileProjectBudgetsComponent,
      },
      {
        id: 'tile-line-chart',
        componentType: TileLineChartComponent,
      },
    ],
    layout: {
      singleColumn: {
        tiles: [
          {
            id: 'tile-updates',
            isCollapsed: false,
          },
          {
            id: 'tile-my-actions',
            isCollapsed: false,
          },
          {
            id: 'tile-project-budgets',
            isCollapsed: false,
          },
          {
            id: 'tile-line-chart',
            isCollapsed: false,
          },
        ],
      },
      multiColumn: [
        {
          tiles: [
            {
              id: 'tile-updates',
              isCollapsed: false,
            },
            {
              id: 'tile-project-budgets',
              isCollapsed: false,
            },
          ],
        },
        {
          tiles: [
            {
              id: 'tile-my-actions',
              isCollapsed: false,
            },
            {
              id: 'tile-line-chart',
              isCollapsed: false,
            },
          ],
        },
      ],
    },
  };
}
