import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDto } from 'src/app/services/services/models';
import { PatientService } from 'src/app/services/services/services';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients:Array<PatientDto>=[];
  userIdToDelete:number|undefined=-1;

  constructor(
    private router:Router,
    private patientService:PatientService
  ){}

  ngOnInit(): void {
    this.patientService.findAll4()
        .subscribe({
          next:(data)=>{this.patients=data},
          error:(err)=>{console.log(err);
          }
        })
  }

  delete() {
    this.patientService.delete4({
      id:this.userIdToDelete as number
    }).subscribe(
      {
        next:(data)=>{this.router.navigate(['user','patients'])},
        error:(err)=>{console.log(err);}
      }
    )
    }

  update(id: any) {
      this.router.navigate(['user','new-patient',id])
      }
}
