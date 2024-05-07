import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { EtudiantService } from "../etudiant.service";
import { Observable } from "rxjs";
import { EtudiantList } from "../../models/responsable.liste";
import { RestResponse } from "../../models/rest.response";
import { Injectable } from "@angular/core";


export class EtudiantServiceImpl implements EtudiantService {
  constructor(private http:HttpClient) {
  }
  private API_URL = `${environment.API_URL}/rp/session`

  findAll(page: number, sessionId: number,libelleClasse:string): Observable<RestResponse<EtudiantList[]>> {
    //http://localhost:9998/api/rp/session/4/etudiant?libelle=L1GLRS
    return this.http.get<RestResponse<EtudiantList[]>>(`${this.API_URL}/${sessionId}/etudiant?page=${page}&libelle=${libelleClasse}`);
  }

}
