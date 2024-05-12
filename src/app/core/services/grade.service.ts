import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface GradeService {
  getGrades(): Observable<any>;
  specialite(): Observable<any>;
}

