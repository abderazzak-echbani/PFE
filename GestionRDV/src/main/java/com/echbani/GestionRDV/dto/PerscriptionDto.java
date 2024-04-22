package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Medicament;
import com.echbani.GestionRDV.models.Ordonnance;
import com.echbani.GestionRDV.models.Perscription;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class PerscriptionDto {
    private Integer id;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    private String form_med;

    @Positive
    private Integer nbre_fois;

    @Positive
    private Integer quantite;
    private Integer ordonnanceId;
    private Integer medicamentId;

    public static PerscriptionDto fromEntity(Perscription perscription){
        return PerscriptionDto.builder()
                .id(perscription.getId())
                .form_med(perscription.getForm_med())
                .nbre_fois(perscription.getNbre_fois())
                .quantite(perscription.getQuantite())
                .ordonnanceId(perscription.getOrdonnance().getId())
                .medicamentId(perscription.getMedicament().getId())
                .build();
    }

    public static Perscription toEntity(PerscriptionDto  perscription){
        return Perscription.builder()
                .id(perscription.getId())
                .form_med(perscription.getForm_med())
                .nbre_fois(perscription.getNbre_fois())
                .quantite(perscription.getQuantite())
                .ordonnance(Ordonnance.builder().id(perscription.getOrdonnanceId()).build())
                .medicament(Medicament.builder().id(perscription.getMedicamentId()).build())
                .build();
    }

}
