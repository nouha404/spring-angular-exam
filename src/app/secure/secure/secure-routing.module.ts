import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ResponsablesComponent } from '../pages/responsablePedagogique/responsables/responsables.component';
const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,
    children: [
      {
        path:"rp",
          children: [
                {
                  path:"",
                  component:ResponsablesComponent,
                }
          ]
      },
      {
        path:"rp",
        component:ResponsablesComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
