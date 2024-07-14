import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  background-color: var(--color-grey-4);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.7rem 0;
  box-shadow: var(--box-shadow-1);

  &:hover {
    background-color: var(--color-secondary);
    transition: all 0.4s ease-in-out;
  }

  &:hover > svg {
    fill: var(--color-white);
  }
`;

export const NavigationIcon = css`
  width: 28px;
  height: 28px;
  fill: var(--color-grey-2); /* Adjust based on your design */
`;
