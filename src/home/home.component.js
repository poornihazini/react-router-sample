import React, { Component } from 'react';
import {ThemeComponent} from "../theme/theme.component.js";

export class HomeComponent extends Component {
      render() {
        return (
            <h1>Hey I am home...</h1>
        );
      }
}


export class HomeComponentOne extends ThemeComponent {
	  constructor(){
          super(); 
          console.log(this.getMyName());    
	  }  
}