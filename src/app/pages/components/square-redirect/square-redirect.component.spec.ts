import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareRedirectComponent } from './square-redirect.component';

describe('SquareRedirectComponent', () => {
  let component: SquareRedirectComponent;
  let fixture: ComponentFixture<SquareRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
