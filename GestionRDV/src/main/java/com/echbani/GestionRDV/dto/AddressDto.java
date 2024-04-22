package com.echbani.GestionRDV.dto;

import com.echbani.GestionRDV.models.Address;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Builder
public class AddressDto {
    private Integer id;
    @NotNull
    @NotEmpty
    @NotBlank
    private String street;
    @NotNull
    @NotEmpty
    @NotBlank
    private Integer houseNumber;
    @NotNull
    @NotEmpty
    @NotBlank
    private Integer zipCode;
    @NotNull
    @NotEmpty
    @NotBlank
    private String city;
    @NotNull
    @NotEmpty
    @NotBlank
    private String country;

    public static AddressDto fromEntity(Address address){
        return AddressDto.builder()
                .id(address.getId())
                .city(address.getCity())
                .country(address.getCountry())
                .houseNumber(address.getHouseNumber())
                .zipCode(address.getZipCode())
                .street(address.getStreet())
                .build();
    }

    public static Address toEntity(AddressDto addressDto){
        return Address.builder()
                .id(addressDto.getId())
                .city(addressDto.getCity())
                .country(addressDto.getCountry())
                .houseNumber(addressDto.getHouseNumber())
                .zipCode(addressDto.getZipCode())
                .street(addressDto.getStreet())
                .build();
    }
}
