import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  };
}

export default App;