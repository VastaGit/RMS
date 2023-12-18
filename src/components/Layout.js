import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Particle from './Particles';
import './Layout.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Particle className="particles"/>
        <Container style={{ marginTop: '100px' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
