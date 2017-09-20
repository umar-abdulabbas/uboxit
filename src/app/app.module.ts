import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
//Material Componets Added 

import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdTabsModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //Material Import
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
