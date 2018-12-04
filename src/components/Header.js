import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export default class Header extends React.Component {
    constructor(props) {
        const isLoggedIn = false;
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const isLoggedIn = false;
        let navLeft;
        let navRight;

        if (isLoggedIn) {
            // If we are signed in, display all the good information
            navLeft = <NavbarNav left>
                <NavItem>
            <Dropdown>
                <DropdownToggle nav caret>Human Resources</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="#">Pre-Employment</DropdownItem>
                    <DropdownItem href="#">Onboarding</DropdownItem>
                    <DropdownItem href="docs/Circle BMW Employee Handbook.pdf" target="_blank" download="Circle BMW Employee Handbook">CircleBMW Handbook</DropdownItem>
                    <DropdownItem href="#">Trainings</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </NavItem>
            <NavItem>
            <Dropdown>
                <DropdownToggle nav caret>Insurance</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="MedicalInsurance">Medical Insurance</DropdownItem>
                    <DropdownItem href="DentalVision"> Dental and Vision </DropdownItem>
                    <DropdownItem href="#">Supplemental Insurance</DropdownItem>
                    <DropdownItem href="#">Group Life</DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
            </NavItem>
            <NavItem>
            <Dropdown>
                <DropdownToggle nav caret>Forms</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="docs/TimeOffRequestForm.pdf" target="_blank" download="TimeOffRequestForm">Time off Request</DropdownItem>
                    <DropdownItem href="#">Expense Report</DropdownItem>
                    <DropdownItem href="#">NJ Family Leave Insurance</DropdownItem>
                    <DropdownItem href="#">NJ SAFE Act</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </NavItem>
                <NavItem>
            <Dropdown>
                <DropdownToggle nav caret>401K</DropdownToggle>
                <DropdownMenu>
                <DropdownItem href="https://www.oneamerica.com" target="_new">OneAmerica</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </NavItem>
            </NavbarNav>

            // If we are signed in, display the user directory & profile icons
            navRight =
                 <NavbarNav right>
                    <NavItem>
                        <NavbarBrand href="/directory">
                            <i class="fa fa-users" aria-hidden="true"></i>
                        </NavbarBrand>
                    </NavItem>
                    <NavItem>
                        <NavbarBrand href="/MyProfile">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                        </NavbarBrand>
                    </NavItem>
                </NavbarNav>
        }
        else {
            // If we are not signed in, display the Login info"
            navRight = <NavbarNav right>
            <NavItem>
                <NavLink to="/Login">Login</NavLink>
            </NavItem>
        </NavbarNav>
        }

        return (
            <Navbar color="primary-color-dark" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
                <strong>CircleBMW</strong>
            </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
                    { navLeft }
                    { navRight }
            </Collapse>
        </Navbar>
        );
    }
}