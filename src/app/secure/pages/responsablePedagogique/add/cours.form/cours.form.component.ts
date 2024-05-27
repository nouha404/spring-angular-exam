import { Component, OnInit } from '@angular/core';
import { RpServiceImplService } from '../../../../../core/services/Impl/rp.service.impl.service';
import { Router } from '@angular/router';
import { CoursCreate, ModuleCreate, ProfCreate, SemestreCreate } from '../../../../../core/models/responsable.liste';
import { EtatCours } from '../../../../../core/models/enums/etat.cours';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cours.form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cours.form.component.html',
  styleUrl: './cours.form.component.css'
})
export class CoursFormComponent implements OnInit{

  constructor(private rpService:RpServiceImplService,private router:Router){}
  errors:any;
  /*coursCreate:CoursCreate={
    nbreHeureGlobal:10,
    professeur:"",
    module:"",
    semestre:"",
  }*/

  coursCreate: CoursCreate = {
    nbreHeureGlobal: 0,
    professeur: { id: 0 },
    module: { id: 0 },
    semestre: { id: 0 }
  }
  semestres: { id: number, libelle: string }[] = [];
  modules: { id: number, libelle: string }[] = [];
  professeurs: { id: number, nomComplet: string }[] = [];

  ngOnInit(): void {
    this.rpService.getSemestres().subscribe(semestres => {
      this.semestres = semestres.results;
    });

    this.rpService.getModules().subscribe(modules => {
      this.modules = modules.results;
    });

    this.rpService.getProfesseurs().subscribe(professeurs => {
      this.professeurs = professeurs.results;
    });

  }

  //balancer mes données
  onSaveFormulaire() {
    /*this.rpService.createCours(this.coursCreate).subscribe({
      next: response => {
        console.log('Cours enregistré avec succès : ', response);
        // Réinitialisez le formulaire après avoir enregistré avec succès
        this.coursCreate = {
          nbreHeureGlobal: 0,
          professeur: '',
          module: '',
          semestre: ''
        };
      },
      error: error => {
        console.error('Erreur lors de l\'enregistrement du cours : ', error);
        // Traitez l'erreur ici, affichez un message d'erreur à l'utilisateur, par exemple
      }
    });*/

    this.rpService.createCours(this.coursCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/responsable/rp/session')
      } else{
        this.errors=data.results;

      }

    },
    error => {
      console.error('Error creating course', error);
      this.errors = error.error;
    });


    }

}
