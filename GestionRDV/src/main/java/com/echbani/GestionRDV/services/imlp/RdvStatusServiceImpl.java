package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.RdvStatusDto;
import com.echbani.GestionRDV.models.RdvStatus;
import com.echbani.GestionRDV.repositories.RdvStatusRepository;
import com.echbani.GestionRDV.services.RdvStatusService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RdvStatusServiceImpl implements RdvStatusService {
    private final ObjectsValidator<RdvStatusDto> validator;
    private final RdvStatusRepository repository;
    @Override
    public Integer save(RdvStatusDto dto) {
        validator.validate(dto);
        RdvStatus rdvStatus=RdvStatusDto.toEntity(dto);
        return repository.save(rdvStatus).getId();
    }

    @Override
    public List<RdvStatusDto> findAll() {
        return repository.findAll().stream()
                .map(RdvStatusDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public RdvStatusDto findById(Integer id) {
        return repository.findById(id)
                .map(RdvStatusDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no stauts found whit the provided Id"));
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}
