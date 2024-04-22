package com.echbani.GestionRDV.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface RdvSumDayDetails {
    LocalDate getRdvDate();
    BigDecimal getTotal();
}
