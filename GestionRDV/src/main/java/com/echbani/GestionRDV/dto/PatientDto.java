package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Address;
import com.echbani.GestionRDV.models.Patient;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class PatientDto {
    private Integer id;
    @NotNull(message = "Le prenom ne doit pas etre vide")
    @NotEmpty(message = "Le prenom ne doit pas etre vide")
    @NotBlank(message = "Le prenom ne doit pas etre vide")
    private String firstname;
    @NotNull(message = "Le nom ne doit pas etre vide")
    @NotEmpty(message = "Le nom ne doit pas etre vide")
    @NotBlank(message = "Le nom ne doit pas etre vide")
    private String lastname;
    @NotNull(message = "Le mail ne doit pas etre vide")
    @NotEmpty(message = "Le mail ne doit pas etre vide")
    @NotBlank(message = "Le mail ne doit pas etre vide")
    @Email(message = "l'email n'est pas conforme")
    private String email;
    @NotNull(message = "Le mot de passe ne doit pas etre vide")
    @NotEmpty(message = "Le mot de passe ne doit pas etre vide")
    @NotBlank(message = "Le mot de passe ne doit pas etre vide")
    @Size(min = 8, max = 16, message = "Le mot de passe doit etre entre 8 et 16 caracteres")
    private String password;

    private String tel;
    private String gender;
    private String marital_status;
    private Date birthday;
    private String blood_group;
    private String job;

    public  static PatientDto fromEntity (Patient patient){

        return PatientDto.builder()
                .id(patient.getId())
                .firstname(patient.getFirstname())
                .lastname(patient.getLastname())
                .email(patient.getEmail())
                .gender(patient.getGender())
                .marital_status(patient.getMarital_status())
                .birthday(patient.getBirthday())
                .blood_group(patient.getBlood_group())
                .job(patient.getJob())
                .password(patient.getPassword())
                .tel(patient.getTel())
                .build();
    }

    public  static Patient toEntity (PatientDto patient){
        return Patient.builder()
                .id(patient.getId())
                .firstname(patient.getFirstname())
                .lastname(patient.getLastname())
                .email(patient.getEmail())
                .gender(patient.getGender())
                .marital_status(patient.getMarital_status())
                .birthday(patient.getBirthday())
                .blood_group(patient.getBlood_group())
                .job(patient.getJob())
                .password(patient.getPassword())
                .tel(patient.getTel())
                .build();
    }
}

