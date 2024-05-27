import { ClasseCreate, CoursCreate, CoursListe, ModuleCreate, SalleCreate, SemestreCreate } from "../models/responsable.liste";
import {RestResponse} from "../models/rest.response";
import {Observable} from "rxjs";

export interface RpService {
  create(classeCreate:ClasseCreate): Observable<RestResponse<ClasseCreate>>;
  createSalle(salleCreate:SalleCreate): Observable<RestResponse<SalleCreate>>;
  createCours(coursCreate:CoursCreate): Observable<RestResponse<CoursCreate>>;
  createSemestre(semestreCreate:SemestreCreate): Observable<RestResponse<SemestreCreate>>;
  createModule(moduleCreate:ModuleCreate): Observable<RestResponse<ModuleCreate>>;

  getGrades(): Observable<any>;
  specialite(): Observable<any>;


  getSemestres(): Observable<any>;
  getModules(): Observable<any>;
  getProfesseurs(): Observable<any>;
  getSalles(): Observable<any>;

  findById(id: number): Observable<CoursListe>


}
