package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.ConsultationDto;
import com.echbani.GestionRDV.models.Consultation;
import com.echbani.GestionRDV.repositories.ConsultationRepository;
import com.echbani.GestionRDV.services.ConsultationService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class ConsultationServiceImpl implements ConsultationService {
    private final ConsultationRepository consultationRepository;
    private final ObjectsValidator<ConsultationDto> validator;
    @Override
    public Integer save(ConsultationDto dto) {
        validator.validate(dto);
        Consultation consultation=ConsultationDto.toEntity(dto);
        return consultationRepository.save(consultation).getId();
    }

    @Override
    public List<ConsultationDto> findAll() {
        return consultationRepository.findAll()
                .stream()
                .map(ConsultationDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public ConsultationDto findById(Integer id) {
        return consultationRepository.findById(id)
                .map(ConsultationDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no consulation not found with the provided Id"));
    }

    @Override
    public void delete(Integer id) {
        consultationRepository.deleteById(id);
    }
}
