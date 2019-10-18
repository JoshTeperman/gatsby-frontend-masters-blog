import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  console.log('sitemetadata query function');
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
