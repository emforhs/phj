import Vue from 'vue';

const state = () => ({
  layout:[
    {"x":0,"y":0,"w":4,"h":10,"i":"0", isResizable: true, id:"item_0",  name:"Bar Charts",
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
    {"x":2,"y":0,"w":4,"h":10,"i":"1", isResizable: true, id:"item_1",  name:"Pie Charts",
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
    {"x":4,"y":0,"w":4,"h":10,"i":"2", isResizable: true, id:"item_2",  name:"Box & Whisker Charts",
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
    {"x":6,"y":0,"w":4,"h":14,"i":"3", isResizable: false, id:"item_3",  name:"Polar Area Charts",
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
    }
  ]
})

const getters = {
  layout: (state) => {
    return state.layout
  },
}

const actions = {
  addLayout({commit, dispatch, state }, payload) {
    let i = state.layout.length;
    payload.id = "item_"+ i;
    payload.i = i+'';
    payload.x = 0;
    payload.y = 20;
    payload.w = 4;
    payload.h = 10;
    commit('layoutAdd',payload);
  },
  updateLayout({commit, dispatch, state }, payload) {
    commit('layoutUpdate',payload);
  },
  delLayout({commit, dispatch, state }, payload) {
    commit('layoutDel',payload);
  }
}

const mutations = {
  layoutAdd (state, payload) {
    state.layout.push(payload);
    setTimeout(()=>{
      Vue.prototype.$createChart(payload.id, payload.options);
    },1000)
  },
  layoutUpdate(state, payload){
    state.layout[payload.i] = payload.obj;
  },
  layoutDel(state, payload){
    state.layout.splice(payload.i,1);
    state.layout.forEach(el,idx => {
      el.i = idx;
    });
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}