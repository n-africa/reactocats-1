import React, { Component } from 'react'

export class Octocat extends Component {
  render() {
    return (
      <>
        <div class="octodex-box">
          <div class="octodex-image">
            <a href="#">
              <img src={'https://octodex.github.com//images/Octoqueer.png'} />
            </a>
          </div>
          <footer>
            <div class="name-of-octocats">
              #150:&nbsp;<b>Octoqueer</b>
            </div>
            <div class="authors">
              <a href="#">
                {' '}
                <img src={'https://github.com/cameronfoxly.png'} />{' '}
              </a>
              <a href="#">
                {' '}
                <img src={'https://github.com/johncreek.png'} />{' '}
              </a>
              <a href="#">
                {' '}
                <img src={'https://github.com/tonyjaramillo.png'} />{' '}
              </a>
            </div>
          </footer>
        </div>
      </>
    )
  }
}
