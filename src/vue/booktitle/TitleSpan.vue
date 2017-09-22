<template>
    <span v-on:click="click">
        <a href="javascript:;">{{title}}</a>
    </span>
</template>

<script>
export default {
    name: 'title-span',
    props: {
        title: String
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
