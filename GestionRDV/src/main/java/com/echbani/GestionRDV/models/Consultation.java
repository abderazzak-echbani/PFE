package com.echbani.GestionRDV.models;

import jakarta.persistence.*;
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
public class Consultation extends  AbstractEntity{
    private  String description;

    @OneToOne
    private Rdv rdv;

    @OneToOne(mappedBy = "consultation")
    private Ordonnance ordonnance;

    @OneToOne(mappedBy = "consultation")
    private Facture facture;


}
