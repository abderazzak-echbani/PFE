package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.ActeMedicaleDto;
import com.echbani.GestionRDV.models.ActeMedicale;
import com.echbani.GestionRDV.repositories.ActeMedicaleRepsitory;
import com.echbani.GestionRDV.services.ActeMedicaleService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class ActeMedicaleServiceIml implements ActeMedicaleService {
    private final ActeMedicaleRepsitory acteMedicaleRepsitory;
    private final ObjectsValidator<ActeMedicaleDto> validator;
    @Override
    public Integer save(ActeMedicaleDto dto) {
        validator.validate(dto);
        ActeMedicale acteMedicale=ActeMedicaleDto.toEntity(dto);
        return acteMedicaleRepsitory.save(acteMedicale).getId();
    }

    @Override
    public List<ActeMedicaleDto> findAll() {
        return acteMedicaleRepsitory.findAll().stream()
                .map(ActeMedicaleDto::fromEntity).collect(Collectors.toList());
    }

    @Override
    public ActeMedicaleDto findById(Integer id) {
        return acteMedicaleRepsitory.findById(id)
                .map(ActeMedicaleDto::fromEntity)
                .orElseThrow( ()->new EntityNotFoundException("no ActeMedco no fin with tho provided ID :"+id));
    }

    @Override
    public void delete(Integer id) {
     acteMedicaleRepsitory.deleteById(id);
    }
}
