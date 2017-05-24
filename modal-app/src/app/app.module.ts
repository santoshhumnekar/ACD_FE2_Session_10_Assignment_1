import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AddressOne} from './addressOne';
import { AddressTwo } from './addressTwo';

import {Logger} from './LoggerService';
import { ContactComponent } from './contact/contact.component';
import { AddressWindow} from './AddressModal';

import { routing } from './app.Routes';

@NgModule({
  declarations: [
    AppComponent,
    AddressOne,
    AddressTwo,
    AddressWindow,
    ContactComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent],

  entryComponents: [AddressWindow]
})
export class AppModule { }
