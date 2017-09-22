<template>
    <div>
        <title-span v-for="ele in list" v-bind:title="ele" v-bind:width="width"></title-span>
    </div>
</template>

<script>
import TitleSpan from './TitleSpan.vue';
let initData = {
    width: '25%'
};

export default {
    name: 'title-line',
    props: {
        list: Array,
        step: Number
    },
    data() {
        console.log('TitleLine: data:' + initData.width);
        console.log('TitleLine: step:' + this.step);
        return initData;
    },
    components: {
        TitleSpan
    }
}
</script>

<style scoped>

</style>
