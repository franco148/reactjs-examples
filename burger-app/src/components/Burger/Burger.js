import React from 'react';

import BurgerIngredient from './Ingredient/Ingredient';

import styles from './Burger.module.css';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
      .map(ingKey => {
        return [...Array(props.ingredients[ingKey])]
              .map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />;
              });
      });

  return (
    // <div className={styles.Burger}>
    //   <BurgerIngredient type="bread-top" />
    //   <BurgerIngredient type="cheese" />
    //   <BurgerIngredient type="meat" />
    //   <BurgerIngredient type="bread-bottom" />
    // </div>

    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
