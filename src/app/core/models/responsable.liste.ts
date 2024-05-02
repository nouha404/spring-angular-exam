import { EtatCours } from "./enums/etat.cours";

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
