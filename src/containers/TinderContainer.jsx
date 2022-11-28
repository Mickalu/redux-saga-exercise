import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-container-component';

import Tinder from '../components/Game/Tinder';
import * as actions from '../actions';

class TinderContainer extends Container {
  constructor (props) {
    super(props)
    this.setComponent(Tinder, { props })
  }

  componentDidMount = () => {
    if (this.props.session.id) {
      this.props.fetchBeers();
    } else {
      this.props.startSession();
    }
  }

  componentWillReceiveProps = (nextProps:Object) => {
    if (nextProps.session.id !== this.props.session.id) {
      this.props.fetchBeers()
    }
  }

  next = (nextBeerIndex:?number) => {
    const nextBeerIdx = this.props.currentBeerIndex + 1
    this.props.setCurrentBeerIndex(nextBeerIdx)
  }

  like = () => {
    console.log('ddd')
    this.props.addLike();
    this.next();
  }

  dislike = () => {
    this.next()
  }
}

TinderContainer.propTypes = {
  openSideMenu: React.PropTypes.func,
  addBeerToCart: React.PropTypes.func,
  closeSideMenu: React.PropTypes.func,
  beers: React.PropTypes.array,
  beer: React.PropTypes.object
}

TinderContainer.defaultProps = {
  beer: { attr: {}, images: {} }
}

const mapStateToProps = (state:Object) => ({
  beers: state.beers.data,
  beer: state.beers.data[state.beer.currentIndex],
  currentBeerIndex: state.beer.currentIndex,
  session: state.settings.session
})

const mapDispatchToProps = (dispatch) => ({
  fetchBeers: () => dispatch(actions.fetchBeersAction()) ,
  setCurrentBeerIndex: actions.setCurrentBeerIndex,
  startSession: () => dispatch(actions.startSessionAction()),
  addLike: () => dispatch({ type: actions.ADD_LIKE }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TinderContainer)
