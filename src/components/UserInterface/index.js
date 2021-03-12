import React from "react";
import ZoomButtons from "./ZoomButtons";
import "./style.css";

class UserInterface extends React.Component {
  render() {
    return (
      <div className="UserInterface-overlay">
        <ZoomButtons
          onZoomUp={this.props.onZoomUp}
          onZoomDown={this.props.onZoomDown}
        />
      </div>
    );
  }
}

export default UserInterface;
