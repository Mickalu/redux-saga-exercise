import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-container-component';

import Tinder from '../components/Game/Tinder';
import * as actions from '../actions';

class TinderContainer extends Container {
  constructor (props) {
    super(props);
    this.setComponent(Tinder, { props })
  };

  componentDidMount = () => {
    const { session, fetchBeers, startSession } = this.props;
    if (session.id) {
      fetchBeers();
    } else {
      startSession();
    };
  };

  componentWillReceiveProps = (nextProps) => {
    const { session } = this.props;
    if (nextProps.session.id !== session.id) {
      this.props.fetchBeers();
    };
  };

  like = () => {
    const { beer } = this.props;
    const beerId = beer.id;
    this.props.addLike(beerId);
  };

  dislike = () => {
    this.props.nextBeer();
  };
};

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

const mapStateToProps = (state) => ({
  session: state.settings.session,

  beer: state.beers.data[state.beer.currentIndex],
  beers: state.beers.data,
  currentBeerIndex: state.beer.currentIndex,

  likes: state.likes,
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (beerId) => dispatch(actions.addLike(beerId)),
  fetchBeers: () => dispatch(actions.fetchBeersAction()) ,
  nextBeer: () => dispatch(actions.nextBeer()),
  startSession: () => dispatch(actions.startSessionAction()),

  setCurrentBeerIndex: (newCurrentIndex) => dispatch(actions.setCurrentBeerIndex(newCurrentIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TinderContainer)
