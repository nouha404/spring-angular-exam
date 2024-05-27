import { EtatCours } from "./enums/etat.cours";
import { ENiveau, EtatSession, Specialiter } from "./enums/etat.session";
import { TypeSession } from "./enums/type.session";

export interface ResponsableListe {
}

export interface CoursListe {
  id: number,
  nbreHeureGlobal: number,
  etatCours: EtatCours,
  semestre: string,
  module: string,
  moduleId: number,
  nombreHeurePlanifier: number,
  heuresEffectuees: string,
  heuresRestantes: number,
  professeur: string
}

export interface SessionCoursList {
  id: number,
  date: string,
  heureDebut: string,
  heureFin: string,
  typeSession: TypeSession,
  etatSession: EtatSession,
  cours: string,
  salle: number,
  nombreHeurePlanifier: number,
  professeurId: number

}

export interface EtudiantList {
  id: number,
  nomComplet: string,
  matricule: string,
  classe: string
}

export interface ClasseCreate {
  id?: number,
  libelle: string,
}


export interface ProfCreate {
  id?: number,
  nom:string,
  prenom:string,
  specialite: Specialiter|string;
  grade: ENiveau|string,

}

export interface SalleCreate {
  id?: number,
  nom:string,
  number:string,
  nbrPlace:number;

}
export interface SemestreCreate {
  id?: number,
  libelle:string

}
export interface ModuleCreate {
  id?: number,
  libelle:string

}

/*export interface CoursCreate {
  id?: number,
  nbreHeureGlobal: number,
  professeurId: number, // Changement du type de string à number
  moduleId: number, // Changement du type de string à number
  semestreId: number, // Changement du type de string à number

}*/

export interface CoursCreate {
  nbreHeureGlobal: number;
  professeur: { id: number };
  module: { id: number };
  semestre: { id: number };
}



/*export interface CoursCreate {
  id?:number,
  nbreHeureGlobal:number,
  professeur:string,
  module:string,
  semestre:string,

}*/
