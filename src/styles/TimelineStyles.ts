// TimelineStyles.ts
import styled from '@emotion/styled';

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
`;

export const Heading = styled.h1`
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const StickyCard = styled.div<{ bgColor: string }>`
  width: 90%;
  max-width: 600px;
  padding: 20px;
//   border-radius: 10px;
  color: #fff;
  margin: 20px 0;
  position: relative;
  background: ${(props) => props.bgColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:nth-of-type(even) {
    margin-left: auto;
  }

  &:nth-of-type(odd) {
    margin-right: auto;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardBody = styled.div`
  position: relative;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CardDate = styled.span`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardSubtitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const CardDetail = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.5;
`;
