package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Address extends AbstractEntity {
    private String street;
    private Integer houseNumber;
    private Integer zipCode;
    private String city;
    private String country;

}
