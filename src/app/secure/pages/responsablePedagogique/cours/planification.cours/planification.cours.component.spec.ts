import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationCoursComponent } from './planification.cours.component';

describe('PlanificationCoursComponent', () => {
  let component: PlanificationCoursComponent;
  let fixture: ComponentFixture<PlanificationCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificationCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
