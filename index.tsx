import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  value: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      value: 21,
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>New text</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
