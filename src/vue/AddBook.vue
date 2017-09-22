<template>
  <div class="box">
    <div id="item">
      <page-title title="添加书籍"></page-title>
      <div>
        <label>书籍名称：<input v-model="name"></label>
      </div>
      <div>
        <label>书籍路径：<input v-model="path"></label>
      </div>
      <div>
        <label>保存类型：<input v-model="type"></label>
      </div>
      <div class="box">
        <button v-on:click="add">添加</button>
      </div>
    </div>
  </div>
</template>

<script>
import RequestUrl from '../js/RequestUrl.js';
import AjaxUtil from '../js/AjaxUtil.js';
import PageTitle from './PageTitle.vue';

let initData = {
  name: '',
  path: '',
  type: 'DIR'
};
export default {
  name: 'book1',
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
    PageTitle
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
}

#item {
  color: #42b983;
}
</style>
