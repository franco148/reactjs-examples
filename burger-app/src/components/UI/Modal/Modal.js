import React, { Component } from 'react';

import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

// We are converting this to a Class Based component in order to
// see how this is being rendered (to fix performance issues)
class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // With this we are avoiding to re-render or update the ORDER SUMMARY
    // unnecesary.
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[Modal] will update');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
