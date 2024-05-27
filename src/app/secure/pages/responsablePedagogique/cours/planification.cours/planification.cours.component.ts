import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoursListe } from '../../../../../core/models/responsable.liste';
import { RestResponse } from '../../../../../core/models/rest.response';
import { Router } from '@angular/router';
import { CoursServiceImpl } from '../../../../../core/services/Impl/cours.service.impl';
import { RpServiceImplService } from '../../../../../core/services/Impl/rp.service.impl.service';
import { TypeSession } from '../../../../../core/models/enums/type.session';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-planification.cours',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './planification.cours.component.html',
  styleUrl: './planification.cours.component.css'
})
export class PlanificationCoursComponent implements OnInit {
showSalleSelect: any;

onSubmit() {
throw new Error('Method not implemented.');
}
  @Input() courseId!: number; // L'identifiant du cours sur lequel vous avez cliqué

  constructor(
    private coursService:CoursServiceImpl, private router:Router,
    private rpService:RpServiceImplService,
    private formBuilder : FormBuilder,

  ){}

  cours?: CoursListe | undefined
  typeSessionOptions = Object.values(TypeSession);
  salleOptions: { id: number, libelle: string }[] = [];


  form = this.formBuilder.group({
    sessionForm:this.formBuilder.group({
      id:new FormControl(),
      date: ['', Validators.required],
      heureDebut: ['', Validators.required],
      heureFin: ['', Validators.required],
      typeSession: [TypeSession.PRESENTIEL, Validators.required],
      sessionCoursClasses: [[], Validators.required],
      salle: ['']

    }),
  })



  ngOnInit(): void {
    if (this.courseId) {
      this.refresh(this.courseId);
    }

    this.rpService.getSalles().subscribe(data => {
      this.salleOptions = data;
    });
    /**this.rpService.getClasses().subscribe(data => {
      this.classeOptions = data;
    }); */

  }


   refresh(courseId:number){
    this.rpService.findById(courseId).subscribe(
      data => {
        this.cours = data;
        console.log(data);
      }
    );
    }
    onTypeSessionChange(value: TypeSession): void {
      this.showSalleSelect = value === TypeSession.PRESENTIEL;
      if (!this.showSalleSelect) {
        this.form.get('salle')?.reset();
      }
    }
    /**onTypeSessionChange(value: TypeSession): void {
    this.showSalleSelect = value === TypeSession.PRESENTIEL;
    if (!this.showSalleSelect) {
      this.form.get('salle')?.reset();
    }
  } */


}
