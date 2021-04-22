import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class NavigationBar extends React.Component{
    render(){
        const userId=this.props.userId;
        return(
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top" fixed="top">
                <Navbar.Brand href={`/admin/home/${userId}`}>Credit Card Payment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={`/admin/home/${userId}`}>Home</Nav.Link>
                        <Nav.Link href={`/admin/home/${userId}/creditCards`}>Credit Cards</Nav.Link>
                        <Nav.Link href={`/admin/home/${userId}/transactions`}>Transactions</Nav.Link>
                        <Nav.Link href={`/admin/home/${userId}/statements`}>Statements</Nav.Link>
                        <Nav.Link href={`/admin/home/${userId}/payments`}>Payments</Nav.Link>
                        <NavDropdown title="Customers" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/admin/home/${userId}/allCustomers`}>View All Customers</NavDropdown.Item>
                            <NavDropdown.Item href={`/admin/home/${userId}/addUser`}>Add New Customer</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/admin/home/${userId}/allCustomers`}>Personal details</NavDropdown.Item>
                            <NavDropdown.Item href={`/admin/home/${userId}/addCustomer`}>Change Password</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={`/admin/home/${userId}`}>LogOut</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}
export default NavigationBar;