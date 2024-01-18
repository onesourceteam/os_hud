<script>
  import { maxSpeed, speed } from "../../stores/speedometer";

  $: RPM = ($speed / $maxSpeed) * 100;

  import useNuiEvent from "../../lib/useNuiEvent";
  useNuiEvent("ui:speedometerSpeed", (data) => {
    speed.set(data.speed);
    maxSpeed.set(data.maxSpeed);
  });
</script>

<svg
  class="mr-[5.093vh]"
  width="13.611vh"
  height="15.093vh"
  viewBox="0 0 147 163"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M35.0001 161C16.8747 146.424 5.25115 125.248 2.6335 102.034C0.0158512 78.8208 6.61362 55.4274 21.0054 36.8938C35.3972 18.3602 56.4312 6.16982 79.576 2.94888C102.721 -0.272048 126.124 5.73424 144.744 19.6738"
    stroke="white"
    stroke-opacity="0.35"
    stroke-width="4"
    stroke-linecap="round"
  />
  <path
    d="M35.0001 161C16.8747 146.424 5.25115 125.248 2.6335 102.034C0.0158512 78.8208 6.61362 55.4274 21.0054 36.8938C35.3972 18.3602 56.4312 6.16982 79.576 2.94888C102.721 -0.272048 126.124 5.73424 144.744 19.6738"
    stroke="white"
    stroke-width="4"
    stroke-linecap="round"
    pathLength={101}
    stroke-dasharray={101}
    style={`opacity: ${RPM < 1 ? 0 : 1}`}
    stroke-dashoffset={RPM >= 99 ? 0 : (100 - (RPM / 100) * 100)}
  />
</svg>