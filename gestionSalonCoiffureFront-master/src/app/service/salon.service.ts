import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private baseURL = 'http://localhost:9094/salons'
  constructor(private httpClient: HttpClient) { }

  public findAllSalon(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOneSalon(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public saveSalon(salon: any): Observable<any> {
    return this.httpClient.post(this.baseURL, salon);
  }
  public deleteSalon(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id); 
  }
  public updateSalon(id: number, salon: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, salon);
  }

}
