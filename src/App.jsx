import React, { Component } from 'react'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Octocat></Octocat>
      </div>
    )
  }
}

export default App
