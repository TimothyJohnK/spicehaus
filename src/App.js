import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import ImgCarousel from './components/imgcarousel.jsx';
import Footer from './components/footer.jsx';


class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <ImgCarousel />
        <Footer />
      </section>
    )
  };
}

export default App;