package com.example.FilmLibrary.controller;


import com.example.FilmLibrary.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.FilmLibrary.service.MovieService;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> listAll(){
        return movieService.listAll();
    }

    @GetMapping("/search/title")
    public List<Movie> findByTitle(@RequestParam String title){
        return movieService.findByTitleContainingIgnoreCase(title);

    }

    @GetMapping("/search/genre")
    public List<Movie> findByGenre(@RequestParam String name){
        return movieService.findByGenre_NameContainingIgnoreCase(name);
    }

    @GetMapping("search/author")
    public List<Movie> findByAuthor(@RequestParam String name){
        return movieService.findByAuthor_NameContainingIgnoreCase(name);
    }
}
