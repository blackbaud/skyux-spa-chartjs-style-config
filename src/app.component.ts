import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SkyAppViewportService } from '@skyux/theme';
import { SkyThemeSelectorComponent } from './example/theme-selector/theme-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div id="controls">
      <div>
        @if (!isHome()) {
          <button
            class="sky-btn sky-btn-primary"
            id="home-btn"
            routerLink="/"
            type="button"
          >
            Go home
          </button>
        }
      </div>
      <sky-theme-selector />
    </div>

    <div id="content">
      <router-outlet />
    </div>
  `,
  styles: [`
    #content {
      overflow-y: auto;
      height: calc(100vh - var(--playground-controls-height));
    }
    
    :host-context(.reset-height) #content {
      height: unset;
    }
    
    #controls {
      position: sticky;
      top: 0;
      z-index: 500;
      display: flex;
      background-color: var(--sky-color-background-container-warning);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      height: var(--playground-controls-height);
    }
    
    #controls>* {
      display: flex;
      align-items: center;
      margin: 5px;
    }
  `],
  host: {
    '[style.--playground-controls-height]': 'height + "px"',
  },
  imports: [RouterModule, SkyThemeSelectorComponent],
})
export class AppComponent {
  readonly #router = inject(Router);
  readonly #viewportService = inject(SkyAppViewportService);

  public readonly height = 80;

  constructor() {
    this.#viewportService.reserveSpace({
      id: 'playground-controls',
      position: 'top',
      size: this.height,
    });
  }

  public isHome(): boolean {
    return this.#router.url === '/';
  }
}
