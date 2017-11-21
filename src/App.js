import React, { Component } from 'react';
import './App.css';
import QRCode from 'qrcode.react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(property, e) {
    this.setState({ [property]: e.target.value })
  }

  render() {
    const value = `${this.state.drug};${this.state.time};${this.state.quantity}`;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Baymax</h1>
        </header>
        <div className="main-content">
          <div className="labels">
            <label>
              Drug:
              <input type="text" value={this.state.drug} onChange={(e) => this.handleChange('drug', e)} />
            </label>
            <label>
              Time:
              <input type="text" value={this.state.time} onChange={(e) => this.handleChange('time', e)} />
            </label>
            <label>
              Quantity:
              <input type="text" value={this.state.quantity} onChange={(e) => this.handleChange('quantity', e)} />
            </label>
          </div>
          <QRCode value={value} />
        </div>
      </div>
    );
  }
}

export default App;
