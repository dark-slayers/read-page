<template>
    <div>
        <span v-for="ele in list">
            <title-span v-bind:title="ele"></title-span>
        </span>
    </div>
</template>

<script>
import TitleSpan from './TitleSpan.vue';
export default {
    name: 'title-line',
    props: {
        list: Array
    },
    components: {
        TitleSpan
    }
}
</script>

<style scoped>

</style>
