import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBoxComponent } from './health-box.component';

describe('HealthBoxComponent', () => {
  let component: HealthBoxComponent;
  let fixture: ComponentFixture<HealthBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
