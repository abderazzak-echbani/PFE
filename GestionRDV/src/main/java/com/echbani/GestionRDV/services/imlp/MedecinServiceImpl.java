package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.MedecinDto;
import com.echbani.GestionRDV.models.Medecin;
import com.echbani.GestionRDV.repositories.MedecinRepository;
import com.echbani.GestionRDV.services.MedecinService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class MedecinServiceImpl implements MedecinService {
    private final MedecinRepository medecinRepository;
    private final ObjectsValidator<MedecinDto> validator;
    @Override
    public Integer save(MedecinDto dto) {
        validator.validate(dto);
        Medecin medecin=MedecinDto.toEntity(dto);
        return medecinRepository.save(medecin).getId();
    }

    @Override
    public List<MedecinDto> findAll() {
        return medecinRepository.findAll()
                .stream().map(MedecinDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public MedecinDto findById(Integer id) {
        return medecinRepository.findById(id).map(MedecinDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("No medecin was found with the provided ID"));
    }

    @Override
    public void delete(Integer id) {
        medecinRepository.deleteById(id);
    }
}
