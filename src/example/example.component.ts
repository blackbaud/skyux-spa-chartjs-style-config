import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyIconModule } from '@skyux/icon';
import { SkyPageModule, SkyRecentLink } from '@skyux/pages';

import { HomePageContentComponent } from './home-page-content.component';
import { SkyThemeSelectorComponent } from './theme-selector/theme-selector.component';

/**
 * @title Home page with blocks layout, using tile dashboard and recently accessed links
 * @docsDemoHidden
 */
@Component({
  selector: 'app-pages-page-home-page-blocks-layout-example',
  templateUrl: './example.component.html',
  styleUrl: 'example.component.scss',
  host: {
    '[style.--playground-controls-height]': 'height + "px"',
  },
  imports: [HomePageContentComponent, RouterModule, SkyIconModule, SkyPageModule, SkyThemeSelectorComponent],
})
export class PagesPageHomePageBlocksLayoutExampleComponent {
  public readonly height = 80;

  protected readonly recentLinks: SkyRecentLink[] = [
    {
      label: 'Gift Management',
      permalink: { url: '' },
      lastAccessed: new Date(2024, 1, 1),
    },
    {
      label: 'Reporting',
      permalink: { url: '' },
      lastAccessed: new Date(2024, 1, 2),
    },
  ];
}
