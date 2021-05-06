import ApexCharts from 'apexcharts'

export default{
    install(Vue){
        Vue.prototype.$createChart = function (el, options){
          options.chart.id = el;
          var chart = new ApexCharts(document.querySelector("#"+el), options);
          chart.render();
        }
        Vue.prototype.$updateChart = function (el, options){
          ApexCharts.exec(el, 'destroy');
          Vue.prototype.$createChart(el, options);
        }
        Vue.prototype.$deleteChart = function (el, options){
          ApexCharts.exec(el, 'destroy');
        }
    }
}