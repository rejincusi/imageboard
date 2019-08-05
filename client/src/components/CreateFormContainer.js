import React from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions'
import CreateForm from './CreateForm.js'

class CreateFormContainer extends React.Component {
  state = {
    title: '',
    url: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.createImage(this.state)

    this.setState({
      title: '',
      url: '',
    })
  }

  render() {
    return (<CreateForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, { createImage })(CreateFormContainer)