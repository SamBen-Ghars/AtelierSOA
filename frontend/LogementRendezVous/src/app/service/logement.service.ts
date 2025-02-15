import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Logement } from '../Models/logement';

@Injectable({
  providedIn: 'root'
})
export class LogementService {


  private apiUrl = 'http://localhost:7774/LogementRendezVous_Etudiant_war_exploded/api/logement';

  constructor(private http: HttpClient) {}

  addLogement(logement: any) {
    return this.http.post(`${this.apiUrl}/add`, logement);
  }


  getLogement(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  // Supprimer un logement
  deleteLogement(reference: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${reference}`);
  }

  // Modifier un logement
  updateLogement(reference: number, logement: any): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/update/${reference}`, logement);
  }


}
