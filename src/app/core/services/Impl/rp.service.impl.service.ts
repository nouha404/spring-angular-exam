import { Injectable } from '@angular/core';
import { ClasseCreate } from '../../models/responsable.liste';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { RestResponse } from '../../models/rest.response';
import { HttpClient } from '@angular/common/http';
import { RpService } from '../rp.service';

@Injectable({
  providedIn: 'root'
})
export class RpServiceImplService implements RpService {
  constructor(private http:HttpClient) {
  }
  private API_URL = `${environment.API_URL}/rp/classes`

  create(classeCreate: ClasseCreate): Observable<RestResponse<ClasseCreate>> {
    return  this.http.post<RestResponse<ClasseCreate>>(`${this.API_URL}`,classeCreate);
  }
}
