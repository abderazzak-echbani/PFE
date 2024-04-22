import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { MedecinsComponent } from './pages/medecins/medecins.component';
import { RdvsComponent } from './pages/rdvs/rdvs.component';
import { UserMainpageComponent } from './pages/user-mainpage/user-mainpage.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AdminMainpageComponent } from './pages/admin-mainpage/admin-mainpage.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { TokenGuardService } from './guard/guard-token/token-guard.service';
import { AccessDeniedComponent } from './guard/guard-admin/access-denied/access-denied.component';
import { AdminGuardService } from './guard/guard-admin/admin-guard.service';
import { NewRdvComponent } from './pages/adding/new-rdv/new-rdv.component';
import { NewPatientComponent } from './pages/adding/new-patient/new-patient.component';
import { NewMedecinComponent } from './pages/adding/new-medecin/new-medecin.component';
import { RdvsPatientComponent } from './patient/rdvs-patient/rdvs-patient.component';
import { PatientMainPageComponent } from './patient/patient-main-page/patient-main-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [

  {
    path:'',
    component:AccueilComponent
  }, 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  
  {
    path:'access-denied',
    component:AccessDeniedComponent
  },

  {
    path:'user',
    component:UserMainpageComponent,
    canActivate:[TokenGuardService],
    children:[
      {
        path:'patients',
        component:PatientsComponent
      },
      {
        path:'new-patient',
        component:NewPatientComponent
      }, 
      {
        path:'new-patient/:idPatient',
        component:NewPatientComponent
      },
      {
        path:'medecins',
        component:MedecinsComponent
      },
      {
        path:'new-medecin',
        component:NewMedecinComponent
      },
      {
        path:'new-medecin/:idMedecin',
        component:NewMedecinComponent
      },
      {
        path:'rdvs',
        component:RdvsComponent
      },
      {
        path:'new-rdv',
        component:NewRdvComponent
      },
      {
        path:'new-rdv/:idRdv',
        component:NewRdvComponent
      }
    ]
  },
  {
    path:'patient',
    component:PatientMainPageComponent,
    canActivate:[TokenGuardService],
    children:[
      
      {
        path:'rdvs-patient',
        component:RdvsPatientComponent
      },
      {
        path:'create-rdv',
        component:NewRdvComponent
      },
      {
        path:'update-rdv/:idRdv',
        component:NewRdvComponent
      }
    ]
  }
  ,

  {
    path:'admin',
    component:AdminMainpageComponent,
    canActivate:[TokenGuardService,AdminGuardService],
    children:[
      {
        path:'dash',
        component:AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
