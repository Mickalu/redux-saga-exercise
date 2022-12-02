import React from "react";
import { connect } from "react-redux";
import { v4 } from 'uuid';

import { getBeerInfoByIndex } from "../../utils/getInfoBeer";

const BeersLiked = (props) => {
  const { beers, likes } = props;
  return (
    <div>
      {likes.data.map((beerId) => {
        const titleBeer = getBeerInfoByIndex(beerId, beers).title;
        return (
          <div data-testid="beer-title" key={`div-beer-liked-${v4()}`}> {titleBeer} </div>
        )
      })}
    </div>
  )
};

const mapStateToProps = (state) => ({
  likes: state.likes,
  beers: state.beers.data,
})

export default connect(
  mapStateToProps,
)(BeersLiked);
