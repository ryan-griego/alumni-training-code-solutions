'use strict';
// Define an asynchronous function to fetch data
async function fetchPokemon() {
  try {
    // Initiate a fetch request and await its response
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/haunter/');
    // Ensure the response status indicates success
    if (!response.ok) {
      // If the status code is not in the successful range, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Await the parsing of the response body as JSON
    const data = await response.json();
    // Successfully handle and output the JSON data
    console.log(data);
    return data;
  } catch (error) {
    // Log any errors that arise during the fetch operation
    console.error('Error:', error);
    throw error;
  }
}
// Execute the async function to perform the fetch operation
fetchPokemon();
