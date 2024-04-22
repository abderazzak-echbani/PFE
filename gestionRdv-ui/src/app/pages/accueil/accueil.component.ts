import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  constructor(
    private router:Router,
  ){  }

  isConnected=false;
  token:any;
  
  ngOnInit(): void {
   
  this.token=localStorage.getItem('token');
  if(this.token){
    console.log("there is a token");
    this.isConnected=true
  }
  }

  
  async toLogin(){
    await this.router.navigate(['login'])
  }
  async toAppointments(){
    await this.router.navigate(['patient','rdvs-patient'])
  }
}
