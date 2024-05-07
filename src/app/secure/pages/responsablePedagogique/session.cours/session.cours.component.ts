import { Component, OnInit } from '@angular/core';
import { SessionCoursServiceImpl } from '../../../../core/services/Impl/session.cours.impl';
import { SessionCoursList } from '../../../../core/models/responsable.liste';
import { RestResponse } from '../../../../core/models/rest.response';
import { PaginationModel } from '../../../../core/models/pagination.model';
import { PaginationComponent } from "../../../../core/components/pagination/pagination.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
    selector: 'app-session.cours',
    standalone: true,
    templateUrl: './session.cours.component.html',
    styleUrl: './session.cours.component.css',
    imports: [RouterModule,CommonModule, RouterLink,RouterLinkActive,PaginationComponent]
})
export class SessionCoursComponent implements OnInit {
  constructor(private sessionCoursService:SessionCoursServiceImpl){}

  response?: RestResponse<SessionCoursList[]>
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

  refresh(page:number=0){
    this.sessionCoursService.findAll(page).subscribe(
      data=>{
        this.response=data;
        this.dataPagination.pages=data.pages!
        this.dataPagination.currentPage=data.currentPage!

      }

    );
  }

}
