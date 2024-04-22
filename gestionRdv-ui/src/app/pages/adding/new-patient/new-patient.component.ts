import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDto } from 'src/app/services/services/models';
import { PatientService } from 'src/app/services/services/services';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  constructor(
    private router:Router,
    private patientService:PatientService,
    private activatedRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.patientService.findById4({
      id:this.activatedRoute.snapshot.params['idPatient']
    }).subscribe({
      next:(data)=>{this.patientDto=data;
      },
      error:(err)=>{console.log(err);
      }
    })
  }
  patientDto:PatientDto={email: '',firstname: '',lastname: '',password: '',tel: ''};
  errosMessages: Array<string> = [];


  save() {
    this.patientService.save4({body:this.patientDto})
    .subscribe({
      next:(data)=>{this.router.navigate(['user','patients']);
      },
      error:(err)=>{this.errosMessages=err.error.validationErrors;}
    })

    }

}
