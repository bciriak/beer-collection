import React from 'react'
import BeerListItem from './BeerListItem'

export const BeerList = (props) => (
  <div>
    {
      props.beers.length === 0 ? (
        <div>
          <span>No beers.</span>
        </div>
      ) : (
        props.beers.map((beer) => {
          return <BeerListItem key={beer.id} isOwnBeer={props.isOwnBeer} {...beer} />
        })
      )
    }
  </div>
)
