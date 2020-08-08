import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FooterLayout from '../../layouts/footer/footer.layout.component';
import SideBarLayout from '../../layouts/sidebar/sidebar.layout.component';
import InvoicesTable from '../../components/invoices-table/invoices-table.component';
class HomePage extends Component {
   constructor() {
      super();
      this.state = {

      }
   }
   render() {
      return(
         <div class="page-wrapper chiller-theme toggled">
            <SideBarLayout/>
         <main class="page-content">
    <div class="container-fluid">
      <h2>2U Invoices</h2>
      <div class="row">
        <div class="form-group col-md-12">
          <p>This is an application I enjoyed so much!!</p>
        </div>
        <div class="form-group col-md-12">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Also!</h4>
            <p>This page would be soon <Link to="https://www.npmjs.com/package/react-pro-sidebar" target="_blank">on line</Link> <Link href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
              </Link></p>
          </div>

        </div>
      </div>
      <h5>List of Invoices</h5>
      <InvoicesTable/>
      <FooterLayout/>
    </div>
  </main>
  </div>
      )
   }
}

export default HomePage;