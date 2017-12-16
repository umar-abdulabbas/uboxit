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
import { DeliverTimeComponent } from './deliver-time/deliver-time.component';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { MakeyourcomboComponent } from './makeyourcombo/makeyourcombo.component';
import { OfferService } from './shared/offers/offer.service';
//Directives

import { stickyHeaderDirective } from './shared/directives/sticky-header.directive';
import { modelCloseOverlay } from './shared/directives/modelCloseonOverlay.directive';
//Material Componets Added

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatTabsModule, MatGridListModule, MatCardModule, MatExpansionModule, MatStepperModule} from '@angular/material';
import { NgxCarouselModule } from 'ngx-carousel';
import { MakeyourcomboOfferComponent } from './makeyourcombo-offer/makeyourcombo-offer.component';
import { AddToCartCounterComponent } from './shared/add-to-cart-counter/add-to-cart-counter.component';

//Shared Services





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
    ShoppingcartComponent,
    DeliverTimeComponent,
    OrderedItemsComponent,
    MakeyourcomboComponent,
    stickyHeaderDirective,
    modelCloseOverlay,
    MakeyourcomboOfferComponent,
    AddToCartCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    //Material Import
    NgxCarouselModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatStepperModule

  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
