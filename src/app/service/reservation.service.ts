import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = 'http://localhost:9094/reservations'
  constructor(private httpClient: HttpClient) { }

  public findAllReservation(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOneReservation(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public saveReservation(reservation: any): Observable<any> {
    return this.httpClient.post(this.baseURL, reservation);
  }
  public deleteReservation(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id); 
  }
  public updateReservation(id: number, reservation: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, reservation);
  }

}
