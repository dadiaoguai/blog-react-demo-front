import React from 'react'

function Level1(props) {
  return (
    <p>{props.value}</p>
  )
}

class Level2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
      <div className="level2">
        <Level1 value={this.props.value}/>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

class Level3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '你好, 请随便输入点东西'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    return this.setState({text: e.target.value})
  }

  render() {
    return (
      <div className="level3">
        <Level2 value={this.state.text}/>
        <hr/>
        <form action="">
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default Level3


