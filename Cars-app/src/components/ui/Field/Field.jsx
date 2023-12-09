// Field.jsx
import React, { useState } from 'react';
import styles from './Field.module.scss';
import search from '../../../../public/images/search.svg';

const Field = ({ onInputChange }) => {
  const [name, setName] = useState('');

  const handleClick = () => {
    onInputChange(name);
  };

  return (
    <label className={styles.label}>
      <input
        type='text'
        placeholder='Search for car name'
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button className={styles.button}onClick={handleClick}>
        <img src={search} alt='Search Icon' />
      </button>
    </label>
  );
};

export default Field;
