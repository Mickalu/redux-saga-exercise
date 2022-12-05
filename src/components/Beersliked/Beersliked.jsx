import React from "react";
import { connect } from "react-redux";
import { v4 } from 'uuid';

import { getBeerInfoByIndex } from "../../utils/getInfoBeer";

const BeersLiked = ({ beers, likes }) => {
  return (
    <div>
      {likes.data.map((beerId) => {
        if (beerId != undefined){
          const titleBeer = getBeerInfoByIndex(beerId, beers).title;
          return (
            <div data-testid="beer-title" key={`div-beer-liked-${v4()}`}> {titleBeer} </div>
          );
        };
      })}
    </div>
  )
};

export default BeersLiked;
