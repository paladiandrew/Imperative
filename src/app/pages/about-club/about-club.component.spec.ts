import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutClubComponent } from './about-club.component';

describe('AboutClubComponent', () => {
  let component: AboutClubComponent;
  let fixture: ComponentFixture<AboutClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
