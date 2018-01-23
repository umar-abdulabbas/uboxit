import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import {MatExpansionModule} from '@angular/material/expansion';

import { NgxCarouselModule } from 'ngx-carousel';
import { MakeyourcomboOfferComponent } from './makeyourcombo-offer/makeyourcombo-offer.component';
import { AddToCartCounterComponent } from './shared/add-to-cart-counter/add-to-cart-counter.component';

//Shared Services

import { CounterService } from './shared/services/InteractionCounter/counter';
import { MakeYourOwnComboService } from './shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { FaqsComponent } from './faqs/faqs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './shared/header-interceptor';
import { OfferErrorMessageService } from './shared/offers/offer-error-message.service';
//In Memory Data Service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/offers/in-memory-data.service';
import { ErrorTemplateComponent } from './shared/error-template/error-template.component';
import { AppInitializerService, AppLoader } from './shared/app-initializer.service';
import { CartService } from './shared/offers/cart.service';


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
    AddToCartCounterComponent,
    FaqsComponent,
    ErrorTemplateComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    //Material Import
    NgxCarouselModule,


  ],
  providers: [
    OfferService,
    CartService,
    CounterService,
    MakeYourOwnComboService,
    AppInitializerService,
    OfferErrorMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: AppLoader,
      deps: [AppInitializerService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
