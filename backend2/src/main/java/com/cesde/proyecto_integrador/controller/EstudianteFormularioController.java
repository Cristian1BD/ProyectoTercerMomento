package com.example.backend.controlador;

import com.example.backend.model.EstudianteFormulario;
import com.example.backend.repository.EstudianteFormularioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/estudiantes")
public class EstudianteFormularioController {

    @Autowired
    private EstudianteFormularioRepository repository;

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
    public EstudianteFormulario createEstudiante(@RequestBody EstudianteFormulario estudiante) {
        return repository.save(estudiante);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EstudianteFormulario> updateEstudiante(@PathVariable Long id, @RequestBody EstudianteFormulario estudianteDetails) {
        return repository.findById(id).map(estudiante -> {
            estudiante.setNombre(estudianteDetails.getNombre());
            estudiante.setApellido(estudianteDetails.getApellido());
            estudiante.setTipoDocumento(estudianteDetails.getTipoDocumento());
            estudiante.setNumeroDocumento(estudianteDetails.getNumeroDocumento());
            estudiante.setCorreo(estudianteDetails.getCorreo());
            estudiante.setNumero(estudianteDetails.getNumero());
            estudiante.setDocumentoCargado(estudianteDetails.getDocumentoCargado());
            estudiante.setPermisoCargado(estudianteDetails.getPermisoCargado());
            return ResponseEntity.ok(repository.save(estudiante));
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

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
