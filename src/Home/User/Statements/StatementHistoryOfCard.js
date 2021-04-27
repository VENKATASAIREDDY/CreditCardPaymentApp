import React, { Component } from 'react';
import './StatementStyles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../Store/Actions/UserActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Link } from 'react-router-dom';

class StatementHistoryOfCard extends Component{

    componentDidMount() {
        const{userActions,match}=this.props;
        userActions.fetchStatements(match.params.cardNumber);
    }

    render(){
        const columns = [{
            dataField : 'cardNumber',
            text : 'Credit Card Number'
        },
        {
            dataField : 'customerName',
            text : 'Customer Name'
        },
        {
            dataField : 'billDate',
            text : 'Billed Date',
            sort :true,
            filter : textFilter()
        },
        {
            dataField : 'dueDate',
            text : 'Due Date',
            sort : true,
            filter : textFilter()
        },
        {
            dataField : 'billAmount',
            text : 'Bill Amount',
            sort : true
        },
        {
            dataField : 'dueAmount',
            text : 'Due Amount',
            sort : true
        },
        {
            dataField: "statementId",
            text: "View Statement",
            formatter: (rowContent, row) => {
                return (
                    <div className="row">
                        <div className="col-sm-12">
                            <Link className="btn btn-primary" to={`/home/${this.props.match.params.userId}/statements/billed/${row.cardNumber}/${row.statementId}`}><i className="bi bi-eye-fill"></i>View</Link>
                        </div>
                    </div>
                );
            }
        }
    ];

    const defaultSorted = [{
        dataField: 'dueAmount',
        order: 'desc'
    }];
    const options = {
        sizePerPage:10,
        hideSizePerPage:true,
        hidePageListOnlyOnePage: true
    }

    const {statementHistory,isFetchedStatements}=this.props;
    if(isFetchedStatements!==undefined){
        return(
            <div className="container top-statements">
                <div className="container heading-statements">
                    <h2 className="h2-statements">History of Statements</h2>
                </div>
                <div className="row">
                    <BootstrapTable
                        bootstrap4
                        keyField='cardNumber'
                        columns={columns}
                        data={statementHistory}
                        defaultSorted = {defaultSorted}
                        pagination={paginationFactory(options)}
                        filter={filterFactory()}
                        striped
                        hover
                    />                                    
                </div>
            </div>      
        )
    }else{
        return(
            <div>Fetching...</div>
        )
    }
        
    }

}
function mapStateToProps(state) {
    return {
        statementHistory: state.UserReducers.statementHistory,
        isFetchedStatements : state.UserReducers.isFetchedStatements
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        userActions : bindActionCreators(userActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(StatementHistoryOfCard);