import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private baseURL = 'http://localhost:9094/prestations'
  constructor(private httpClient: HttpClient) { }

  public findAllPrestation(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOnePrestation(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public savePrestation(prestation: any): Observable<any> {
    return this.httpClient.post(this.baseURL, prestation);
  }
  public deletePrestation(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id); 
  }
  public updatePrestation(id: number, prestation: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, prestation);
  }

}
