import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

const Deg = ({ base: b, exp: e }) =>
  <h1><span>{ b }</span><sup>{ e }</sup> = { b ** e }</h1>;
const Degs = ({ a }) =>
  <ul>{ a.map((v, i) => <li><Deg base="2" exp={ v } key={ i } /></li>) }</ul>;

class App extends C {
  constructor() {
    super();
    this.state = {
      exps: 5
    }
  }
  click(){
    this.setState( ({ exps }) =>  ({ exps: +exps + 1 }));
  }
  change(v){
    this.setState( ({ exps }) =>  ({ exps: v }));
  }
  render (){
    return (<div>
      <button onClick={this.click.bind(this)}>⬆︎</button>
      <input onChange={({ target: {value: v} }) => this.change(v)}
             value={ this.state.exps } />
      <Degs a={   Array.from({length: this.state.exps}, (v, i) => 10 + i) } />
    </div>);
  }
}

r(<App />,
document.querySelector('.cont'));
