package com.cesde.proyecto_integrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cesde.proyecto_integrador.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // Removed as it is already inherited from JpaRepository with proper null constraints
    User findByEmail(String email);
    List<User> findByRole(User.Role role);
}
