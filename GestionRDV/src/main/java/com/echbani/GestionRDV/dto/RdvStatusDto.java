package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.ActeMedicale;
import com.echbani.GestionRDV.models.RdvStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@Builder
public class RdvStatusDto {
    private Integer id;
    private String status;

    public static RdvStatusDto fromEntity(RdvStatus rdvStatus){
        return RdvStatusDto.builder()
                .id(rdvStatus.getId())
                .status(rdvStatus.getStatus())
                .build();
    }
    public static RdvStatus toEntity(RdvStatusDto rdvStatus){
        return RdvStatus.builder()
                .id(rdvStatus.getId())
                .status(rdvStatus.getStatus())
                .build();
    }

}
