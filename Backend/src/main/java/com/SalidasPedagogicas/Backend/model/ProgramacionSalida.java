package com.SalidasPedagogicas.Backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalTime;

@Entity
@Table(name = "programacion_salida")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProgramacionSalida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "grupo_id", nullable = false)
    private grupo grupo;

    @Column(nullable = false)
    private int numeroEstudiantes;

    @Column(nullable = false)
    private LocalTime horaSalida;

    @Column(nullable = false)
    private LocalTime horaLlegada;

    @Column(nullable = false, length = 255)
    private String destino;
}
