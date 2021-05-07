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
            :isResizable="item.isResizable"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
        >
            <div class="item-title">
                <q-toolbar >
                    <q-toolbar-title>
                        {{item.name}}
                    </q-toolbar-title>
                     <q-btn-dropdown flat dense>
                        <q-list>
                            <q-item clickable v-close-popup @click="update(item)">
                                <q-item-section>
                                    <q-item-label>수정</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-item-label>닫기</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                </q-toolbar>
            </div>
            <div class="item-content" :id="item.id"></div>
        </grid-item>
        <chart-modal ref="chart_modal"/>
    </grid-layout>    
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import ChartModal from "components/modal/ChartModal.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        GridLayout,
        GridItem,
        ChartModal
    },
    data() {
        return {
            draggable: true,
            resizable: true,
            index: 0
        }
    },
    computed :{
        ...mapGetters('layout',['layout']),
    },
    mounted (){
        this.layout.forEach(el => {
            this.$createChart(el.id, el.options);
        });
    },
    methods: {
        ...mapActions('layout',['delLayout']),
        update(payload){
            this.$refs.chart_modal.open(payload);
        }
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
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
.item-title {
    border-radius: 8px 8px 0 0;
    height: 40px;
    .q-toolbar {
        position: relative;
        padding: 0 6px !important;
        min-height: 40px  !important;
        width: 100%;
    }
}
.item-content{
    border-radius: 0 0 8px 8px;
    flex: 1;
}
</style>