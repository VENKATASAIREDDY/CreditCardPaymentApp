import React, { Component } from 'react';
import NavigationBar from './NavigationsBar';
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
                <div className="container-fluid">
                    <NavigationBar userId={userId}/>
                </div>
            </div>
        )
    }
}
export default AdminHomeNavigatorApp;