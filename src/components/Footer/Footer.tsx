import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { completedItem, changeSortType } from '../../store/actions/actions';
import { RootState } from '../../store/store';


import styles from './Footer.module.css';
import { ItemProps } from '../../Interface';

function Foooter() {
  const dispatch = useDispatch();

  const todolist = useSelector((state: RootState) => state.listTasks.todolist);

  const [isActiveBtn, setIsActiveBtn] = useState<string>('all');

  const noCompletedItem = todolist.filter((item: ItemProps) => !item.status);

  function handlerClickBtnClearCompleted() {
    const checkList = todolist.filter((el: ItemProps) => el.status);
    const isCheck = checkList.length === todolist.length;

    todolist.forEach((el: ItemProps) => {
      dispatch(completedItem(el.id, !isCheck))
    });
  };

  function handlerClickBtnSorting (data: string) {
    setIsActiveBtn(data);
    dispatch(changeSortType(data));
  };

  return (
    <div className={styles.footer}>
      <p>{`${noCompletedItem.length} items left`}</p>
      <div>
        <button
          onClick={() => handlerClickBtnSorting('all')}
          className={cn(styles.footer__button, isActiveBtn === 'all' ? styles.footer__button_active : '')}
        >All</button>
        <button
          onClick={() => handlerClickBtnSorting('active')}
          className={cn(styles.footer__button, isActiveBtn === 'active' ? styles.footer__button_active : '')}
        >Active</button>
        <button
          onClick={() => handlerClickBtnSorting('completed')}
          className={cn(styles.footer__button, isActiveBtn === 'completed' ? styles.footer__button_active : '')}
        >Completed</button>
      </div>
      <button
        className={cn(styles.footer__button, todolist.length === 0 ? styles.footer__button_disabled : '')}
        disabled={todolist.length === 0}
        onClick={handlerClickBtnClearCompleted}
      >Clear completed</button>
    </div >
  )
}

export default Foooter;