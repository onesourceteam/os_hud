<script>
  import useNuiEvent from "../../lib/useNuiEvent";
  import { voip } from "../../stores/infos";

  useNuiEvent("ui:updateVoip", (newVoipData) => {
    voip.set(newVoipData);
  });
</script>

<div
  class="h-[2.963vh] bg-neutral-800 bg-opacity-50 pr-[1.111vh] flex items-center rounded-full gap-[1.111vh]"
>
  <div
    class="grid h-[2.963vh] w-[2.963vh] rounded-full bg-main place-items-center"
  >
    <i
      class={`text-white ${
        $voip.active ? "fa-solid" : "fa-light"
      } fa-microphone text-[1.204vh] overflow-visible`}
    />
  </div>
  <p class="font-bold leading-none text-white opacity-80 text-[1.204vh]">
    {$voip.current}
  </p>
</div>
