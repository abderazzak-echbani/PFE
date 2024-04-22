package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FactureRepository extends JpaRepository<Facture,Integer> {

}
