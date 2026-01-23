import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyIconModule } from '@skyux/icon';
import { SkyPageModule } from '@skyux/pages';

import { HomePageContentComponent } from './home-page-content.component';
import { SkyThemeSelectorComponent } from './theme-selector/theme-selector.component';

/**
 * @title Home page with blocks layout, using tile dashboard and recently accessed links
 * @docsDemoHidden
 */
@Component({
  selector: 'app-pages-page-home-page-blocks-layout-example',
  templateUrl: './example.component.html',
  imports: [HomePageContentComponent, RouterModule, SkyIconModule, SkyPageModule, SkyThemeSelectorComponent],
})
export class PagesPageHomePageBlocksLayoutExampleComponent {}
