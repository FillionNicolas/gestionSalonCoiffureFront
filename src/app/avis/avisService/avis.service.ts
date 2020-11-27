import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor() { }

  private baseURL = 'http://localhost:9004/microservice-reservation/avis'
}
