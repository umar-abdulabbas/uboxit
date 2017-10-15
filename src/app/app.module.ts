import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import { OffersComponent } from './offers/offers.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AppRoutingModule } from './app-routing.module';
//Material Componets Added 

import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdTabsModule, MdGridListModule, MatCardModule } from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerComponent,
    BannerComponent,
    BarMenuComponent,
    OffersComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
