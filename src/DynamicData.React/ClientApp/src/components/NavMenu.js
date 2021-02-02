import React, { Component } from 'react';
import { FaCog, FaEdit, FaFileCode, FaHome, FaPlus, FaRedo, FaSave, FaTimes, FaTrash, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    fireCommand(cmd) {

        const event = new Event(cmd);

        document.dispatchEvent(event);
    }

    render() {
        return (
            <header>
                <Navbar className="ng-white border-bottom box-shadow mb-3 d-flex flex-row">
                    <Nav className="w-50 d-none d-sm-flex">
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
                    <Nav className="w-100 d-sm-none justify-content-between justify-content-sm-end">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('add')}>
                                <FaPlus />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() =>this.fireCommand('refresh')}>
                                <FaRedo />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() =>this.fireCommand('delete')}>
                                <FaTrash />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() =>this.fireCommand('save')}>
                                <FaSave />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('cancel')}>
                                <FaTimes />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="w-50 d-none d-sm-flex justify-content-between justify-content-sm-end">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('add')}>
                                <FaPlus />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('refresh')}>
                                <FaRedo />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('delete')}>
                                <FaTrash />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('save')}>
                                <FaSave />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="#" onClick={() => this.fireCommand('cancel')}>
                                <FaTimes />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}
