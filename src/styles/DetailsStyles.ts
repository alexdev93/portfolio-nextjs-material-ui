import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StorysContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 120vh;
  padding: 40px 20px;
  background: #f5f5f5;
`;

export const OuterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StoryContainer = styled.div<{ isOdd: boolean }>`
  width: 100%;
  max-width: 280px;
  background: ${({ isOdd }) => (isOdd ? '#d32f2f' : '#1e88e5')};
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const InfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const StyledTypography = styled(Typography)`
  color: #fff;
  line-height: 1.5;
`;
