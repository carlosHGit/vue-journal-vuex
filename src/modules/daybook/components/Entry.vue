<template>
  <!-- eslint-disable-next-line vue/multi-word-component-names -->
  <div class="entry-container mb-3 pointer p-2" 
  @click="$router.push({name: 'entry', params:{id:10}})">
    <!-- TODO: create title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">19</span>
      <span class="mx-1 fs-5">December</span>
      <span class="mx-2 fw-light fs-5">2022, monday</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus magnam dolor tempora quia dolore neque mollitia, omnis natus possimus amet obcaecati labore autem quas a quisquam necessitatibus dolores voluptas?
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .entry-container{
    border-bottom: 1px solid #2e3e50;
    transition: 0.2s all ease-in;

    &:hover{
      background: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }

    .entry-description{
      font-size: 12px;
    }
  }


</style>