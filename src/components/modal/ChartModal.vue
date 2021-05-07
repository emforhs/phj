<template>
  <div class="q-pa-md q-gutter-sm right">
    <q-btn label="추가" color="primary" @click="open()"/>
    <q-btn label="저장" color="primary" />

    <q-dialog v-model="layout" persistent>
      <q-layout view="hHh Lpr fff" container style="min-width: 700px; height: 500px" class="bg-white rounded-borders">
        <q-header elevated class="bg-primary">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title align="center">차트 설정</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="500"
          bordered
          content-class="bg-grey-3"
        >
          <q-item
            clickable
            tag="a"
            target="_blank"
            v-for="(el,idx) in menu" :key="idx"
          >
            <q-item-section @click="select(el.options)">
              <q-item-label>{{el.name}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-drawer>

        <q-footer class="bg-primary">
          <q-toolbar>
            <q-btn outline color="white" label="설정" />
            <q-btn outline color="white" label="취소" />
          </q-toolbar>
        </q-footer>

        <q-page-container>
          <q-page padding id="select_item">
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layout: false,

      moreContent: true,
      drawer: true,
      menu:[
        {
          name:"Bar Charts",
          options : {
            series: [{
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
              ],
            }
          }
        },
        {
          name:"Pie Charts",
          options : {
            series: [44, 55, 13, 43, 22],
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
        },
        {
          name:"Box & Whisker Charts",
          options : {
            series: [
            {
              type: 'boxPlot',
              data: [
                {
                  x: 'Jan 2015',
                  y: [54, 66, 69, 75, 88]
                },
                {
                  x: 'Jan 2016',
                  y: [43, 65, 69, 76, 81]
                },
                {
                  x: 'Jan 2017',
                  y: [31, 39, 45, 51, 59]
                },
                {
                  x: 'Jan 2018',
                  y: [39, 46, 55, 65, 71]
                },
                {
                  x: 'Jan 2019',
                  y: [29, 31, 35, 39, 44]
                },
                {
                  x: 'Jan 2020',
                  y: [41, 49, 58, 61, 67]
                },
                {
                  x: 'Jan 2021',
                  y: [54, 59, 66, 71, 88]
                }
              ]
            }
          ],
          chart: {
            type: 'boxPlot',
            height: 350
          },
          plotOptions: {
            boxPlot: {
              colors: {
                upper: '#5C4742',
                lower: '#A5978B'
              }
            }
          }
          }
        },
        {
          name:"Polar Area Charts",
          options : {
            series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
            chart: {
              type: 'polarArea',
            },
            stroke: {
              colors: ['#fff']
            },
            fill: {
              opacity: 0.8
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
        },
      ],
    }
  },
  computed: {
  },
  mounted(){
  },
  methods: {
    open(){
      this.layout = true;
      this.$nextTick(()=>{
        this.$createChart("select_item",this.menu[1].options);
      });
    },
    add () {
      
    },
    save () {

    },
    select(option){
      this.$updateChart("select_item",option)
    }
  }
}
</script>
<style scoped>
.right {
  float: right;
}
</style>