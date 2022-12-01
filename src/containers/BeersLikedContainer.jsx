import React from 'react'

import { Container } from 'react-container-component';
import { connect } from 'react-redux';

import BeersLiked from '../components/Navigations/Menus/BeersLiked';

class BeersLikedContainer extends Container {
  constructor (props) {
    super(props)
    this.setComponent(BeersLiked, { props })
  }
}

const mapStateToProps = (state) => ({
  likes: state.likes,
  beers: state.beers.data,
})

export default connect(
  mapStateToProps,
) (BeersLikedContainer);
