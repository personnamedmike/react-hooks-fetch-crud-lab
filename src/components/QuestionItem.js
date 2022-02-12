import React from "react";

function QuestionItem({ question, handleDelete, handleCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index, id) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          onChange={handleCorrectAnswer}
          defaultValue={correctIndex}
          id={id}
        >
          {options}
        </select>
      </label>
      <button id={id} onClick={handleDelete}>
        Delete Question
      </button>
    </li>
  );
}

export default QuestionItem;
