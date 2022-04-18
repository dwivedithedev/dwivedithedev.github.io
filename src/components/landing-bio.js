import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import {  css, keyframes } from '@emotion/core'

let me = require("../components/me.jpeg");  
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const wordsArray = ["Writer?","Indie Hacker","Indie Maker","Programmer","Technology Enthusiast","Web Master","Psychology Enthusiast"];
const wordsArray2 = ["Learner","AR/VR Geek","Javascript Developer","#ReactGang","I Make and Break stuff","Occasional Unity Dev."]
var subtitle = wordsArray[Math.floor(Math.random() * wordsArray.length)] +" | "+ wordsArray2[Math.floor(Math.random() * wordsArray2.length)];

//Erin E. Sullivan's codepen!
const glitch = keyframes`
0% {  
  transform: translateX(0);
  text-shadow: 
      0 0 0 #0c2ffb, 
      0 0 0 #2cfcfd, 
      0 0 0 #fb203b, 
      0 0 0 #fefc4b;
}

20% {  
  transform: translateX(-0.2em);
  text-shadow: 
      0 0.125em 0 #0c2ffb, 
      0 0.25em 0 #2cfcfd, 
      0 -0.125em 0 #fb203b, 
      0 -0.25em 0 #fefc4b;
}

40% {  
  transform: translateY(-0.2em);
  text-shadow: 
      0 -0.0625em 0 #0c2ffb, 
      0 -0.125em 0 #2cfcfd, 
      0 0.0625em 0 #fb203b, 
      0 0.125em 0 #fefc4b;
}

60% {
  transform: translateX(0.2em);
  text-shadow: 
      0 0.03125em 0 #0c2ffb, 
      0 0.0625em 0 #2cfcfd, 
      0 -0.03125em 0 #fb203b, 
      0 -0.0625em 0 #fefc4b;
}

80% {  
  transform: translateX(0.3em);
  text-shadow: 
      0 0 0 #0c2ffb, 
      0 0 0 #2cfcfd, 
      0 0 0 #fb203b, 
      0 0 0 #fefc4b;
}

100% {
  transform: translateX(0);
  text-shadow: 
      0 0 0 #0c2ffb, 
      0 0 0 #2cfcfd, 
      0 0 0 #fb203b, 
      0 0 0 #fefc4b;
}
`

const Container = styled.div`
  text-align: center;
`

const IMGContainer = styled.img`
  height:30%;
  width:30%;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;

  &:hover {
  }
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
  text-decoration: none;
`

const NavLink = styled.a`
color: #677CE2;
text-decoration: none;
font-weight: bold;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
        <IMGContainer src={me} />
          <NameHeader css={css`
          &:hover {
         animation: ${glitch} 1s ease 2;
        }
    `}>
      {data.site.siteMetadata.title}
      </NameHeader>
          <p>{subtitle}</p>
          <Description>Hello, How is your {days[d.getDay()]} going? Explore my beginner resource to <NavLink href="https://learnpsychology.co/">Learn Psychology</NavLink> or see <NavLink href="/projects">what I am upto</NavLink>.</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
