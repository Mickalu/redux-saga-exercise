import React from 'react';
import { Container } from 'react-container-component';

import Beer from '../components/Game/Beer';

class BeerContainer extends Container {
  constructor() {
    super();
    this.setComponent(Beer);
    this.state = {
      loadingBeer: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.beer.product_id !== this.props.beer.product_id) {
      this.setLoadingBeer(true);
    }
  }

  setLoadingBeer = (isLoading) => {
    this.setState({ loadingBeer: isLoading });
  };
}

BeerContainer.propTypes = {
  beer: React.PropTypes.object,
};

export default BeerContainer;
