import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
  // El input value se vuelve a renderizar cada vez que ocurre un cambio
  // Si se queda vacia es un valor undefined
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion sencilla
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
