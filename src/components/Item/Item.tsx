import cn from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './Item.module.css';
import { monthsList } from '../../utils/constants';
import { ItemProps } from '../../Interface';
import { removeItem, completedItem } from '../../store/actions/actions';

interface Props {
  elem: ItemProps;
}

const Item: React.FC<Props> = ({ elem }) => {
  const dispatch = useDispatch();

  const checkboxId = `checkbox-${elem.id}`;

  const dateParts = elem.day.split('.');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  const formattedDate = `${day} ${monthsList[parseInt(month) - 1]} ${year}`;

  function handlerClickButtonRemove() {
    dispatch(removeItem(elem.id));
  };

  function handlerClickCheckbox() {
    dispatch(completedItem(elem.id, !elem.status));
  };

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <input
          type='checkbox'
          className={styles.status}
          onChange={handlerClickCheckbox}
          checked={elem.status}
          id={checkboxId}
        />
        <label htmlFor={checkboxId} className={styles.customLabel}></label>

        <p className={cn(styles.text, elem.status && styles.text_check)}>{elem.text}</p>
      </div>
      <div className={styles.day}>{formattedDate}</div>
      <div className={cn(styles.container, styles.container_right, elem.status && styles.container_active)}>
        <button className={cn(styles.remove, styles.button)} onClick={handlerClickButtonRemove} ></button>
      </div>

    </li>
  )
}
export default Item;