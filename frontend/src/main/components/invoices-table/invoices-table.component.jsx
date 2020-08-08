import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import socketIOClient from "socket.io-client";
import { invoiceService } from '../../services/invoice/invoice.service';
import './invoices-table.styles.scss';

function onInsertRow(row) {
   let newRowStr = ''
  
   for (const prop in row) {
     newRowStr += prop + ': ' + row[prop] + ' \n'
   }
   alert('You inserted:\n ' + newRowStr)
 }
  
  
 function onDeleteRow(rowKeys) {
   alert('You deleted: ' + rowKeys)
 }
 
class InvoicesTable extends Component {
   constructor() {
      super();
      this.state = {
         response: false,
         endpoint: "http://127.0.0.1:3030",
         invoicesList: []
      }
   }

   componentDidMount() {
      const { endpoint } = this.state;
      const socket = socketIOClient(endpoint);
      socket.on("FromAPI", data => this.setState({ invoicesList: data }));
   }
    
   onClickApproveInvoice = async (cell, row, rowIndex)=> {
      try {
         const {id} = this.state.invoicesList[rowIndex];
         const invoicesList = await invoiceService.getAllInvoicesByStatus(id);
         this.setState({invoicesList: invoicesList.data});
      }catch(error) {
         console.log(error);
      }
      
   }

   statusButton = (cell, row, enumObject, rowIndex) => {
      return (
         <button  
            type="button" 
            className="btn btn-approval btn-warning"
            onClick={() => 
               this.onClickApproveInvoice(cell, row, rowIndex)}   
         >
            <span className="state-approval">Approve</span>
            <span className="state-pending">Pending Approval</span>
         </button>
         )
   }

   render() {
      const options = {
        afterInsertRow: onInsertRow,
        afterDeleteRow: onDeleteRow
      }
   
      // To delete rows you be able to select rows
      const selectRowProp = {
        mode: 'checkbox'
      }
   
      return (
        <div>
          <BootstrapTable data={this.state.invoicesList}
                          insertRow={true}
                          deleteRow={true}
                          selectRow={selectRowProp}
                          options={options}
          >
            <TableHeaderColumn isKey dataField='id' hidden='true'
            >
              id
            </TableHeaderColumn>
            <TableHeaderColumn dataField='invoice_number'
            >
              Invoice Number
            </TableHeaderColumn>
            <TableHeaderColumn dataField='vendor_name'
            >
              Vendor Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='remittance_address'
            >
              Vendor Address
            </TableHeaderColumn>
            <TableHeaderColumn dataField='total'
            >
              Invoice Total
            </TableHeaderColumn>
            <TableHeaderColumn dataField='invoice_date'
            >
              Invoice Date
            </TableHeaderColumn>
            <TableHeaderColumn dataField='due_date'
            >
              Due Date
            </TableHeaderColumn>
            <TableHeaderColumn 
               dataField='status'
               dataFormat={this.statusButton}
            >
               Status
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      )
    }
}

export default InvoicesTable;