import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      hp: '',      
      frontUrl: '',
      backUrl: ''
      
    }
  }
  

  changeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  onSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          name: this.state.name,
          hp: this.state.hp,
          sprites: {
            front: this.state.frontUrl,
            back: this.state.backUrl
          }
        } 
      )
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({
        name: '',
        hp: '',      
        frontUrl: '',
        backUrl: ''
      })
      this.props.addPokemon(newPokemon)
    })
  }


  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.changeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
