package com.salita.cooperativa.backend.relevamiento;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promotoras")
public class PromotoraController {

    private final PersonaRepository personaRepository;

    public PromotoraController(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    @PostMapping("/visitas")
    public Persona crear(@RequestBody RelevamientoRequest req) {
        Direccion dir = new Direccion();
        dir.setBarrio(req.barrio());
        dir.setCuadrilla(req.cuadrilla());
        dir.setCuadricula(req.cuadricula());
        dir.setManzana(req.manzana());
        dir.setFrente(req.frente());
        dir.setCalle(req.calle());
        dir.setAltura(req.altura());
        dir.setDepto(req.depto());
        dir.setLat(req.lat());
        dir.setLng(req.lng());

        Persona p = new Persona();
        p.setApellidoNombre(req.apellidoNombre());
        p.setAnioNacimiento(req.anioNacimiento());
        p.setTelefono(req.telefono());
        p.setProcedencia(req.procedencia());
        p.setObservacionesProcedencia(req.observacionesProcedencia());
        p.setMayoresEnCasa(req.mayoresEnCasa());
        p.setMenoresEnCasa(req.menoresEnCasa());
        p.setSituacionLaboral(req.situacionLaboral());
        p.setRama(req.rama());
        p.setLugarTrabajo(req.lugarTrabajo());
        p.setObservacionesTrabajo(req.observacionesTrabajo());
        p.setSituacionEducativa(req.situacionEducativa());
        p.setOpinionEconomia(req.opinionEconomia());
        p.setExperienciaOrganizacion(req.experienciaOrganizacion());
        p.setPropuestasMejora(req.propuestasMejora());
        p.setDireccion(dir);

        return personaRepository.save(p);
    }

    @GetMapping("/visitas")
    public List<Persona> listar() {
        return personaRepository.findAll();
    }
}