package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
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
public class Ordonnance extends  AbstractEntity{

    private String note;

    @OneToOne
    private Consultation consultation;

    @OneToMany(mappedBy = "ordonnance")
    private List<Perscription> perscriptions;
}
