import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL = 'http://localhost:9004/microservice-utilisateur/utilisateurs'
  constructor(private httpClient: HttpClient) { }
  
  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(user: any): Observable<any> {
    return this.httpClient.post(this.baseURL, user);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  public update(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, user);
  }
}
