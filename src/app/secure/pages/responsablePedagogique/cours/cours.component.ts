import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { PaginationComponent } from '../../../../core/components/pagination/pagination.component';
import { PaginationModel } from '../../../../core/models/pagination.model';
import { CoursListe } from '../../../../core/models/responsable.liste';
import { RestResponse } from '../../../../core/models/rest.response';
import { CoursServiceImpl } from '../../../../core/services/Impl/cours.service.impl';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [RouterModule,CommonModule, RouterLink,RouterLinkActive,PaginationComponent],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit  {
  constructor(private coursService:CoursServiceImpl, private router:Router){}

  response?: RestResponse<CoursListe[]>
  dataPagination:PaginationModel = {
    pages:[],
    currentPage:0
  };
  //selectedCours?: CoursListe;


  redirectToForm() {
    this.router.navigateByUrl("formCours")
  }

  ngOnInit(): void {
    this.refresh();
  }


  paginate(page:number){
    this.refresh(page);

  }
   refresh(page:number=0,keyword=''){
      this.coursService.findAll(page,keyword).subscribe(
        data=>{
          this.response=data;

          this.dataPagination.pages=data.pages!
          this.dataPagination.currentPage=data.currentPage!

        }


      );
    }



   /* navigateToPlanificationPage(coursId: number) {
      this.router.navigateByUrl(`rp/planification/${coursId}`);
    }

    openPlanificationForm(cours: CoursListe) {
      console.log('Ouvrir le formulaire de planification pour le cours : ', cours);
      this.navigateToPlanificationPage(cours.id);
    }*/

}
