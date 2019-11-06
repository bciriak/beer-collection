import React from 'react'

export default class BeerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.beer ? props.beer.name : '',
      tagline: props.beer ? props.beer.tagline : '',
      description: props.beer ? props.beer.description : '',
      error: ''
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onTaglineChange = (e) => {
    const tagline = e.target.value;
    this.setState(() => ({ tagline }));
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.name || !this.state.tagline) {
      this.setState(() => ({ error: 'Please provide name and tagline.' }))
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <div>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tagline"
            value={this.state.tagline}
            onChange={this.onTaglineChange}
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
        </div>
        <div>
          <button>Save Beer</button>
        </div>
      </form>
    )
  }
}
