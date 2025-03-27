package com.Salidas.Pedagogicas;

import org.springframework.boot.SpringApplication;

public class TestPedagogicasApplication {

	public static void main(String[] args) {
		SpringApplication.from(PedagogicasApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
