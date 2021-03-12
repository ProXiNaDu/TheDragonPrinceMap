import React from "react";
import "./style.css";

class CloseInfoPanelButton extends React.Component {
  render() {
    return <button className="CloseInfoPanelButton" onClick={this.props.onClose}><i className="fas fa-times"></i></button>;
  }
}

export default CloseInfoPanelButton;
