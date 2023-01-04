<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "" 
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== ''){
        // this.$emit('이벤트 이름',인자1, 인자2,...);

        this.$emit('addTodoItem', this.newTodoItem);
        //this.newTodoItem을 상위 컴포넌트로 보내주기 위해서 this.$emit생성
        //this에서 $emit하게되면 addTodoItem이벤트를 발생시킨다.
        //addTodoItem는 App.vue에서는 하위 컴포넌트에서 발생시킨 이벤트 이름

        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    width: calc(100% - 3rem);
    height: 100%;
    border-style: none;
    font-size: 0.9rem;
    float: left;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    text-align: center;
  }
  .addBtn {
    color: #fff;
    /* vertical-align: middle; */
  }
</style>