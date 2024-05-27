import { Component } from '@angular/core';
import { ModuleCreate } from '../../../../../core/models/responsable.liste';
import { RpServiceImplService } from '../../../../../core/services/Impl/rp.service.impl.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-module',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent {
  constructor(
    private rpService:RpServiceImplService,
    private router:Router
  ){}

  errors:any;
  moduleCreate:ModuleCreate={
    libelle:"",
  }

  onSaveFormulaire() {
    this.rpService.createModule(this.moduleCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/responsable/rp/cours')
      } else{
        this.errors=data.results;
      }
    });

    }

}
