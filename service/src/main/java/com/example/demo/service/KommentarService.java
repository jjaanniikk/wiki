package com.example.demo.service;

import com.example.demo.repository.kommentar.KommentarRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class KommentarService {

    private final KommentarRepository kommentarRepository;

    public KommentarService (KommentarRepository kommentarRepository) {
        this.kommentarRepository = kommentarRepository;
    }


}
