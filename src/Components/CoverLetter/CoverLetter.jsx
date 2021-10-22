import React from 'react';
import styled from 'styled-components';

function CoverLetter() {
  return (
    <CoverLetterContainer>
      <IntroduceContainer>
        <IntroduceTitle>Jung Tae Woong</IntroduceTitle>
        <IntroduceDesc>
          다양한 사용자들을 위한 인클루시브 웹에 관심이 많으며 웹 접근성과
          사용자 경험을 중요하게 생각하고 학습하고 있습니다. 사용자와 직접적인
          연관이 있고 애플리케이션의 인상을 담당하는 중요한 파트임에 자긍심을
          가지고 사용자에게 보다 나은 서비스를 제공하기 위해 매일 성장하려고
          노력합니다.
        </IntroduceDesc>
      </IntroduceContainer>
      <KnowMoreLink
        href="https://github.com/jtwjs"
        target="_blank"
        rel="noopener noreferrer">
        Know More
      </KnowMoreLink>
    </CoverLetterContainer>
  );
}

export default CoverLetter;

const CoverLetterContainer = styled.div`
  max-width: 70rem;
  padding: 1rem 0;
`;

const IntroduceContainer = styled.dl`
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.color.primary};
`;

const IntroduceTitle = styled.dt`
  margin-bottom: 3rem;
  font-size: 6rem;
  font-weight: 900;

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: 8rem;
  }
`;

const IntroduceDesc = styled.dd`
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.01em;
  word-break: keep-all;

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: 2.4rem;
  }
`;

const KnowMoreLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  border-radius: 8px;
  padding: 0 4.2rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.bg};
  background-color: ${({ theme }) => theme.color.pink};
  transition: background-color ease-in-out 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.bg};
    background-color: ${({ theme }) => theme.color.pinkDark};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
`;
