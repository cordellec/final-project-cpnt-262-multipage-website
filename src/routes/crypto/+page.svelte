<script>
	export let data;
</script>

<div class="grid grid-cols-6 gap-4 flex flex-col items-center justify-center min-w-0 p-8 ">
  {#each data.cryptoes as crypto}
  <div class="card-hover">
  <div class="card px-2 py-4 flex flex-col items-center">
      <div class="header flex items-center justify-center my-4">
        {#if crypto.symbol === "BTC"}
          <img src="/images/btc.png" alt="btc-photo" class="w-20 h-50">
          {:else if crypto.symbol === "ETH"}
          <img src="/images/eth.png" alt="eth-photo" class="w-20 h-50">
          {:else if crypto.symbol === "USDT"}
          <img src="/images/usdt.png" alt="usdt-photo" class="w-20 h-50">
          {:else if crypto.symbol === "BNB"}
          <img src="/images/bnb.png" alt="bnb-photo" class="w-20 h-50">
          {:else if crypto.symbol ==="USDC"}
          <img src="/images/usdc.png" alt="usdc-photo" class="w-20 h-50">
          {:else if crypto.symbol === "XRP"}
          <img src="/images/xrp.png" alt="xrp-photo" class="w-20 h-50">
          {:else if crypto.symbol === "BUSD"}
          <img src="/images/busd.png" alt="busd-photo" class="w-20 h-50">
          {:else if crypto.symbol === "ADA"}
          <img src="/images/ada.png" alt="ada-photo" class="w-20 h-50">
          {:else if crypto.symbol ==="DOGE"}
          <img src="/images/doge.png" alt="usdc-photo" class="w-20 h-50">
          {:else if crypto.symbol === "SOL"}
          <img src="/images/sol.png" alt="xrp-photo" class="w-20 h-50">
          {:else if crypto.symbol ==="STETH"}
          <img src="/images/steth.png" alt="steth-photo" class="w-20 h-50">
          {:else if crypto.symbol === "DOT"}
          <img src="/images/dot.png" alt="dot-photo" class="w-20 h-50">
          {:else}
          <img src="/images/error.jpg" alt="error-photo" class="w-20 h-50">

        {/if}
      </div>
      <h3>{crypto.symbol}</h3>
      <h3>{crypto.name}</h3>
      <h3>Rank {crypto.rank}</h3>
      <h3>Price USD: {crypto.price_usd}</h3>
    </div>
    </div>
  {/each}
</div>




