import React, { Component } from 'react'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

class Welcome extends Component {
  render() {
    return (
      <>
        <br></br>
        Welcome {this.props.name}!<br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Welcome name="Gavin" />
        <Octocat />
        <Octocat />
      </>
    )
  }
}

export default App
