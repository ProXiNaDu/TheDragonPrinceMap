import React from "react";
import "./style.css";

class ZoomButtons extends React.Component {
  render() {
    return (
        <div className="ZoomButton">
            <button onClick={this.props.onZoomUp}><i className="fas fa-plus"></i></button>
            <button onClick={this.props.onZoomDown}><i className="fas fa-minus"></i></button>
        </div>
    );
  }
}

export default ZoomButtons;
