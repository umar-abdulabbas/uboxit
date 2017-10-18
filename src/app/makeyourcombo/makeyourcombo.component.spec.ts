import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeyourcomboComponent } from './makeyourcombo.component';

describe('MakeyourcomboComponent', () => {
  let component: MakeyourcomboComponent;
  let fixture: ComponentFixture<MakeyourcomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeyourcomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeyourcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
