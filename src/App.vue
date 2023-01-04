<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
  data: function() {
    return {
      todoItems: [] 
    }
  },//TodoList에서의 data를 App.vue로 가져옴, created의 localStorage의 데이터를 newTodoItem에 담기 때문
  created: function() {
    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){

          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },//TodoList에서의 created를 App.vue로 가져옴
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
