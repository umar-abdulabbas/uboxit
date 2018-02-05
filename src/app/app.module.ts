import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HamburgerComponent } from './components/shared/header/hamburger/hamburger.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BarMenuComponent } from './components/shared/bar-menu/bar-menu.component';
import { OffersComponent } from './components/offers/offers.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { AppRoutingModule } from './app-routing.module';
import { DeliverTimeComponent } from './components/deliver-time/deliver-time.component';
import { OrderedItemsComponent } from './components/shoppingcart/ordered-items/ordered-items.component';
import { MakeyourcomboComponent } from './components/offers/makeyourcombo/makeyourcombo.component';
import { OfferService } from './components/offers/services/offer.service';
import { AdvertisementComponent } from './components/shared/advertisement/advertisement.Component';
// Directives

import { stickyHeaderDirective } from './directives/sticky-header.directive';
import { modelCloseOverlay } from './directives/modelCloseonOverlay.directive';
// Material Componets Added
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxCarouselModule } from 'ngx-carousel';
import { MakeyourcomboOfferComponent } from './components/offers/makeyourcombo-offer/makeyourcombo-offer.component';
import { AddToCartCounterComponent } from './components/shared/add-to-cart-counter/add-to-cart-counter.component';

// Shared Services

import { CounterService } from './shared/services/InteractionCounter/counter';
import { MakeYourOwnComboService } from './shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { FaqsComponent } from './components/shared/faqs/faqs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './core/interceptors/header-interceptor';
import { OfferErrorMessageService } from './shared/offers/offer-error-message.service';
// In Memory Data Service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/offers/in-memory-data.service';
import { ErrorTemplateComponent } from './shared/error-template/error-template.component';
import { AppInitializerService, AppLoader } from './shared/app-initializer.service';
import { CartService } from './components/shoppingcart/services/cart.service';
import { PersonalComponent } from './components/personal/personal.component';
import { UserExpStyleService } from './shared/UI/globalUI.service';
import { DeliveryaddressComponent } from './components/deliveryaddress/deliveryaddress.component';
import { PaymentComponent } from './components/payment/payment.component';

// Payment


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
    PersonalComponent,
    DeliveryaddressComponent,
    PaymentComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   //  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    // Material Import
    NgxCarouselModule
  ],
  providers: [
    OfferService,
    CartService,
    CounterService,
    MakeYourOwnComboService,
    AppInitializerService,
    UserExpStyleService,
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
