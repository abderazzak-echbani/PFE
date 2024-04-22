package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Consultation;
import com.echbani.GestionRDV.models.Facture;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class FactureDto {
    private Integer id;
    @Positive
    private double total;
    @Positive
    private double montant_paye;
    @Positive
    private double reste;
    private Integer consultationId;

    public static FactureDto fromEnity(Facture facture){
        return FactureDto.builder()
                .id(facture.getId())
                .total(facture.getTotal())
                .montant_paye(facture.getMontant_paye())
                .reste(facture.getReste())
                .consultationId(facture.getConsultation().getId())
                .build();
    }

    public static Facture toEntity(FactureDto facture){
        return Facture.builder()
                .id(facture.getId())
                .total(facture.getTotal())
                .montant_paye(facture.getMontant_paye())
                .reste(facture.getReste())
                .consultation(Consultation.builder().id(facture.getConsultationId()).build())
                .build();
    }
}
