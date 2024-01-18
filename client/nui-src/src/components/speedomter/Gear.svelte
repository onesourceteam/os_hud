<script>
  import { gear } from "../../stores/speedometer";
  import useNuiEvent from "../../lib/useNuiEvent";
  useNuiEvent("ui:speedometerGear", (newValue) => {
    gear.set(newValue);
  });
</script>

<div
  class="absolute left-[36.5%] [transform:translate(-50%,0) top-[2.315vh] flex items-center gap-[0.556vh]"
>
  <p class="text-[#b13b3b] font-extrabold text-[1.111vh]">
    {#if $gear > 1}
      {$gear - 1}
    {:else}
      {#if $gear == 1}
        R
      {:else}
        {$gear}
      {/if}
    {/if}
    
  </p>
  <p class="text-[#f33] font-bold text-[1.296vh]">
    {#if $gear == 0}
      R
    {:else}
      {$gear}
    {/if}
  </p>
  <p class="text-[#b13b3b] font-extrabold text-[1.111vh]">
    {#if $gear < 1}
      1
    {:else}
      {$gear + 1}
    {/if}
  </p>
</div>
