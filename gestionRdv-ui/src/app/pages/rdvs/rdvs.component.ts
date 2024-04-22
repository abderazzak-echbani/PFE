import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/guard/guard-token/helper.service';
import { RdvDto } from 'src/app/services/services/models';
import { RdvService } from 'src/app/services/services/services';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-rdvs',
  templateUrl: './rdvs.component.html',
  styleUrls: ['./rdvs.component.scss']
})
export class RdvsComponent implements OnInit {

  rdvs:Array<RdvDto>=[];
  p: number=1;
  
  constructor(
    private rdvsService:RdvService,
    private helper:HelperService,
    private router:Router
  ){}

  ngOnInit(): void {

    this.rdvsService.findAll1({
      
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
      this.router.navigate(['user','new-rdv',id]);
      };

  //le nom ficher qui sera telecharge
  fileName='liste des rdvs.xlsx';
 exportToExcel() {
          //conevrtir la liste des rdvs en OBJET JSON
          const data:Array<any>=[];
          for (let i = 0; i < this.rdvs.length; i++) {
            console.log(this.rdvs[i]);
            data.push(
              {
                "Patient":this.rdvs[i].patient?.lastname,
                "DateRDV":this.rdvs[i].dateRdv,
                "HeureRDV":this.rdvs[i].heureRdv,
                "Medecin":this.rdvs[i].patient?.lastname,
              }
            );           
           }
        const ws:XLSX.WorkSheet=XLSX.utils.json_to_sheet(data);

        /**Creer workbook et ajouter worksheet**/
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /*Enregister le fichier*/
        XLSX.writeFile(wb, this.fileName);
        }
}
