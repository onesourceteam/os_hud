<script>
  import useNuiEvent from "../lib/useNuiEvent";
  import { health } from "../stores/stats";
  useNuiEvent("ui:updateHealth", (newValue) => {
    health.set(newValue);
  });
</script>

<div class="flex items-center gap-[0.833vh]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.019vh"
    height="0.833vh"
    viewBox="0 0 11 9"
    fill="none"
  >
    <path
      d="M1.02266 5.30832L4.90488 8.77595C5.06602 8.91984 5.27871 9 5.5 9C5.72129 9 5.93398 8.91984 6.09512 8.77595L9.97734 5.30832C10.6305 4.72661 11 3.91057 11 3.05754V2.93832C11 1.50153 9.91504 0.276447 8.43477 0.0400639C7.45508 -0.116154 6.4582 0.190116 5.75781 0.860209L5.5 1.10687L5.24219 0.860209C4.5418 0.190116 3.54492 -0.116154 2.56523 0.0400639C1.08496 0.276447 0 1.50153 0 2.93832V3.05754C0 3.91057 0.369531 4.72661 1.02266 5.30832Z"
      class="fill-health"
    />
  </svg>

  <div class="h-[0.741vh] w-[18.519vh] flex gap-[0.278vh]">
    {#each Array(5).fill(0) as _, index}
      <div class="w-full h-full rounded-[0.093vh] bg-health bg-opacity-30">
        <div
          class="h-full rounded-[0.093vh] transition-duration-50 bg-health"
          style={`
          width: ${
            $health > index * (100 / 5)
              ? $health < (index + 1) * (100 / 5)
                ? ($health - index * (100 / 5)) * 5
                : 100
              : 0
          }%`}
        />
      </div>
    {/each}
  </div>
</div>
