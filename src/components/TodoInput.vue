<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <!-- 위에 버튼태그 대신에 아래 span태그로 버튼을 꾸민다. -->
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
      if (this.newTodoItem !== ''){//newTodoItem에 값이 있을 때만 실행한다.
        var obj = {completed: false, item: this.newTodoItem};
        // 텍스트가 체크 된건지 블린값, 텍스트 값
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); 
        //obj 객체를 저정한다.
        //stringify: 자바스크립트의 오브젝트를 스트링값으로 변환시켜준다.
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