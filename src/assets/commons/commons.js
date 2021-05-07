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
        },
        Vue.prototype.$updateChart = function (el, options){
          ApexCharts.exec(el, 'destroy');
          Vue.prototype.$createChart(el, options);
        },
        Vue.prototype.$deleteChart = function (el){
          ApexCharts.exec(el, 'destroy');
        },
        Vue.prototype.$isEmail = function (val){
          var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
          return regExp.test(val); // 형식에 맞는 경우 true 리턴	
        }
    }
}