import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['naruto']);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      {
        <ol>
          {categories.map((category, i) => (
            // <li key={(category, i)}>{category}</li>
            <GifGrid category={category} key={category} />
          ))}
        </ol>
      }
    </>
  );
};

export default GiftExpertApp;
