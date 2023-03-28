<script>
	export let data;
  
</script>

<div class="gap-4 flex flex-col items-center justify-center min-w-0 p-8 ">
  <div class="card-hover">
  <div class="card px-2 py-4 flex flex-col items-center">
    {#if data.cryptoes.symbol === "BTC"}
    <img src="/images/btc.png" alt="btc-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "ETH"}
    <img src="/images/eth.png" alt="eth-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "USDT"}
    <img src="/images/usdt.png" alt="usdt-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "BNB"}
    <img src="/images/bnb.png" alt="bnb-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol ==="USDC"}
    <img src="/images/usdc.png" alt="usdc-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "XRP"}
    <img src="/images/xrp.png" alt="xrp-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "BUSD"}
    <img src="/images/busd.png" alt="busd-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "ADA"}
    <img src="/images/ada.png" alt="ada-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol ==="DOGE"}
    <img src="/images/doge.png" alt="usdc-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "SOL"}
    <img src="/images/sol.png" alt="xrp-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol ==="STETH"}
    <img src="/images/steth.png" alt="steth-photo" class="w-20 h-50">
    {:else if data.cryptoes.symbol === "DOT"}
    <img src="/images/dot.png" alt="dot-photo" class="w-20 h-50">
    {:else}
    <img src="/images/error.jpg" alt="error-photo" class="w-20 h-50">

  {/if}
    {#if data.cryptoes}
    <h3>{data.cryptoes.symbol}</h3>
    <h3>{data.cryptoes.name}</h3>
    <h3>Rank {data.cryptoes.rank}</h3>
    <h3>Price USD: {data.cryptoes.price_usd}</h3>
  {:else}
    <h3> PAGE NOT FOUND :( </h3>
  {/if}
     <div class="header flex items-center justify-center my-4">
    </div>
  </div>
  </div>
</div>

