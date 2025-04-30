package com.cesde.proyecto_integrador.model;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Table(name = "Estudiante")
@Entity
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_estudiante;

    private long id_persona;
    private long id_grupo;
    private LocalDateTime fecha_registro;

    // Getters y Setters
    public Long getId_estudiante() {
        return id_estudiante;
    }

    public void setId_estudiante(Long id_estudiante) {
        this.id_estudiante = id_estudiante;
    }

    public long getId_persona() {
        return id_persona;
    }

    public void setId_persona(long id_persona) {
        this.id_persona = id_persona;
    }

    public long getId_grupo() {
        return id_grupo;
    }

    public void setId_grupo(long id_grupo) {
        this.id_grupo = id_grupo;
    }

    public LocalDateTime getFecha_registro() {
        return fecha_registro;
    }

    public void setFecha_registro(LocalDateTime fecha_registro) {
        this.fecha_registro = fecha_registro;
    }
}