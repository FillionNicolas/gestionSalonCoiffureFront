import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ReclamationService {

    private baseUrl  = 'http://localhost:9004/microservice-reclamation/reclamations'
    constructor(private httpClient: HttpClient) { }

    public findAllReclamation(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
      
	}
	

	public findOneReclamation(id: number): Observable<any> {
        return this.httpClient.get(this.baseUrl + "/" + id);
    }


	public saveReclamation(reclamation : any) {
        return this.httpClient.post(this.baseUrl, reclamation);
	}
	

	public deleteReclamation(id :number) {
		return  this.httpClient.delete(this.baseUrl + "/" + id);;
	}
	

	public  updateReclamation(reclamation :any, id : number) {
		return this.httpClient.put(this.baseUrl + "/" + id, reclamation);
    }
}
