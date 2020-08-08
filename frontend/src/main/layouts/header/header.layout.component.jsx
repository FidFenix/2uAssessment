import React, { Component } from 'react';

import './header.layout.styles.scss';

class HeaderLayout extends Component {
   constructor() {
      super();
      this.state = {

      }
   }
   
   render() {
      return(
         <div>
            <div class="app-header">
               <div class="d-flex">
                  <button class="navbar-toggler hamburger hamburger--elastic toggle-sidebar-mobile" type="button">
                     <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                     </span>
                  </button>
                  <div class="search-link">
                     <div class="d-none d-lg-flex">
                        <i class="fas search-icon fa-search"></i>
                        <input type="text" placeholder="Click here to search..."/>
                     </div>
                     <div class="d-none d-sm-flex d-lg-none">
                        <button class="btn btn-outline-primary btn-sm px-3" type="button" data-toggle="modal" data-target="#search-modal">
                           <i class="fas fa-search"></i>
                        </button>
                     </div>
                  </div>
               </div>
               <div class="d-flex align-items-center">
                  <span data-toggle="tooltip" class="pr-2" title="You have <b>0</b> new notifications" data-trigger="hover" data-html="true" data-placement="bottom">
                     <button type="button" class="btn bg-neutral-success text-success font-size-lg p-0 d-inline-block shadow-none text-center d-44 rounded position-relative">
                        <i class="far fa-bell"></i>
                     </button>
                  </span>
                  <button class="btn bg-neutral-danger text-danger font-size-lg mr-2 p-0 d-inline-block shadow-none text-center d-44 rounded position-relative" type="button">
                     <i class="far fa-comment"></i>
                  </button>
                  <button type="button" class="btn bg-neutral-first text-first font-size-lg mr-2 p-0 d-inline-block shadow-none text-center d-44 rounded">
                     <i class="fas fa-th"></i>
                  </button>
                  <div class="user-box dropdown ml-3">
                     <a href="#" class="p-0 d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="d-block p-0">
                           <img class="d-44 rounded" src="./assets/img/avatars/avatar3.jpg" alt="none here"/>
                        </div>
                        <div class="d-none d-md-block pl-2">
                           <div class="font-weight-bold">
                             John Taylor
                           </div>
                           <span class="text-black-50">
                             Web developer
                           </span>
                        </div>
                        <span class="pl-3"><i class="fas fa-angle-down opacity-5"></i></span>
                     </a>
                     <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </div>
               </div>
            </div>

            <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                     <div class="modal-header bg-white d-block text-center">
                        <h6 class="display-4 font-weight-bold">Search</h6>
                        <p class="text-black-50 mb-0">Use the form below to search for files</p>
                     </div>
                     <div class="modal-body bg-light">
                        <div class="p-5">
                           <div class="input-group">
                              <input type="search" class="form-control" placeholder="Search terms here..." />
                              <div class="input-group-append">
                                 <button class="btn btn-primary border-0" type="button">
                                    <i class="fas fa-search"></i>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="modal-footer d-block text-center">
                        <button type="button" class="btn btn-link btn-link-dark" data-dismiss="modal">Close search box</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default HeaderLayout;