import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, staticQuery } from 'gatsby';

const BackgroundImage = styled.div`
  background-image: url('static/images/kieren-andrews-melb.jpg');
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
  return (
    <BackgroundImage>
      <TextBox>
        <h1>I'm Josh, Developer at Weploy.</h1>
        <Link to="/about">Learn more about me &rarr;</Link>
      </TextBox>
    </BackgroundImage>
  );
};

export default Hero;
