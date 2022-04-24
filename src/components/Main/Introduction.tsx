import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

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

const Header = styled.div`
  .header-inner {
    margin: 0 auto;
    max-width: $app-max-width;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ul {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      li {
          display: inline;
          margin-bottom: 0;
          & + li {
              margin-left: 15px;
          }
          a {
              opacity: 0.4;
              &:hover {
                  opacity: 1;
                  transition: 0.3s;
              }
              @media all and (min-width: 768px) {

              }
          }
      }
    }
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <Header>
        <div className="header-inner">
          <Title>GiJoongblog</Title>
          <ul>
            <li>
                <a href="https://github.com/gijoongjang" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="fa-lg"/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/71_joong" target="_blank">
                    <FontAwesomeIcon icon={faInstagramSquare} className="fa-lg"/>
                </a>
            </li>
          </ul>
        </div>
      </Header>
      </Wrapper>
    </Background>
  )
}

export default Introduction