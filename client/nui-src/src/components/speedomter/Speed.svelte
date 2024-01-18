<script>
  import { speed } from "../../stores/speedometer";
</script>

<div class="absolute flex flex-col items-center mr-[1.481vh]">
  <h1 class="text-white text-[4.815vh] font-semibold leading-none">
    {#if $speed < 1}
      <span class="opacity-35">000</span>
    {:else if $speed < 10}
      <span class="opacity-35">00</span>{$speed}
    {:else if $speed < 100}
      <span class="opacity-35">0</span>{$speed}
    {:else}
      {$speed}
    {/if}
  </h1>
  <h2 class="leading-none text-white opacity-50 text-[1.296vh]">KM/h</h2>
</div>
