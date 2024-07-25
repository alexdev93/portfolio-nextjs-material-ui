import styled from '@emotion/styled';
import { css } from '@emotion/react';
import createCustomTheme from './../theme';

// Get theme values
const theme = createCustomTheme();

export const ControlsContainer = styled.nav`
  position: fixed;
  z-index: 10;
  top: 50%;
  right: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);

  @media (max-width: 700px) {
    top: auto;
    bottom: 0;
    flex-direction: row;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export const Control = styled.div`
  padding: 1rem;
  cursor: pointer;
  background-color: ${theme.palette.grey[400]};
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.7rem 0;
  box-shadow: var(--box-shadow-1);

  &:hover {
    background-color: ${theme.palette.secondary.main};
    transition: all 0.4s ease-in-out;
  }

  &:hover > svg {
    fill: ${theme.palette.common.white};
  }
`;

export const NavigationIcon = css`
  width: 28px;
  height: 28px;
  fill: ${theme.palette.grey[200]}; /* Adjust based on your design */
`;
