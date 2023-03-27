<script>
	export let data;
</script>

<h1>Albums</h1>

{#each data.cryptoes as crypto}

<div class="card m-4 px-4 grid grid-cols-3 gap-4">

<div class="header flex items-center justify-center my-4 ">
  {#if crypto.symbol === "BTC"}
    <img src="/images/btc.png" alt="btc-photo" class="w-20 h-50">
  {/if}
  
</div>
      
      <h3>{crypto.symbol}</h3>

			<h3> {crypto.name}</h3>

			<h3>Rank {crypto.rank}</h3>

			<h3>Price USD: {crypto.price_usd}</h3>

     
	
</div>

{/each}


