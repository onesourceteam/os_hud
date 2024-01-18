<script>
  import { street } from "../../stores/infos";
  import useNuiEvent from "../../lib/useNuiEvent";
  useNuiEvent("ui:updateStreet", (newStreetData) => {
    street.set(newStreetData);
  });
</script>

<div
  class="h-[2.963vh] bg-neutral-800 bg-opacity-50 pr-[1.111vh] flex items-center rounded-full gap-[1.111vh]"
>
  <div
    class="grid h-[2.963vh] w-[2.963vh] rounded-full bg-main place-items-center"
  >
    <i class="text-white fa-solid fa-location-arrow text-[0.926vh]" />
  </div>
  <p class="font-bold leading-none text-white opacity-80 text-[1.204vh]">
    {$street}
  </p>
</div>
