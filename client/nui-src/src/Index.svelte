<script lang="ts">
  import Interface from "./components/Interface.svelte";
  import "./style/global.css";
  import VisibilityProvider from "./providers/VisibilityProvider.svelte";
  import { debugData } from "./lib/debugPost";

  debugData([
    {
      action: "ui:visibility",
      payload: true,
    },
  ]);
  debugData([
    {
      action: "ui:updateVoip",
      payload: {
        current: "Falando",
        active: true,
      },
    },
  ]);
  debugData([
    {
      action: "ui:updateStreet",
      payload: "Rua Teste AAAA",
    },
  ]);
  debugData([
    {
      action: "ui:updateTime",
      payload: [1, 20],
    },
  ]);
  debugData([
    {
      action: "ui:speedometerVisibility",
      payload: true,
    },
  ]);
</script>

<VisibilityProvider>
  <Interface />
</VisibilityProvider>
