import React from 'react'
import { Col, FormGroup, Label, Input, } from 'reactstrap';
import Dosages from './Dosages';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const InputForm = ({ handleChange, handleDateChange, dosages, onSubmit, curData , onDosageDelete }) => (
  <div>
    <FormGroup row>
      <Label sm={2} for="name">Medication Name</Label>
      <Col sm={10}>
        <Input type="text" name="name" id="name" placeholder="e.g. Apixaban" onChange={handleChange} value={curData.name} />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={2} for="quantity">Quantity</Label>
      <Col sm={10}>
        <Input type="quantity" name="quantity" id="quantity" placeholder="e.g. 10" onChange={handleChange} value={curData.quantity} />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={2} for="units">Units</Label>
      <Col sm={10}>
        <Input type="select" name="units" id="units" onChange={handleChange} value={curData.units} >
          <option>Pills</option>
          <option>Sprays</option>
          <option>Teaspoons</option>
          <option>Tablespoons</option>
          <option>Milligrams</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={2} for="startdate">Start Date</Label>
      <Col sm={10}>
        <DatePicker selected={curData.startdate} onChange={handleDateChange} />
      </Col>
    </FormGroup>
    <Dosages dosages={dosages} onSubmit={onSubmit} onDosageDelete={onDosageDelete} />
  </div>
);

export default InputForm;