<script lang="ts">
  import { onMount } from "svelte";
  import { visibility } from "../stores/store";
  import fetch from "../lib/fetch";
  import eventListener from "../lib/useNuiEvent";

  let isVisible: boolean;

  visibility.subscribe((visible) => {
    isVisible = visible;
  });

  eventListener<boolean>("ui:visibility", (visible: boolean) => {
    visibility.set(visible);
  });

  onMount(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (isVisible && ["Escape"].includes(e.code)) {
        fetch("hideUI");
        visibility.set(false);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  });
</script>

{#if isVisible}
  <slot />
{/if}
