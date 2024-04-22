package com.echbani.GestionRDV.services;

import com.echbani.GestionRDV.dto.RdvDto;
import com.echbani.GestionRDV.dto.RdvSumDayDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface RdvService extends AbstractService<RdvDto>{
    List<RdvDto> findAllByPatientId(Integer id);
    List<RdvDto> findAllByStatusId(Integer id);

    List<RdvDto> findAllByActeMedicaleId(Integer id);
    List<RdvSumDayDetails> findTotalRdvByDay(LocalDate start, LocalDate end);
    List<Date> getUnavailableDates();
    List<String> getUnavailableHours(String selectedDate);
    Integer getSumOfRdvs();
    List<Object> getSumOfRdvsByStatus();
    List<Object> getSumOfRdvsByActeMedicale();
}
