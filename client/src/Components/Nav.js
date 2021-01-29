import React, { Component } from "react";
import Logo from "../assets/images/Logo.png";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.timer = null;
  }
  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    this.timer = window.clearInterval(this.timer);
  }
  render() {
    return (
      <nav>
        <img src={Logo} alt="Todo Liste Logo"/>
        <code>
          {this.state.date.toLocaleDateString()}{" "}
          {this.state.date.toLocaleTimeString()}
          {" "} <div>+</div>
        </code>
      </nav>
    );
  }
}

export default Nav;
