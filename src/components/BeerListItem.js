import React from 'react'
import {Link} from 'react-router-dom'

const BeerListItem = ({isOwnBeer, id, name, tagline, description }) => {
  return (
    <div>
      <hr/>
      {
        isOwnBeer ? (
          <div>
            <Link to={`/edit/${id}`}>
              <h4>{name}</h4>
              <small>{tagline}</small>
              <p>{description}</p>
            </Link>
          </div>
        ) : (
          <div>
            <h4>{name}</h4>
            <small>{tagline}</small>
            <p>{description}</p>
            <button>Add to my collection</button>
          </div>
        )
      }
    </div>
  )
}

export default BeerListItem
