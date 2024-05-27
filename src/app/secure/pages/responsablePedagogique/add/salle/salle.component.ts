import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RpServiceImplService } from '../../../../../core/services/Impl/rp.service.impl.service';
import { SalleCreate } from '../../../../../core/models/responsable.liste';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent {
  constructor(
    private rpService:RpServiceImplService,
    private router:Router
  ){}

  errors:any;
  salleCreate:SalleCreate={
    nom:"",
    number:"",
    nbrPlace:100
  }

  onSaveFormulaire() {
    this.rpService.createSalle(this.salleCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/responsable/rp/cours')
      } else{
        this.errors=data.results;
      }
    });

    }

}
