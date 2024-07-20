import styled from '@emotion/styled';

export const StorysContainer = styled.div`
display: grid;
place-items: center;
width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;


export const StoryContainer = styled.div<{ isOdd: boolean }>`
  width: 90%;
  background: var(--primary-color);
  // align-self: ${({ isOdd }) => (isOdd ? 'flex-end' : 'flex-start')};
  &:nth-of-type(even) {
    margin-left: auto;
  }

  &:nth-of-type(odd) {
    margin-right: auto;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    flex-direction: column;
    padding: 30px 0;
    margin-left: auto;
    margin-right: auto;
  }
`;


export const InfoContainer = styled.div`
  background: var(--color-grey-5);
  color: var(--color-grey-3);
  padding: 10px;
  gap: 2em;
  margin: 0 15px;
`;

export const Title = styled.h3`
  color: var(--color-white);
  position: relative;
  letter-spacing: 0.2px;
  

  &:nth-of-type(even) {
    text-align: right;
  }

`;
