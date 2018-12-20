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
        return this.eintragService.getEintraege();
    }

    @GetMapping("/getSubEintraege/{eintragId}")
    public List<EintragDto> getSubEintraege(@PathVariable int eintragId) {
        return this.eintragService.getSubEintraege(eintragId);
    }

    @GetMapping("/{eintragId}")
    public Eintrag getEintragById(@PathVariable int eintragId){
        return this.eintragService.getEintragById(eintragId);
    }

    @PostMapping
    public void createEintrag(@RequestBody EintragDto eintragDto){
        this.eintragService.createEintrag(eintragDto);
    }

    @PutMapping("/{id}")
    public void updateEintrag(@RequestBody EintragDto eintragDto){
        this.eintragService.updateEintrag(eintragDto);
    }

    @DeleteMapping("/{id}")
    public void deleteEintragById(@PathVariable int id){
        this.eintragService.deleteEintragById(id);
    }

}
