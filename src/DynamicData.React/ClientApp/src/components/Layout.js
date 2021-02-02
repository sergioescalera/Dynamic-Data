import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { NavMenuFooter } from './NavMenuFooter';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (
          <div className="d-flex flex-column">
              <NavMenu />
              <Container style={{ flex: 1 }}>
                  {this.props.children}
              </Container>
              <NavMenuFooter />
          </div>
      );
  }
}
