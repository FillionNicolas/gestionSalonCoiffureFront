import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateAccountComponent implements OnInit {

  utilisateur = new Utilisateur();
  utilisateurs : Utilisateur [];

  constructor(private utilisateurService : UtilisateurService) { }

  ngOnInit(): void {
    this.findAll();
  }

findAll(){
  this.utilisateurService.findAll().subscribe(data => {this.utilisateurs =data});

}  
save(){
  this.utilisateurService.save(this.utilisateur).subscribe(()=> {
    this.findAll();
    this.utilisateur = new Utilisateur();
  })
}

}
