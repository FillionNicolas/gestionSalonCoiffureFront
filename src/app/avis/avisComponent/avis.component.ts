import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.findAllAvis();
  }

  findAllAvis(){
    //implementer la methode find alll avec le service
  }

}