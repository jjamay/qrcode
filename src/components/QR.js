import React from 'react';
import QRCode from 'qrcode.react';

const dosagesToString = dosages => {
  let str = '';
  dosages.forEach(dosage => {
    if (str) {
      str += ',';
    }
    str += `${dosage.time.format('hh:mm a')}|${dosage.quantity}|${dosage.startDate.format('MM/DD/YYYY')}|${dosage.repeat}`
  });
  return str;
}

const QR = ({ data: { name, quantity, units, dosages }}) => (
  <div className="qrcode text-center">
    <h4>Prescription QR Code</h4>
    <QRCode className="center-block" level='L' value={`${name};${quantity};${units.toLowerCase()};${dosagesToString(dosages)}`} />
  </div>
)

export default QR;