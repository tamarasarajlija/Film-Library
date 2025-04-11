package com.example.FilmLibrary.repository;

import com.example.FilmLibrary.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRep extends JpaRepository<Author, Integer> {
}
