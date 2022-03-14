import { useState, useEffect, useRef } from 'react';
import { MdOutlineAddPhotoAlternate, MdEdit } from 'react-icons/md';
import InputQuestion from '../components/InputQuestion';
import styles from './Form.module.css';

const INITIAL_QUESTION = {
  question: '',
  type: '',
  required: false
};

const OPTIONS_TYPE = ['checkbox', 'option', 'text', 'rating'];

const Form = () => {
  const [cant, setCant] = useState(2);
  const [questions, setQuestions] = useState([...Array(cant)].map(() => INITIAL_QUESTION));
  const [banner] = useState(null);
  const fileInput = useRef(null);

  useEffect(() => {
    if (cant === questions.length) return;

    if (cant > questions.length) {
      setQuestions((prev) => [...prev, INITIAL_QUESTION]);
    } else {
      setQuestions((prev) => prev.slice(0, cant));
    }
  }, [cant]);

  const handleAddQuestion = () => {
    setCant((prev) => prev + 1);
  };

  const handleDelete = () => {
    if (cant === 2) return;
    setCant((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <article className={styles.content}>
      <h1 className={styles.title}>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <section className={styles.header}>
          <div onClick={() => fileInput.current.click()} className={styles.banner_image}>
            {!banner ? (
              <MdOutlineAddPhotoAlternate className={styles.icon} />
            ) : (
              <img src="" alt="banner" style={{ width: '100%', height: '140px' }} />
            )}
            <input ref={fileInput} type="file" hidden />
          </div>
          <label className={styles.name}>
            <input
              type="text"
              className={styles.name_input}
              placeholder="Title"
              autoComplete="false"
              name="survey"
            />
            <MdEdit className={styles.name_icon} />
          </label>
        </section>
        <textarea
          className={styles.description}
          placeholder="Description"
          rows="4"
          maxLength={140}
        />
        <section className={styles.body}>
          {questions.map((question, idx) => (
            <InputQuestion
              key={idx}
              number={idx}
              OPTIONS_TYPE={OPTIONS_TYPE}
              total={questions.length}
              handleDelete={handleDelete}
              question={question}
            />
          ))}
          <button onClick={handleAddQuestion}>Add Question</button>
        </section>
      </form>
    </article>
  );
};

export default Form;
