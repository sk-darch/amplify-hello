import React from 'react'
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'
Amplify.configure(aws_exports);

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, World!..
          </p>
        </header>
      </div>
    );
  }
  
}

export default withAuthenticator(App, true);
