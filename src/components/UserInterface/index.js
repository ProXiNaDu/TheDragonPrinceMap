import React from "react";
import ZoomButtons from "./ZoomButtons";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import "./style.css";

class UserInterface extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false,
    };
  }

  render() {
    const toggleMenu = (e) => {
      this.setState({ isMenuOpened: !this.state.isMenuOpened });
    };

    return (
      <div className="UserInterface-overlay">
        <MenuButton onClick={toggleMenu} isOpen={this.state.isMenuOpened} />
        <ZoomButtons
          onZoomUp={this.props.onZoomUp}
          onZoomDown={this.props.onZoomDown}
        />
        {this.state.isMenuOpened && <Menu onClose={toggleMenu} />}
      </div>
    );
  }
}

export default UserInterface;
