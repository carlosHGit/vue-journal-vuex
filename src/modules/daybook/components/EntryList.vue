<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class='form-control'
        placeholder="Buscar Entradas"
        name=""
        id="">
    </div>
    <div class="entry-scrollarea">
      <h2 v-for="item in 100" :key="item">
        <Entry />
      </h2>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry'))
  }
}
</script>

<style lang="scss" scoped>
  input{
    height: 55px;
    margin-bottom: 10px;
  }
  .entry-list-container{
    border-right: 1px solid rgb(155, 155, 155);
    height: calc(100vh - 56px);
  }
  .entry-scrollarea{
    height: calc(100vh - 170px);
    overflow: scroll;
  }
</style>
