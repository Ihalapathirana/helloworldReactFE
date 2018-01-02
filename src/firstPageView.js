
import React, { Component } from 'react';
import Firstpage from './firstpage';
import AppClient from './app/AppClient';

class FirstPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"anusha",
      id:38
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.onNameTextChange = this.onNameTextChange.bind(this);
    

  }

  onClickButton(name, id) {
  
    this.setState({
        id: this.state.id+1,
      });
    AppClient.addName({
        name: this.state.name,
        id: this.state.id,
      })
        .then(
          console.log("added"),
          
        )
        .catch((err) => {
          console.log("error")
        });
  }

  onNameTextChange(name){

      this.setState({
        name: name,
      });
      
  }

  

  render() {
    const {
      name,
      
    } = this.state;

    return (
      <div>
        <Firstpage
          name={name}  
          onClickButton = {this.onClickButton}
          onNameTextChange = {this.onNameTextChange}
        />

      </div>
    );
  }
}

export default FirstPageView;
