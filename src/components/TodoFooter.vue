<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // this.$emit('clearAll');
      // clearAll라는 이벤트 이름을 정해서 App.vue로 올려보내기 위해 $emit을 한다

      this.$store.commit('clearAllItem');
      //clearAll은 app.vue에 접근하기 위해 한번더 연결한것, 하지만 이제는 store랑 직접 바로연결이기 때문에 clearAll말고 clearAllItem으로 연결
    }
  }
}
</script>


<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>