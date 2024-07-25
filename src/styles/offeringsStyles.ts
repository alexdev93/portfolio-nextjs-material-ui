import { css } from '@emotion/react';

export const offeringsStyles = {
  section: css`
    min-height: 100vh;
    background-color: #1f2937;
    text-align: center;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  subtitle: css`
    color: #9ca3af;
    font-size: 1.125rem;
    max-width: 32rem;
    margin: 0 auto 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  svg: {
    color: '#6366f1',
    marginLeft: '0.75rem',
    width: '1.5rem',
    height: '1.5rem',
  },
  heading: css`
    color: #fff;
    font-size: 2.25rem;
    font-weight: 600;
    max-width: 48rem;
    margin: 0 auto 4rem;
    line-height: 1.375;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
    @media (min-width: 1280px) {
      font-size: 3.75rem;
    }
  `,
  grid: css`
    text-align: left;
    max-width: 80rem;
    margin: 0 auto;
  `,
  card: css`
    background-color: #374151;
    padding: 2.5rem;
    position: relative;
    &:hover {
      box-shadow: 0.063rem 0.063rem 1.25rem 0.375rem rgb(0 0 0 / 53%);
    }
  `,
  cardContent: (index: number) => css`
    position: relative;
    z-index: 1;
    padding-left: ${index % 2 === 0 ? '12rem' : '0'};
    padding-right: ${index % 2 !== 0 ? '12rem' : '0'};
    @media (max-width: 1280px) {
      padding-left: 0;
      padding-right: 0;
    }
  `,
  cardTitle: css`
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    @media (min-width: 1280px) {
      font-size: 1.875rem;
    }
  `,
  cardDescription: css`
    color: #9ca3af;
    transition: color 0.8s;
    &:hover {
      color: #fff;
    }
  `,
  circle: (img: string, index: number) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: url(${img}) no-repeat 50% 50% / cover;
    clip-path: ${
      index === 1
        ? 'circle(calc(6.25rem + 7.5vw) at 100% 100%)'
        : index === 2
        ? 'circle(calc(6.25rem + 7.5vw) at 0% 100%)'
        : index === 3
        ? 'circle(calc(6.25rem + 7.5vw) at 100% 0%)'
        : 'circle(calc(6.25rem + 7.5vw) at 0% 0%)'
    };
  `,
};
