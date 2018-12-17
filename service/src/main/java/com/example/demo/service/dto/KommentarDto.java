package com.example.demo.service.dto;

import com.example.demo.repository.kommentar.Kommentar;

import java.sql.Timestamp;

public class KommentarDto {

    private Integer id;

    private String text;

    private Timestamp zeit;

    private Integer eintrag_id;


    protected KommentarDto() {
        // For Libraries
    }

    public KommentarDto(Integer id, String text, Timestamp zeit, Integer eintrag_id){

        this.id = id;
        this.text = text;

        this.zeit = zeit;
        this.eintrag_id = eintrag_id;
    }

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public void setText(String text) { this.text = text; }

    public void setZeit(Timestamp zeit) { this.zeit = zeit; }

    public void setEintrag_id(Integer eintrag_id) { this.eintrag_id = eintrag_id; }

    public String getText() { return text; }

    public Timestamp getZeit() { return zeit; }

    public Integer getEintrag_id() { return eintrag_id; }


    public static KommentarDto toDto(Kommentar kommentar) {
        if(kommentar == null) {
            return null;
        }
        return new KommentarDto(
                kommentar.getId(),
                kommentar.getText(),
                kommentar.getZeit(),
                kommentar.getEintrag_id()
        );
    }
}
