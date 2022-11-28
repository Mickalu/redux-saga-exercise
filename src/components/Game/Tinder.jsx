import React from 'react'

import Actions from './Actions';
import BeerContainer from '../../containers/BeerContainer';

const Tinder = ({ beer, like, dislike, counterAnimation }) => (
  <div>
    <BeerContainer
      beer={beer}
      counterAnimation={counterAnimation}
    />
    <Actions
      like={like}
      dislike={dislike}
    />
  </div>
)

Tinder.propTypes = {
  beer: React.PropTypes.object.isRequired,
  like: React.PropTypes.func.isRequired,
  dislike: React.PropTypes.func.isRequired,
  counterAnimation: React.PropTypes.string
}

export default Tinder
