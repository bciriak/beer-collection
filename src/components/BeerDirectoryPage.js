import React from 'react'
import Header from './Header'
import {BeerList} from './BeerList'

class BeerDirectoryPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState(() => ({
          beers: data
        }))
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content-container">
          <h3>Beer Directory</h3>
          <BeerList isOwnBeer={false} beers={this.state.beers}/>
        </div>
      </div>
    )
  }
}

export default BeerDirectoryPage
