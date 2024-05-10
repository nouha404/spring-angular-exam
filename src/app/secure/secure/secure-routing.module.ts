import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoursComponent } from '../pages/responsablePedagogique/cours/cours.component';
import { SessionCoursComponent } from '../pages/responsablePedagogique/session.cours/session.cours.component';
import { EtudiantComponent } from '../pages/responsablePedagogique/etudiant/etudiant.component';
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
