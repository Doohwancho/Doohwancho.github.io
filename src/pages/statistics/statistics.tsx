import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from '../../components/Main/ProfileImage'
import { Link } from 'gatsby';
import Sidebar from 'components/Navigation/Sidebar';

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100vw - 150px;
  height: 100vh;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: baseline;
  // width: 768px;
  height: 400px;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const ToyArts: FunctionComponent<IntroductionProps> = function({
  profileImage
}) {
        return (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '150px', width: 'calc(100% - 150px)' }}>
            <Background>
                <Wrapper>
                    {/* <ProfileImage profileImage={profileImage} /> */}

                    <StyledLink to="/statistics/000.확률변수/html_redirection">확률변수</StyledLink>
                    <StyledLink to="/statistics/001.descriptive_statistics/001.distributions/html_redirection">distributions</StyledLink>
                    <StyledLink to="/statistics/001.descriptive_statistics/002.moments_로_분포설명/html_redirection">moments</StyledLink>
                    <StyledLink to="/statistics/001.descriptive_statistics/003.laws/002.central_limit_theorem/html_redirection">central_limit_theorem</StyledLink>
                    <StyledLink to="/statistics/002.inferential_statistics/html_redirection">inferential_statistics</StyledLink>
                    <div>
                        {/* <SubTitle>...</SubTitle> */}
                        <Title>Play!</Title>
                    </div>
                </Wrapper>
            </Background>
          </div>
        </div>
        )
    }

export default ToyArts
