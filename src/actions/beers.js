import uuid from 'uuid'

// ADD_BEER
export const addBeer = (beer) => {
  console.log(uuid())
  beer.id = uuid()
  return {
    type: 'ADD_BEER',
    beer
  }
}

// REMOVE_BEER
export const removeBeer = ({ id } = {}) => ({
  type: 'REMOVE_BEER',
  id
})

// EDIT_BEER
export const editBeer = (id, updates) => {
  return {
    type: 'EDIT_BEER',
    id,
    updates
  }
}

// SET_BEERS
export const setBeers = (beers) => ({
  type: 'SET_BEERS',
  beers
})
