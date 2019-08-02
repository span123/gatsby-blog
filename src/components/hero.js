import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    span {
      color: red;
    }
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "sayan-nath.jpg" }) {
        sharp: childImageSharp {
          fluid(traceSVG: { color: "goldenrod" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>
          Gatsby powered blog <span>&hearts;</span>
        </h1>
        <p>
          Hello <Link to="/about">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
