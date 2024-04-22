package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultationRepository extends JpaRepository<Consultation,Integer> {
}
