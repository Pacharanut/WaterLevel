<template>
  <v-container id="regular-tables" fluid tag="section">
    <base-v-component heading="ตารางรายการระดับน้ำ" link="components/simple-tables" />
    <base-material-card icon="mdi-clipboard-text" title="ตารางรายการอุปกรณ์" class="px-5 py-3">
      <v-data-table :headers="headdevices" :items="devices" multi-sort class="elevation-1"></v-data-table>
    </base-material-card>

    <base-material-card icon="mdi-clipboard-text" title="ตารางเกตเวย์" class="px-5 py-3" dark>
      <v-data-table :headers="headgateways" :items="gateways" multi-sort class="elevation-1"></v-data-table>
    </base-material-card>

    <div class="py-3" />

    <base-material-card
      color="success"
      icon="mdi-clipboard-text"
      title="ตารางเซนเซอร์"
      class="px-5 py-3"
    >
      <v-data-table :headers="headsensors" :items="sensors" multi-sort class="elevation-1"></v-data-table>
    </base-material-card>
  </v-container>
</template>
<script>
import WaterLevelService from "../services/WaterLevelService";
// const devices = [];
// const nodeID = [];
// const node_type =[];
export default {
  name: "DashboardCoreDrawer",
  data() {
    return {
      devices: [],
      gateways: [],
      sensors: [],
      headdevices: [
        {
          text: "เซนเซอร์",
          align: "start",
          sortable: false,
          value: "nodeID",
        },
        { text: "เซนเซอร์", value: "node_type" },
        { text: "ชื่อเซนเซอร์", value: "name" },
        { text: "ละติจูด", value: "lat" },
        { text: "ลองจิจูด", value: "long" },
        { text: "รายละเอียด", value: "description" },
      ],
      headgateways: [
        {
          text: "เกตเวย์",
          align: "start",
          sortable: false,
          value: "gwID",
        },
        { text: "คีย์", value: "key" },
        { text: "ละติจูด", value: "lat" },
        { text: "ลองจิจูด", value: "lon" },
        { text: "เวลา", value: "timeStamp" },
      ],
      headsensors: [
        {
          text: "เกตเวย์",
          align: "start",
          sortable: false,
          value: "gwID",
        },
        { text: "เซนเซอร์", value: "nodeID" },
        { text: "ชนิดเซนเซอร์", value: "type" },
        { text: "ค่าระดับน้ำ", value: "val" },
      ],
    };
  },
  async mounted() {
    this.gateways = (await WaterLevelService.show()).data;
    this.sensors = (await WaterLevelService.getSensor()).data;
    this.devices = (await WaterLevelService.getDevice()).data;
    console.log("deta : ", this.sensors);
  },
};
</script>
<style scoped>
</style>
