import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDto } from 'src/app/services/services/models/patient-dto';
import { PatientService } from 'src/app/services/services/services';
import { AuthenticationService } from 'src/app/services/services/services/authentication.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  patientDto:PatientDto={email: '',firstname: '',lastname: '',password: '',tel: ''};

  errosMessages: Array<string> = [];
  constructor(
    private router:Router,
    private service:AuthenticationService
  ){};

  register() {
    this.errosMessages=[];
    this.service.register({body:this.patientDto})
    .subscribe({
      next:(data=>{console.log(data) }),
      error:(err=>{this.errosMessages=err.error.validationErrors} )
    })
  }

 async login(){
  await this.router.navigate(['login'])
 }; 
}
