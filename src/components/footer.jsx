import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

const Year = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 1em 0em;
  background-color: rgba(200, 180, 20, .9);
`

export default class Footer extends Component {
  render() {
    let year = new Date();
    return <Year> { year.getFullYear() } </Year>
  
  };
}