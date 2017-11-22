import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import NavBar from './Navbar';
import InputForm from './InputForm';
import QR from './QR';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dosages: [],
      quantity: '',
      units: 'Pills',
      startdate: moment()
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
            <Col>
              <InputForm
                handleChange={this.handleChange}
                handleDateChange={this.handleDateChange}
                dosages={this.state.dosages}
                onSubmit={this.onSubmit}
                curData={this.state}
                onDosageDelete={this.onDosageDelete}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <QR data={this.state} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
