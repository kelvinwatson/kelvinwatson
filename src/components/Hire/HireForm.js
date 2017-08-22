import React, { Component } from 'react';

class HireForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var formData = {
      name: this.contactName.value,
      email: this.contactEmail.value,
      message: this.contactMessage.value
    };
    this.props.handleSubmit(formData);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" ref={(contactName) => this.contactName = contactName} />
        </label>
        <label>
          Email: <input type="email" ref={(contactEmail) => this.contactEmail = contactEmail}/>
        </label>
        <textarea ref={(contactMessage) => this.contactMessage = contactMessage}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default HireForm;
