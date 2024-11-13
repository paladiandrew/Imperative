import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMeetingsComponent } from './club-meetings.component';

describe('ClubMeetingsComponent', () => {
  let component: ClubMeetingsComponent;
  let fixture: ComponentFixture<ClubMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
