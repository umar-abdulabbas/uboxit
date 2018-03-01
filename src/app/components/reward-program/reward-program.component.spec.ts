import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardProgramComponent } from './reward-program.component';

describe('RewardProgramComponent', () => {
  let component: RewardProgramComponent;
  let fixture: ComponentFixture<RewardProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
