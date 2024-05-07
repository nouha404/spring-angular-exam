import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { CoursListe, SessionCoursList } from "../../models/responsable.liste";
import { RestResponse } from "../../models/rest.response";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import { CoursService } from "../cours.service";

//oublie pas
@Injectable({
  providedIn: 'root'
})

export class CoursServiceImpl implements CoursService {
  constructor(private http:HttpClient) {
  }
  private API_URL = `${environment.API_URL}/rp/cours`

  findAll(page:number,keyword:string="EN_COURS"): Observable<RestResponse<CoursListe[]>> {

    return  this.http.get<RestResponse<CoursListe[]>>(`${this.API_URL}?page=${page}&etat=${keyword}`);
  }
}
