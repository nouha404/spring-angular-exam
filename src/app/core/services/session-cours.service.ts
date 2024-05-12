import { EtudiantList, SessionCoursList } from "../models/responsable.liste";
import { RestResponse } from "../models/rest.response";
import {Observable} from "rxjs";

export interface SessionCoursService {
  findAll(page:number): Observable<RestResponse<SessionCoursList[]>>;
  //http://localhost:9998/api/rp/session/2/cancel
  cancelSession(sessionId: number): Observable<void>;

}
