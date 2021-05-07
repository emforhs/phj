import ApexCharts from 'apexcharts'

export default{
    install(Vue){
        Vue.prototype.$createChart = async function (el, options){
          options.chart.id = el;
          await Vue.prototype.$nextTick();
          var chart = new ApexCharts(document.querySelector("#"+el), options);
          setTimeout(()=>{
            chart.render();
          },50);
        }
        Vue.prototype.$updateChart = function (el, options){
          ApexCharts.exec(el, 'destroy');
          Vue.prototype.$createChart(el, options);
        }
        Vue.prototype.$deleteChart = function (el){
          ApexCharts.exec(el, 'destroy');
        }
    }
}