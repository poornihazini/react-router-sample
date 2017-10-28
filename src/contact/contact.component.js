import React, { Component } from 'react';

export class ContactUsComponent extends Component {
	
      render() {
        return (
            <h1>Contact us by : info@infi.com {this.props.match.params.contactName}</h1>
        );
      }
}