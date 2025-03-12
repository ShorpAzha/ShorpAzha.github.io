/*
import africaJson from '' assert { type: 'json' };

console.log(africaJson.countries);

const countryNames = africaJson.countries;
const countryCurrencies = africaJson.countries;
const countryCapitals = africaJson.countries;

countryNames.forEach((country) => {
  console.log(country.name);
});

console.log('\n');

countryCurrencies.forEach((country) => {
  console.log(`${country.name}'s currency is`, country.currency);
});

console.log('\n');

countryCapitals.forEach((country) => {
  console.log(`${country.name}'s capital is`, country.capital);
});
*/

import datas from 'json/data.json' assert { type: 'json'}

const trainNames = datas.data;
const trainName_ = datas.data;
const trainDesc_ = datas.data;
const trainEpoque = datas.data;
const trainConstruction = datas.data;
const trainMotorisation = datas.data;
const trainVitesseMax = datas.data;
const trainEcartement = datas.data;

trainNames.forEach((trains) => {
  document.getElementById('name').innerHTML = trains.name
});

