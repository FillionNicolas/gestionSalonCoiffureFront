
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private baseURL = 'http://localhost:9090/prestations'
  constructor(private httpClient: HttpClient) { }
  
  public findAllPrestations(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(prestations: any): Observable<any> {
    return this.httpClient.post(this.baseURL, prestations);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  public update(id: number, prestations: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, prestations);
  }
}
