import { provideHttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SkyHelpService } from '@skyux/core';
import { provideInitialTheme } from '@skyux/theme';
import { provideRouter } from '@angular/router';
import { PagesPageHomePageBlocksLayoutExampleComponent } from './example/example.component';

import { ExampleHelpService } from './help.service';

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

bootstrapApplication(PagesPageHomePageBlocksLayoutExampleComponent, {
  providers: [
    provideAnimations(),
    provideInitialTheme('modern'),
    provideHttpClient(),
    provideExampleHelpService(),
    provideRouter([]),
  ],
}).catch((err) => console.error(err));
