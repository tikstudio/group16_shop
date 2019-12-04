import React, { Component } from 'react';
import Helmet from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Title</title>
        </Helmet>
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
