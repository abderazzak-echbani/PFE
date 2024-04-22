import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinDto } from 'src/app/services/services/models';
import { MedecinService } from 'src/app/services/services/services';

@Component({
  selector: 'app-new-medecin',
  templateUrl: './new-medecin.component.html',
  styleUrls: ['./new-medecin.component.scss']
})
export class NewMedecinComponent implements OnInit {

errosMessages: Array<string>=[];

  constructor(
    private router:Router,
    private medecinService:MedecinService,
    private activatedRoute:ActivatedRoute
  ){};

  medecinDto:MedecinDto={
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  ngOnInit(): void {
    this.medecinService.findById7({
      id:this.activatedRoute.snapshot.params['idMedecin']
    }).subscribe({
      next:(data)=>{this.medecinDto=data},
      error:(err)=>{console.log(err);
      }
    })
  }
  save() {
    this.medecinService.save7({body:this.medecinDto}).subscribe({
      next:(data)=>{console.log(data),this.router.navigate(['user','medecins'])},
      error:(err)=>{console.log(err)}
    })
    }
  
}
