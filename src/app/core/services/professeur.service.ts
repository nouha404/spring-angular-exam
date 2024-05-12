import { Observable } from "rxjs/internal/Observable";
import { ProfCreate } from "../models/responsable.liste";
import { RestResponse } from "../models/rest.response";

export interface ProfesseurService {
  create(profCreate:ProfCreate): Observable<RestResponse<ProfCreate>>;
}
