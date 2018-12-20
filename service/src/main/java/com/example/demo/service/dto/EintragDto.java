package com.example.demo.service.dto;

import com.example.demo.repository.eintrag.Eintrag;

public class EintragDto {

    private Integer id;

    private String titel;

    private String text;

    private Integer parentId;


    protected EintragDto() {
        // For Libraries
    }

    public EintragDto(Integer id, String titel, String text, Integer parentId){

        this.id = id;
        this.titel = titel;
        this.text = text;
        this.parentId = parentId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getTitel() {
        return titel;
    }

    public String getText() {
        return text;
    }

    public Integer getParentId() {
        return parentId;
    }

    public static EintragDto toDto(Eintrag eintrag) {
        if(eintrag == null) {
            return null;
        }
        return new EintragDto(
                eintrag.getId(),
                eintrag.getTitel(),
                eintrag.getText(),
                eintrag.getParentId()
        );
    }
}
