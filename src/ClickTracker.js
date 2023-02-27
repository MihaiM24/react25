import React from "react";

export class ClickTracker extends React.Component {
  state = {
    lastClickedButton: null,
  };

  handleClick = (event) => {
    this.setState({
      lastClickedButton: event.target.innerText,
    });
  };

  render() {
    return (
      <div>
        <h1>Last clicked button: {this.state.lastClickedButton}</h1>
        <button onClick={this.handleClick}>Button 1</button>
        <button onClick={this.handleClick}>Button 2</button>
        <button onClick={this.handleClick}>Button 3</button>
      </div>
    );
  }
}

