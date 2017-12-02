import React, { Component } from 'react';
import Card from '../../components/Card.js';


class App extends Component {
  constructor(){
    super()
      this.state={
        view: false,
        idA: '',
        idB:'',
        c: false,
        stat: true
    }
  }

  change(e){
    let name = e.target.name;
    let id = e.target.src;
    let view = this.state.view;
    let stat = this.state.stat;
    this.setState({idA: id})
    this.setState({view: true})
    if(this.state.idA === this.state.idB){
      this.setState({c: true, a: stat, b: stat})}
  }

   changeBack(e){
    let name = e.target.name;
    let id = e.target.src;
    let view = this.state.view;
    let stat = this.state.stat;
    this.setState({idB: id})
    this.setState({view: false})
    if(this.state.idA === this.state.idB){
      this.setState({c: true, a: stat, b: stat})}
  }

  render() {
    return (
      <div className="App">
        <Card
          changeBack={this.changeBack.bind(this)}
          change={this.change.bind(this)}
          a={this.state.a}
          b={this.state.b}
          c={this.state.c} />
      </div>
    );
  }
}

export default App;
