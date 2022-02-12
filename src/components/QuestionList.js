import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsList, setQuestions }) {
  const [isQuestionDeleted, handleIsQuestionDeleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => {
        console.log(questions);
        setQuestions(questions);
      });
  }, [isQuestionDeleted]);

  const renderQuestions = questionsList.map((question) => {
    return (
      <QuestionItem
        question={question}
        key={question.id}
        handleDelete={deleteQuestion}
        handleCorrectAnswer={changeCorrectAnswer}
      />
    );
  });

  function deleteQuestion(e) {
    console.log("id: ", e.target.id);
    fetch(`http://localhost:4000/questions/:${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setQuestions(() => [...questionsList]);
    handleIsQuestionDeleted(() => !isQuestionDeleted);
  }

  function changeCorrectAnswer(e) {
    console.log("id: ", e.target.id, "value: ", e.target.value);

    fetch(`http://localhost:4000/questions/:${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      }),
    });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderQuestions}</ul>
    </section>
  );
}

export default QuestionList;
