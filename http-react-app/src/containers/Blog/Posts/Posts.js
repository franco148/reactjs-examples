import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

  state = {
    posts: [],
    // selectedPostId: undefined,
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
    // this.setState({ selectedPostId: id });
    //? We can use history object inside props, which has many functionalities.
    this.props.history.push({pathname: '/' + id});
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id} >
          //   <Post 
          //     // key={post.id} 
          //     title={post.title} 
          //     author={post.author}
          //     // {...this.props} // We could send the props as a parameter.
          //     clicked={() => this.postSelectedHandler(post.id)} />
          // </Link>

          //? Second Approach: Navigating Programmatically
          <Post 
            key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
        );
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
