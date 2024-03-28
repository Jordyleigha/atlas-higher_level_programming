#!/usr/bin/node

process.argv.forEach(function (val, index) {
  if (index > 1) {
    try {
      const fs = require('fs');
      const content = fs.readFileSync(val, 'utf-8');
    } catch (err) {
      console.error(err);
    }
  }
});
