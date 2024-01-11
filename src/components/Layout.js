import React from 'react';
import { Container } from 'reactstrap';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Container style={{ marginTop: '100px' }}>{children}</Container>
  </div>
  );
};

export default Layout;
