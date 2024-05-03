import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoursComponent } from '../pages/responsablePedagogique/cours/cours.component';
import { SessionCoursComponent } from '../pages/responsablePedagogique/session.cours/session.cours.component';
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
                }
          ]
      },
      {
        path:"rp",
        component:CoursComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
