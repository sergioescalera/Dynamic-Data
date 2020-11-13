import React, { Component } from 'react';
import { FaCog, FaEdit, FaFileCode, FaHome, FaPlus, FaRedo, FaSave, FaTimes, FaTrash, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="ng-white border-bottom box-shadow mb-3 d-flex flex-row">
          <Nav className="w-50">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaHome />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaCog />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaUser />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaEdit />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaFileCode />
                </NavLink>
              </NavItem>
          </Nav>
          <Nav className="w-50 justify-content-end">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaPlus />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaRedo />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaTrash />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaSave />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <FaTimes />
                </NavLink>
              </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}
