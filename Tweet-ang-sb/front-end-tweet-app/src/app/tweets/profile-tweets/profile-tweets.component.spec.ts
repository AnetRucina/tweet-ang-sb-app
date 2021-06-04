import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTweetsComponent } from './profile-tweets.component';

describe('ProfileTweetsComponent', () => {
  let component: ProfileTweetsComponent;
  let fixture: ComponentFixture<ProfileTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
