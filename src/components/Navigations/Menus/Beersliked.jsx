import React from "react";
import { connect } from "react-redux";

import { getBeerInfoByIndex } from "../../../utils/getInfoBeer";
import {v4} from 'uuid';

const BeersLiked = (props) => {
  console.log(props);
  return (
    <div>
      {props.likes.data.map((beerId) => {
        const titleBeer = getBeerInfoByIndex(beerId, props.beers).title;
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
  mapStateToProps
)(BeersLiked);