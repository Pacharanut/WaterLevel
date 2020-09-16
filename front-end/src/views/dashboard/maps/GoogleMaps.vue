<template>
  <gmaps-map>
    <gmaps-marker v-for="(item, i) in items" :key="i" :options="item.options" />
  </gmaps-map>
</template>

<script>
import { gmapsMap, gmapsMarker } from "x5-gmaps";

export default {
  components: { gmapsMap, gmapsMarker },
  data: () => ({
    items: [
      { options: { position: { lat: 14.538548, lng: 100.535028 } } },
      { options: { position: { lat: -27.42, lng: 153.02 } } },
      { options: { position: { lat: -27.48, lng: 153.08 } } },
      { options: { position: { lat: -27.49, lng: 153.09 } } },
    ],
  }),
};
</script>