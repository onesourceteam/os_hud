<script>
  import RPM from "./speedomter/RPM.svelte";
  import { showSpeedometer } from "./../stores/speedometer";
  import Speed from "./speedomter/Speed.svelte";
  import Gas from "./speedomter/Gas.svelte";
  import States from "./speedomter/States.svelte";
  import Gear from "./speedomter/Gear.svelte";
  import Engine from "./speedomter/Engine.svelte";
  import useNuiEvent from "../lib/useNuiEvent";
  useNuiEvent("ui:speedometerVisibility", (newValue) => {
    showSpeedometer.set(newValue);
  });
</script>

{#if $showSpeedometer}
  <section class="absolute right-[3.333vh] bottom-[7.407vh] overflow-visible">
    <div class="relative grid place-items-center">
      <RPM />
      <Gas />
      <Speed />
      <States />
      <Gear />
      <Engine />
    </div>
  </section>
{/if}
