import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinDto } from 'src/app/services/services/models';
import { MedecinService } from 'src/app/services/services/services';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {

userIdToDelete:number|undefined=-1;
  constructor(private rouetr:Router,
              private medecinService:MedecinService
              ){};
  medecins:Array<MedecinDto>=[];

  ngOnInit(): void {
    this.medecinService.findAll7().subscribe({
      next:(data)=>{this.medecins=data},
      error:(err)=>{console.log(err);
      }
    })
  }

  delete() {
    this.medecinService.delete7({
      id:this.userIdToDelete as number
    }).subscribe(
      {
        next:(data)=>{this.rouetr.navigate(['user','medecins'])},
        error:(err)=>{console.log(err);}
      }
    )
  };

  update(id: number|undefined) {
    this.rouetr.navigate(['user','new-medecin',id])
    }

}
