import { Component, Injector, OnInit } from '@angular/core';
import { EtudiantServiceImpl } from '../../../../core/services/Impl/etudiant.service.impl';
import { EtudiantList } from '../../../../core/models/responsable.liste';
import { RestResponse } from '../../../../core/models/rest.response';
import { PaginationModel } from '../../../../core/models/pagination.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { PaginationComponent } from '../../../../core/components/pagination/pagination.component';


@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [RouterModule,CommonModule,RouterLink,RouterLinkActive,PaginationComponent],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit  {
  constructor(
    private etudiantService:EtudiantServiceImpl,
    private route: ActivatedRoute
  ){}


  response?: RestResponse<EtudiantList[]>
  sessionId: any;
  dataPagination:PaginationModel = {
    pages:[],
    currentPage:0
  };

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get("id");
    this.refresh();



  }
  refresh(page:number=0,libelleClasse:string=""){
    this.etudiantService.findAll(page,this.sessionId,libelleClasse).subscribe(
      data=>{
        this.response=data;

        this.dataPagination.pages=data.pages!
        this.dataPagination.currentPage=data.currentPage!

      }

    );
  }

  paginate(page:number,libelleClasse:string){
    this.refresh(page,libelleClasse);

  }






}
