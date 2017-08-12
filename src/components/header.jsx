import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  background-color: yellow;
  font-type:  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
`;

const Title = styled.h1`

`;

const Phone = styled.h3`
  > a {
    text-decoration: none;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
      <Title>Spicehaus Internationale</Title>
      <Phone><a href='555-555-1234'>(555) 555-1234</a></Phone>
      </HeaderWrap>
    )
  }
}