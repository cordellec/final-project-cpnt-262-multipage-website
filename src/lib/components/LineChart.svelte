<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let canvas;
  let chart;
  let selectedCurrency = "ETH";
  let amount = 444;

  const conversionRates = {
    BTC: 210000,
    ETH: 1700,
    DOGE: 0.028,
    ADA: 0.38,
    DOT: 5.38,
  };

  function updateChart() {
    const convertedAmounts = Object.values(conversionRates).map((rate) => rate * amount);

    chart.data.datasets[0].data = convertedAmounts;
    chart.update();
  }

  function handleCurrencyChange(event) {
    selectedCurrency = event.target.value;
    updateChart();
  }

  onMount(() => {
    chart = new Chart(canvas, {
      type: "line",
      data: {
        labels: Object.keys(conversionRates),
        datasets: [
          {
            label: "Currency Conversion",
            data: [],
            borderColor: "white",
            backgroundColor: "#2c3656",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    updateChart();
  });
</script>


<div class="class flex flex-col items-center justify-center h-screen w-full mx-4 px-8 ">

<canvas bind:this={canvas} style="width: 300px; height: 50px; mx-12 px-4"></canvas>

<select bind:value={selectedCurrency} on:change={handleCurrencyChange}  class="select w-[150px] py-2">
	{#each Object.keys(conversionRates) as currency}
    <option value={currency}>{currency}</option>
  {/each}
</select>



</div>

