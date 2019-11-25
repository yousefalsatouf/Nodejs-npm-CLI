//const country = require('country-list');
const axios = require('axios');
const readline = require('readline-sync');
let country = readline.question("country?");
let year = readline.question("year?");


async function getHolidays(country, year) {
    try {
        const response = await axios.get('https://date.nager.at/api/v2/PublicHolidays/'+year+'/'+country);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

//country = prompt("country?");

getHolidays(country, year);