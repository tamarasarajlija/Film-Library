package com.example.FilmLibrary.repository;

import com.example.FilmLibrary.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRep extends JpaRepository<Movie, Integer> {


    List<Movie> findByTitleContainingIgnoreCase(String title);
    List<Movie> findByGenre_NameContainingIgnoreCase(String name);
    List<Movie> findByAuthor_NameContainingIgnoreCase(String name);


}
