import React, { Component } from 'react';
import AdminRoutes from './AdminRoutes';
import NavigationBar from './NavigationsBar';

class AdminHomeApp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const userId=this.props.match.params.userId;
        return(
            <div className="container-fluid noPadding">
                <NavigationBar userId={userId}/>
                <div className="container-fluid home-body">
                    <AdminRoutes/>
                </div>
            </div>
        )
    }
}
export default AdminHomeApp;