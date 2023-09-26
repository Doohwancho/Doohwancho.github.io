import React, { FunctionComponent } from 'react'
import styled from '@Emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from './ProfileImage'
import { Link } from 'gatsby';

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
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


const Introduction: FunctionComponent<IntroductionProps> = function({
  profileImage
}) {
        return (
            <Background>
                <Wrapper>
                    {/* <ProfileImage profileImage={profileImage} /> */}

					<Link to="/play/snakegame/SnakeGame">SnakeGame</Link>
					<Link to="/play/hamberger/Hamberger">Hamberger</Link>
                    <div>
						{/* <SubTitle>...</SubTitle> */}
                        <Title>Play!</Title>
                    </div>
                </Wrapper>
            </Background>
        )
    }

export default Introduction
