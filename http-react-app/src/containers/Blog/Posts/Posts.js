import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

  state = {
    posts: [],
    selectedPostId: undefined,
  }

  componentDidMount() {
    axios.get('/posts')
          .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
              return {
                ...post,
                author: 'Franco'
              }
            });
            // console.log(updatedPosts);
            this.setState({posts: updatedPosts});
          })
          .catch(error => {
            console.log('AN ERROR OCURRED! ', error);
          });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post 
          key={post.id} 
          title={post.title} 
          author={post.author}
          // {...this.props} // We could send the props as a parameter.
          clicked={() => this.postSelectedHandler(post.id)} />;
      });
    }
    

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;