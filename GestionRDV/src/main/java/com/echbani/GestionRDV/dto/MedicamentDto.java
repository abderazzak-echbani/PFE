package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Medicament;
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
public class MedicamentDto {
    private Integer id;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    private String name;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    private String note;

    public static MedicamentDto fromEntity(Medicament medicament){
        return MedicamentDto.builder()
                .id(medicament.getId())
                .name(medicament.getName())
                .note(medicament.getNote())
                .build();
    }

    public static Medicament toEntity(MedicamentDto medicament){
        return Medicament.builder()
                .id(medicament.getId())
                .name(medicament.getName())
                .note(medicament.getNote())
                .build();
    }
}
