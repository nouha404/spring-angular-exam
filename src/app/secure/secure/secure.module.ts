import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { CoursServiceImpl } from '../../core/services/Impl/cours.service.impl';
import { SessionCoursComponent } from '../pages/responsablePedagogique/session.cours/session.cours.component';

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
    CoursServiceImpl,SessionCoursComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class SecureModule { }
