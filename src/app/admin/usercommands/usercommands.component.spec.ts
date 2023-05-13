import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercommandsComponent } from './usercommands.component';

describe('UsercommandsComponent', () => {
  let component: UsercommandsComponent;
  let fixture: ComponentFixture<UsercommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
