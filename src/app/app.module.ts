import { BrowserModule, Title } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

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
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
// Directives

import { StickyHeaderDirective } from './directives/sticky-header.directive';
import { ModelCloseOverlayDirective } from './directives/modelCloseonOverlay.directive';
// Material Componets Added
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material';
import {MatSortModule} from '@angular/material';

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
import { ErrorInterceptor } from './core/interceptors/error-interceptor';
import { AlertInvoker } from './core/services/alert-invoker.service';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RewardProgramComponent } from './components/reward-program/reward-program.component';
import { ChoicesComponent } from './components/offers/choices/choices.component';
import { ToastsComponent } from './components/shared/toasts/toasts.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { GenericErrorHandler } from './core/errors/generic-error-handler';
import { ErrorsAggregator } from './core/errors/errors-aggregator';
import { PrivacyComponent } from './components/shared/privacy/privacy.component';
import { TermsComponent } from './components/shared/terms/terms.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import { AdminGuard } from './guards/AdminGuard';

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
    MyinfoComponent,
    MyprofileComponent,
    RewardProgramComponent,
    ChoicesComponent,
    ToastsComponent,
    ErrorComponent,
    PrivacyComponent,
    TermsComponent,
    OrderListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCarouselModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false } ),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    // Material Import
    LocalStorageModule.withConfig({
      prefix: 'uboxit',
      storageType: 'localStorage'
    })
  ],
  providers: [
    Title,
    AuthGuard,
    AdminGuard,
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
    AlertInvoker,
    ErrorsAggregator,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GenericErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
