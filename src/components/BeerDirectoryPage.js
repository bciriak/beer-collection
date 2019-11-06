import React from 'react'
import Header from './Header'
import {BeerList} from './BeerList'

class BeerDirectoryPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [],
      page: 1
    }
  }

  componentDidMount() {
    this.getBeers(1)
  }

  getBeers = (page) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
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

  nextPage = () => {
    this.setState((state, props) => ({
      page: state.page + 1
    }))
    this.getBeers(this.state.page)
  }

  prevPage = () => {
    this.setState((state, props) => ({
      page: state.page - 1
    }))
    this.getBeers(this.state.page)
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content-container">
          <h3>Beer Directory</h3>
          <button onClick={this.nextPage}>Next Page</button>
          <span>Page: {this.state.page}</span>
          <button onClick={this.prevPage}>Previous Page</button>
          <BeerList isOwnBeer={false} beers={this.state.beers}/>
        </div>
      </div>
    )
  }
}

export default BeerDirectoryPage
