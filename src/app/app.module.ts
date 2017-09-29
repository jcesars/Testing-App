import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoSection} from './Header/header';
import {ComponenteArea} from './Central/Central';
import {CredencialComp} from './Credencial/credentials';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoSection,
    ComponenteArea,
    CredencialComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
