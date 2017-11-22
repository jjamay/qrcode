import React, { Component } from 'react';
import DosageList from './DosageList';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

class Dosages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment.utc(0),
      quantity: 1
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      time: moment.utc(0),
      quantity: 1
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleTimeChange(value) {
    this.setState({ time: value })
  }

  render() {
    return (
      <div>
        <Label>Dosages</Label>
        <DosageList dosages={this.props.dosages} onDelete={this.props.onDosageDelete} />
        <Form inline onSubmit={this.onSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="quantity" className="mr-sm-2">Quantity</Label>
            <Input type="select" name="quantity" id="exampleSelect" value={this.state.quantity} onChange={this.handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="time" className="mr-sm-2">Time</Label>
            <TimePicker 
              showSecond={false}
              use12Hours
              onChange={this.handleTimeChange}
              value={this.state.time}
            />
          </FormGroup>
          <Button outline color="primary">Add Dosage</Button>
        </Form>
      </div>
    )
  }
}

export default Dosages;