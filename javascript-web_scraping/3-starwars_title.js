#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
request('http://swapi.co/api/films/' + id + '/', function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
