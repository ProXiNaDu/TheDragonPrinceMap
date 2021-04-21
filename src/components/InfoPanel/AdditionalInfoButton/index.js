import React from "react";
import "./style.css";

class AdditionalInfoButton extends React.Component {
  render() {
    return (
      <div className="AdditionalInfoButton">
        <i className="fas fa-question"></i>
        <div className="AdditionalInfoButton-content" dangerouslySetInnerHTML={{ __html: this.props.info }}></div>
      </div>
    );
  }
}

export default AdditionalInfoButton;
