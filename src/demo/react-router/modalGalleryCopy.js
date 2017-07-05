import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import _ from 'lodash'

const IMAGES = [
  {
    id: 0,
    title: 'Dark Orchid',
    color: 'DarkOrchid'
  },
  {
    id: 1,
    title: 'Lime Green',
    color: 'LimeGreen'
  },
  {
    id: 2,
    title: 'Tomato',
    color: 'Tomato'
  },
  {
    id: 3,
    title: 'Seven Ate Nine',
    color: '#789'
  },
  {
    id: 4,
    title: 'Crimson',
    color: 'Crimson'
  }
]

class Box extends React.Component {
  constructor (props) {
    super(props)
    this.previousLocation = this.props.location
  }

  componentWillUpdate (nextProps) {
    const {location} = this.props

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render () {
    const {location} = this.props
    const IsModal = 
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    

    return (
      <div>
        <Switch location={IsModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/img/:id" component={ImageView}/>
        </Switch>
        {IsModal ? <Route path="/img/:id" component={Modal}/> : null}
      </div>

    )
  }
}

class Home extends React.Component {

  render () {
    return (
      <div>
        <Link to="/gallery">visit the Gallery</Link>
        <h2>Featured Images</h2>
        <ul>
          <li><Link to="/img/2">Tomato</Link></li>
          <li><Link to="/img/4">Crimson</Link></li>
        </ul>
      </div>
    )
  }
}

class ImageView extends React.Component {
  constructor (props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  goBack (e) {
    let {history} = this.props

    e.stopPropagation()
    history.goBack()
  }
  render () {
    let {id} = this.props.match.params
    let img = _.find(IMAGES, i => i.id === parseInt(id))

    return (
      <div
        style={{
          width: '100%',
          height: 400,
          background: img.color
        }}
      >
        <button type="button" onClick={this.goBack}>返回</button>
      </div>
    )
  }
}

class Gallery extends React.Component {
  render () {
    return (
      <ul>
        {IMAGES.map(i => 
          <li key={i.id}>
            <Thumbnail color={i.color}/>
            <Link to={{
              pathname: `/img/${i.id}`,
              state: {modal: true}
            }}>{i.title}</Link>
          </li>
        )}
      </ul>
    )
  }
}

const Thumbnail = ({color}) =>
  <div
    style={{
      width: 50,
      height: 50,
      background: color
    }}
  />

class Modal extends React.Component {
  render () {
    const {match, history} = this.props
    const image = IMAGES[parseInt(match.params.id)]

    if (!image) {
      return null
    }

    const back = e => {
      e.stopPropagation()
      history.goBack()
    }

    return (
      <div
        onClick={back}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className="modal" style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444'
        }}>
          <h1>{image.title}</h1>
          <Image color={image.color} />
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    )
  }
}

const Image = ({color}) =>
  <div style={{
    width: '100%',
    height: 400,
    background: color
  }} />

const ModalGallery = () => <Route component={Box}/>

export default ModalGallery
