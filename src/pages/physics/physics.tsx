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
                    <StyledLink to="/physics/sin_ball/html_redirection">SinBall</StyledLink>
                    <div>
                        <Title>Play!</Title>
                    </div>
                </Wrapper>
            </Background>
          </div>
        </div>
        )
    }

export default ToyArts
