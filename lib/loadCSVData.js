'use strict';

const csv = require('fast-csv');

module.exports = csvString => (
  new Promise(rs => {
    const entries = [];

    csv.parseString(csvString, { headers: true })
      .on('error', error => console.error(error))
      .on('data', row => entries.push(row))
      .on('end', rowCount => {
        rs(entries);
      });
  })
);
