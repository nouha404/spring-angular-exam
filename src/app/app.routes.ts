import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"responsable",
    loadChildren:()=> import("./secure/secure/secure.module").then(module=>module.SecureModule),  //charger les modules
    //canMatch:[()=>inject(AuthentificateService).isAuthentificated] //ne doit etre charger que si on est connecte
  },

  {
    path: '',
    redirectTo:'responsable/rp',
    pathMatch : "full"
  },
];

