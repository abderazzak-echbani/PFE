package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.AddressDto;
import com.echbani.GestionRDV.models.Address;
import com.echbani.GestionRDV.repositories.AddressRepository;
import com.echbani.GestionRDV.services.AddressService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
    private final AddressRepository addressRepository;
    private final ObjectsValidator<AddressDto> validator;
    @Override
    public Integer save(AddressDto dto) {
        validator.validate(dto);
        Address address=AddressDto.toEntity(dto);
        return addressRepository.save(address).getId();
    }

    @Override
    public List<AddressDto> findAll() {
        return addressRepository.findAll().stream()
                .map(AddressDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public AddressDto findById(Integer id) {
        return addressRepository.findById(id)
                .map(AddressDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("No address found with this id"));
    }

    @Override
    public void delete(Integer id) {
        addressRepository.deleteById(id);
    }
}
