import { Component, ElementRef, Input, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DateTime, TempusDominus } from '@eonasdan/tempus-dominus';
import { MedecinDto, PatientDto, RdvDto } from 'src/app/services/services/models';
import { MedecinService, PatientService, RdvService } from 'src/app/services/services/services';


@Component({
  selector: 'app-new-rdv',
  templateUrl: './new-rdv.component.html',
  styleUrls: ['./new-rdv.component.scss']
})
export class NewRdvComponent implements OnInit {


  public picker11: TempusDominus | undefined;
  public picker12: TempusDominus | undefined;
  patients: Array<PatientDto> = [];
  medceins: Array<MedecinDto> = [];
  unavailableDates: string[] = [];
  public dates: DateTime[] = [];
  public hoursStr: string[] = [];
  public Disahours: number[] = [1,2,3,4,5,6,7,12,0,19,20,21,22,23];
  rdvDto: RdvDto = {};
  errorMessages: any;
  pikval: any;
  idRdv = this.activatedRoute.snapshot.params['idRdv'];
  currentPatient:PatientDto={
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  currentPatientId:number | undefined;
  
  
  constructor(
    private patientService: PatientService,
    private medecinService: MedecinService,
    private rdvService: RdvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    const token=localStorage.getItem('token');
    if(token){
      const helper = new JwtHelperService();
      //@ts-ignore
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.authority == 'PATIENT'){
             this.isPatient=true
              this.currentPatientId=decodedToken.userId;
              this.patientService.findById4({id:this.currentPatientId as number}).subscribe({
                next:(data)=>{ 
                  this.rdvDto.patient=data; 
                  console.log("this is the current user");
                  console.log(this.rdvDto.patient); 
                },
                error:(err)=>{console.log("no current user connected");
                }
              })               
                  
      }else {
        this.isPatient=false
      }}


    //Get ALL PATIENTS
    this.patientService.findAll4().subscribe({
      next: (data) => {
        this.patients = data, console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });

    //GET UnavailableDates
    this.rdvService.getUnavailableDates().subscribe({
      next: (data) => {
        this.unavailableDates = data;
        console.log("unvaila datteess" + this.unavailableDates);
        for (let i = 0; i < this.unavailableDates.length; i++) {
          console.log(this.unavailableDates[i]);

          this.dates.push(new DateTime(this.unavailableDates[i]))
        }
        console.log("datess  " + this.dates);


      },
      error: (err) => {
        console.log(err);

      }
    });
    //Get ALL DOCTORS
    this.medecinService.findAll7().subscribe({
      next: (data) => {
        this.medceins = data, console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });


//get data OF select RDV 
    if (this.idRdv) {
      this.rdvService.findById1({ id: this.activatedRoute.snapshot.params['idRdv'] })
        .subscribe({
          next: (data) => {
            this.rdvDto = data, console.log(this.activatedRoute.snapshot.params['idRdv']);
          }
        });
    }

    //DATE PICKER
    const el11 = document.querySelector('#datetimepicker1') as HTMLInputElement;
 
    const tomorrow = new DateTime();
    const today = new DateTime();

    this.picker11 = new TempusDominus(
      el11,
      {
        localization: {
          format: 'dd/MM/yyyy'
        },
        restrictions: {
          disabledDates: this.dates,
          daysOfWeekDisabled: [0, 6],
          disabledHours: [1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23, 0, 12],
          minDate: today

        },
        stepping: 30,
        display: {
          sideBySide: false,

          buttons: {
            today: true,
            clear: true,
            close: true
          },
          components: {
            calendar: true,
            date: true,
            month: true,
            year: true,
            decades: true,
            clock: true,
            hours: false,
            minutes: false,
            seconds: false,
            //deprecated use localization.hourCycle = 'h24' instead
            useTwentyfourHour: undefined
          },
        },
      }
    )
    
    
  }
//initialiset le DATEPACKER
  initialisePikcker12(){
    this.getUnavailableHours();
    const el12 = document.querySelector('#datetimepicker2') as HTMLInputElement;
    this.picker12 = new TempusDominus(
      el12,
      {
        localization: {
          format: 'HH:mm'
        },
        restrictions: {
          disabledHours: this.Disahours,
        },
        stepping: 30,
        display: {
          viewMode: 'clock',
          components: {
            decades: false,
            year: false,
            month: false,
            date: false,
            hours: true,
            minutes: true,
            seconds: false
          }
        },

      }
    )   
  };

  reset() {
    this.Disahours=[1,2,3,4,5,6,7,12,0,19,20,21,22,23];
    console.log(" REset disaaaaabllll houuuurs "+this.Disahours);
    
    this.picker12?.updateOptions({restrictions: {disabledHours: this.Disahours} })
    }
  //Cancel taking RDV
  async cancel() {
    await this.router.navigate(['user', 'rdvs']);
  };

  d: DateTime = new DateTime();

  @Input()
  isPatient:boolean=false;

  saveRdv() {
    this.pikval = this.picker11?.dates.lastPicked
    this.d = new DateTime(this.pikval);
    if(this.pikval){
      this.rdvDto.dateRdv = this.d.getFullYear() + '-' +
      ("0" + (this.d.getMonth() + 1)).slice(-2) + "-" +
      ("0" + this.d.getDate()).slice(-2);
    }else{
      this.rdvDto.dateRdv=this.rdvDto.dateRdv;
      console.log("date after updating "+this.rdvDto.dateRdv );
    }

      console.log("date after updating "+this.rdvDto.dateRdv );
      

    this.rdvDto.heureRdv = ("0" + (this.picker12?.dates.lastPicked.getHours())).slice(-2) + ':' + ("0" + (this.picker12?.dates.lastPicked.getMinutes())).slice(-2)

    this.rdvService.save1({ body: this.rdvDto }).subscribe({
      next: async (data) => { 
        if(this.isPatient){
          await this.router.navigate(['patient', 'rdvs-patient']) 
          console.log("ispatient true");
          
        }else{
          console.log("ispatient false");

          await this.router.navigate(['user', 'rdvs']) 
        }

    },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
      }
    })
  };

  //get UNavailabl HOURS
  public selectedDate:string="";
  getUnavailableHours() {
    if(this.picker11?.dates.lastPicked){
       this.selectedDate=this.picker11?.dates.lastPicked.getFullYear() + '-' +
      ("0" + (this.picker11?.dates.lastPicked.getMonth()! + 1)).slice(-2) + "-" +
      ("0" + this.picker11?.dates.lastPicked.getDate()).slice(-2);
    }else{
      this.selectedDate=this.rdvDto.dateRdv!
      console.log("update date "+this.selectedDate);
      
    }
    
    console.log("selectedDate  "+this.selectedDate);
   
    this.rdvService.getUnavailableHours({selectedDate:this.selectedDate}).subscribe({
      next:(data)=>{
        console.log(data);
        this.hoursStr=data;
        if(this.hoursStr.length){
          for (let i = 0; i < this.hoursStr.length; i++) {
            this.Disahours.push(Number((this.hoursStr[i]).slice(0,2)))
            console.log("disabledHours from getUnavailableHours:"+this.Disahours);
           } 
        }else{
          this.Disahours=this.Disahours
          console.log("disable HH empty");
          console.log("disable HH empty  "+this.Disahours);
           
        } 
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    };

}


