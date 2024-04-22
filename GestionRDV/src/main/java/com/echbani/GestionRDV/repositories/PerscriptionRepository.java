package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Perscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerscriptionRepository extends JpaRepository<Perscription,Integer> {
}
