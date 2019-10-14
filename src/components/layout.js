import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          box-sizing: border-box;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 18px;
          line-height: 1.4;

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;
            color: #222;
            /* anything that comes after heading has a slightly smaller margin-top */
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 550px;
        width: 90vw;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
