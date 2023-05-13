import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User1homeComponent } from './user1home.component';

describe('User1homeComponent', () => {
  let component: User1homeComponent;
  let fixture: ComponentFixture<User1homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User1homeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
