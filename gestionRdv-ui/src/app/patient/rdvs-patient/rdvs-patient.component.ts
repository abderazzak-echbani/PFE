import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/guard/guard-token/helper.service';
import { RdvDto } from 'src/app/services/services/models';
import { RdvService } from 'src/app/services/services/services';

@Component({
  selector: 'app-rdvs-patient',
  templateUrl: './rdvs-patient.component.html',
  styleUrls: ['./rdvs-patient.component.scss']
})
export class RdvsPatientComponent {
  rdvs:Array<RdvDto>=[];
  id:number=this.helper.userId;
  
  constructor(
    private rdvsService:RdvService,
    private helper:HelperService,
    private router:Router
  ){}

  ngOnInit(): void {

    this.rdvsService.findAllByPatientId({
      id:this.id
    }).subscribe({
      next:(data)=>{this.rdvs=data,console.log(data);
      },
      error:(err)=>{console.log(err);
      }
    });

    
  }
  userIdToDelete:any|undefined=0;
  delete() {
    this.rdvsService.delete1({id:this.userIdToDelete}).subscribe(
      {
        next:(data)=>{console.log(data)},
        error:(err)=>{console.log(err)}
      }
    )
    };

  update(id: number|undefined) {
      this.router.navigate(['patient','update-rdv',id]);
      }
}
