import _ from 'lodash'
import './styles/index.css'
import './styles/test.scss'
import moment from 'moment'

let component = () => {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['hello', 'charles '], moment().format())

  return ele
}

document.body.appendChild(component())
