package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Ordonnance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdonnanceRepository extends JpaRepository<Ordonnance,Integer> {
}
