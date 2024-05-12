import { ClasseCreate } from "../models/responsable.liste";
import {RestResponse} from "../models/rest.response";
import {Observable} from "rxjs";

export interface RpService {
  create(classeCreate:ClasseCreate): Observable<RestResponse<ClasseCreate>>;
}
