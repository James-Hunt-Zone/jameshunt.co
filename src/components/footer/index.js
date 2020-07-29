import React from 'react';
import styled from 'styled-components';

const FooterEl = styled.footer`
  background: #eeeeee;
  margin-top: 30px;
  padding: 15px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  list-style: none;
  height: 60px;
  margin-right: 30px;
`;

const Link = styled.a`
  display: inline-block;
  list-style: none;
  height: 60px;
  margin-right: 30px;
  height: 60px;
  display: inline-block;
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
`;

const Footer = () => {
  return (
    <FooterEl>
      <List>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/james-hunt-0852a94"
            title="Visit James Hunt's LinkedIn page"
          >
            <Logo src="./logo-linkedin.png" alt="LinkedIn Logo" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://github.com/James-Hunt-Zone"
            title="Visit James Hunt's GitHub page"
          >
            <Logo src="./logo-github.png" alt="GitHub Logo" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://medium.com/@jameshunt.co"
            title="Visit James Hunt's Medium page"
          >
            <Logo src="./logo-medium.png" alt="Medium Logo" />
          </Link>
        </ListItem>
      </List>
    </FooterEl>
  );
};

export default Footer;
