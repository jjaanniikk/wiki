package com.example.demo.repository.kommentar;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KommentarRepository extends JpaRepository<Kommentar, Integer> {
}
