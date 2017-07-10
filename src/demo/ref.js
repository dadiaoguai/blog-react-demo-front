import React from 'react'

class AutoFocusTextInput extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    this.textInput.focus()
  }

  render () {
    return (
      <div>
        <CustomTextInput ref={input => {
          this.textInput = input 
        }} />
      </div>
    );
  }
}

class CustomTextInput extends React.Component {
  constructor (props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus () {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render () {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type='text'
          ref={input => {
            this.textInput = input; 
          }} />
        <input
          type='button'
          value='Focus the text input'
          onClick={this.focus}
        />
      </div>
    );
  }
}
export default AutoFocusTextInput
