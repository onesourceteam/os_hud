<script>
  import useNuiEvent from "../../lib/useNuiEvent";
  import { engine } from "../../stores/speedometer";
  useNuiEvent("ui:speedometerEngine", (newValue) => {
    engine.set(newValue);
  });
</script>

<div
  class="absolute top-[0] right-[0] bg-red h-[3.333vh] w-[3.333vh] grid place-items-center"
>
  <svg
    width="3.333vh"
    height="3.333vh"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="18"
      cy="18"
      r="17"
      stroke="white"
      stroke-opacity="0.2"
      stroke-width="2"
    />
    <circle
      style={`opacity: ${$engine < 1 ? 0 : 1}`}
      cx="18"
      cy="18"
      r="17"
      stroke="white"
      stroke-width="2"
      pathLength={101}
      stroke-dasharray={101}
      stroke-dashoffset={100 - ($engine / 100) * 100}
    />
  </svg>
  <i class="absolute fa-solid fa-wrench text-[1.111vh] text-white" />
</div>
