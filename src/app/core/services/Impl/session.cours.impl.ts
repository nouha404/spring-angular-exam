import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../environments/environment.development";
import { SessionCoursList } from "../../models/responsable.liste";
import { RestResponse } from "../../models/rest.response";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SessionCoursService } from "../session-cours.service";


@Injectable({
  providedIn: 'root'
})
export class SessionCoursServiceImpl implements SessionCoursService{

  constructor(private http:HttpClient) {
  }

  private API_URL = `${environment.API_URL}/rp/sessions`

  findAll(page:number): Observable<RestResponse<SessionCoursList[]>> {
    return  this.http.get<RestResponse<SessionCoursList[]>>(`${this.API_URL}?page=${page}`);
  }
}
