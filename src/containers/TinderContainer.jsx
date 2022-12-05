import React from 'react';
import { connect } from 'react-redux';

import Tinder from '../components/Game/Tinder';
import * as actions from '../actions';

class TinderContainer extends React.Component {
  constructor (props) {
    super(props);
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
    const { session, fetchBeers } = this.props;
    if (nextProps.session.id !== session.id) {
      fetchBeers();
    };
  };


  like = () => {
    const { beer, addLike } = this.props;
    addLike(beer.id);
  };

  dislike = () => {
    this.props.nextBeer();
  };

  render() {
    const { beer } = this.props;

    return (
      <Tinder
        dislike={this.dislike}
        like={this.like}
        beer={beer}
      />
    );
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
  beer: state.beers.data[state.beer.currentIndex],
  beers: state.beers.data,
  currentBeerIndex: state.beer.currentIndex,

  likes: state.likes,

  session: state.settings.session,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBeers: () => dispatch(actions.fetchBeersAction()) ,
  nextBeer: () => dispatch(actions.nextBeer()),
  startSession: () => dispatch(actions.startSessionAction()),

  addLike: (beerId) => dispatch(actions.addLike(beerId)),
  setCurrentBeerIndex: (newCurrentIndex) => dispatch(actions.setCurrentBeerIndex(newCurrentIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TinderContainer)
