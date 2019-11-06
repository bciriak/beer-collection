import React from 'react'
import {connect} from 'react-redux'
import {addBeer} from '../actions/beers'
import Header from './Header'
import BeerForm from './BeerForm'

export class AddBeerPage extends React.Component {

  onSubmit = (beer) => {
    this.props.addBeer(beer)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content-container">
          <h3>Add new beer</h3>
          <BeerForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBeer: (beer) => dispatch(addBeer(beer))
})

export default connect(undefined, mapDispatchToProps)(AddBeerPage)
