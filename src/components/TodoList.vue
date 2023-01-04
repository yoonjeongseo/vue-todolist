<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <!-- in todoItem을  in propsdata으로 변경, App.vue의 propsdata를 받아옴 -->
        <i class="chkBtn fas fa-check" v-bind:class="{chkBtnCom: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCom: todoItem.completed}">{{ todoItem.item }}</span>
        <!-- <button v-on:click="removeTodo">Delete</button> -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  // App.vue의 데이터를 받아서 TodoList에 데이터를 내리기 위해 propsdata가 필요하다.
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index); 
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed; 

      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>


<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;  
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 5px;
  }
  .chkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .chkBtnCom {
    color: #b3adad;
  }
  .textCom {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, .03);
  }
</style>