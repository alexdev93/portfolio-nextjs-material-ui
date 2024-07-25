import React from 'react';
import {
  Header,
  HeaderContent,
  LeftHeader,
  HShape,
  ImageContainer,
  RightHeader,
  Name,
  Description,
  MainButton
} from '../styles/HomeStyles';

const HomeHeader = () => {
  return (
    <Header className="cnt header active" id="home">
      <HeaderContent className="header-content">
        <LeftHeader className="left-header">
          <HShape className="h-shape"></HShape>
          <ImageContainer className="image card">
            <img src='./photo_2024-07-16_06-27-39.jpg' alt="" />
          </ImageContainer>
        </LeftHeader>
        <RightHeader className="right-header">
          <Name className="name">
            Hi, I&apos;m <span>Alemayehu Mekonen.</span>
            A Web Developer.
          </Name>
          <Description style={{ fontStyle: 'italic' }}>
            &quot;Bringing your online vision to life,
            <span className="pixel">one pixel at a time</span>&quot;
            emphasizes my dedication to creating customized and visually appealing website that accurately reflect the brand and
            goals of each client.
          </Description>
          <MainButton href="https://fair-gray-goat-gown.cyclic.app/pdf" className="main-btn" download>
            <span className="btn-text">Download CV</span>
            <span className="btn-icon"><i className="fas fa-download"></i></span>
          </MainButton>
        </RightHeader>
      </HeaderContent>
    </Header>
  );
};

export default HomeHeader;
