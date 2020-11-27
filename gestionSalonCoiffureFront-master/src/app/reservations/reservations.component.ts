import { Component, OnInit } from '@angular/core';
import { Prestation } from 'app/models/prestation';
import { Reservation } from 'app/models/reservation';
import { Salon } from 'app/models/salon';
import { PrestationService } from 'app/service/prestation.service';
import { ReservationService } from 'app/service/reservation.service';
import { SalonService } from 'app/service/salon.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:Reservation[];
  reservation:Reservation=new Reservation();

  prestations:Prestation[];
  prestation:Prestation=new Prestation();

  salons:Salon[];
  salon:Salon=new Salon();

  constructor(
    private reservationService: ReservationService,
    private prestationService: PrestationService,
    private salonService: SalonService
    ) { }
 


  ngOnInit(): void {
    this.findAllReservation();
    this.findAllPrestation();
    this.findAllSalon();
  }

  findAllReservation(){this.reservationService.findAllReservation().subscribe(data =>{this.reservations = data})}
  deleteReservation(reservation){
    this.reservationService.deleteReservation(reservation.idReservation).subscribe(() =>{this.findAllReservation()});}
  saveReservation(){
    this.reservationService.saveReservation(this.reservation).subscribe(() =>{this.findAllReservation();
    this.reservation = new Reservation();
  })
  }

  findAllPrestation(){this.prestationService.findAllPrestation().subscribe(data =>{this.prestations = data; console.log("prestation:"+this.prestations)})}
  deletePrestation(prestation){
    this.prestationService.deletePrestation(prestation.idPrestation).subscribe(() =>{this.findAllPrestation()});}  
  savePrestation(){
    this.prestationService.savePrestation(this.prestation).subscribe(() =>{this.findAllPrestation();
    this.prestation = new Prestation();
  })
  }


  findAllSalon(){this.salonService.findAllSalon().subscribe(data =>{this.salons = data})}
  deleteSalon(salon){
    this.salonService.deleteSalon(salon.idSalon).subscribe(() =>{this.findAllSalon()});} 
  saveSalon(){
    this.salonService.saveSalon(this.salon).subscribe(() =>{this.findAllSalon();
    this.salon = new Salon();
  })
  }

}
