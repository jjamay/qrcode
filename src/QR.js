import React from 'react';
import QRCode from 'qrcode.react';
import { Card, CardTitle } from 'reactstrap';

const dosagesToString = (dosages) => {
  let str = '';
  dosages.forEach((dosage) => {
    if (str) {
      str += ',';
    }
    str += `(${dosage.time.format('hh:mm a')},${dosage.quantity})`
  });
  return str;
}

const QR = ({ data: { name, quantity, startdate, units, dosages }}) => (
  <div className="qrcode text-center">
    <CardTitle>Medication QR Code</CardTitle>
    <QRCode className="center-block" level='L' value={`${name};${quantity};${startdate.format('MM/DD/YYYY')};${units.toLowerCase()};${dosagesToString(dosages)}`} />
  </div>
)

export default QR;