package com.cesde.proyecto_integrador;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.cesde.proyecto_integrador.model")
@EnableJpaRepositories(basePackages = "com.cesde.proyecto_integrador.repository")
public class ProyectoIntegradorApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProyectoIntegradorApplication.class, args);
    }
}