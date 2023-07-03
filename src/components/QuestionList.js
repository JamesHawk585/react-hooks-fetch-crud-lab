import React from "react";
import QuestionItem from "./QuestionItem";
import url from "../constants";

function QuestionList({ questions, setQuestions }) {
  console.log(setQuestions)
  const { id, prompt, answers, correctIndex } = questions;

  const handleDeleteClick = async (id) => {
    const config = { method: "DELETE" }
    const response = await fetch(`${url.questions}/${id}`, config)
    const filteredQuestions = questions.filter(question => question.id !== id)
    setQuestions(filteredQuestions)
    }
  
  const questionMap = questions.map(question =>
  <QuestionItem key={question.id} onDeleteClick={handleDeleteClick} question={question}/>
  )

  const handleAnswerChange = async (id) => {
    
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
