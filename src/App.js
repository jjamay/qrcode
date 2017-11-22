import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import NavBar from './components/Navbar';
import InputForm from './components/InputForm';
import QR from './components/QR';
import Dosages from './components/Dosages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dosages: [],
      quantity: '',
      units: 'Pills',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDosageDelete = this.onDosageDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDateChange(date) {
    this.setState({ startdate: date })
  }

  onSubmit(newDosage) {
    this.setState({ dosages: [...this.state.dosages, newDosage]});
  }

  onDosageDelete(index, e) {
    let dosages = this.state.dosages;
    dosages.splice(index, 1)
    this.setState({ dosages: dosages })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container className="App">
          <Row>
            <Col md="9">
              <InputForm
                handleChange={this.handleChange}
                handleDateChange={this.handleDateChange}
                curData={this.state}
              />
            </Col>
            <Col md="3">
              <QR data={this.state} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Dosages
                dosages={this.state.dosages}
                onSubmit={this.onSubmit}
                onDosageDelete={this.onDosageDelete}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
