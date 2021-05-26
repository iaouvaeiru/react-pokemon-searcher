import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemonArr: [],
    name: ''
  }

  componentDidMount = async() => {
    try {
      const promise = await fetch('http://localhost:3000/pokemon')
      const json = await promise.json()
      this.setState({
        pokemonArr: json
      })
      } catch(err) {
      console.log(err)
    }
  }

  addPokemon = (newPokemon) => {
    let newArr = [...this.state.pokemonArr, newPokemon]
    this.setState({
      pokemonArr: newArr
    })
  }

  handleSearch = (searchTerm) => {
    this.setState({
      name: searchTerm
    })
  }

  render() {
    let searchArray = this.state.pokemonArr.filter(pokemon => {
      return pokemon.name.includes(this.state.name.toLowerCase()) 
    })
    if (this.state.name === '') {
       searchArray = this.state.pokemonArr
    }
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch} search={this.state.name}/>
        <br />
        <PokemonCollection pokemonArr={searchArray}/>
      </Container>
    )
  }
}

export default PokemonPage
