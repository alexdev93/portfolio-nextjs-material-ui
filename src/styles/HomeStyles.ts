// HeaderStyles.js
import styled from '@emotion/styled';
import { isMobile } from './../utils/mediaQueries';

export const Header = styled.header`
  min-height: 120vh;
  color: var(--color-white);
  overflow: hidden;
  padding: 0 !important;
  background-color: var(--color-primary);
  margin-bottom: 10;
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  gap: 5em;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 6rem;
  }

  ${isMobile`
    margin: 0 auto;
    width: 90%;
   `}
  
`;

export const LeftHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${isMobile`
    margin-left: 0;
    height: 50%;
   `}
`;

export const HShape = styled.div`
  transition: all 0.4s ease-in-out;
  width: 65%;
  height: 100%;
  background-color: green;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);

  ${isMobile`
   display: none;
  `}

`;

export const ImageContainer = styled.div`
  border-radius: 14px;
  height: 90%;
  width: 100%;
  margin-left: 4rem;
  background-color: var(--color-black);
  overflow: hidden; /* Ensures the image does not overflow the container */
  transition: all 0.4s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    filter: grayscale(100%);
  }

  ${isMobile`
    margin-left: 0; /* Adjust the margin for mobile devices */
    height: 60vh; /* Adjust the height for mobile devices */
  `}
`;

export const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 8rem;

  @media screen and (max-width: 800px) {
    grid-row: 1;
    padding-right: 0;
    width: 90%;
    margin: 0 auto;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
    text-align: center;
    padding-top: 3rem;
  }

  span {
    color: var(--color-secondary);
  }
`;

export const Description = styled.p`
  margin: 1.5rem 0;
  line-height: 2rem;
`;

export const MainButton = styled.a`
  border-radius: 30px;
  color: inherit;
  font-weight: 600;
  position: relative;
  border: 1px solid var(--color-secondary);
  display: flex;
  align-self: flex-start;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s ease-out;

  .btn-text {
    padding: 0 2rem;
  }

  .btn-icon {
    background-color: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 1rem;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    background-color: var(--color-secondary);
    transform: translateX(0);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.4s ease-out;
    z-index: -1;
  }
`;
