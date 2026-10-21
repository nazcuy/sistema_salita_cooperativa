package com.salita.cooperativa.backend.relevamiento;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String apellidoNombre;
    private Integer anioNacimiento;
    private Long telefono;
    private String procedencia;
    private String observacionesProcedencia;
    private Integer mayoresEnCasa;
    private Integer menoresEnCasa;

    private String situacionLaboral;
    private String rama;
    private String lugarTrabajo;
    private String observacionesTrabajo;

    private String situacionEducativa;

    @Column(length = 2000)
    private String opinionEconomia;
    @Column(length = 2000)
    private String experienciaOrganizacion;
    @Column(length = 2000)
    private String propuestasMejora;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "direccion_id")
    private Direccion direccion;
}