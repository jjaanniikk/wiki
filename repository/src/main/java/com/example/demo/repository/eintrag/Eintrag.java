package com.example.demo.repository.eintrag;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;



@Entity
@Table(name = "eintrag")
public class Eintrag {

    @Valid
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titel;

    @NotBlank
    private String text;

    private Integer parent_id;

    protected Eintrag() {
        //for frameworks
    }

    public Eintrag(@Valid Long id, @NotBlank String titel, @NotBlank String text, Integer parent_id) {
        this.id = id;
        this.titel = titel;
        this.text = text;
        this.parent_id = parent_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setParent_id(Integer parent_id) {
        this.parent_id = parent_id;
    }

    public String getTitel() { return titel; }

    public String getText() {
        return text;
    }

    public Integer getParent_id() {
        return parent_id;
    }

    //sinnvoler consolen output
    @Override
    public String toString() {
        return "Eintrag{" +
                "id=" + id +
                ", titel='" + titel + '\'' +
                ", text=" + text +
                ", parent_id=" + parent_id +
                '}';
    }
}
