import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SemestreCreate } from '../../../../../core/models/responsable.liste';
import { RpServiceImplService } from '../../../../../core/services/Impl/rp.service.impl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semestre',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './semestre.component.html',
  styleUrl: './semestre.component.css'
})
export class SemestreComponent {
  constructor(
    private rpService:RpServiceImplService,
    private router:Router
  ){}
  errors:any;
  semestreCreate:SemestreCreate={
    libelle:"",
  }

  onSaveFormulaire() {
    this.rpService.createSemestre(this.semestreCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/responsable/rp/cours')
      } else{
        this.errors=data.results;
      }
    });

    }

}
