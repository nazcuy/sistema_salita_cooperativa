package com.salita.cooperativa.backend.relevamiento;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Direccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String barrio;
    private String cuadrilla;
    private String cuadricula;
    private String manzana;
    private String frente;
    private String calle;
    private String altura;
    private String depto;

    private Double lat;
    private Double lng;
}