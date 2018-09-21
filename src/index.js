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
      exps: [10, 1, 2, 3, 4, 5]
    }
  }
  click(){
    this.setState( ({ exps }) => ({ exps: [ ...exps, exps[exps.length-1]+1] }));
  }
  render (){
    return (<div>
      <button onClick={this.click.bind(this)}>⬆︎</button>
      <Degs a={ this.state.exps } />
    </div>);
  }
}

r(<App />,
document.querySelector('.cont'));
