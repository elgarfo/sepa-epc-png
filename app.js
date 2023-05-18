process.on('SIGINT', function() {
    process.exit();
});

const express = require('express');
const app = express();
const port = 3000;

const epc = require('sepa-payment-qr-code');
const qrcode = require('qrcode');

const { PassThrough } = require('stream');

app.get('/', async (req, res) => {
  const name = req.query.name ?? 'Wikimedia Foerdergesellschaft';
  const amount = req.query.amount ?? 1.23;
  const iban = req.query.iban ?? 'DE33100205000001194700';
  const ref = req.query.ref ?? 'Spende fuer Wikipedia';

  const qrData = epc({
    name: name,
    iban: iban,
    amount: parseFloat(amount),
    unstructuredReference: ref,
  });
  const qrStream = new PassThrough();
  const result = await qrcode.toFileStream(qrStream, qrData, { type: 'png', width: 200, errorCorrectionLevel: 'M' });
  qrStream.pipe(res);
});

app.listen(port, () => {
  console.log('sepa-epc-png app listening on ' + port);
});
