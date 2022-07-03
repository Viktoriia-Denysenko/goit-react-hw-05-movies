import { useState } from 'react';
import s from './Form.module.css';
import { useSearchParams } from 'react-router-dom';

function Form({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase().trim());
    setSearchParams({
      query: event.currentTarget.value.toLowerCase().trim(),
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        name="query"
        value={query}
        autoFocus
        onChange={handleChange}
      ></input>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
}

export default Form;
