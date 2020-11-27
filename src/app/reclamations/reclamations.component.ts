import { Component, OnInit } from '@angular/core';
import { Avis } from 'app/model/avis';
import { Reclamation } from 'app/model/reclamation';
import { AvisService } from 'app/service/avisService';
import { ReclamationService } from 'app/service/reclamationService';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {
  aviss : Avis [];
  avis = new Avis();
  reclamations: Reclamation [];
  reclamation = new Reclamation();
  constructor(private avisService :AvisService, private reclamationService : ReclamationService ){}

  ngOnInit(): void {
    this.findAll();
  
  }


  findAll(){
    this.avisService.findAll().subscribe(data => {this.aviss = data});
}


  saveReclamation() {
    this.reclamationService.saveReclamation(this.reclamation).subscribe(()=>{
    this.findAll();
    this.reclamation = new Reclamation();
    })
  }

    
}



  







