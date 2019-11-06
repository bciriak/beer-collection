import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import selectBeers from '../selectors/beers'
import {BeerList} from './BeerList'

export class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content-container">
          <h2>Beer Dashboard</h2>
          <BeerList isOwnBeer={true} beers={this.props.beers}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  beers: selectBeers(state.beers)
})

export default connect(mapStateToProps)(DashboardPage)
