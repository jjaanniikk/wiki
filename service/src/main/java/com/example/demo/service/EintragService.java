package com.example.demo.service;

import com.example.demo.repository.eintrag.Eintrag;
import com.example.demo.repository.eintrag.EintragRepository;
import com.example.demo.service.dto.EintragDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class EintragService {

    private final EintragRepository eintragRepository;

    public EintragService (EintragRepository eintragRepository) {
        this.eintragRepository = eintragRepository;
    }

    public List<EintragDto> getEintraege() {
        return eintragRepository.findAll().stream()
                .map(EintragDto::toDto)
                .collect(Collectors.toList());
    }

    public Eintrag getTextById(long textId) {
        return eintragRepository.findById(textId)
                .orElseThrow(() -> new EintragNotFoundException("Entity not found! " + textId));
    }

    public void createEintrag(EintragDto eintragDto) {
        this.eintragRepository.save
                (new Eintrag(
                        eintragDto.getId(),
                        eintragDto.getTitel(),
                        eintragDto.getText(),
                        eintragDto.getParent_id()));
    }

    public void updateEintrag(EintragDto eintragDto) {
       this.eintragRepository.save
               (new Eintrag(
                       eintragDto.getId(),
                       eintragDto.getTitel(),
                       eintragDto.getText(),
                       eintragDto.getParent_id()));
    }

}
