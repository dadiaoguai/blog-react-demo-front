import { connect } from 'react-redux'
import screen from '../components/screen'

const mapStateToProps = state => ({ store: state })

const Screen = connect(mapStateToProps)(screen)

export default Screen
