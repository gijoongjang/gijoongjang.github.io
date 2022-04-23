import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-image: url("sky.jpg");
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 350px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  color: white;
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <Title> GiJoongblog</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction