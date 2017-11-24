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
      repeat: 'n'
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
      repeat: 'n'
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
            <Input type="text" name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleChange} bsSize="sm" />
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
              <option value="n">None</option>
              <option value="1d">Every day</option>
              <option value="2d">Every 2 days</option>
              <option value="3d">Every 3 days</option>
              <option value="4d">Every 4 days</option>
              <option value="5d">Every 5 days</option>
              <option value="6d">Every 6 days</option>
              <option value="1w">Every week</option>
              <option value="2w">Biweekly</option>
              <option value="m">Monthly</option>
            </Input>
          </FormGroup>
          <Button outline color="primary" size="sm">Add Dosage</Button>
        </Form>
      </div>
    )
  }
}

export default Dosages;