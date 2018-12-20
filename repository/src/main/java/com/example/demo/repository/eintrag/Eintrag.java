package com.example.demo.repository.eintrag;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;



@Entity
public class Eintrag {

    @Valid
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @NotBlank
    private String titel;

    @NotBlank
    private String text;

    private Integer parentId;

    protected Eintrag() {
        //for frameworks
    }

    public Eintrag(@Valid Integer id, @NotBlank String titel, @NotBlank String text, Integer parentId) {
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

    public String getTitel() { return titel; }

    public String getText() {
        return text;
    }

    public Integer getParentId() {
        return parentId;
    }

    //sinnvoler consolen output
    @Override
    public String toString() {
        return "Eintrag{" +
                "id=" + id +
                ", titel='" + titel + '\'' +
                ", text=" + text +
                ", parentId=" + parentId +
                '}';
    }
}
