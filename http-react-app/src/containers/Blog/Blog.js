import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

// Switch helps us avoid the issue regarding to routing when two or more 
// have similar paths.

import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});


class Blog extends Component {

  state = {
    auth: true
  };

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              {/* We can reference to a different css clas to, like
              activeClassName="my-active" 
              
              Other approach:
              activeStyle={{
                color: '#fa923f',
                textDecoration: 'underline'
              }}
              */}
              <li><NavLink to="/posts/" exact>Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post', // Second example below should be the same.
                // pathname: this.props.match.url + '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
        <Route path="/" render={()=> <h1>Greetings</h1>} /> */}
        <Switch>
          {/* Approach #1 that works like a GUARD in angular */}
          {/* { this.state.auth ? <Route path="/new-post" component={NewPost} /> : null } */}
          { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
          <Route path="/posts" component={Posts} />
          {/* Chaging this route to other page, since we may need to have a nested route
          <Route path="/:id" exact component={FullPost} /> */}

          {/* What about if we want to redirect to posts when specified the root path: /
          This would be one option. 
          However, there is another special component for that. REDIRECT.
          <Route path="/posts" component={Posts} /> */}
          {/* <Redirect from="/" to="/posts" /> */}

          {/* Unknown routes approach */}
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;