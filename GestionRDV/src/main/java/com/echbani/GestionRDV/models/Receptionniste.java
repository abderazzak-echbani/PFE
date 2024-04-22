package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Receptionniste extends AbstractEntity {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;

}
