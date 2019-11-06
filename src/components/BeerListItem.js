import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addBeer} from '../actions/beers'

class BeerListItem extends React.Component {

  onClick = () => {
    const beer = {
      name: this.props.name,
      tagline: this.props.tagline,
      description: this.props.description
    }
    this.props.addBeer(beer)
  }

  render() {
    return (
      <div>
        <hr/>
        {
          this.props.isOwnBeer ? (
            <div>
              <Link to={`/edit/${this.props.id}`}>
                <h4>{this.props.name}</h4>
                <small>{this.props.tagline}</small>
                <p>{this.props.description}</p>
              </Link>
            </div>
          ) : (
            <div>
              <h4>{this.props.name}</h4>
              <small>{this.props.tagline}</small>
              <p>{this.props.description}</p>
              <button onClick={this.onClick}>Add to my collection</button>
            </div>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBeer: (beer) => dispatch(addBeer(beer))
})

export default connect(undefined, mapDispatchToProps)(BeerListItem)
