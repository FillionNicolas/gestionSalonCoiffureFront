import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseURL = 'http://localhost:9098/produits'
  constructor(private httpClient: HttpClient) { }
  
  public findAllProduits(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(produits: any): Observable<any> {
    return this.httpClient.post(this.baseURL, produits);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  public update(id: number, produits: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, produits);
  }
}
