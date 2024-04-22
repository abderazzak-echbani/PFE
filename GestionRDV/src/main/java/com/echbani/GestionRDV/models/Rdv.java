package com.echbani.GestionRDV.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Rdv extends AbstractEntity{

    private LocalDate dateRdv;

    private String heureRdv;

    @ManyToOne()
    private Patient patient;

    @ManyToOne()
    private Medecin medecin;

    @OneToOne
    @JoinColumn(name = "acteMedicale_id")
    private ActeMedicale acteMedicale;

    @OneToOne
    @JoinColumn(name = "status_id")
    private RdvStatus status ;
}
