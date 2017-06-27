import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import backgroundHome from '../../components/background/home'

const mapStateToProps = state => ({
  account: state.account
})

const BackgroundHome = withRouter(connect(mapStateToProps)(backgroundHome))

export default BackgroundHome