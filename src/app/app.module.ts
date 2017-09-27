import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
//Material Componets Added 

import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdTabsModule, MdGridListModule, MatCardModule } from '@angular/material';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import { OffersComponent } from './offers/offers.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerComponent,
    BannerComponent,
    BarMenuComponent,
    OffersComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //Material Import
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
