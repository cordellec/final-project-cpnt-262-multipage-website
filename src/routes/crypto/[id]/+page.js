// load function is built-in to SvelteKit
// fetch is also provided by SvelteKit and must be in an async function
export const load = async ({ fetch, params }) => {

  // fetch must have `await` in front of it
  const response = await fetch(`https://api.coinlore.net/api/tickers/?limit=10&symbol=${params.name}`);

  // `.json()` converts raw JSON to a regular JS object
  // `.json()` must also always have await in front of it
  const cryptocurrency = await response.json();

  // return values must always be wrapped in a object
  return {
    cryptoes: cryptocurrency.data[0]
  }
}