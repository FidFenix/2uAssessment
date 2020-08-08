import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//import './sidebar-function';
import './sidebar.layout.styles.scss';

class SideBarLayout extends Component {

   constructor(props) {
      super(props);
      this.state = {

      }
   }

   render() {
      return(
         <nav id="sidebar" class="sidebar-wrapper">
         <div class="sidebar-content">
           <div class="sidebar-brand">
             <Link to='/'>2U Invoices</Link>
             <div id="close-sidebar">
               <i class="fas fa-times"></i>
             </div>
           </div>
           <div class="sidebar-header">
             <div class="user-pic">
               <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User profile"/>
             </div>
             <div class="user-info">
               <span class="user-name">Jhon
                 <strong>Smith</strong>
               </span>
               <span class="user-role">Accountant Manager</span>
               <span class="user-status">
                 <i class="fa fa-circle"></i>
                 <span>Online</span>
               </span>
             </div>
           </div>
           <div class="sidebar-search">
             <div>
               <div class="input-group">
                 <input type="text" class="form-control search-menu" placeholder="Search..."/>
                 <div class="input-group-append">
                   <span class="input-group-text">
                     <i class="fa fa-search" aria-hidden="true"></i>
                   </span>
                 </div>
               </div>
             </div>
           </div>
           <div className="sidebar-menu">
             <ul>
               <li class="header-menu">
                 <span>General</span>
               </li>
               <li class="sidebar-dropdown">
                 <div class="sidebar-submenu">
                   <ul>
                     <li>
                       <Link to='/'>Dashboard 1
                         <span class="badge badge-pill badge-success">Pro</span>
                       </Link>
                     </li>
                     <li>
                       <Link to='/'>Dashboard 2</Link>
                     </li>
                     <li>
                       <Link to="/">Dashboard 3</Link>
                     </li>
                   </ul>
                 </div>
               </li>
               <li class="sidebar-dropdown">
                  <Link to='/'>
                   <i class="fa fa-shopping-cart"></i>
                   <span>New Invoices</span>
                   <span class="badge badge-pill badge-danger">3</span>
                  </Link>
               </li>
               <li class="header-menu">
                 <span>Extra</span>
               </li>
               <li>
                 <Link to='/'>
                   <i class="fa fa-book"></i>
                   <span>Documentation</span>
                   <span class="badge badge-pill badge-primary">Beta</span>
                 </Link>
               </li>
             </ul>
           </div>
         </div>
         <div class="sidebar-footer">
           <Link to='/'>
             <i class="fa fa-bell"></i>
             <span class="badge badge-pill badge-warning notification">3</span>
           </Link>
           <Link to='/'>
             <i class="fa fa-envelope"></i>
             <span class="badge badge-pill badge-success notification">7</span>
           </Link>
           <Link to='/'>
             <i class="fa fa-cog"></i>
             <span class="badge-sonar"></span>
           </Link>
           <Link to='/'>
             <i class="fa fa-power-off"></i>
           </Link>
         </div>
       </nav>
      )
   }
}

export default SideBarLayout;