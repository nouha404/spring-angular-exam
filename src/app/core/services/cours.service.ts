
import { CoursListe } from "../models/responsable.liste";
import { RestResponse } from "../models/rest.response";
import {Observable} from "rxjs";

export interface CoursService {
  findAll(page:number,keyword:string): Observable<RestResponse<CoursListe[]>>;
}
