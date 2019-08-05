import React, { Component } from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer'

class List extends Component {

  render() {
    const images = this.props.images.map( (image, key) =>
      <div key={key}>
        <h3>{image.title}</h3>
        <img src={image.url} alt={image.title} />
      </div>
      )
    let content = <LoginFormContainer />
    if (this.props.user) {
      content = <div>
                  <CreateFormContainer />
                  { images }
                </div>
    }
    return (
      <div>
        { content }
      </div>
    )
  }
}

export default List
