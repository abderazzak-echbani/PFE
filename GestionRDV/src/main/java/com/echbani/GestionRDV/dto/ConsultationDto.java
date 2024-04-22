package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Consultation;
import com.echbani.GestionRDV.models.Facture;

import com.echbani.GestionRDV.models.Ordonnance;
import com.echbani.GestionRDV.models.Rdv;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ConsultationDto {
    private Integer id;
    private  String description;
    private Integer rdvId;

    public static ConsultationDto fromEntity(Consultation consultation) {
        return ConsultationDto.builder()
                .id(consultation.getId())
                .description(consultation.getDescription())
                .rdvId(consultation.getRdv().getId())
                .build();
    }

    public static Consultation toEntity(ConsultationDto consultation) {
        return Consultation.builder()
                .id(consultation.getId())
                .description(consultation.getDescription())
                .rdv(Rdv.builder().id(consultation.getRdvId()).build())
                .build();
    }
}
