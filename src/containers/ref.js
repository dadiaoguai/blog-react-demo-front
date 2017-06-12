import React from 'react'

class CustomerInput extends React.Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }

  focus() {
    this.textInput.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => {this.textInput = input}}/> /* 这里 textInput 指定为当前的这个元素 */
        <input type="button" value='focus on this button' onClick={this.focus}/>
      </div>
    )
  }
}

export default CustomerInput