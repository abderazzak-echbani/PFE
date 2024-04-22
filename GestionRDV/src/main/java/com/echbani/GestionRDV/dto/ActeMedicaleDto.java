package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.ActeMedicale;
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
public class ActeMedicaleDto {

    private Integer id;
    private String typeActeMed;
    @NotNull
    @NotEmpty
    @NotBlank
    @Positive
    private double prix;


    public static ActeMedicaleDto fromEntity(ActeMedicale acteMedicale){
        return ActeMedicaleDto.builder()
                .id(acteMedicale.getId())
                .typeActeMed(acteMedicale.getTypeActeMed())
                .prix(acteMedicale.getPrix())
                .build();
    }
    public static ActeMedicale toEntity(ActeMedicaleDto acteMedicale){
        return ActeMedicale.builder()
                .id(acteMedicale.getId())
                .typeActeMed(acteMedicale.getTypeActeMed())
                .prix(acteMedicale.getPrix())
                .build();
    }
}
