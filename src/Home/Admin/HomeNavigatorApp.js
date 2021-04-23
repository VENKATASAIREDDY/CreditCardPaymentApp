import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import HomeApp from './HomeApp';
import NavigationBar from './NavigationsBar';
import AllUsers from './Users/AllUsersbootstrap-table';
class AdminHomeNavigatorApp extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:''
        }
    }

    render(){
        const userId=this.props.match.params.userId;
        return(
            <div className="container-fluid">
               {/* <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
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
                                <NavDropdown.Item href={`/admin/home/${userId}/addCustomer`}>Add New Customer</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
                <div className="container-fluid">
                    <NavigationBar userId={userId}/>
                    <Switch>
                        <Route path='/admin/home/:userId' component={HomeApp} exact />
                        <Route path='/admin/home/navigator/:userId/allCustomers' component={AllUsers} exact />
                    </Switch>
                </div>
                
                {/* <AdminRoutes/> */}
            </div>
        )
    }
}
export default AdminHomeNavigatorApp;