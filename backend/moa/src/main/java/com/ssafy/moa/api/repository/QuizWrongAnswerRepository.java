package com.ssafy.moa.api.repository;

import com.ssafy.moa.api.entity.QuizWrongAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizWrongAnswerRepository extends JpaRepository<QuizWrongAnswer, Long> {
}
