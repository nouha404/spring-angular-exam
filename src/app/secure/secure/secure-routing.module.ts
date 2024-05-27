import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoursComponent } from '../pages/responsablePedagogique/cours/cours.component';
import { SessionCoursComponent } from '../pages/responsablePedagogique/session.cours/session.cours.component';
import { EtudiantComponent } from '../pages/responsablePedagogique/etudiant/etudiant.component';
import { FormNouvelleClasseComponent } from '../pages/responsablePedagogique/add/form-nouvelle-classe/form-nouvelle-classe.component';
import { ProfesseurComponent } from '../pages/responsablePedagogique/add/professeur/professeur.component';
import { SalleComponent } from '../pages/responsablePedagogique/add/salle/salle.component';
import { SemestreComponent } from '../pages/responsablePedagogique/add/semestre/semestre.component';
import { ModuleComponent } from '../pages/responsablePedagogique/add/module/module.component';
import { CoursFormComponent } from '../pages/responsablePedagogique/add/cours.form/cours.form.component';
import { PlanificationCoursComponent } from '../pages/responsablePedagogique/cours/planification.cours/planification.cours.component';
const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,
    children: [
      {
        path:"rp",
          children: [
                {
                  path:"cours",
                  component:CoursComponent,
                },
                {
                  path:"session",
                  component:SessionCoursComponent,

                },
                {
                    path:"session/:id",
                    component:EtudiantComponent
                },
                {
                  path:"form",
                  component:FormNouvelleClasseComponent
                },
                {
                  path:"formProf",
                  component:ProfesseurComponent
                },
                {
                  path:"formSalle",
                  component:SalleComponent
                },
                {
                  path:"formSemestre",
                  component:SemestreComponent
                },
                {
                  path:"formModule",
                  component:ModuleComponent
                },
                {
                  path:"formCours",
                  component:CoursFormComponent
                },
                {
                  path: 'cours/planification/:id',
                  component: PlanificationCoursComponent
                }


          ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
