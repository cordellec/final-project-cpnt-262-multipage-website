
export const load = async ({ fetch, params }) => {


  const response = await fetch(`https://api.coinlore.net/api/tickers/?limit=10&symbol=/${params.symbols}`);
  
  const cryptocurrencydata = await response.json();

  return {
    cryptoes: cryptocurrencydata.data
  }
}