package com.example.FilmLibrary.repository;

import com.example.FilmLibrary.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRep extends JpaRepository<Genre, Integer> {
}
