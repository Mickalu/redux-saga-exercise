import React from 'react'

import { connect } from 'react-redux';

import BeersLiked from '../components/Beersliked/Beersliked';

class BeersLikedContainer extends React.Component {
  constructor (props) {
    super(props);
  };

  render() {
    const { beers, likes } = this.props;
    return (
      <BeersLiked
        likes={likes}
        beers={beers}
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
