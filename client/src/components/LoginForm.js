import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="email"
            onChange={this.props.onChange}
            placeholder="Email">
          </input>
          <input
            name="password"
            onChange={this.props.onChange}
            placeholder="Password">
          </input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
