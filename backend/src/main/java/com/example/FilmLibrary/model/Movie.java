package com.example.FilmLibrary.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String title;
    int releaseYear;
    int duration;
    float rating;

    @ManyToOne
    @JoinColumn(name="genre_id")
    private Genre genre;

    @ManyToOne
    @JoinColumn(name="language_id")
    private Language language;

    @ManyToOne
    @JoinColumn
    private Author author;




}
