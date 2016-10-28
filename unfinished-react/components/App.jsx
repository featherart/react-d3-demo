import React from 'react';

export default class App extends React.Component {
  render() {
    return <div>
      <AnimalShelter/>
    </div>
  }
}

class AnimalShelter extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {count: 0};
  //   this.handleChange = this.handleChange.bind(this);
  // }

  state = {
    catCount: 0,
    dogCount: 0
  };

  handleChange = () => {
    const catCount = this.state.catCount + 1;
    const dogCount = this.state.dogCount + 1;
    this.setState({catCount: catCount, dogCount: dogCount});
  }

  render() {
    return <div>
      <Cats name="cats" count={this.state.catCount}/>
      <Dogs name="dogs" count={this.state.dogCount}/>

      <button onClick={this.handleChange}> More Animals </button>
    </div>
  }
}
class Cats extends React.Component {
  render() {
    return <p>Number of cats: {this.props.count}</p>
  }
}
class Dogs extends React.Component {
  render() {
    return <p>Number of dogs: {this.props.count}</p>
  }
}
