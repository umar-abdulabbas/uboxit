import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeyourcomboOfferComponent } from './makeyourcombo-offer.component';

describe('MakeyourcomboOfferComponent', () => {
  let component: MakeyourcomboOfferComponent;
  let fixture: ComponentFixture<MakeyourcomboOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeyourcomboOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeyourcomboOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
