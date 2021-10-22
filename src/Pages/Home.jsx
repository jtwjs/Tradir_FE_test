import React from 'react';
import styled from 'styled-components';

import Layout from 'Components/Layout/Layout';
import CoverLetter from 'Components/CoverLetter/CoverLetter';

function Home() {
  return (
    <Layout>
      <HomeSection>
        <Title>Cover Letter</Title>
        <CoverLetter />
      </HomeSection>
    </Layout>
  );
}

export default Home;

const HomeSection = styled.section`
  position: relative;
  width: 100%;
  padding-top: 5rem;

  @media screen and ${({ theme }) => theme.device.desktop} {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      max-width: 56rem;
      width: 100%;
      height: calc(100vh - 6.4rem);
      background-repeat: no-repeat;
      background-size: contain;
      background-position-y: center;
      z-index: -1;
    }

    &::before {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='776' height='774' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M399.686 1.02c89.537-5.046 192.226 6.973 251.804 73.974 57.935 65.153 16.065 167.927 38.256 252.227 20.192 76.708 96.92 137.604 85.004 216.023-12.409 81.665-76.375 149.069-146.998 191.96-67.417 40.944-149.459 42.446-228.066 35.827-72.946-6.142-139.198-34.025-201.761-72.018-68.063-41.334-141.059-82.982-173.322-155.763-33.943-76.568-30.21-165.396-4.361-245.059C46.1 218.5 101.72 153.924 167.695 102.254 235.78 48.931 313.328 5.885 399.686 1.019Z' fill='${({
        theme,
      }) => theme.color.encodingSecondary}'/%3E%3C/svg%3E");
    }

    &::after {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='923' height='875' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M359.508 114.769c78.002-30.597 172.655-49.886 245.08-7.8 70.427 40.925 63.243 144.354 107.53 212.7 40.298 62.19 126.164 93.854 138.462 166.93 12.807 76.101-24.308 154.584-74.482 213.253-47.896 56.006-120.278 81.272-191.981 98.329-66.538 15.828-133.476 10.408-200.09-5.062-72.47-16.83-149.409-32.499-199.276-87.683-52.462-58.056-75.059-137.982-75.354-216.226-.294-78.272 30.238-151.81 73.726-216.915 44.878-67.188 101.153-128.015 176.385-157.526Z' stroke='${({
        theme,
      }) =>
        theme.color
          .encodingPrimary}' stroke-opacity='.4' stroke-width='6'/%3E%3C/svg%3E");
      background-size: 115%;
      background-position: top;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.primary};
`;
