import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorSliderComponent } from './ambassador-slider.component';

describe('AmbassadorSliderComponent', () => {
  let component: AmbassadorSliderComponent;
  let fixture: ComponentFixture<AmbassadorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbassadorSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbassadorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
