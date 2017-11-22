import React from 'react';
import { Table, Button } from 'reactstrap'

const DosageList = ({ dosages, onDelete }) => {
  const deleteDosage = (index, e) => {
    e.preventDefault();
    onDelete(index);
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Dosage</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {dosages.map((dosage, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{dosage.time.format('hh:mm a')}</td>
          <td>{dosage.quantity}</td>
          <td onClick={e => deleteDosage(index, e)}><Button color="danger">Delete</Button></td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
};

export default DosageList;
