import React, { Component } from 'react';
import styled from 'styled-components';


const CarouselWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
`
const ImageWrapper = styled.div`
  flex: 6;
  height: 500px;
`

const Description = styled.div`
  position: relative;
  justify-content: bottom;
  flex: 1;

`

const Button = styled.button`
  font-size: 3em;
  border-radius: 60px;
  flex: 1;
  border: 0px;
  margin: 1em;
  background-color: rgba(200, 180, 20, .9);
    &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .8);
  }
`

export default class ImgCarousel extends Component {
  render() {
    const imageRepo = [{
      imagePath: "../images/carousel/aji_panca_chiles.jpg",
      description: "Aji Panca Chiles"
    }, {
      imagePath: "../images/carousel/amchur.jpg",
      description: "Amchur/Dried mango powder"
    }, {
      imagePath: "../images/carousel/anise.jpg",
      description: "Anise"
    }, {
      imagePath: "../images/carousel/cardamom.jpg",
      description: "Cardamom"
    }];

    let i = 0;

    // const RenderImage = function () {
    //   return (
    //   <ImageWrapper>
    //     <img src = { imageRepo[i].imagePath.toString() } alt='spice_picture' /> 
    //   <Description>
    //     { imageRepo[i].description.toString() }
    //     </Description>
    //   </ImageWrapper> )
    // }

    const CarouselLeft = function () {
        i--;
        i = i < 0 ? 0 : i;
        console.log(i);
      };
    
    const CarouselRight = function () {
        i++;
        i = i >= imageRepo.length - 1 ? imageRepo.length - 1 : i;
        console.log(i);
        };

    return (
      <CarouselWrapper>
        <Button onClick= { CarouselLeft }> &#x261C; </Button>
        <ImageWrapper>
          <img src = { imageRepo[i].imagePath.toString() } alt='spice_picture' /> 
          <Description> { imageRepo[i].description.toString() } </Description>
        </ImageWrapper>
        <Button onClick= { CarouselRight }> &#x261E; </Button>
      </CarouselWrapper>
      );
    }
  }
