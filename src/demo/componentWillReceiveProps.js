import React from 'react'

class Box1 extends React.Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.msg === 'ss'
  }
  render () {
    return (
      <p>{this.props.msg}</p>
    )
  }
}

class Box2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {msg: ''}
    this.getMsg = this.getMsg.bind(this)
  }

  getMsg (e) {
    this.setState({msg: e.target.value})
  }

  render () {
    return (
      <div>
        <Box1 msg={this.state.msg} value='哈哈哈'/>
        <input type='text' value={this.state.msg} onChange={this.getMsg}/>
      </div>
    )
  }
}

module.exports = Box2
