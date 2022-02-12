import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestions] = useState([]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm
          questionsList={questionsList}
          setQuestions={setQuestions}
        />
      ) : (
        <QuestionList
          questionsList={questionsList}
          setQuestions={setQuestions}
        />
      )}
    </main>
  );
}

export default App;
