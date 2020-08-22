import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ingredient.module.css';

// ? PropTypes can work either in class based and funtional components, but it
// ? may be considered as best practice to use it in class based components.
// * const ingredient = (props) => { }

class Ingredient extends Component {

  render() {
    let ingredient = null;

    switch(this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
      case ('meat'):
        ingredient = <div className={styles.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={styles.Bacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={styles.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;
