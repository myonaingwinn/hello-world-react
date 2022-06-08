import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    // return this.state.isLoggedIn && <div>OK</div>;

    return this.state.isLoggedIn ? (
      <div>Welcome User</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;
