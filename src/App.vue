<template>
  <div id="app">
    <TodoHeader></TodoHeader>

    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트 메서드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>

    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <!-- removeItem 이벤트가 발생이 되면 removeOneItem기 실행된다 -->
    <!-- toggleItem 이벤트가 발생이 되면 toggleOneItem기 실행된다 -->

    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
  data() {
    return {
      todoItems: [] 
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj)); 
      this.todoItems.push(obj); 
    },
    removeOneItem(todoItem, index) { //TodoList에서 받아오기 떄문에 동일하게 todoItem, index를 받아올 수 있게 설정
      //TodoList에서 가져옴
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      // todoItem.completed = !todoItem.completed; 
      //todoItems배열이 있는데 todoItem을 그냥 접근 하는 건 좋지 않다.
      //아래와 같이 변경

      this.todoItems[index].completed = !this.todoItems[index].completed;
      // todoItems라는 배열에서 index로 접근해서 적용

      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      localStorage.clear();
      // localStorage을 비운 후에 

      this.todoItems = [];
      // todoItems를 빈배열로 만든다
    }
  },
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){

          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
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
