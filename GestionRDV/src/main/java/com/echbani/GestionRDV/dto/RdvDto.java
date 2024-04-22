package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Consultation;
import com.echbani.GestionRDV.models.Medecin;
import com.echbani.GestionRDV.models.Patient;
import com.echbani.GestionRDV.models.Rdv;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@Builder
public class RdvDto {
    private  Integer id;

    private LocalDate dateRdv;
    private String heureRdv;
    private PatientDto patient;
    private MedecinDto medecin;

    //private Consultation consultation;


    public  static RdvDto fromEntity(Rdv rdv){
        return RdvDto.builder()
                .id(rdv.getId())
                .dateRdv(rdv.getDateRdv())
                .heureRdv(rdv.getHeureRdv())
                .medecin(MedecinDto.fromEntity(rdv.getMedecin()))
                .patient(PatientDto.fromEntity(rdv.getPatient()))
                .build();
    }

    public  static Rdv toEntity(RdvDto rdv){
        return Rdv.builder()
                .id(rdv.getId())
                .dateRdv(rdv.getDateRdv())
                .heureRdv(rdv.getHeureRdv())
                .medecin(MedecinDto.toEntity(rdv.getMedecin()))
                .patient(PatientDto.toEntity(rdv.getPatient()))
                .build();
    }
}
