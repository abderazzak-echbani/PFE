package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Consultation;
import com.echbani.GestionRDV.models.Ordonnance;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class OrdonnanceDto {
    private Integer id;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    private String note;
    private Integer consultationId;
    public static OrdonnanceDto fromEntity(Ordonnance ordonnance) {
        return OrdonnanceDto.builder()
                .id(ordonnance.getId())
                .note(ordonnance.getNote())
                .consultationId(ordonnance.getConsultation().getId())
                .build();
    }

    public static Ordonnance toEntity(OrdonnanceDto ordonnance) {
        return Ordonnance.builder()
                .id(ordonnance.getId())
                .note(ordonnance.getNote())
                .consultation(Consultation.builder().id(ordonnance.getConsultationId()).build())
                .build();
    }
}
