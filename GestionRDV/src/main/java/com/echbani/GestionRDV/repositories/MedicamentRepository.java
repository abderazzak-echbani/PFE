package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Medicament;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentRepository extends JpaRepository<Medicament,Integer> {
}
