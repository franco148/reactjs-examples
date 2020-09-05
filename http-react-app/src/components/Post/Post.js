import React from 'react';
// Another approach for working with routing props would be HOCs.
// import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {

  // Here we can not see the routing props, we will need to send it as a parameter.
  // console.log(props);
  
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

// export default withRouter(post);
export default post;