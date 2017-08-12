import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import styled from 'styled-components';


const MainBody = styled.body`
  background: url(./images/bg.jpg) no-repeat center center fixed;
`

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Footer />
      </section>
    )
  };
}

export default App;