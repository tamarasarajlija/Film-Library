package com.example.FilmLibrary.service;


import com.example.FilmLibrary.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.FilmLibrary.repository.MovieRep;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRep movieRep;


    public List<Movie> listAll() {
        return movieRep.findAll();
    }


    public List<Movie> findByTitleContainingIgnoreCase(String title) {
        return movieRep.findByTitleContainingIgnoreCase(title);
    }
    public List<Movie> findByGenre_NameContainingIgnoreCase(String name) {
        return movieRep.findByGenre_NameContainingIgnoreCase(name);
    }

    public List<Movie> findByAuthor_NameContainingIgnoreCase(String name) {
        return movieRep.findByAuthor_NameContainingIgnoreCase(name);
    }

}
