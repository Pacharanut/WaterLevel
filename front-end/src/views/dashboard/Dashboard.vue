<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12" lg="6">
        <base-material-chart-card
          :data="emailsSubscriptionChart.data"
          :scales="emailsSubscriptionChart.scales"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="#E91E63"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">อย. 3052 (จุดที่ 1)</h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">Sensors : Pressure</p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col cols="12" lg="6">
        <base-material-chart-card
          :data="dailySalesChart.data"
          :scales="dailySalesChart.scales"
          color="success"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">อย. 3052 (จุดที่ 4)</h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            <!-- <v-icon color="green" small>mdi-arrow-up</v-icon>
            <span class="green--text">55%</span>&nbsp;-->
            Sensors : Ultra
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col cols="12" lg="6">
        <base-material-chart-card
          :data="dataCompletedTasksChart.data"
          :scales="dataCompletedTasksChart.scales"
          hover-reveal
          color="info"
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">อย. 3052 (จุดที่ 5)</h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">Sensors : pressure</p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col cols="12" lg="6">
        <base-material-chart-card
          :data="dataCompletedTasksChart2.data"
          :scales="dataCompletedTasksChart2.scales"
          hover-reveal
          color="#868A08"
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="#868A08" icon v-on="on">
                  <v-icon color="#868A08">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">อย. 6035 (จุดที่ 2)</h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">Sensors : ultra</p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <!-- <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="primary"
          icon="mdi-poll"
          title="Website Visits"
          value="75.521"
          sub-icon="mdi-tag"
          sub-text="Tracked from Google Analytics"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Revenue"
          value="$ 34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="orange"
          icon="mdi-sofa"
          title="Bookings"
          value="184"
          sub-icon="mdi-alert"
          sub-icon-color="red"
          sub-text="Get More Space..."
        />
      </v-col>-->

      <!-- <v-col cols="12" md="6">
        <base-material-card color="warning" class="px-5 py-3">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Employees Stats</div>

            <div class="subtitle-1 font-weight-light">New employees on 15th September, 2016</div>
          </template>
          <v-card-text>
            <v-data-table :headers="headers" :items="items" />
          </v-card-text>
        </base-material-card>
      </v-col>-->

      <!-- <v-col cols="12" md="6">
        <base-material-card class="px-5 py-3">
          <template v-slot:heading>
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
              <span class="subheading font-weight-light mx-3" style="align-self: center">Tasks:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-cloud</v-icon>Server
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items v-model="tabs" class="transparent">
            <v-tab-item v-for="n in 3" :key="n">
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]">
                  <v-row :key="i" align="center">
                    <v-col cols="1">
                      <v-list-item-action>
                        <v-checkbox v-model="task.value" color="secondary" />
                      </v-list-item-action>
                    </v-col>

                    <v-col cols="9">
                      <div class="font-weight-light" v-text="task.text" />
                    </v-col>

                    <v-col cols="2" class="text-right">
                      <v-icon class="mx-1">mdi-pencil</v-icon>
                      <v-icon color="error" class="mx-1">mdi-close</v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import WaterLevelService from "./services/WaterLevelService";
