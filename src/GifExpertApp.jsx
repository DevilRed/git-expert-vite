import { useState } from "react";
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ippo', 'DBZ'])
    const onAddCategory= (newCategory) => {
      if( categories.includes(newCategory) ) return;
      setCategories([...categories, newCategory])
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
          // setCategories={ setCategories }
          onNewCategory={ onAddCategory }
        />
        <ol>
            { categories.map(category => <li key={category}>{ category }</li>)}
        </ol>
    </>
  )
}
