package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Address;
import com.echbani.GestionRDV.models.Receptionniste;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ReceptionnisteDto {
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
    @Size(min = 6,max = 16,message = "Mot de passe doit etre entre 6 et 16")
    private String password;



    public static ReceptionnisteDto fromEntity(Receptionniste receptionniste){
        return ReceptionnisteDto.builder()
                .id(receptionniste.getId())
                .firstname(receptionniste.getFirstname())
                .lastname(receptionniste.getLastname())
                .email(receptionniste.getEmail())
                .password(receptionniste.getPassword())
                .build();
    }
    public static Receptionniste toEntity(ReceptionnisteDto receptionniste){
        return Receptionniste.builder()
                .id(receptionniste.getId())
                .firstname(receptionniste.getFirstname())
                .lastname(receptionniste.getLastname())
                .email(receptionniste.getEmail())
                .password(receptionniste.getPassword())
                .build();
    }
}