//node04
const xpressure04 = [];
const limitxpressure04 = [];
const dataxpressure04 = xpressure04;
console.log("limitxpressure04", limitxpressure04);
const ypressure04 = [];
const limitypressure04 = [];
const dataypressure04 = ypressure04;
console.log("limitypressure04", limitypressure04);
const xultra04 = [];
const limitxultra04 = [];
const dataxultra04 = xultra04;
console.log("limitxultra04", limitxultra04);
const yultra04 = [];
const limityultra04 = [];
const datayultra04 = yultra04;
console.log("limityultra04", limityultra04);
const pressure04 = [];
console.log("pressure04", pressure04);
const ultra04 = [];
console.log("ultra04", ultra04);
//node07
const xpressure07 = [];
const limitxpressure07 = [];
const dataxpressure07 = xpressure07;
console.log("xpressure07", limitxpressure07);
const ypressure07 = [];
const limitypressure07 = [];
const dataypressure07 = ypressure07;
console.log("limitxpressure07", limitypressure07);
const xultra07 = [];
const limitxultra07 = [];
const dataxultra07 = xultra07;
console.log("limitxultra07", limitxultra07);
const yultra07 = [];
const limityultra07 = [];
const datayultra07 = yultra07;
console.log("limityultra07", limityultra07);
const pressure07 = [];
console.log("pressure07", pressure07);
const ultra07 = [];
console.log("ultra07", ultra07);
//node08
const xpressure08 = [];
const limitxpressure08 = [];
const dataxpressure08 = xpressure08;
console.log("xpressure08", limitxpressure08);
const ypressure08 = [];
const limitypressure08 = [];
const dataypressure08 = ypressure08;
console.log("limitxpressure08", limitypressure08);
const xultra08 = [];
const limitxultra08 = [];
const dataxultra08 = xultra08;
console.log("limitxultra08", limitxultra08);
const yultra08 = [];
const limityultra08 = [];
const datayultra08 = yultra08;
console.log("limityultra08", limityultra08);
const pressure08 = [];
console.log("pressure08", pressure08);
const ultra08 = [];
console.log("ultra08", ultra08);
//node11
const xpressure11 = [];
const limitxpressure11 = [];
const dataxpressure11 = xpressure11;
console.log("xpressure11", limitxpressure11);
const ypressure11 = [];
const limitypressure11 = [];
const dataypressure11 = ypressure11;
console.log("limitxpressure11", limitypressure11);
const xultra11 = [];
const limitxultra11 = [];
const dataxultra11 = xultra11;
console.log("limitxultra11", limitxultra11);
const yultra11 = [];
const limityultra11 = [];
const datayultra11 = yultra11;
console.log("limityultra11", limityultra11);
const pressure11 = [];
console.log("pressure11", pressure11);
const ultra11 = [];
console.log("ultra11", ultra11);
export default {
  name: "DashboardDashboard",
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: limitxultra07,
          series: [limityultra07],
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString: "Make long enough to truncate",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString:
                  "The Horizontal label string needs to be even longer to truncate",
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: limitxpressure08,
          series: [limitypressure08],
        },
        // options: {
        //   lineSmooth: this.$chartist.Interpolation.cardinal({
        //     tension: 0,
        //   }),
        //   low: 0,
        //   high: 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //   chartPadding: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0,
        //   },
        // },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString: "Make long enough to truncate",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString:
                  "The Horizontal label string needs to be even longer to truncate",
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      },
      dataCompletedTasksChart2: {
        data: {
          labels: limitxultra11,
          series: [limityultra11],
        },
        // options: {
        //   lineSmooth: this.$chartist.Interpolation.cardinal({
        //     tension: 0,
        //   }),
        //   low: 0,
        //   high: 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //   chartPadding: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0,
        //   },
        // },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString: "Make long enough to truncate",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString:
                  "The Horizontal label string needs to be even longer to truncate",
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      },
      // emailsSubscriptionChart: {
      //   data: {
      //     labels: xpressure04,
      //     series: [xpressure04],
      //   },
      //   options: {
      //     // axisX: {
      //     //   showGrid: false,
      //     // },
      //     low: 0,
      //     high: 5,
      //     chartPadding: {
      //       top: 0,
      //       right: 5,
      //       bottom: 0,
      //       left: 0,
      //     },
      //   },
      //   responsiveOptions: [
      //     [
      //       "screen and (max-width: 640px)",
      //       {
      //         seriesBarDistance: 5,
      //         axisX: {
      //           labelInterpolationFnc: function (value) {
      //             return value[0];
      //           },
      //         },
      //       },
      //     ],
      //   ],
      // },
      emailsSubscriptionChart: {
        data: {
          labels: limitxpressure04,
          series: [limitypressure04],
        },
        // options: {
        //   lineSmooth: this.$chartist.Interpolation.cardinal({
        //     tension: 0,
        //   }),
        //   low: 0,
        //   high: 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //   chartPadding: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0,
        //   },
        // },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString: "Make long enough to truncate",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 18,
                //constrain: true,
                labelString:
                  "The Horizontal label string needs to be even longer to truncate",
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      },
      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id",
        },
        {
          sortable: false,
          text: "Name",
          value: "name",
        },
        {
          sortable: false,
          text: "Salary",
          value: "salary",
          align: "right",
        },
        {
          sortable: false,
          text: "Country",
          value: "country",
          align: "right",
        },
        {
          sortable: false,
          text: "City",
          value: "city",
          align: "right",
        },
      ],
      items: [
        {
          id: 1,
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          salary: "$35,738",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          salary: "$23,738",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          salary: "$56,142",
        },
        {
          id: 4,
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          salary: "$38,735",
        },
        {
          id: 5,
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          salary: "$63,542",
        },
      ],
      tabs: 0,
      tasks: {
        0: [
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: true,
          },
          {
            text:
              "Lines From Great Russian Literature? Or E-mails From My Boss?",
            value: false,
          },
          {
            text:
              "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            value: false,
          },
          {
            text: "Create 4 Invisible User Experiences you Never Knew About",
            value: true,
          },
        ],
        1: [
          {
            text:
              "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            value: true,
          },
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: false,
          },
        ],
        2: [
          {
            text:
              "Lines From Great Russian Literature? Or E-mails From My Boss?",
            value: false,
          },
          {
            text:
              "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            value: true,
          },
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: true,
          },
        ],
      },
      list: {
        0: false,
        1: false,
        2: false,
      },
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
  },
  async mounted() {
    //const data = (await WaterLevelService.show()).data;
    // const sensors = "";
    xpressure04.splice(0, xpressure04.length);
    ypressure04.splice(0, ypressure04.length);
    xultra04.splice(0, xultra04.length);
    yultra04.splice(0, yultra04.length);

    xpressure07.splice(0, xpressure07.length);
    ypressure07.splice(0, ypressure07.length);
    xultra07.splice(0, xultra07.length);
    yultra07.splice(0, yultra07.length);

    xpressure08.splice(0, xpressure08.length);
    ypressure08.splice(0, ypressure08.length);
    xultra08.splice(0, xultra08.length);
    yultra08.splice(0, yultra08.length);

    xpressure11.splice(0, xpressure11.length);
    ypressure11.splice(0, ypressure11.length);
    xultra11.splice(0, xultra11.length);
    yultra11.splice(0, yultra11.length);

    const sensors = (await WaterLevelService.getSensor()).data;
    console.log("sensors : ", sensors);
    var data = JSON.stringify(sensors);
    console.log("dataText : ", data);
    const table = data.split("\n").slice();
    console.log("table : ", table);
    table.forEach((element) => {
      const columns = element.split(",{");
      columns.forEach((element) => {
        const columnsdata = element.split(",");
        const Datanode = columnsdata[1].split(":");
        const nodeID = Datanode[1];
        const Datatype = columnsdata[2].split(":");
        const type = Datatype[1];
        if (nodeID == '"node04"') {
          if (type == '"pressure"') {
            pressure04.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xpressure04.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            ypressure04.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          } else {
            ultra04.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xultra04.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            yultra04.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          }
          console.log("nodeID : ", nodeID);
        } else if (nodeID == '"node07"') {
          if (type == '"pressure"') {
            pressure07.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xpressure07.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            ypressure07.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          } else {
            ultra07.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xultra07.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            yultra07.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          }
          console.log("nodeID5 : ", nodeID);
        } else if (nodeID == '"node08"') {
          if (type == '"pressure"') {
            pressure08.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xpressure08.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            ypressure08.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          } else {
            ultra08.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xultra08.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            yultra08.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          }
          console.log("nodeID5 : ", nodeID);
        } else if (nodeID == '"node11"') {
          if (type == '"pressure"') {
            pressure11.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xpressure11.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            ypressure11.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          } else {
            ultra11.push(type);
            const createAt = columnsdata[5];
            const time = createAt.split("T");
            const timestame = time[1].split(".");
            xultra11.push(timestame[0].substring(0, 5));
            const Dataval = columnsdata[3].split(":");
            const val = Dataval[1];
            yultra11.push(val);
            console.log("columnsdata : ", createAt);
            console.log("columnsdata : ", val);
          }
          console.log("nodeID5 : ", nodeID);
        }
        console.log("columnsdata : ", type);
      });
      // const dateSensor = columns[5];
      console.log("deta : ", columns[2]);
    });
    limitxultra04.splice(0, limitxultra04.length);
    limityultra04.splice(0, limityultra04.length);
    limitxpressure04.splice(0, limitxpressure04.length);
    limitypressure04.splice(0, limitypressure04.length);

    limitxultra07.splice(0, limitxultra07.length);
    limityultra07.splice(0, limityultra07.length);
    limitxpressure07.splice(0, limitxpressure07.length);
    limitypressure07.splice(0, limitypressure07.length);

    limitxultra08.splice(0, limitxultra08.length);
    limityultra08.splice(0, limityultra08.length);
    limitxpressure08.splice(0, limitxpressure08.length);
    limitypressure08.splice(0, limitypressure08.length);

    limitxultra11.splice(0, limitxultra11.length);
    limityultra11.splice(0, limityultra11.length);
    limitxpressure11.splice(0, limitxpressure11.length);
    limitypressure11.splice(0, limitypressure11.length);
    for (var i = 0; i < 10; i++) {
      limitxultra04.push(dataxultra04[i]);
      limityultra04.push(datayultra04[i]);
      limitxpressure04.push(dataxpressure04[i]);
      limitypressure04.push(dataypressure04[i]);
      limitxultra07.push(dataxultra07[i]);
      limityultra07.push(datayultra07[i]);
      limitxpressure07.push(dataxpressure07[i]);
      limitypressure07.push(dataypressure07[i]);
      limitxultra08.push(dataxultra08[i]);
      limityultra08.push(datayultra08[i]);
      limitxpressure08.push(dataxpressure08[i]);
      limitypressure08.push(dataypressure08[i]);
      limitxultra11.push(dataxultra11[i]);
      limityultra11.push(datayultra11[i]);
      limitxpressure11.push(dataxpressure11[i]);
      limitypressure11.push(dataypressure11[i]);
    }
  },
};
</script>