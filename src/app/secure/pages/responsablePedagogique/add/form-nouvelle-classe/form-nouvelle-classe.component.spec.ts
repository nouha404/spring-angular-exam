import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNouvelleClasseComponent } from './form-nouvelle-classe.component';

describe('FormNouvelleClasseComponent', () => {
  let component: FormNouvelleClasseComponent;
  let fixture: ComponentFixture<FormNouvelleClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNouvelleClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNouvelleClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
