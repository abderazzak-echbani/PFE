import { Component } from '@angular/core';
import { PatientService, RdvService } from 'src/app/services/services/services';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  constructor(
    private patientService:PatientService,
    private rdvService:RdvService
  ){}
  
  patientsByGender:Array<any>=[];
  f:any;
  m:any;
  ngOnInit():void{
    this.patientService.getSumOfPatientsByGender().subscribe(
      {
        next:(data)=>{this.patientsByGender=data;
         
         this.patientsByGender.forEach(row => {
          row.forEach(element => {
              console.log(element);
          });
          
        },
        error:(err)=>{console.log(err);
        }
      }
    )
  }

}
