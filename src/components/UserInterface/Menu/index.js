import React from "react";
import ContactUsMenu from "./ContactUsMenu";
import CreditsMenu from "./CreditsMenu";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      currentMenu: null,
      menus: {
        contactUs: <ContactUsMenu />,
        credits: <CreditsMenu />,
      },
    };
  }

  render() {
    const onOverlayClick = (e) => {
      if (!e.target.classList.contains("Menu-overlay")) {
        return;
      }
      this.props.onClose(e);
    };
    const openMenu = (e) => {
      this.setState({ currentMenu: this.state.menus[e.target.dataset.menu] });
    };

    return (
      <CSSTransition
        classNames="Menu-appear"
        timeout={0}
        in={this.state.mounted}
      >
        <div className="Menu-overlay" onClick={onOverlayClick}>
          {this.state.currentMenu || (
            <div className="Menu">
              <ul>
                <li>
                  <button data-menu="credits" onClick={openMenu}>
                    Credits
                  </button>
                </li>
                <li>
                  <button data-menu="contactUs" onClick={openMenu}>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </CSSTransition>
    );
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }
}

export default Menu;
