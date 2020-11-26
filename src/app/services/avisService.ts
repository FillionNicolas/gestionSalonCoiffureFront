import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class AvisService {
    private baseURL = 'http://localhost:9004/microservice-reclamation/avis'
    constructor(private httpClient: HttpClient) { }

    public findAll(): Observable<any> {
        return this.httpClient.get(this.baseURL);
    }
    public findOne(id: number): Observable<any> {
        return this.httpClient.get(this.baseURL + "/" + id);
    }


    public saveAvis(avis: any): Observable<any> {
        return this.httpClient.post(this.baseURL, avis);

    }

    public deleteAvis(id: number): Observable<any> {
        return this.httpClient.delete(this.baseURL + "/" + id);
    }


    public updateAvis(id: number, avis: any): Observable<any> {
        return this.httpClient.put(this.baseURL + "/" + id, avis);

    }
}