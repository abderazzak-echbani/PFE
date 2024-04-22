/* tslint:disable */
/* eslint-disable */
import { MedecinDto } from '../models/medecin-dto';
import { PatientDto } from '../models/patient-dto';
export interface RdvDto {
  dateRdv?: string;
  heureRdv?: string;
  id?: number;
  medecin?: MedecinDto;
  patient?: PatientDto;
}
