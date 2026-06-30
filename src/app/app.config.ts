import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localEs  from '@angular/common/locales/es'
import localEn  from '@angular/common/locales/en'
import localFr  from '@angular/common/locales/fr'

import { routes } from './app.routes';

registerLocaleData(localEs, 'es')
registerLocaleData(localEn, 'en')
registerLocaleData(localFr, 'fr')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'en'
    }
  ]
};
