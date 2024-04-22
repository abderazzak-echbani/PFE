package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Medecin extends AbstractEntity {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String npe;

    @OneToMany(mappedBy = "medecin")
    private List<Rdv> rdvs;

    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;
}
