import { useState, useEffect } from 'react';

const INITIAL_QUESTION = {
  question: '',
  type: '',
  options: []
};

// const OPTIONS_TYPE = {
//   CHECKBOX: 'checkbox',
//   OPTION: 'option',
//   TEXT: 'text',
//   RATING: 'rating'
// };

const Form = () => {
  const [cant, setCant] = useState(2);
  const [questions, setQuestions] = useState([...Array(cant)].map(() => INITIAL_QUESTION));

  useEffect(() => {
    if (cant === questions.length + 1) return;

    if (cant > questions.length + 1) {
      setQuestions((prev) => [...prev, INITIAL_QUESTION]);
    } else {
      setQuestions((prev) => prev.slice(0, cant));
    }
    console.log(questions);
  }, [cant]);

  const handleAddQuestion = () => {
    setCant(cant + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <div
            className="banner-image"
            style={{ width: '100%', height: '140px', backgroundColor: 'tomato' }}
          >
            <img src="" alt="banner" style={{ width: '100%', height: '140px' }} />
            <input type="file" hidden />
          </div>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
        </div>
        <div className="form-body">
          {questions.map((question, idx) => (
            <h3 key={idx}>{JSON.stringify(question)}</h3>
          ))}
          <button onClick={handleAddQuestion}>Add Question</button>
        </div>
      </form>
    </>
  );
};

export default Form;
