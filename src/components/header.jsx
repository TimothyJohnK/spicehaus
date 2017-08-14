import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  background-color: rgba(200, 180, 20, .9);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  flex: 1
`;

const Title = styled.h1`
  flex: 6;
  text-align: center;
  font-size: 3em;
`;

const Phone = styled.h3`
flex: 1;
  a {
    color: black;
    text-decoration: none
  };
  a:hover {
    color: lightblue;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <Logo />
        <Title>Spicehaus Internationale</Title>
        <Phone><a href='555-555-1234'>(555) 555-1234</a></Phone>
      </HeaderWrap>
    )
  }
}