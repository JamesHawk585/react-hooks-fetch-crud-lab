import React from "react";
import QuestionItem from "./QuestionItem";
import url from "../constants";

function QuestionList({ questions, setQuestions }) {
  console.log(setQuestions)
  const { id, prompt, answers, correctIndex } = questions;

  const handleDeleteClick = async (id) => {
    console.log("Clicked")
    //  List of questions
    //  Have an id
    //  need to change the luist of questions 
    //  need to change the list of questions to match the deletion 
    const config = { method: "DELETE" }
    const response = await fetch(`${url.questions}/${id}`, config)
    // no state change yet, but I still want to test.
    // our state is contained in questions
    console.log("Questions state: ", questions)
    const filteredQuestions = questions.filter(question => question.id !== id)
    console.log("Filtered questions: ", filteredQuestions)
    setQuestions(filteredQuestions)
    }
  
  const questionMap = questions.map(question =>
  <QuestionItem key={question.id} onDeleteClick={handleDeleteClick} question={question}/>
  )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
