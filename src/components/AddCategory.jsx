import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setCategories(categories => [...categories, inputValue]);// using callback due conserv old cats
  }
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}