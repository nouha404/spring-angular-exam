import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { ResponsableServiceImpl } from '../../core/services/Impl/responsable.service.impl';
import { LayoutComponent } from '../layout/layout.component';

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
    ResponsableServiceImpl
  ],
  exports:[
    HeaderComponent
  ]
})
export class SecureModule { }
