package com.example.demo.repository.eintrag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EintragRepository extends JpaRepository<Eintrag, Integer> {

    /*get all eintraege*/
    List<Eintrag> findByParentIdIsNull();

    /*get all sub-eintraege*/
    List<Eintrag> findByParentIdEquals(int parentId);

}
