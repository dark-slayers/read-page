<template>
    <div>
        <div v-for="ele in list">
            <title-line v-bind:list="ele"></title-line>
        </div>
    </div>
</template>

<script>
import TitleLine from './TitleLine.vue';
export default {
    name: 'title-table',
    props: {
        list: Array,
        step: Number
    },
    components: {
        TitleLine
    }
}
</script>

<style scoped>

</style>
