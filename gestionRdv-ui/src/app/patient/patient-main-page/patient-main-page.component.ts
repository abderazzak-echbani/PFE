import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/guard/guard-token/helper.service';

@Component({
  selector: 'app-patient-main-page',
  templateUrl: './patient-main-page.component.html',
  styleUrls: ['./patient-main-page.component.scss']
})
export class PatientMainPageComponent implements OnInit {
  userNameP:string='';
  constructor(private helper:HelperService){

  }
  ngOnInit(): void {
    this.userNameP=this.helper.fullName
  }


}
