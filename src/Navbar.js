import React, { Component } from 'react';
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';

export default class MyNavbar extends Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return (
            <div>
                <Navbar color="light" expand="md">
                    <NavbarBrand href="#home">xxx</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#experience"> nodemon Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}