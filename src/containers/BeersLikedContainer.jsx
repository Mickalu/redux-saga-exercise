import React from 'react'

import { connect } from 'react-redux';

import BeersLiked from './Beersliked/Beersliked';

class BeersLikedContainer extends React.Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <BeersLiked
        likes={this.props.likes}
        beers={this.props.beers}
      />
    );
  };
};

const mapStateToProps = (state) => ({
  likes: state.likes,
  beers: state.beers.data,
});

export default connect(
  mapStateToProps,
) (BeersLikedContainer);
