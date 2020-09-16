<template>
  <v-container id="regular-tables" fluid tag="section">
    <base-v-component heading="รายการทางหลวงชนบท" link="components/simple-tables" />
    <base-material-card icon="mdi-coolant-temperature" title="สถานะระดับน้ำ" class="px-5 py-3">
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">เส้นทาง</th>
            <th class="primary--text">สถานะ</th>
            <th class="primary--text">ความลึกเฉลี่ย(เมตร)</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="Ruralroad in Ruralroads" :key="Ruralroad.id">
            <td>{{Ruralroad.name}}</td>
            <td>
              <div v-if="Ruralroad.avg <= 2.49">
                <v-icon color="green">mdi-brightness-1</v-icon>
                <v-text>ปกติ</v-text>
              </div>
              <div v-if="Ruralroad.avg <= 3 && Ruralroad.avg > 2.49">
                <v-icon color="yellow">mdi-brightness-1</v-icon>
                <v-text>เฝ้าระวัง</v-text>
              </div>
              <div v-if="Ruralroad.avg > 3">
                <v-icon color="red">mdi-brightness-1</v-icon>
                <v-text>วิกฤต</v-text>
              </div>
              <!-- <td>{{road}}</td> -->
            </td>
            <td>{{Ruralroad.avg}}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    <base-material-card icon="mdi-battery-40" title="สถานะอุปกรณ์" class="px-5 py-3">
      <v-img
        src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/118073421_4309413579132029_7341451576690853260_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_eui2=AeH2204q-V_rp2HUPJyPA_S0VtRvgiJjHuxW1G-CImMe7PMDn9aMCBNz0PBvBGiBOU1YQ1iqk3czPQ_OZz_4y6uk&_nc_ohc=X6iQypuZsxAAX-hGuey&_nc_ht=scontent.fbkk6-1.fna&oh=d02fadcb0081a1db83683f64af5160ee&oe=5F6A0263"
      ></v-img>
    </base-material-card>
  </v-container>
</template>
<script>
import WaterLevelService from "../services/WaterLevelService";
console.log("status : ", status);
export default {
  name: "DashboardCoreDrawer",
  data() {
    return {
      Ruralroads: null,
    };
  },
  async mounted() {
    this.Ruralroads = (await WaterLevelService.getRuralroad()).data;
    console.log("deta : ", this.Ruralroads);
  },
};
</script>
<style scoped>
</style>
