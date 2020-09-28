import React from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import Footer from '../src/components/Footer'


class App extends React.Component {
  

  render() {
    return (
      <div>
        <HeaderContainer /> 
        <Footer /> 
      </div>
    );
  }
}

export default App;
