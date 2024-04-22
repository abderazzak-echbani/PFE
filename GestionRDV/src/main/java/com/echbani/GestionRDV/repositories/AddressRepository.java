package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Integer> {
}
