import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfesseurServiceImpl } from '../../../../../core/services/Impl/professeur.service.impl';
import { Router } from '@angular/router';
import { ProfCreate } from '../../../../../core/models/responsable.liste';
import { GradeServiceImpl } from '../../../../../core/services/Impl/grade.service.impl';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professeur',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './professeur.component.html',
  styleUrl: './professeur.component.css'
})
export class ProfesseurComponent implements OnInit {

  constructor(
    private professeurService:ProfesseurServiceImpl,
    private gradeService:GradeServiceImpl,
    private router:Router
  ){}
  ngOnInit(): void {
    this.gradeService.getGrades().subscribe(data => {
      this.grades = data.results;
    });

    this.gradeService.specialite().subscribe(data => {
      this.specialites = data.results;
    });
  }
  errors:any;
  profCreate:ProfCreate={
    nom:"", // chaine vide au demarage le formulaire ne contient rient
    prenom:"",
    grade:"",
    specialite:"",
  }
  // les enumerations
  grades: string[] = [];
  specialites: string[] = [];

  //balancer mes données
  onSaveFormulaire() {
    this.professeurService.create(this.profCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/responsable/rp/cours')
      } else{
        this.errors=data.results;
      }
    });

    }

}
