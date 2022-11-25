import React from 'react';

import BeerAttributes from './BeerAttributes';

class Beer extends React.Component {
  constructor () {
    super()
    this.img_height = 'auto'
    this.beerImg
    this.beerImgWrapper
    this.imageLoaded = this.imageLoaded.bind(this)
  }

  componentDidMount () {
    this.beerImgWrapper.style.minHeight = `${this.beerImgWrapper.offsetWidth}px`
  }

  imageLoaded () {
    const { setLoadingBeer } = this.props
    if (this.img_height === 'auto') {
      this.img_height = this.beerImg.height
    }
    setLoadingBeer(false)
  }

  render () {
    const {
      beer,
      loadingBeer
    } = this.props

    const { imageLoaded } = this
    let loadingBeerComponent
    if (loadingBeer) {
      loadingBeerComponent = (<span><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" /></span>)
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4 text-center beer-col">
              <div ref={node => this.beerImgWrapper = node} className="beer-img">
                <img
                  height={`${this.img_height}px`} style={{ height: this.img_height, color: 'red' }}
                  className="img-responsive"
                  ref={node => this.beerImg = node}
                  src={beer.photo_link}
                  onLoad={imageLoaded}
                  onError={() => { this.props.setLoadingBeer(false) }}
                  role="presentation"
                  name="beerImg"
                />
                { loadingBeerComponent }
              </div>
              <h3 className="beer_title" name="beerTitle">{beer.product_name}</h3>
            </div>
            <div className="col-sm-4 hidden-xs hidden-sm">
              <BeerAttributes beer={beer} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Beer.propTypes = {
  beer: React.PropTypes.object,
  setLoadingBeer: React.PropTypes.func,
  loadingBeer: React.PropTypes.bool
}

export default Beer
