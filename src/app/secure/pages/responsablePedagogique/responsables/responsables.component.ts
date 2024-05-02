import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResponsableServiceImpl } from '../../../../core/services/Impl/responsable.service.impl';
import { CoursListe, ResponsableListe } from '../../../../core/models/responsable.liste';
import { RestResponse } from '../../../../core/models/rest.response';
import { PaginationModel } from '../../../../core/models/pagination.model';
import { PaginationComponent } from '../../../../core/components/pagination/pagination.component';

@Component({
  selector: 'app-responsables',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive,PaginationComponent],
  templateUrl: './responsables.component.html',
  styleUrl: './responsables.component.css'
})
export class ResponsablesComponent implements OnInit {
  constructor(private responsableService:ResponsableServiceImpl){}

  response?: RestResponse<CoursListe[]>
  dataPagination:PaginationModel = {
    pages:[],
    currentPage:0
  };


  ngOnInit(): void {
    this.refresh();
  }


  paginate(page:number){
    this.refresh(page);

  }
   refresh(page:number=0,keyword=''){
    this.responsableService.findAll(page,keyword).subscribe(

      data=>{
        this.response=data;

        this.dataPagination.pages=data.pages!
        this.dataPagination.currentPage=data.currentPage!

      }



    );





  }


}
