import PropTypes from 'prop-types';

const InputQuestion = ({ number, OPTIONS_TYPE, total, handleDelete }) => {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}>
      <label>
        Pregunta {number}
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
      {number + 1 === total && total > 2 && <button onClick={handleDelete}>Quitar</button>}
    </article>
  );
};

InputQuestion.propTypes = {
  number: PropTypes.number.isRequired,
  OPTIONS_TYPE: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default InputQuestion;
