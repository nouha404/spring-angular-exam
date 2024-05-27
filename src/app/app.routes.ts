import { Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';

export const routes: Routes = [
  {
    path:"responsable",
    loadChildren:()=> import("./secure/secure/secure.module").then(module=>module.SecureModule),  //charger les modules
    //canMatch:[()=>inject(AuthentificateService).isAuthentificated] //ne doit etre charger que si on est connecte
  },
  {
    path:"login",
    component:LoginComponent
  },

  {
    path: '',
    redirectTo:'login', //responsable/rp/cours'
    pathMatch : "full"
  },
];

