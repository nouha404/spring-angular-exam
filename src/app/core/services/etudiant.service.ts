import { Observable } from "rxjs";
import { EtudiantList } from "../models/responsable.liste";
import { RestResponse } from "../models/rest.response";

export interface EtudiantService {
  findAll(page:number,sessionId:number,libelleClasse:string): Observable<RestResponse<EtudiantList[]>>;
}
