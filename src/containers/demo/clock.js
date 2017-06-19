import React from 'react'
import moment from 'moment'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }


  componentDidMount() {
    this.clock = setInterval(
      () => this.trick(),
      1000
    )
  }

  componentWillUnmount() {
    console.log('我开始行动了')
    clearInterval(this.clock)
  }

  trick() {
    this.setState({
      time: moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }

  render() {
    return (
      <div>
        <p className="clock">{this.state.time}</p>
      </div>
    )
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showClock: true
    }
    this.removeClock = this.removeClock.bind(this)
  }

  removeClock() {
    this.setState({
      showClock: false
    })
  }

  render() {
    return (
      <div>
        { this.state.showClock ? <Clock/> : null}
        <button type="button" onClick={this.removeClock}>移除时钟</button>
      </div>
    )
  }
}

module.exports = Box
