import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

class AllCreditCards extends Component{
    constructor(props) {
        super(props);

        this.state = {
            allCreditCards:[]
        };

    }
    componentDidMount() {
        this.props.adminActions.fetchAllCreditCards();
    }

    sortId=()=>{
        var sortedID;
        sortedID= this.props.creditcards.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?1:-1);
        })
        this.setState({
            allCreditCards:sortedID
        })
    }
    sortIdDes=()=>{
        var sortedIDDes;
        sortedIDDes= this.props.creditcards.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?-1:1);
        })
        this.setState({
            allCreditCards:sortedIDDes
        })
    }
    sortName=()=>{
        var sortedName;
        sortedName= this.props.creditcards.sort((a,b)=>{
            return ((a.cardName > b.cardName)?1:-1);
        })
        this.setState({
            allCreditCards:sortedName
        })
    }
    sortNameDes=()=>{
        var sortedNameDes;
        sortedNameDes= this.props.creditcards.sort((a,b)=>{
            return ((a.cardName > b.cardName)?-1:1);
        })
        this.setState({
            allCreditCards:sortedNameDes
        })
    }
    sortType=()=>{
        var sortedType;
        sortedType= this.props.creditcards.sort((a,b)=>{
            return ((a.cardType > b.cardType)?1:-1);
        })
        this.setState({
            allCreditCards:sortedType
        })
    }
    sortTypeDes=()=>{
        var sortedTypeDes;
        sortedTypeDes= this.props.creditcards.sort((a,b)=>{
            return ((a.cardType > b.cardType)?-1:1);
        })
        this.setState({
            allCreditCards:sortedTypeDes
        })
    }
    sortDate=()=>{
        var sortedDate;
        sortedDate= this.props.creditcards.sort((a,b)=>{
            return ((a.expiryDate > b.expiryDate)?1:-1);
        })
        this.setState({
            allCreditCards:sortedDate
        })
    }
    sortDateDes=()=>{
        var sortedDateDes;
        sortedDateDes= this.props.creditcards.sort((a,b)=>{
            return ((a.expiryDate > b.expiryDate)?-1:1);
        })
        this.setState({
            allCreditCards:sortedDateDes
        })
    }
    sortBank=()=>{
        var sortedBank;
        sortedBank= this.props.creditcards.sort((a,b)=>{
            return ((a.bankName > b.bankName)?1:-1);
        })
        this.setState({
            allCreditCards:sortedBank
        })
    }
    sortBankDes=()=>{
        var sortedBankDes;
        sortedBankDes= this.props.creditcards.sort((a,b)=>{
            return ((a.bankName > b.bankName)?-1:1);
        })
        this.setState({
            allCreditCards:sortedBankDes
        })
    }
    sortLimit=()=>{
        var sortedLimit;
        sortedLimit= this.props.creditcards.sort((a,b)=>{
            return ((a.cardLimit > b.cardLimit)?1:-1);
        })
        this.setState({
            allCreditCards:sortedLimit
        })
    }
    sortLimitDes=()=>{
        var sortedLimitDes;
        sortedLimitDes= this.props.creditcards.sort((a,b)=>{
            return ((a.cardLimit > b.cardLimit)?-1:1);
        })
        this.setState({
            allCreditCards:sortedLimitDes
        })
    }
    sortUsed=()=>{
        var sortedUsed;
        sortedUsed= this.props.creditcards.sort((a,b)=>{
            return ((a.usedLimit > b.usedLimit)?1:-1);
        })
        this.setState({
            allCreditCards:sortedUsed
        })
    }
    sortUsedDes=()=>{
        var sortedUsedDes;
        sortedUsedDes= this.props.creditcards.sort((a,b)=>{
            return ((a.usedLimit > b.usedLimit)?-1:1);
        })
        this.setState({
            allCreditCards:sortedUsedDes
        })
    }


    render(){
        const {creditcards}=this.props;
        if(creditcards!==undefined){
            return(
                <div className="container-fluid main-customers">
                    <div className="container-fluid main-customers-start text-light">
                        <Table striped bordered hover size="xl" responsive>
                            <thead>
                                <tr>
                                    <th >Card Number<Link class="bi bi-arrow-down id-asc" onClick={this.sortId}></Link><Link class="bi bi-arrow-up id-desc" onClick={this.sortIdDes}></Link></th>
                                    <th >CardName<Link class="bi bi-arrow-down name-asc" onClick={this.sortName}></Link><Link class="bi bi-arrow-up name-desc" onClick={this.sortNameDes}></Link></th>
                                    <th >Card Type<Link class="bi bi-arrow-down email-asc" onClick={this.sortType}></Link><Link class="bi bi-arrow-up email-desc" onClick={this.sortTypeDes}></Link></th>
                                    <th >Expiry Date<Link class="bi bi-arrow-down no-asc" onClick={this.sortDate}></Link><Link class="bi bi-arrow-up no-desc" onClick={this.sortDateDes}></Link></th>
                                    <th >Bank Name<Link class="bi bi-arrow-down dob-asc" onClick={this.sortBank}></Link><Link class="bi bi-arrow-up dob-desc" onClick={this.sortBankDes}></Link></th>
                                    <th>Card Limit<Link class="bi bi-arrow-down city-asc" onClick={this.sortLimit}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortLimitDes}></Link></th>
                                    <th>Used Limit<Link class="bi bi-arrow-down state-asc" onClick={this.sortUsed}></Link><Link class="bi bi-arrow-up state-desc" onClick={this.sortUsedDes}></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    creditcards.map((card)=>
                                        <tr>
                                            <td>{card.cardNumber}</td>
                                            <td>{card.cardName}</td>
                                            <td>{card.cardType}</td>
                                            <td>{card.expiryDate}</td>
                                            <td>{card.bankName}</td>
                                             <td>{card.cardLimit}</td>
                                            <td>{card.usedLimit}</td>
                                        </tr>    
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>                
                </div>
            )
        }else{
            return(
                <div>Loading...</div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        creditcards: state.AdminReducers.creditcards
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminActions : bindActionCreators(adminActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllCreditCards);