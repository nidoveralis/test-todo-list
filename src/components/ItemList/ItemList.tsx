import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ItemList.module.css';
import Item from "../Item/Item";
import { RootState } from '../../store/store';
import { ItemProps } from '../../Interface';

function ItemList() {
  const { todolist, sortType } = useSelector((state: RootState) => state.listTasks.listTasks);

  const [list, setlist] = React.useState<ItemProps[]>(todolist);

  useEffect(() => {
    let newList: ItemProps[] = [];
    if (sortType === 'active') {
      newList = todolist.filter((el) => !el.status);
    } else if (sortType === 'completed') {
      newList = todolist.filter((el) => el.status);
    } else {
      newList = todolist;
    }
    setlist(newList);
  }, [sortType, todolist]);

  return (
    <ul className={styles.list}>
      {list?.length > 0 ? list.map((el) => (
        <Item
          key={el.id}
          elem={el}
        />
      )) : ''}
    </ul>
  )
}
export default ItemList;