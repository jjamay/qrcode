import React, { Component } from 'react';
import DosageList from './DosageList';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

class Dosages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment.utc(0),
      quantity: 1,
      startDate: moment(),
      repeat: 'None'
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      time: moment.utc(0),
      quantity: 1,
      startDate: moment(),
      repeat: 'None'
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleTimeChange(value) {
    this.setState({ time: value });
  }

  handleStartDateChange(value) {
    this.setState({ startDate: value });
  }

  render() {
    return (
      <div>
        <Label>Dosages</Label>
        <DosageList dosages={this.props.dosages} onDelete={this.props.onDosageDelete} />
        <Form style={{ background: 'info'}} inline onSubmit={this.onSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="quantity" className="mr-sm-2">Quantity</Label>
            <Input type="select" name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleChange} bsSize="sm">
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
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="startdate" className="mr-sm-2">Start Date</Label>
            <DatePicker
              onChange={this.handleStartDateChange}
              selected={this.state.startDate}
              dateFormat="DD/MM/YYYY"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="repeat" className="mr-sm-2">Repeat</Label>
            <Input type="select" name="repeat" id="repeat" value={this.state.repeat} onChange={this.handleChange} bsSize="sm">
              <option>None</option>
              <option>Every day</option>
              <option>Every 2 days</option>
              <option>Every 3 days</option>
              <option>Every 4 days</option>
              <option>Every 5 days</option>
              <option>Every 6 days</option>
              <option>Every week</option>
              <option>Biweekly</option>
              <option>Monthly</option>
            </Input>
          </FormGroup>
          <Button outline color="primary" size="sm">Add Dosage</Button>
        </Form>
      </div>
    )
  }
}

export default Dosages;