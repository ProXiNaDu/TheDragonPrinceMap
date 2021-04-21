import React from "react";
import "./style.css";

class MenuButton extends React.Component {
  render() {
    return (
        <div className={`MenuButton ${this.props.isOpen && "MenuButton_open"}`}>
          <div className="MenuButton-hamburger" onClick={this.props.onClick}>
            <div className="MenuButton-bar"></div>
            <div className="MenuButton-bar"></div>
            <div className="MenuButton-bar"></div>
          </div>
        </div>
    );
  }
}

export default MenuButton;
