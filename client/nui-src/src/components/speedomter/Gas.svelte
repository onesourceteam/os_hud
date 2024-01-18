<script>
  import useNuiEvent from "../../lib/useNuiEvent";
  import { gas } from "../../stores/speedometer";
  useNuiEvent("ui:speedometerGas", (newValue) => {
    gas.set(newValue);
  });
</script>

<div
  class="absolute top-[2.269vh] right-[1.481vh] flex flex-col items-end gap-[0.556vh]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3.056vh"
    height="6.667vh"
    viewBox="0 0 33 72"
    fill="none"
  >
    <path
      d="M2.02918 2.43584C11.24 10.8749 18.5451 21.1813 23.4572 32.6673C28.3693 44.1532 30.7753 56.5547 30.5149 69.0443"
      stroke="white"
      stroke-opacity="0.35"
      stroke-width="4"
      stroke-linecap="round"
    />
    <path
      style={`opacity: ${$gas < 1 ? "0" : "1"}`}
      d="M2.02918 2.43584C11.24 10.8749 18.5451 21.1813 23.4572 32.6673C28.3693 44.1532 30.7753 56.5547 30.5149 69.0443"
      stroke="white"
      stroke-width="4"
      stroke-linecap="round"
      pathLength={101}
      stroke-dasharray={101}
      stroke-dashoffset={100 - ($gas / 100) * 100}
    />
  </svg>
  <i
    class={`text-white fa-solid fa-gas-pump text-[1.389vh] ${
      $gas < 1 ? "animate-pulse" : ""
    }`}
  />
  <p class="text-[1.296vh] text-white font-light">{$gas}%</p>
</div>
