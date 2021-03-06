import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './NavigationStyle.css';
class NavigationHomeBar extends React.Component{
    render(){
        const userId=this.props.userId;
        return(
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top" fixed="top">
                <Navbar.Brand href={`/home/${userId}`}>Credit Card Payment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <Nav.Link href={`/home/${userId}`}><i className="bi bi-house-door home-icon"> Home</i></Nav.Link>
                        <NavDropdown title="Credit Cards" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/home/${userId}/creditcards`}>Credit Cards</NavDropdown.Item>
                            <NavDropdown.Item href={`/home/${userId}/creditcards/addNew`}>Add New Credit Card</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Accounts" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/home/${userId}/accounts`}>Accounts</NavDropdown.Item>
                            <NavDropdown.Item href={`/home/${userId}/accounts/addNew`}>Add New Account</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={`/home/${userId}/transactions/history`}>Transactions</Nav.Link>
                        <Nav.Link href={`/home/${userId}/statements/history`}>Statements</Nav.Link>
                        <Nav.Link href={`/home/${userId}/payments/history`}>Payments</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto left-bar">
                        <i className="bi bi-person-circle profile-icon">
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/home/${userId}/personalDetails`}>Personal details</NavDropdown.Item>
                            <NavDropdown.Item href={`/home/${userId}/changePassword`}>Change Password</NavDropdown.Item>
                        </NavDropdown>
                        </i>
                        
                        <Nav.Link href={`/logout`}>LogOut</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}
export default NavigationHomeBar;