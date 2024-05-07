import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { CoursServiceImpl } from '../../core/services/Impl/cours.service.impl';
import { SessionCoursComponent } from '../pages/responsablePedagogique/session.cours/session.cours.component';
import { EtudiantComponent } from '../pages/responsablePedagogique/etudiant/etudiant.component';
import { EtudiantServiceImpl } from '../../core/services/Impl/etudiant.service.impl';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ],
  providers:[
    CoursServiceImpl,SessionCoursComponent,EtudiantComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class SecureModule { }
