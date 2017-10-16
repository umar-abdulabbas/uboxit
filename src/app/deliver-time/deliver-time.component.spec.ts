import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverTimeComponent } from './deliver-time.component';

describe('DeliverTimeComponent', () => {
  let component: DeliverTimeComponent;
  let fixture: ComponentFixture<DeliverTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
