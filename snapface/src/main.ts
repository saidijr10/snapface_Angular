import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr";
import * as ar from "@angular/common/locales/ar";

registerLocaleData(fr.default);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
