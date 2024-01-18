<script>
  import { time } from "../../stores/infos";
  import useNuiEvent from "../../lib/useNuiEvent";

  useNuiEvent("ui:updateTime", (newTimeData) => {
    time.set(newTimeData);
  });
</script>

<div
  class="h-[2.963vh] bg-neutral-800 bg-opacity-50 pr-[1.111vh] flex items-center rounded-full gap-[1.111vh]"
>
  <div
    class="grid h-[2.963vh] w-[2.963vh] rounded-full bg-main place-items-center"
  >
    <i
      class="text-white fa-solid fa-clock-three text-[1.204vh] overflow-visible"
    />
  </div>
  <p class="font-bold leading-none text-white opacity-80 text-[1.204vh]">
    {`${String($time[0]).padStart(2, "0")}:${String($time[1]).padStart(
      2,
      "0"
    )}`}
  </p>
</div>
