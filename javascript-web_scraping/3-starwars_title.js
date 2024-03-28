#!/usr/bin/node
const request = require('request');
request('http:swapi.co/api/films/' + id + '/', function (error, response, body) {
  if (error == null) {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
