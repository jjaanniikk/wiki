package com.example.demo.web.controller;

import com.example.demo.service.EintragService;
import com.example.demo.service.dto.EintragDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/eintraege")
public class EintragRestController {

    private final EintragService eintragService;

    public EintragRestController (EintragService eintragService){
        this.eintragService = eintragService;
    }

    @GetMapping
    public List<EintragDto> getEintraege(){
        return eintragService.getEintraege();
    }
}
