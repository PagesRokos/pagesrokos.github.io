import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withRouterConfig,
  withHashLocation
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withEnabledBlockingInitialNavigation(),
      withRouterConfig({
        onSameUrlNavigation: 'reload'   
      })
    ),
    provideClientHydration(),
    provideAnimations()
  ]
};
