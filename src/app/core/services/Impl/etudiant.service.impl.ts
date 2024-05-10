import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { EtudiantService } from "../etudiant.service";
import { Observable } from "rxjs";
import { EtudiantList } from "../../models/responsable.liste";
import { RestResponse } from "../../models/rest.response";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EtudiantServiceImpl implements EtudiantService {
  constructor(private http:HttpClient) {
  }
  //http://localhost:9998/api/rp/session/4/etudiant?libelle=M2IAGE
  private API_URL = `${environment.API_URL}/rp/session`

  findAll(page: number, sessionId: number,libelleClasse:string): Observable<RestResponse<EtudiantList[]>> {
    return this.http.get<RestResponse<EtudiantList[]>>(`${this.API_URL}/${sessionId}/etudiant?page=${page}`);
  }
  // debug

  /*findAll(page: number, sessionId: number, libelleClasse: string): Observable<RestResponse<EtudiantList[]>> {
    const url = `${this.API_URL}/${sessionId}/etudiant?page=${page}`;

    console.log("URL de la requête:", url);

    return this.http.get<RestResponse<EtudiantList[]>>(url)
      .pipe(
        tap((response: RestResponse<EtudiantList[]>) => {
          console.log("Données reçues:", response);
        })
      );
  }*/

}
