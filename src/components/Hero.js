import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: top 35% center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  background: linear-gradient(to top, #ddbbffdd 1rem, #ddbbff00);
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 calc((100vw - 700px - 0.5rem) / 2) 1rem;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.2rem;
  }

  a {
    color: #222;
  }

  h1 + * {
    margin-top: 0;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "kieren-andrews-melb.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>I'm Josh, a Developer at Weploy.</h1>
        <Link to="/about">Learn more about me &rarr;</Link>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
