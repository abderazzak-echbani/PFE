package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient,Integer> {
    Optional<Patient> findByEmail(String email);

    @Query(value = "select gender, COUNT(*) as total FROM `patient` GROUP BY gender ", nativeQuery = true)
    List<Object> getSumOfPatientsByGender();

    @Query(value = "select role, COUNT(*) as total FROM `patient` GROUP BY role ", nativeQuery = true)
    List<Object> getSumOfUsersByRole();
}
