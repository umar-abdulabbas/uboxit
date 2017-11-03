import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartCounterComponent } from './add-to-cart-counter.component';

describe('AddToCartCounterComponent', () => {
  let component: AddToCartCounterComponent;
  let fixture: ComponentFixture<AddToCartCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
