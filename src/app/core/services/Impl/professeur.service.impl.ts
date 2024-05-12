import { Observable } from "rxjs";
import { ProfCreate } from "../../models/responsable.liste";
import { RestResponse } from "../../models/rest.response";
import { ProfesseurService } from "../professeur.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurServiceImpl  implements ProfesseurService{

  constructor(private http:HttpClient) {
  }
  private API_URL = `${environment.API_URL}/rp/professeurs`

  create(profCreate: ProfCreate): Observable<RestResponse<ProfCreate>> {
    return  this.http.post<RestResponse<ProfCreate>>(`${this.API_URL}`,profCreate);
  }




}
