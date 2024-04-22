package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
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
public class Medicament extends  AbstractEntity{
    private String name;
    private String note;

    @OneToMany(mappedBy = "medicament")
    private List<Perscription> perscriptions;



}
