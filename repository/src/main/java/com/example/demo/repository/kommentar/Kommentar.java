package com.example.demo.repository.kommentar;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

@Entity
public class Kommentar {

    @Valid
    @Id
    private Integer id;

    @NotBlank
    private String text;

    @NotBlank
    private Timestamp zeit;

    @NotBlank
    private Integer eintrag_id;

    protected Kommentar() {
        //for frameworks
    }

    public Kommentar(@Valid Integer id, @NotBlank String text, @NotBlank Timestamp zeit, @NotBlank Integer eintrag_id) {
        this.id = id;
        this.text = text;
        this.zeit = zeit;
        this.eintrag_id = eintrag_id;
    }

    public Integer getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Timestamp getZeit() {
        return zeit;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setZeit(Timestamp zeit) {
        this.zeit = zeit;
    }

    public void setEintrag_id(Integer eintrag_id) {
        this.eintrag_id = eintrag_id;
    }

    public Integer getEintrag_id() {
        return eintrag_id;
    }

    //sinnvoler consolen output
    @Override
    public String toString() {
        return "Kommentar{" +
                "id=" + id +
                ", test='" + text + '\'' +
                ", zeit=" + zeit +
                ", eintrag_id=" + eintrag_id +
                '}';
    }
}
