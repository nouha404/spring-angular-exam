import { Injectable } from '@angular/core';
import { ClasseCreate, CoursCreate, CoursListe, ModuleCreate, SalleCreate, SemestreCreate } from '../../models/responsable.liste';
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
  private API_URL_GRADE = `${environment.API_URL}/rp/grades`
  private API_URL_SPEC = `${environment.API_URL}/rp/spec`
  private API_URL_SALLE = `${environment.API_URL}/rp/salles`
  private API_URL_SEMESTRES = `${environment.API_URL}/rp/semestres`
  private API_URL_MODULES = `${environment.API_URL}/rp/modules`
  private API_URL_COURS = `${environment.API_URL}/rp/cours`
  private API_URL_PROFESSEURS = `${environment.API_URL}/rp/professeurs`


  create(classeCreate: ClasseCreate): Observable<RestResponse<ClasseCreate>> {
    return  this.http.post<RestResponse<ClasseCreate>>(`${this.API_URL}`,classeCreate);
  }

  createSalle(salleCreate: SalleCreate): Observable<RestResponse<SalleCreate>> {
    return  this.http.post<RestResponse<SalleCreate>>(`${this.API_URL_SALLE}`,salleCreate);
  }
  createSemestre(semestreCreate: SemestreCreate): Observable<RestResponse<SemestreCreate>> {
    return  this.http.post<RestResponse<SemestreCreate>>(`${this.API_URL_SEMESTRES}`,semestreCreate);
  }

  createModule(moduleCreate: ModuleCreate): Observable<RestResponse<ModuleCreate>> {
    return  this.http.post<RestResponse<SemestreCreate>>(`${this.API_URL_MODULES}`,moduleCreate);

  }
  createCours(coursCreate: CoursCreate): Observable<RestResponse<CoursCreate>> {
    return  this.http.post<RestResponse<CoursCreate>>(`${this.API_URL_COURS}`,coursCreate);
  }


  getGrades(): Observable<any> {
    return  this.http.get<any>(`${this.API_URL_GRADE}`);
  }
  specialite(): Observable<any> {
    return  this.http.get<any>(`${this.API_URL_SPEC}`);
  }



  getSemestres(): Observable<any> {
    return this.http.get<any>(this.API_URL_SEMESTRES);
  }
  getSalles(): Observable<any> {
    return this.http.get<any>(this.API_URL_SALLE);
  }


  getModules(): Observable<any> {
    return this.http.get<any>(this.API_URL_MODULES);
  }


  getProfesseurs(): Observable<any> {
    return this.http.get<any>(this.API_URL_PROFESSEURS);
  }

  findById(id: number): Observable<CoursListe> {
  return this.http.get<any>(`${this.API_URL_COURS}?id=${id}`);


  }
  /**findById(id: number): Observable<CoursListe> {
    return this.http.get<RestResponse<CoursListe>>(`${this.API_URL_COURS}?id=${id}`).pipe(
      map(response => response.results[0]) // Assuming the response contains an array of results
    );
  } */



}
