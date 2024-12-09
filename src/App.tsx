import React from 'react';
import styles from './styles.module.css';
import Form from './components/Form/Form';
import ItemList from './components/ItemList/ItemList';
import Foooter from './components/Footer/Footer';

function App() {

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.container}>
        <Form />
        <ItemList/>
        <Foooter />
      </div>
    </div>
  );
}

export default App;
