import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props){
    super()
  }
  pokemonCardRender = () => {
    return this.props.pokemonArr.map(pokemonObj => (
      // console.log(pokemonObj)
      <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj} />
    ))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokemonCardRender()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
