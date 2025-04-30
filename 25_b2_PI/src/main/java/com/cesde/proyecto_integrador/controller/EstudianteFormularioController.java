package com.cesde.proyecto_integrador.controller;

import com.cesde.proyecto_integrador.model.EstudianteFormulario;
import com.cesde.proyecto_integrador.repository.EstudianteFormularioRepository;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/estudiantes")
public class EstudianteFormularioController {

    private final EstudianteFormularioRepository repository;

    public EstudianteFormularioController(EstudianteFormularioRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<EstudianteFormulario> getAllEstudiantes() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EstudianteFormulario> getEstudianteById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EstudianteFormulario> createEstudiante(@RequestBody @Valid EstudianteFormulario estudiante) {
        EstudianteFormulario savedEstudiante = repository.save(estudiante);
        return ResponseEntity.status(201).body(savedEstudiante);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EstudianteFormulario> updateEstudiante(@PathVariable Long id, @RequestBody @Valid EstudianteFormulario estudianteDetails) {
        return repository.findById(id).map(estudiante -> {
            estudiante.setNombre(estudianteDetails.getNombre());
            estudiante.setApellido(estudianteDetails.getApellido());
            estudiante.setTipoDocumento(estudianteDetails.getTipoDocumento());
            estudiante.setNumeroDocumento(estudianteDetails.getNumeroDocumento());
            estudiante.setCorreo(estudianteDetails.getCorreo());
            estudiante.setNumero(estudianteDetails.getNumero());
            estudiante.setDocumentoCargado(estudianteDetails.getDocumentoCargado());
            estudiante.setPermisoCargado(estudianteDetails.getPermisoCargado());
            EstudianteFormulario updatedEstudiante = repository.save(estudiante);
            return ResponseEntity.ok(updatedEstudiante);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEstudiante(@PathVariable Long id) {
        Optional<EstudianteFormulario> estudianteOpt = repository.findById(id);
        if (estudianteOpt.isPresent()) {
            repository.delete(estudianteOpt.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
