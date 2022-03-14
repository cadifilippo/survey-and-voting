import { useState, useEffect, useRef } from 'react';
import { MdOutlineAddPhotoAlternate, MdEdit } from 'react-icons/md';
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
          <input type="text" className={styles.description} placeholder="Description" />
        </section>
        <section className="form-body">
          {questions.map((question, idx) => (
            <article key={idx} style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}>
              <label>
                Pregunta {idx + 1}
                <input type="text" placeholder="Question" />
              </label>
              <label>
                Tipo de pregunta
                <select>
                  {OPTIONS_TYPE.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Requerido
                <div className="options">
                  <input type="checkbox" name="required" value="true" />
                </div>
              </label>
              {idx + 1 === questions.length && questions.length > 2 && (
                <button onClick={handleDelete}>Quitar</button>
              )}
              <h3 key={idx}>{JSON.stringify(question)}</h3>
            </article>
          ))}
          <button onClick={handleAddQuestion}>Add Question</button>
        </section>
      </form>
    </article>
  );
};

export default Form;
