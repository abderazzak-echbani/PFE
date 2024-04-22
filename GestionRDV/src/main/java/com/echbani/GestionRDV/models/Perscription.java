package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Perscription extends  AbstractEntity{
    private String form_med;
    private Integer nbre_fois;
    private Integer quantite;
    @ManyToOne
    private Ordonnance ordonnance;
    @ManyToOne
    private Medicament medicament;

}
