package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Facture extends AbstractEntity {

    private double total;
    private double montant_paye;
    private double reste;

    @OneToOne
    private Consultation consultation;



}
