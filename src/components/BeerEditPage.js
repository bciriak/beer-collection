import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import BeerForm from './BeerForm'
import {editBeer, removeBeer} from '../actions/beers'

export class BeerEditPage extends React.Component {
  onSubmit = (beer) => {
    this.props.editBeer(this.props.beer.id, beer)
    this.props.history.push('/')
  }

  onClick = () => {
    this.props.removeBeer({ id: this.props.beer.id })
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content-container">
          <h3>Beer detail page</h3>
          <BeerForm beer={this.props.beer} onSubmit={this.onSubmit}/>
          <button onClick={this.onClick}>Remove Beer from collection</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    beer: state.beers.find((beer) => beer.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBeer: (id, beer) => (dispatch(editBeer(id, beer))),
    removeBeer: ({id}) => (dispatch(removeBeer({id})))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerEditPage)
