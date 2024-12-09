import React, { useEffect } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { addNewItem, searchItem, searching } from '../../store/actions/actions';
import { RootState } from '../../store/store';

import { ItemProps } from '../../Interface';

import styles from './Form.module.css';

function Form() {
  const dispatch = useDispatch();

  const { todolist, searchResults } = useSelector((state: RootState) => state.listTasks);

  const [error, setError] = React.useState<string>('');
  const [inputValue, setInputValue] = React.useState<string>('');

  function handlerClearInput() {
    setInputValue('');
    dispatch(searching(false));
    dispatch(searchItem(''));
    setError('');
  };

  function handlerChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');

    const value = e.target.value;
    if (value.trim() !== '') {
      dispatch(searchItem(value));
      setInputValue(value);
    } else {
      handlerClearInput();
    }
  };

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue === '') {
      return;
    }

    const finedItem = searchResults?.find((el: ItemProps) => el.text === inputValue);

    if (finedItem) {
      setError('Such a task already exists.');
    } else {
      setError('');
      dispatch(addNewItem(inputValue));
      setInputValue('');
    }
  };

  useEffect(() => {
    if (inputValue !== '') {
      setError('');
    }
    // eslint-disable-next-line
  }, [todolist]);

  return (
    <section className={styles.formContainer}>
      <form className={cn(styles.form, error !== '' ? styles.form_error : '')} onSubmit={(e) => submitForm(e)}>
        <fieldset className={styles.fieldset}>
          <input
            className={styles.input}
            placeholder="What needs to be done?"
            type='text'
            onChange={handlerChangeInput}
            value={inputValue}
          />
        </fieldset>
        <button className={styles.clear} onClick={handlerClearInput} type='button' ></button>
      </form>
      <p className={cn(styles.text, error !== '' ? styles.text_error : '')}>{error !== '' ? error : ''}</p>
    </section>
  )
}

export default Form;