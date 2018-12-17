package com.example.demo.repository.eintrag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EintragRepository extends JpaRepository<Eintrag, Long> {
}
