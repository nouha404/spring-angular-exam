import { Observable } from "rxjs";
import { GradeService } from "../grade.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GradeServiceImpl implements GradeService {

  constructor(private http:HttpClient) {
  }

  private API_URL = `${environment.API_URL}/rp/grades`
  private API_URL_SPEC = `${environment.API_URL}/rp/spec`


  getGrades(): Observable<any> {
    return  this.http.get<any>(`${this.API_URL}`);
  }
  specialite(): Observable<any> {
    return  this.http.get<any>(`${this.API_URL_SPEC}`);
  }
}
