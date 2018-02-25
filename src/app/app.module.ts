import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HamburgerComponent } from './components/shared/header/hamburger/hamburger.component';
import { FooterComponent } from './components/shared/footer/footer.component';
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
import { AdvertisementComponent } from './components/shared/advertisement/advertisement.component';
// Directives

import { StickyHeaderDirective } from './directives/sticky-header.directive';
import { ModelCloseOverlayDirective } from './directives/modelCloseonOverlay.directive';
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
import { CartService } from './components/shoppingcart/services/cart.service';
import { PersonalComponent } from './components/personal/personal.component';
import { UserExpStyleService } from './shared/UI/globalUI.service';
import { PaymentComponent } from './components/payment/payment.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './shared/services/storage-service';
import { LoginService } from './components/personal/services/login-service';
import { FormsModule } from '@angular/forms';
import { LocationComponent } from './components/shared/location/location.component';
import { FinishComponent } from './components/shared/finish/finish.component';
import { PaymentService } from './components/payment/services/payment-service';
import { AppInitializerService } from './shared/app-initializer.service';
import { AddressComponent } from './components/shoppingcart/address/address.component';
import { MyinfoComponent } from './components/shoppingcart/myinfo/myinfo.component';
import { AuthGuard } from './guards/auth.guard';

// Payment


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerComponent,
    BarMenuComponent,
    OffersComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ShoppingcartComponent,
    DeliverTimeComponent,
    OrderedItemsComponent,
    MakeyourcomboComponent,
    StickyHeaderDirective,
    ModelCloseOverlayDirective,
    MakeyourcomboOfferComponent,
    AddToCartCounterComponent,
    FaqsComponent,
    ErrorTemplateComponent,
    PersonalComponent,
    PaymentComponent,
    AdvertisementComponent,
    LocationComponent,
    FinishComponent,
    AddressComponent,
    MyinfoComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false } ),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    // Material Import
    NgxCarouselModule,
    LocalStorageModule.withConfig({
      prefix: 'uboxit',
      storageType: 'localStorage'
    })
  ],
  providers: [
    AuthGuard,
    AppInitializerService,
    OfferService,
    CartService,
    StorageService,
    CounterService,
    LoginService,
    PaymentService,
    MakeYourOwnComboService,
    UserExpStyleService,
    OfferErrorMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
