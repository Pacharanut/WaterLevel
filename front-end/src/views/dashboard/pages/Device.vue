<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">เพิ่มรายการอุปกรณ์</div>

            <div class="subtitle-1 font-weight-light">บันทึกข้อมูลอุปกรณ์</div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <!-- <v-text-field label="Company (disabled)" disabled /> -->
                <v-select
                    :items="nodes"
                    v-model="node"
                    label="เซนเซอร์"
                    item-text="title"
                    bottom
                    autocomplete
                    @click="getNode"
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="4">
                  <!-- <v-select :items="items" v-model="value" label="Standard" @click="mounted"></v-select> -->
                  <!-- <v-autocomplete v-model="value" :items="items" label="Standard" @click="mounted"></v-autocomplete> -->
                  <!-- <v-select :items="items" label="Standard" @click="mounted"></v-select> -->
                   <v-select
                    :items="types"
                    v-model="nodeType"
                    label="ประเภทเซนเซอร์"
                    item-text="title"
                    bottom
                    autocomplete
                    @click="getType"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="ชื่อเซนเซอร์" class="purple-input" v-model="name" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="ชื่อ-นามสกุล" class="purple-input" v-model="contact_name" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="เบอร์โทรศัพท์"
                    class="purple-input"
                    v-model="contact_tel"
                  />
                </v-col>
                <!-- 
                <v-col cols="12">
                  <v-text-field
                    label="Adress"
                    class="purple-input"
                  />
                </v-col>-->

                <v-col cols="12" md="4">
                  <v-text-field label="ลองจิจูด" class="purple-input" v-model="long" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="ละติจูด" class="purple-input" v-model="lat" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field class="purple-input" label="สถานะ" type="number" v-model="status" />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="รายละเอียด"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    v-model="description"
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0" @click="postDevice">เพิ่มรายการอุปกรณ์</v-btn>
                </v-col>
              </v-row>
            </v-container>Add Device
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WaterLevelService from "../services/WaterLevelService";
const nodeID = [];
const nodeType =[];
console.log("nodeType", nodeType);
export default {
  data() {
    return {
      nodeID: "",
      node_type: "",
      name: "",
      contact_name: "",
      contact_tel: "",
      long: "",
      lat: "",
      description: "",
      status: null,
      node: null,
      nodes: nodeID,
      nodeType: null,
      types: nodeType,
    };
  },
  methods: {
    async postDevice() {
      await WaterLevelService.postDevice({
        nodeID: this.node,
        node_type : this.nodeType,
        name: this.name,
        contact_name: this.contact_name,
        contact_tel: this.contact_tel,
        lat: this.lat,
        long: this.long,
        description: this.description,
        status: this.status,
      });
    },
    async getNode() {
      const data = (await WaterLevelService.getSensor()).data;
      data.forEach((element) => {
        const dataitems = element.nodeID;
        console.log("deta : ", element);
        nodeID.push(dataitems);
      });
    },
    async getType() {
      const data = (await WaterLevelService.getSensor()).data;
      data.forEach((element) => {
        const type = element.type;
        // console.log("deta : ", dataitems);
        nodeType.push(type);
      });
    },
  },
};
</script>
