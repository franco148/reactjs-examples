import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    // This is not handle when GET operations occurs, because the order
    // of the lifecycle hooks, for that we need to use componentWillMount,
    // sinde this will be deprecated, we can also use constructor.
    // componentDidMount() {
    //   axios.interceptors.request.use(req => {
    //     console.log('REQUEST OCCURRED');
    //     this.setState({ error: null });
    //     return req;
    //   });
    //   axios.interceptors.response.use(res => res, error => {
    //     console.log('An error occurred: ', error);
    //     this.setState({ error });
    //   });
    // }
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        console.log('REQUEST OCCURRED');
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        console.log('An error occurred: ', error);
        this.setState({ error });
      });
    }

    // componentWillMount is registering interceptos, which can cause memory leaks.
    // So we need to fix it with the following.
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            <p>Something didn't work!</p>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
