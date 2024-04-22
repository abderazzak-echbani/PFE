package com.echbani.GestionRDV.repositories;

import com.echbani.GestionRDV.dto.RdvDto;
import com.echbani.GestionRDV.dto.RdvSumDayDetails;
import com.echbani.GestionRDV.models.Rdv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface RdvRepository extends JpaRepository<Rdv,Integer> {
    List<Rdv> findAllByPatientId(Integer id);

    //@Query(value = "SELECT * FROM `rdv` WHERE status_id=?1", nativeQuery = true)
    List<Rdv> findAllByStatusId(Integer id);

    List<Rdv> findAllByActeMedicaleId(Integer id);
    @Query("select r.dateRdv as rdvDate, count(*) as total from Rdv r where r.createdDate between :start and :end group by r.dateRdv")
    List<RdvSumDayDetails> findTotalRdvByDay(LocalDateTime start, LocalDateTime end);
    @Query(value = "SELECT date_rdv FROM `rdv` GROUP BY date_rdv HAVING COUNT(heure_rdv)>=18", nativeQuery = true)
    List<Date> getUnavailableDates();
    @Query(value = "SELECT heure_rdv FROM `rdv` WHERE date_rdv=?1", nativeQuery = true)
    List<String> getUnavailableHours(String selectedDate);
    @Query(value = "SELECT count(*) FROM `rdv`", nativeQuery = true)
    Integer getSumOfRdvs();

    //
    @Query(value = "select status, COUNT(*) as total FROM `rdv`,`rdv_status` where rdv.status_id=rdv_status.id GROUP BY status ", nativeQuery = true)
    List<Object> getSumOfRdvsByStatus();

    @Query(value = "select type_acte_med, COUNT(*) as total FROM `rdv`,`acte_medicale` where rdv.acte_medicale_id=acte_medicale.id GROUP BY type_acte_med ", nativeQuery = true)
    List<Object> getSumOfRdvsByActeMedicale();

}
