import { Component } from '@angular/core';
import { SkyTileDashboardConfig, SkyTilesModule } from '@skyux/tiles';

import { TileLineChartComponent } from './tile-line-chart.component';
import { TileMyActionsComponent } from './tile-my-actions.component';
import { TileOpportunitiesComponent } from './tile-opportunities.component';
import { TileProjectBudgetsComponent } from './tile-project-budgets.component';
import { TileProspectManagementComponent } from './tile-prospect-management.component';
import { TileProspectManagement2Component } from './tile-prospect-management-2.component';
import { TileProspectManagement3Component } from './tile-prospect-management-3.component';
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
        id: 'tile-prospect-management-2',
        componentType: TileProspectManagement2Component,
      },
      {
        id: 'tile-prospect-management',
        componentType: TileProspectManagementComponent,
      },
      {
        id: 'tile-prospect-management-3',
        componentType: TileProspectManagement3Component,
      },
      {
        id: 'tile-line-chart',
        componentType: TileLineChartComponent,
      },
      {
        id: 'tile-opportunities',
        componentType: TileOpportunitiesComponent,
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
            id: 'tile-prospect-management-2',
            isCollapsed: false,
          },
          {
            id: 'tile-prospect-management',
            isCollapsed: false,
          },
          {
            id: 'tile-prospect-management-3',
            isCollapsed: false,
          },
          {
            id: 'tile-line-chart',
            isCollapsed: false,
          },
          {
            id: 'tile-opportunities',
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
            {
              id: 'tile-prospect-management-2',
              isCollapsed: false,
            },
            {
              id: 'tile-prospect-management',
              isCollapsed: false,
            },
            {
              id: 'tile-prospect-management-3',
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
            {
              id: 'tile-opportunities',
              isCollapsed: false,
            },
          ],
        },
      ],
    },
  };
}
