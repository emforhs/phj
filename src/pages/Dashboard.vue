<template>
    <grid-layout :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :vertical-compact="true"
        :use-css-transforms="true"
    >
        <grid-item v-for="item in layout"
            :key="item.i"
            :static="item.static"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
        >
        </grid-item>
        <chart-modal />
    </grid-layout>    
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        GridLayout,
        GridItem,
    },
    data() {
        return {
            draggable: true,
            resizable: true,
            index: 0,
            layout:[
              {"x":0,"y":0,"w":2,"h":10,"i":"0", static: false},
              {"x":2,"y":0,"w":2,"h":10,"i":"1", static: false},
              {"x":4,"y":0,"w":2,"h":10,"i":"2", static: false},
              {"x":6,"y":0,"w":2,"h":10,"i":"3", static: false}
            ]
        }
    },
    computed :{
       ...mapGetters('layout',['layout']),
    },
    mounted (){
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: #cce;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
} 
</style>