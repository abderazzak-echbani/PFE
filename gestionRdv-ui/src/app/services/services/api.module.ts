/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ReceptionnisteService } from './services/receptionniste.service';
import { RdvService } from './services/rdv.service';
import { RdvStatusService } from './services/rdv-status.service';
import { PerscriptionService } from './services/perscription.service';
import { PatientService } from './services/patient.service';
import { OrdonnanceService } from './services/ordonnance.service';
import { MedicamentService } from './services/medicament.service';
import { MedecinService } from './services/medecin.service';
import { FactureService } from './services/facture.service';
import { ConsultationService } from './services/consultation.service';
import { AuthenticationService } from './services/authentication.service';
import { AddressService } from './services/address.service';
import { ActeMedicaleService } from './services/acte-medicale.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ReceptionnisteService,
    RdvService,
    RdvStatusService,
    PerscriptionService,
    PatientService,
    OrdonnanceService,
    MedicamentService,
    MedecinService,
    FactureService,
    ConsultationService,
    AuthenticationService,
    AddressService,
    ActeMedicaleService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
