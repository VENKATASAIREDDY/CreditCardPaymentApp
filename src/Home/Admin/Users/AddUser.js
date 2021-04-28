import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminAction from '../../../Store/Actions/AdminActions';

class AddUser extends Component{
    constructor(){
        super();
        this.state={
            userId:'',
            password:'',
            role:'',
            errors:{}
        }
    }

    handleInputChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    validate = () =>{
        let userId = this.state.userId;
        let password = this.state.password;
        let role = this.state.role;
        let errors = {};
        let isValid = true;

        if (!userId) {
          isValid = false;
          errors["userId"] = "Provide UserId";
        }else if(!userId.match("^[A-Za-z][A-Za-z0-9]{3,20}$")){
            isValid = false;
            errors["userId"] = "Provide userId with min length of 4"
        }
    
        if (!password) {
          isValid = false;
          errors["password"] = "Provide password";
        }else if(!password.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$")){
            isValid = false;
            errors["password"] = "Provide password with 1 Capital, Lower, Numeric and symbol with min of 8 charecters"
        }
      
        if (!role) {
            isValid = false;
            errors["role"] = "Specify the role";
        }

        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    addUser = event=>{
        
        event.preventDefault();
        const user={
            userId:this.state.userId,
            password:this.state.password,
            role:this.state.role
        };
        if(this.validate()){
            this.props.adminAction.addUser(user);
        }
    }

    render(){
        if(this.props.isAdded){
            return(<Redirect to={`/admin/home/${this.props.match.params.userId}`}/>)
        }
        return(
            <div className="container p-3">
                <div className="row message">
                    <div className="col-md-6">
                        {
                            (this.props.isAdded===false) && <div className="alert alert-danger" role="alert">{this.props.user}</div>
                        }
                        {
                            (this.props.isAdded===true) && <div className="alert alert-success" role="alert">{this.props.user}</div>
                        }
                    </div>
                </div>
                <div className="row body-adduser">
                    <div className="col-md-8 bg-light login-body">
                        <h3 className="text h3">Add User</h3>
                        <form className="login-form" onSubmit={this.addUser}>
                            <div className="form-group">
                                <input type="text" name="userId" className="form-control" placeholder="UserId*" onChange={this.handleInputChange}/>
                                <span className="text-danger">{this.state.errors.userId}</span>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password*" onChange={this.handleInputChange}/>
                                <span className="text-danger">{this.state.errors.password}</span>
                            </div>
                            <div className="form-group">
                                <select name="role" className="form-control" onChange={this.handleInputChange} defaultValue="default" >
                                    <option disabled value="default">Role*</option>
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                                <span className="text-danger">{this.state.errors.role}</span>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-6"><input type="submit" className="form-control btn-primary" value="Add User"/></div>
                                <div className="col-md-6"><input type="clear" className="form-control btn-danger" value="Clear"/></div>
                            </div>
                        </form>
                    </div>
                </div>              
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.AdminReducers.user,
        isAdded: state.AdminReducers.isAdded
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminAction : bindActionCreators(adminAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);