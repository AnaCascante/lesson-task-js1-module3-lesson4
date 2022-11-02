// Question 1  Using the `CORS_URL` variable below, convert the API call inside the `getElephants` function to use the cors-anywhere link, such that the API call will succeed.



const API_URL = "https://elephant-api.herokuapp.com/elephants";
const CORS_URL = "https://noroffcors.herokuapp.com/";

const URL = CORS_URL + API_URL; 

async function getElephants() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}

getElephants();


// Question 2 Add headers to the below API call. You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

const options = {"headers": {
    'X-RapidAPI-Key': 'd286010972msh85e8eb55a139aaap1b21c7jsn5bef02058e37',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }};

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";
async function callUrbanDictionary() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();