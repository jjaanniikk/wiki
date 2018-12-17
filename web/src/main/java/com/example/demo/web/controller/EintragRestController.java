package com.example.demo.web.controller;

import com.example.demo.repository.eintrag.Eintrag;
import com.example.demo.service.EintragService;
import com.example.demo.service.dto.EintragDto;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{eintragId}")
    public Eintrag getEintragById(@PathVariable long eintragId){
        return this.eintragService.getTextById(eintragId);

    }

    @PostMapping
    public void createEintrag(@RequestBody EintragDto eintragDto) {
        this.eintragService.createEintrag(eintragDto);
    }
}
