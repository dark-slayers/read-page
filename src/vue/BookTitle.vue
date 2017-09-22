<template>
    <div v-bind:style="pageStyle">
        <div>
            <page-title title="书籍目录"></page-title>
            <title-table v-bind:list="list" v-bind:step="step"></title-table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import RequestUrl from '../js/RequestUrl.js';
import AjaxUtil from '../js/AjaxUtil.js';
import PageTitle from './PageTitle.vue';
import TitleTable from './booktitle/TitleTable.vue';
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
let step = 3;
let list = [];
for (let i = 0, len = array1.length; i < len; i += step) {
    list.push(array1.slice(i, i + step));
}
console.log(list);
let initData = {
    list: list,
    step: step,
    pageStyle: {
        display: 'flex',
        justifyContent: 'center',
        color: '#42b983'
    }
};
export default {
    name: 'book-title-page',
    data() {
        return initData;
    },
    methods: {
        add: function() {
            AjaxUtil.post(RequestUrl.addBook, initData, function(d) {
                alert("添加成功！");
            });
        }
    },
    components: {
        PageTitle, TitleTable
    }
}
</script>

<style scoped>

</style>
