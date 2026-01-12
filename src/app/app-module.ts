import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Servers } from './servers/servers';
import { WarningAlert } from './warning-alert/warning-alert';
import { SuccessAlert } from './success-alert/success-alert';
import { Server } from './server/server';

@NgModule({
  declarations: [
    App,
    Servers,
    WarningAlert,
    SuccessAlert,
    Server
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
