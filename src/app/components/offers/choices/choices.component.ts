import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ErrorsAggregator } from '../../../core/errors/errors-aggregator';
import { CartService } from '../../shoppingcart/services/cart.service';
import { Combo, DietType, Item, Offer } from '../../../core/domain/offer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '../../../core/domain/cart';
import { OfferService } from '../services/offer.service';
import { AlertInvoker } from '../../../core/services/alert-invoker.service';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
@Component({
  selector: 'app-choices',
  templateUrl: './choices_new.component.html',
  styleUrls: ['./choices.component.scss', '../offers.component.scss']
})
export class ChoicesComponent implements OnInit {

  DietType = DietType;

  public showMobile: boolean;
  offer: Offer;
  items: Item[];
  itemsToDisplay: Item[];
  uboxitMenu = false;
  active = true;
  body;
  activeyes = true;
  isActivedetails = true;
  isActiveingredients = false;
  selectedOffer: Combo;
  availableTypes: string[] = [];
  selectedType: string;

  loadMenu = new BehaviorSubject(false);

  constructor(private offerService: OfferService, private cartService: CartService,
              private errorsAggregator: ErrorsAggregator, private alertInvoker: AlertInvoker,
              private titleService: Title, private uistyleservice: UserExpStyleService) {

  }

  ngOnInit() {
    this.titleService.setTitle('Choose various items-choices of different types like Starters, Gravies, Main course, Dessert, Soft Drinks and Snacks');
    this.showMobile = this.uistyleservice.getDeviceInformation();
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.offer = this.offerService.offer;
    // only if not has data, make http call
    if (!this.offer) {
      this.offerService.getOffers().subscribe(res => {
        this.initialize();
      });
    } else {
      this.initialize();
    }
    const error = this.errorsAggregator.pop();
    if (!!error) {
      this.alertInvoker.invokeNotification(error);
    }
  }

  initialize(): void {
    this.loadMenu.next(true);
    this.offer = this.offerService.offer;
    this.items = this.offer.items;
    this.getAvailableTypes();
    this.itemsToDisplay = this.items;
    this.cartService.initializeCart(this.offer.offerId);
  }

  filterOffers(typeToFilter: string) {
    this.selectedType = typeToFilter;
    this.itemsToDisplay = this.items.filter(offer => offer.category === typeToFilter);
  }

  onSelect(offer: Combo): void {
    console.log(offer);
    this.selectedOffer = offer;
    this.body.classList.add('body-overflow');
  }

  close(): void {
    this.active = false;
    this.body.classList.remove('body-overflow');
  }

  opendetails(): void {
    this.activeyes = true;
    this.isActivedetails = true;
    this.isActiveingredients = false;
  }

  openingredients(): void {
    this.activeyes = false;
    this.isActivedetails = false;
    this.isActiveingredients = true;
  }

  modelclose(event): void {
    // This Function is used to close the Model Window on clicking outstide of the screen.
    this.active = event;
    this.body.classList.remove('body-overflow');
  }

  addProductToCart(productId: string, count: number) {
    this.cartService.addItemToCart(productId, count);
    this.offerService.updateCountForItem(productId, count); // just for UI - will not be used for processing cart
    if (!!this.cartService.cartId) {
      const request: Cart = { items: [ { id: productId, count: count } ] };
      this.cartService.updateCart(this.cartService.cartId, request);
    }
  }

  private getAvailableTypes() {
    this.items.forEach(offer => {
      if (!this.availableTypes.some(type => type === offer.category)) {
        this.availableTypes.push(offer.category);
      }
    });
    console.log(this.availableTypes);
  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 250) {
      this.uboxitMenu = true;
    } else if (this.uboxitMenu && scrolValue < 250) {
      this.uboxitMenu = false;
    }
  }

}
