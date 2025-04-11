package com.example.FilmLibrary.repository;

import com.example.FilmLibrary.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRep extends JpaRepository<Language, Integer> {

}
