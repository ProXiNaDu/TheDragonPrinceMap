import React from "react";
import "./style.css";

class ContactUsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    window.emailjs
      .send("service_vg1nf7n", "template_w5pwgzl", {
        message: this.state.message,
        reply_to: this.state.email,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  render() {
    return (
      <div className="ContactUsMenu">
        <form
          id="contactForm"
          className="ContactUsMenu-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="ContactUsMenu-form-fields">
            <div className="ContactUsMenu-form-block">
              <input
                type="email"
                id="contactFormEmail"
                aria-describedby="emailHelp"
                value={this.state.email}
                required
                onChange={this.onEmailChange.bind(this)}
              />
              <label htmlFor="contactFormEmail">Email</label>
            </div>
            <div className="ContactUsMenu-form-block">
              <textarea
                rows="5"
                id="contactFormMessage"
                value={this.state.message}
                required
                onChange={this.onMessageChange.bind(this)}
              />
              <label htmlFor="contactFormMessage">Message</label>
            </div>
          </div>
          <button className="ContactUsMenu-submit" type="submit">
            Send
          </button>
        </form>
        <div className="ContactUsMenu-or">
          <span>Or</span>
        </div>
        <ul className="ContactUsMenu-socials">
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://vk.com/proxinadu"
              className="ContactUsMenu-social-vk"
            >
              <i class="fab fa-vk"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://discordapp.com/users/269438112210485248/"
              className="ContactUsMenu-social-discord"
            >
              <i class="fab fa-discord"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://www.instagram.com/belarusiandungeonmaster/"
              className="ContactUsMenu-social-instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://t.me/Proxinadu"
              className="ContactUsMenu-social-telegram"
            >
              <i class="fab fa-telegram-plane"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://github.com/ProXiNaDu"
              className="ContactUsMenu-social-github"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactUsMenu;
