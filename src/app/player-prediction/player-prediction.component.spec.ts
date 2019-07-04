import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPredictionComponent } from './player-prediction.component';

describe('PlayerPredictionComponent', () => {
  let component: PlayerPredictionComponent;
  let fixture: ComponentFixture<PlayerPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
