import { Component, OnInit } from '@angular/core';
import { Produit } from 'app/models/produit';
import { ProduitService } from 'app/service/produits.service';
import { Prestation } from 'app/models/prestations';
import { PrestationService } from 'app/service/prestations.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  /* Partie produits */
  produit:Produit[];
  produits:Produit=new Produit();


  /* Partie prestations */
  prestation:Prestation[];
  prestations:Prestation=new Prestation();


  constructor(private produitService: ProduitService, private prestationService : PrestationService) { }

  ngOnInit(): void {
    this.findAllProduits();
    this.findAllPrestations();

  }

  /* Partie produits */
  findAllProduits(){
    this.produitService.findAllProduits().subscribe(data => {this.produit = data});
  }
  deleteProduit(produits){
    this.produitService.delete(produits.idProduit).subscribe(()=>{this.findAllProduits()});
  }
  saveProduit(){
    this.produitService.save(this.produits).subscribe(()=>{
      this.findAllProduits();
      this.produits = new Produit();
    })
  }

  /* Partie prestations */

  findAllPrestations(){
    this.prestationService.findAllPrestations().subscribe(data => {this.prestation = data});
  }
  deletePrestations(prestations){
    this.prestationService.delete(prestations.idPrestation).subscribe(()=>{this.findAllPrestations()});
  }
  savePrestations(){
    this.prestationService.save(this.prestations).subscribe(()=>{
      this.findAllPrestations();
      this.prestations = new Prestation();
    })
  }
}
