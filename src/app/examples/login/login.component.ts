import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';
import { Router } from '@angular/router';
import { AuthentificationService } from 'app/service/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username = ''
    password = ''
    invalidLogin = false

    data : Date = new Date();
    focus;
    focus1;

    users:Utilisateur[];
    user:Utilisateur=new Utilisateur();
    /*constructor(private utilisateurService: UtilisateurService) { }*/

    constructor(private router: Router,
        private loginservice: AuthentificationService) { }
    

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

/*  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }
  deleteUtilisateur(user){
    this.utilisateurService.delete(user.idUtilisateur).subscribe(()=>{this.findAll()});
  }
  saveUtilisateur(){
    this.utilisateurService.save(this.user).subscribe(()=>{
      this.findAll();
      this.user = new Utilisateur();
    })
  } */

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
