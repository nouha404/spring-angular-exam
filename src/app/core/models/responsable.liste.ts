import { EtatCours } from "./enums/etat.cours";
import { EtatSession } from "./enums/etat.session";
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

