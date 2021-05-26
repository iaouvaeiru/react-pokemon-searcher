import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    showFront: true
  }
  imageFlipper = () => {
    let newState = !this.state.showFront
    this.setState({
      showFront: newState
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.showFront ? this.props.pokemonObj.sprites.front : this.props.pokemonObj.sprites.back} alt="oh no!" onClick={this.imageFlipper}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
