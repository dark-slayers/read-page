<template>
    <span v-on:click="click" v-bind:style="spanStyle">
        <a href="javascript:;">{{title}}</a>
    </span>
</template>

<script>
let initData = {
    spanStyle:
    {
        marginLeft: 10 + 'px',
        marginRight: 10 + 'px',
        width: this.width,
        textAlign: "center",
    }
};

export default {
    name: 'title-span',
    data() {
        console.log('TitleSpan:data():' + this.width);
        return initData;
    },
    props: {
        title: String,
        width: String
    },
    methods: {
        click: function() {
            alert(this.title);
        }
    },
}
</script>

<style scoped>

</style>
