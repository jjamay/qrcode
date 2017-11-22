import React from 'react'
import { Col, FormGroup, Label, Input, } from 'reactstrap';

const InputForm = ({ handleChange, handleDateChange, curData }) => (
  <div>
    <FormGroup row>
      <Label sm={3} for="name">Medication Name</Label>
      <Col sm={9}>
        <Input type="text" name="name" id="name" placeholder="e.g. Apixaban" onChange={handleChange} value={curData.name} />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3} for="quantity">Quantity</Label>
      <Col sm={9}>
        <Input type="quantity" name="quantity" id="quantity" placeholder="e.g. 10" onChange={handleChange} value={curData.quantity} />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3} for="units">Units</Label>
      <Col sm={9}>
        <Input type="select" name="units" id="units" onChange={handleChange} value={curData.units} >
          <option>Pills</option>
          <option>Sprays</option>
          <option>Teaspoons</option>
          <option>Tablespoons</option>
          <option>Milligrams</option>
        </Input>
      </Col>
    </FormGroup>
  </div>
);

export default InputForm;