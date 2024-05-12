import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RpServiceImplService } from '../../../../../core/services/Impl/rp.service.impl.service';
import { ClasseCreate } from '../../../../../core/models/responsable.liste';

@Component({
  selector: 'app-form-nouvelle-classe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-nouvelle-classe.component.html',
  styleUrl: './form-nouvelle-classe.component.css'
})
export class FormNouvelleClasseComponent {
  constructor(private rpService:RpServiceImplService,private router:Router){}
  errors:any;
  classeCreate:ClasseCreate={
    libelle:"", // chaine vide au demarage le formulaire ne contient rient
  }
  //balancer mes données
  onSaveFormulaire() {
    this.rpService.create(this.classeCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/responsable/rp/session')
      } else{
        this.errors=data.results;
      }
    });
    
    }

}
