package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.RdvStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RdvStatusRepository extends JpaRepository<RdvStatus,Integer> {
}
