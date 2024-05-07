import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { EtudiantService } from "../etudiant.service";
import { Observable } from "rxjs";
import { EtudiantList } from "../../models/responsable.liste";
import { RestResponse } from "../../models/rest.response";

export class EtudiantServiceImpl implements EtudiantService {
  constructor(private http:HttpClient) {
  }
  private API_URL = `${environment.API_URL}/rp/session`

  findAll(page: number, sessionId: number,libelleClasse:string): Observable<RestResponse<EtudiantList[]>> {
     return  this.http.get<RestResponse<EtudiantList[]>>(`${this.API_URL}?page=${page}&sessionId=${sessionId}&libelle=${libelleClasse}`);
  }

}
