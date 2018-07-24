import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
   return (
     <div className="jumbotron">
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="about" className="btn btn-primary btn-lg">Go to About</Link>
    </div>
   );
  }
}

export default HomePage;
