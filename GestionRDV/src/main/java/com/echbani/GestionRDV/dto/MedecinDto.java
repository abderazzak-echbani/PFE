package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Medecin;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@Builder
public class MedecinDto {
    private Integer id;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    private String firstname;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    private String lastname;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    @Email
    private String email;
    @NotNull(message = "Ne doit pas etre vide")
    @NotEmpty(message = "Ne doit pas etre vide")
    @NotBlank(message = "Ne doit pas etre vide")
    @Size(min = 6,max = 16)
    private String password;
    private String npe;
    public  static MedecinDto fromEntity (Medecin medecin){
        return MedecinDto.builder()
                .id(medecin.getId())
                .firstname(medecin.getFirstname())
                .lastname(medecin.getLastname())
                .email(medecin.getEmail())
                .password(medecin.getPassword())
                .npe(medecin.getNpe())
                .build();
    }

    public  static Medecin toEntity (MedecinDto medecin){
        return Medecin.builder()
                .id(medecin.getId())
                .firstname(medecin.getFirstname())
                .lastname(medecin.getLastname())
                .email(medecin.getEmail())
                .password(medecin.getPassword())
                .npe(medecin.getNpe())
                .build();
    }

}
