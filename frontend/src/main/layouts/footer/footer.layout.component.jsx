import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FooterLayout extends Component {
   constructor() {
      super();
      this.state = {

      }
   }

   render() {
      return(
         <footer class="text-center">
         <div class="mb-2">
           <small>
             © 2020 made by Fidel Mamani
           </small>
         </div>
         <div>
           <Link to="https://github.com/FidFenix">FidFenix
           </Link>
         </div>
       </footer>
      )
   }
}

export default FooterLayout;