import React, { Component } from 'react'

class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="title"
            value={this.props.values.title}
            onChange={this.props.onChange}
            placeholder="title">
          </input>
          <input
            name="url"
            value={this.props.values.url}
            onChange={this.props.onChange}
            placeholder="url">
          </input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default CreateForm
