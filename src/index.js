import React , { Component as C } from 'react';
import { render as r } from 'react-dom';

class Stater2 extends C {
 render() {
   return  <h2>{ this.props.v }</h2>;
 }
}
class Stater  extends C  {
 constructor() {
   super();
   this.state = {v: 'Hello'};
 }
 click() {
   this.setState({v: 'Hi, man!'});
 }
 render() {
   return (<div>
     <h1 onClick={this.click.bind(this)}>{ this.state.v }</h1>
     <Stater2 v={ this.state.v }/>
   </div>);
 }
}

r(
  <Stater  />,
  document.querySelector('.cont')
); // https://kodaktor.ru/min_react_webpack4new
