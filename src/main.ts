import { provideHttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SkyHelpService } from '@skyux/core';
import { provideInitialTheme } from '@skyux/theme';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BarChartSizingComponent } from './example/bar-chart-sizing/bar-chart-sizing.component';
import { PagesPageHomePageBlocksLayoutExampleComponent } from './example/example.component';

import { ExampleHelpService } from './help.service';

const routes: Routes = [
  { path: '', component: PagesPageHomePageBlocksLayoutExampleComponent },
  { path: 'bar-chart-sizing', component: BarChartSizingComponent },
  { path: '**', redirectTo: '' },
];

/**
 * The help service must be provided for components that set the
 * `helpKey` attribute. For more information, review the global help
 * documentation.
 * @see https://developer.blackbaud.com/skyux/learn/develop/global-help
 */
function provideExampleHelpService(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: SkyHelpService, useClass: ExampleHelpService },
  ]);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideInitialTheme('modern'),
    provideHttpClient(),
    provideExampleHelpService(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
