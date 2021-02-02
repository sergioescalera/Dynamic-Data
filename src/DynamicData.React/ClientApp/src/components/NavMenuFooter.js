import React, { Component } from 'react';
import { FaCog, FaEdit, FaFileCode, FaHome, FaPlus, FaRedo, FaSave, FaTimes, FaTrash, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';

export class NavMenuFooter extends Component {
    static displayName = NavMenuFooter.name;

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <footer className="d-sm-none">
                <Navbar className="ng-white border-top box-shadow mt-1 flex-row">
                    <Nav className="w-100 w-sm-50 justify-content-between">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">
                                <FaHome />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/settings">
                                <FaCog />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/profile">
                                <FaUser />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/manage">
                                <FaEdit />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/templates">
                                <FaFileCode />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </footer>
        );
    }
}
