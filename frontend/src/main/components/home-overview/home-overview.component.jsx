import React, { Component } from 'react';

import './home-overview.styles.scss';
import FooterLayout from '../../layouts/footer/footer.layout.component';

class HomeOverviewComponent extends Component {
   constructor(){
      super();
      this.state = {

      }
   }

   render() {
      return(
         <div>
            <a1>
               Hola
            </a1>
            <FooterLayout/>
         </div>
      )
   }
}

export default HomeOverviewComponent;