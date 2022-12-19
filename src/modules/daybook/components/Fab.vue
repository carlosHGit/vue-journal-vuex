<template>
  <button class="btn btn-primary">
    <i
      class="fa fa-2x"
      :class="checkIcon">
    </i>
  </button>
</template>

<script>

export default {
  props:{
    icon:{
      type: String,
      isRequiered: false,
      default: 'fa-plus'
    }
  },
  computed:{
    checkIcon(){
      if(this.icon === ''){
        return 'fa-plus'
      }else{
        return this.icon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  button{
    border-radius: 100%;
    bottom: 20px;
    height: 60px;
    position: fixed;
    right: 20px;
    width: 60px;
  }
</style>