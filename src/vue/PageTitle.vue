<template>
  <div>
    <div v-bind:style="titleStyle">
      {{title}}</div>
  </div>
</template>

<script>
let initData = {
  titleStyle: {
    fontSize: '25px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    color: '#0000FF'
  }
};
export default {
  name: 'page-title',
  props: {
    title: String
  },
  data() {
    return initData;
  },
}
</script>

<style scoped>

</style>
