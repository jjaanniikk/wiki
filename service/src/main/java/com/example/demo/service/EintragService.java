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
        return eintragRepository.findByParentIdIsNull().stream()
                .map(EintragDto::toDto)
                .collect(Collectors.toList());
    }

    public List<EintragDto> getSubEintraege(int eintragId) {
        return eintragRepository.findByParentIdEquals(eintragId).stream()
                .map(EintragDto::toDto)
                .collect(Collectors.toList());
    }

    public Eintrag getEintragById(int eintragId) {
        return eintragRepository.findById(eintragId)
                .orElseThrow(() -> new EintragNotFoundException("Entity not found! " + eintragId));
    }

    public void createEintrag(EintragDto eintragDto) {
        this.eintragRepository.save
                (new Eintrag(
                        eintragDto.getId(),
                        eintragDto.getTitel(),
                        eintragDto.getText(),
                        eintragDto.getParentId()));
    }

    public void updateEintrag(EintragDto eintragDto) {
       Eintrag eintrag = this.eintragRepository.findById(eintragDto.getId()).orElseThrow(() -> new EintragNotFoundException("Nicht gefunden"));
       eintrag.setText(eintragDto.getText());
       eintrag.setTitel(eintragDto.getTitel());
    }

    public void deleteEintragById(int id) {
        this.eintragRepository.deleteById(id);
    }
}
