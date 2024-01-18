<script>
  import { shield } from "../stores/stats";
  import useNuiEvent from "../lib/useNuiEvent";
  useNuiEvent("ui:updateShield", (newValue) => {
    shield.set(newValue);
  });
</script>

{#if $shield > 0}
  <div class="flex items-center gap-[0.95vh]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.833vh"
      height="0.926vh"
      viewBox="0 0 9 10"
      fill="none"
    >
      <path
        d="M4.5 0C4.58625 0 4.6725 0.0196387 4.75125 0.0569521L8.28187 1.62608C8.69437 1.80872 9.00187 2.23488 8.99999 2.74941C8.99062 4.69756 8.22562 8.26198 4.995 9.88217C4.68187 10.0393 4.31813 10.0393 4.005 9.88217C0.774382 8.26198 0.00938351 4.69756 8.52841e-06 2.74941C-0.00186647 2.23488 0.305633 1.80872 0.718132 1.62608L4.25063 0.0569521C4.3275 0.0196387 4.41375 0 4.5 0Z"
        class="fill-shield"
      />
    </svg>

    <div class="h-[0.741vh] w-[18.519vh] flex gap-[0.278vh]">
      {#each Array(5).fill(0) as _, index}
        <div class="w-full h-full rounded-[0.093vh] bg-shield bg-opacity-30">
          <div
            class="h-full rounded-[0.093vh] transition-duration-50 bg-shield"
            style={`
              width: ${
                $shield > index * (100 / 5)
                  ? $shield < (index + 1) * (100 / 5)
                    ? ($shield - index * (100 / 5)) * 5
                    : 100
                  : 0
              }%`}
          />
        </div>
      {/each}
    </div>
  </div>
{/if}
