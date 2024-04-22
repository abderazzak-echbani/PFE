import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { MedecinsComponent } from './pages/medecins/medecins.component';
import { RdvsComponent } from './pages/rdvs/rdvs.component';
import { UserMainpageComponent } from './pages/user-mainpage/user-mainpage.component';
import { AdminMainpageComponent } from './pages/admin-mainpage/admin-mainpage.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { AccessDeniedComponent } from './guard/guard-admin/access-denied/access-denied.component';
import { NewRdvComponent } from './pages/adding/new-rdv/new-rdv.component';
import { NewPatientComponent } from './pages/adding/new-patient/new-patient.component';
import { NewMedecinComponent } from './pages/adding/new-medecin/new-medecin.component';
import { RdvsPatientComponent } from './patient/rdvs-patient/rdvs-patient.component';
import { PatientMainPageComponent } from './patient/patient-main-page/patient-main-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GenderChartComponent } from './admin/gender-chart/gender-chart.component';
import { GeographyChartComponent } from './admin/geography-chart/geography-chart.component'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    AccueilComponent,
    PatientsComponent,
    MedecinsComponent,
    RdvsComponent,
    UserMainpageComponent,
    AdminMainpageComponent,
    AdminDashboardComponent,
    AccessDeniedComponent,
    NewRdvComponent,
    NewPatientComponent,
    NewMedecinComponent,
    RdvsPatientComponent,
    PatientMainPageComponent,
    MainPageComponent,
    GenderChartComponent,
    GeographyChartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
   
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true
    },
    HttpClient,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
