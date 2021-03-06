import React, { Component } from 'react';
import http from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Franco',
    submitted: false
  }

  componentDidMount() {
    {/* Approach #2 that works like a GUARD in angular 

      if unauth => this.props.history.replace('/posts');
    */}
  }

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    // http.post('http://jsonplaceholder.typicode.com/posts', post)
    http.post('/posts', post)
      .then(response => {
        console.log(response);
        this.setState({submitted: true});

        // Onother approach to this CONDITIONAL REDIRECTION approach, would be using
        // HISTORY like following:
        // * this.props.history.push('/posts');
        // * this.props.history.replace('/posts');
      });
  }

  render () {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
        <label>Content</label>
        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
        <label>Author</label>
        <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
          <option value="Max">Franco</option>
          <option value="Manu">Fercho</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;